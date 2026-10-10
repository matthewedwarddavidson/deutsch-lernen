import { Link } from 'react-router'
import { ProgressBar } from '../components/ProgressBar'
import { GRAMMAR_TOPICS } from '../content/grammar'
import { listeningTexts, readingTexts } from '../content/library'
import { LEVELS, type Level } from '../content/types'
import { allWords, grammarCardId, isWordLearned, recogniseId } from '../lib/cards'
import { isMature, Rating } from '../lib/srs'
import { useAppState, type AppState } from '../lib/store'

const DAY = 24 * 60 * 60 * 1000

function startOfDay(date: Date): number {
  const copy = new Date(date)
  copy.setHours(0, 0, 0, 0)
  return copy.getTime()
}

function wordsByLevel(state: AppState) {
  return LEVELS.map((level) => {
    const words = allWords(state).filter((word) => word.level === level && word.theme !== 'eigene')
    let known = 0
    let learning = 0
    for (const word of words) {
      if (!isWordLearned(state, word)) continue
      const card = state.cards[recogniseId(word)]
      if (card && isMature(card)) known++
      else learning++
    }
    return { level, total: words.length, known, learning }
  }).filter((row) => row.total > 0)
}

/** Reviews falling due on each of the next days. Overdue cards count towards today. */
function forecast(state: AppState, days: number): number[] {
  const today = startOfDay(new Date())
  const counts = new Array<number>(days).fill(0)
  for (const card of Object.values(state.cards)) {
    const offset = Math.floor((startOfDay(new Date(card.due)) - today) / DAY)
    if (offset < days) counts[Math.max(0, offset)]++
  }
  return counts
}

function minutesPerDay(state: AppState, days: number): number[] {
  const today = startOfDay(new Date())
  const minutes = new Array<number>(days).fill(0)
  for (const entry of state.activity) {
    const offset = Math.floor((today - startOfDay(new Date(entry.at))) / DAY)
    if (offset >= 0 && offset < days) minutes[days - 1 - offset] += entry.seconds / 60
  }
  return minutes.map(Math.round)
}

/** Share of reviews in the last 30 days that were remembered (not graded Again). */
function recentRetention(state: AppState): { rate: number; count: number } | undefined {
  const since = Date.now() - 30 * DAY
  const recent = state.log.filter((entry) => new Date(entry.at).getTime() > since)
  if (recent.length < 10) return undefined
  const remembered = recent.filter((entry) => entry.grade !== Rating.Again).length
  return { rate: remembered / recent.length, count: recent.length }
}

function dayLabel(offsetFromToday: number): string {
  const date = new Date(Date.now() + offsetFromToday * DAY)
  return date.toLocaleDateString('de-DE', { weekday: 'short' }).replace('.', '')
}

export function Progress() {
  const state = useAppState()
  const levels = wordsByLevel(state)
  const upcoming = forecast(state, 14)
  const activity = minutesPerDay(state, 28)
  const retention = recentRetention(state)
  const totalMinutes = Math.round(state.activity.reduce((total, entry) => total + entry.seconds, 0) / 60)
  const knownWords = levels.reduce((total, row) => total + row.known, 0)
  const learningWords = levels.reduce((total, row) => total + row.learning, 0)
  const topicsStudied = GRAMMAR_TOPICS.filter((topic) => topic.id in state.grammar)
  const textsRead = Object.keys(state.reading).length
  const listened = Object.keys(state.listening).length

  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">Fortschritt</div>
        <h1>Progress</h1>
        <p>
          What you can actually do, not points. A word counts as known once you have recalled it with at least three
          weeks between reviews.
        </p>
      </div>

      <div className="grid three">
        <Stat value={knownWords} label="words known" detail={`${learningWords} more in progress`} />
        <Stat value={topicsStudied.length} label="grammar topics studied" detail={`of ${GRAMMAR_TOPICS.length}`} />
        <Stat
          value={textsRead + listened}
          label="texts read or heard"
          detail={`${textsRead} read · ${listened} heard`}
        />
        <Stat value={state.writing.length} label="pieces written" detail={latestLevel(state)} />
        <Stat
          value={retention ? `${Math.round(retention.rate * 100)}%` : '–'}
          label="recall in reviews"
          detail={retention ? `last 30 days, ${retention.count} reviews · aim for 85–92%` : 'after 10 reviews'}
        />
        <Stat value={formatMinutes(totalMinutes)} label="total study time" detail="time spent on pages, roughly" />
      </div>

      <div className="section-title section">Vocabulary by level</div>
      <div className="card stack">
        {levels.map((row) => (
          <div key={row.level} className="level-row">
            <div className="level-label">
              <strong>{row.level}</strong>
              <span className="small muted">
                {row.known} known · {row.learning} learning · {row.total} words
              </span>
            </div>
            <div
              className="stacked-bar"
              role="img"
              aria-label={`${row.level}: ${row.known} known, ${row.learning} learning, ${row.total} total`}
            >
              {row.known > 0 && <span className="known" style={{ width: `${(row.known / row.total) * 100}%` }} />}
              {row.learning > 0 && (
                <span className="learning" style={{ width: `${(row.learning / row.total) * 100}%` }} />
              )}
            </div>
          </div>
        ))}
        <div className="strand-legend">
          <span className="row small" style={{ gap: 6 }}>
            <span className="legend-swatch" style={{ background: 'var(--good)' }} /> Known
          </span>
          <span className="row small" style={{ gap: 6 }}>
            <span className="legend-swatch" style={{ background: 'var(--almost)' }} /> Learning
          </span>
          <span className="row small" style={{ gap: 6 }}>
            <span
              className="legend-swatch"
              style={{ background: 'var(--surface-muted)', border: '1px solid var(--border)' }}
            />{' '}
            Not started
          </span>
        </div>
      </div>

      <div className="grid halves section">
        <div className="card">
          <h3>Reviews coming up</h3>
          <p className="small muted">Next 14 days. Learning more new words raises these bars a few days later.</p>
          <BarChart
            values={upcoming}
            labels={upcoming.map((_, index) => (index === 0 ? 'heute' : dayLabel(index)))}
            unit="reviews"
            caption="Reviews due per day, next 14 days"
          />
        </div>
        <div className="card">
          <h3>Study time</h3>
          <p className="small muted">Minutes per day, last 4 weeks.</p>
          <BarChart
            values={activity}
            labels={activity.map((_, index) =>
              index === activity.length - 1 ? 'heute' : dayLabel(index - activity.length + 1),
            )}
            unit="min"
            caption="Minutes studied per day, last 28 days"
            sparseLabels
          />
        </div>
      </div>

      <div className="section-title section">Grammar</div>
      <div className="card">
        {GRAMMAR_TOPICS.length === 0 && <p className="muted">No topics.</p>}
        <div className="topic-mastery">
          {GRAMMAR_TOPICS.map((topic) => {
            const cards = topic.exercises.map((exercise) => state.cards[grammarCardId(topic, exercise)]).filter(Boolean)
            const mastered = cards.filter(isMature).length
            const studied = topic.id in state.grammar
            return (
              <Link key={topic.id} to={`/grammar/${topic.id}`} className="topic-mastery-row">
                <span className="pill">{topic.level}</span>
                <span className="topic-name">{topic.title}</span>
                <span style={{ flex: 1 }}>
                  {studied ? (
                    <ProgressBar value={mastered / topic.exercises.length} label={`${topic.title} mastery`} />
                  ) : null}
                </span>
                <span className="small muted" style={{ minWidth: 90, textAlign: 'right' }}>
                  {studied ? `${mastered}/${topic.exercises.length} mastered` : 'not started'}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <LevelReadiness state={state} />
    </div>
  )
}

function latestLevel(state: AppState): string {
  const withFeedback = [...state.writing]
    .filter((attempt) => attempt.feedback)
    .sort((a, b) => b.savedAt.localeCompare(a.savedAt))
  return withFeedback[0] ? `latest estimate ${withFeedback[0].feedback!.estimatedLevel}` : 'with corrections: none yet'
}

function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  return `${Math.floor(minutes / 60)} h ${minutes % 60} min`
}

function Stat({ value, label, detail }: { value: number | string; label: string; detail?: string }) {
  return (
    <div className="card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {detail && (
        <div className="faint small" style={{ marginTop: 4 }}>
          {detail}
        </div>
      )}
    </div>
  )
}

/** Vertical bars with a hover tooltip per bar and a hidden table for screen readers. */
function BarChart({
  values,
  labels,
  unit,
  caption,
  sparseLabels = false,
}: {
  values: number[]
  labels: string[]
  unit: string
  caption: string
  sparseLabels?: boolean
}) {
  const max = Math.max(1, ...values)
  const total = values.reduce((sum, value) => sum + value, 0)
  return (
    <figure className="bar-chart">
      <div className="bar-chart-plot" aria-hidden="true">
        {values.map((value, index) => (
          <div key={index} className="bar-slot">
            <div className="bar-tooltip">
              <strong>{value}</strong> {unit}
              <div className="faint">{labels[index]}</div>
            </div>
            <div className="bar" style={{ height: `${(value / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="bar-chart-labels" aria-hidden="true">
        {labels.map((label, index) => (
          <span key={index}>{!sparseLabels || index % 7 === 0 || index === labels.length - 1 ? label : ''}</span>
        ))}
      </div>
      <figcaption className="small muted">
        {total === 0 ? 'Nothing yet.' : `Peak ${max} ${unit} · total ${total} ${unit}`}
      </figcaption>
      <table className="visually-hidden">
        <caption>{caption}</caption>
        <tbody>
          {values.map((value, index) => (
            <tr key={index}>
              <th>{labels[index]}</th>
              <td>
                {value} {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

/** A rough self-check of how far through each level's material you are. */
function LevelReadiness({ state }: { state: AppState }) {
  const rows = LEVELS.map((level: Level) => {
    const words = allWords(state).filter((word) => word.level === level && word.theme !== 'eigene')
    const knownWords = words.filter((word) => {
      const card = state.cards[recogniseId(word)]
      return card && isMature(card)
    }).length
    const topics = GRAMMAR_TOPICS.filter((topic) => topic.level === level)
    const topicsDone = topics.filter((topic) => topic.id in state.grammar).length
    const texts = [...readingTexts(state), ...listeningTexts(state)].filter((text) => text.level === level)
    const textsDone = texts.filter((text) => text.id in state.reading || text.id in state.listening).length
    const parts = [
      words.length ? knownWords / words.length : undefined,
      topics.length ? topicsDone / topics.length : undefined,
      texts.length ? textsDone / texts.length : undefined,
    ].filter((part): part is number => part !== undefined)
    const coverage = parts.length ? parts.reduce((sum, part) => sum + part, 0) / parts.length : 0
    return {
      level,
      coverage,
      knownWords,
      words: words.length,
      topicsDone,
      topics: topics.length,
      textsDone,
      texts: texts.length,
    }
  })

  return (
    <>
      <div className="section-title section">Through each level's material</div>
      <div className="card stack">
        {rows.map((row) => (
          <div key={row.level} className="level-row">
            <div className="level-label">
              <strong>{row.level}</strong>
              <span className="small muted">
                {row.knownWords}/{row.words} words known · {row.topicsDone}/{row.topics} topics · {row.textsDone}/
                {row.texts} texts
              </span>
            </div>
            <ProgressBar value={row.coverage} label={`${row.level} coverage`} />
          </div>
        ))}
        <p className="small faint" style={{ margin: 0 }}>
          This measures the app's material, not your exam result. Your course and the official model tests remain the
          real benchmark.
        </p>
      </div>
    </>
  )
}
