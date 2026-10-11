import { Link } from 'react-router'
import { Icon, type IconName } from '../components/Icon'
import { suggest } from '../content/library'
import { LISTENING_TEXTS } from '../content/listening'
import { READING_TEXTS } from '../content/reading'
import { WRITING_TASKS } from '../content/writing'
import { dueCards, newWordsLearnedToday, nextNewWords } from '../lib/cards'
import { updateSettings } from '../lib/actions'
import { backupDue, downloadBackup } from '../lib/backup'
import { useNow } from '../lib/hooks'
import { LEVELS, type Level } from '../content/types'
import { useAppState, type ActivityKind, type AppState } from '../lib/store'
import { nextTopic } from '../lib/grading'

const STRANDS: { id: string; label: string; description: string; kinds: ActivityKind[]; color: string }[] = [
  {
    id: 'input',
    label: 'Input',
    description: 'reading and listening',
    kinds: ['reading', 'listening'],
    color: 'var(--series-1)',
  },
  { id: 'output', label: 'Output', description: 'writing', kinds: ['writing'], color: 'var(--series-2)' },
  {
    id: 'study',
    label: 'Study',
    description: 'words, grammar, dictation',
    kinds: ['review', 'learn', 'grammar', 'dictation'],
    color: 'var(--series-3)',
  },
  {
    id: 'fluency',
    label: 'Fluency',
    description: 'fast practice with known material',
    kinds: ['fluency'],
    color: 'var(--series-4)',
  },
]

function greeting(now: Date): string {
  const hour = now.getHours()
  if (hour < 11) return 'Guten Morgen'
  if (hour < 18) return 'Guten Tag'
  return 'Guten Abend'
}

function minutesThisWeek(state: AppState, kinds: ActivityKind[]): number {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
  const seconds = state.activity
    .filter((entry) => kinds.includes(entry.kind) && new Date(entry.at).getTime() > weekAgo)
    .reduce((total, entry) => total + entry.seconds, 0)
  return Math.round(seconds / 60)
}

export function Today() {
  const state = useAppState()
  const now = useNow()
  const due = dueCards(state, now)
  const learnedToday = newWordsLearnedToday(state, now)
  const newLeft = Math.max(0, state.settings.newWordsPerDay - learnedToday)
  const availableNew = nextNewWords(state, newLeft).length
  const topic = nextTopic(state)
  const target = state.settings.level
  const reading = suggest(READING_TEXTS, state.reading, target)
  const listening = suggest(LISTENING_TEXTS, state.listening, target)
  const writtenTaskIds = Object.fromEntries(state.writing.map((attempt) => [attempt.taskId, true]))
  const writing = suggest(WRITING_TASKS, writtenTaskIds, target)
  const rewriteTask = WRITING_TASKS.find((task) => {
    const rewrite = state.rewrites[task.id]
    return rewrite && !rewrite.doneAt && new Date(rewrite.dueAt) <= now
  })
  const dateLabel = now.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">{dateLabel}</div>
        <h1>
          {greeting(now)}
          {state.settings.name ? `, ${state.settings.name}` : ''}.
        </h1>
        <p>
          Working towards <strong>{target}</strong>. Reviews first while your memory is fresh, then something new.
        </p>
      </div>

      {!state.settings.welcomeDismissed && <Welcome level={target} />}

      {backupDue(now) && (
        <div className="feedback almost" style={{ marginTop: 0, marginBottom: 16 }}>
          <div className="row between">
            <span className="small">
              Unless you sync, your progress lives only in this browser, and browsers sometimes clear site data. Keep a
              backup.
            </span>
            <button className="btn small" onClick={downloadBackup}>
              Download backup
            </button>
          </div>
        </div>
      )}

      <div className="card today-hero">
        <div>
          <div className="stat-value">{due.length}</div>
          <div className="stat-label">{due.length === 1 ? 'review due' : 'reviews due'}</div>
          <div className="faint small" style={{ marginTop: 6 }}>
            {reviewBreakdown(due)}
          </div>
        </div>
        {due.length > 0 ? (
          <Link className="btn primary" to="/review">
            Start review
          </Link>
        ) : (
          <span className="pill good">All caught up</span>
        )}
      </div>

      <div className="section-title section">Today's plan</div>
      <div className="plan-grid">
        <PlanCard
          icon="words"
          title="New words"
          detail={
            availableNew > 0
              ? `${learnedToday} of ${state.settings.newWordsPerDay} learned today`
              : learnedToday > 0
                ? `${learnedToday} learned today. Done.`
                : 'No new words left at your level.'
          }
          to={availableNew > 0 ? '/words/learn' : '/words'}
          action={availableNew > 0 ? `Learn ${availableNew}` : 'Browse words'}
          done={availableNew === 0 && learnedToday > 0}
        />
        <PlanCard
          icon="grammar"
          title="Grammar"
          detail={topic ? `${topic.title} · ${topic.english}` : `All topics up to ${target} studied.`}
          to={topic ? `/grammar/${topic.id}` : '/grammar'}
          action={topic ? 'Study' : 'Browse'}
        />
        <PlanCard
          icon="reading"
          title="Read"
          detail={reading ? `${reading.title} · ${reading.level}` : 'All texts read.'}
          to={reading ? `/reading/${reading.id}` : '/reading'}
          action="Read"
        />
        <PlanCard
          icon="listening"
          title="Listen"
          detail={listening ? `${listening.title} · ${listening.level}` : 'Try a dictation.'}
          to={listening ? `/listening/${listening.id}` : '/listening/dictation'}
          action="Listen"
        />
        {rewriteTask ? (
          <PlanCard
            icon="writing"
            title="Rewrite"
            detail={`From memory, two weeks on: ${rewriteTask.title}`}
            to={`/writing/${rewriteTask.id}`}
            action="Rewrite"
          />
        ) : (
          <PlanCard
            icon="writing"
            title="Write"
            detail={writing ? `${writing.title} · ${writing.level}` : 'All tasks written.'}
            to={writing ? `/writing/${writing.id}` : '/writing'}
            action="Write"
          />
        )}
        <PlanCard
          icon="progress"
          title="Fluency"
          detail="Speed round: recognise known words in under 1.5 seconds, or re-read a text faster."
          to="/words/speed"
          action="Go"
        />
      </div>

      <p className="small muted" style={{ marginTop: 16 }}>
        Also: <Link to="/exam">Exam practice</Link> · <Link to="/reference">Reference tables</Link> ·{' '}
        <Link to="/words/speed">Speed round</Link>
      </p>

      <div className="section-title section">This week</div>
      <div className="card">
        <StrandBalance state={state} />
      </div>
    </div>
  )
}

function reviewBreakdown(due: ReturnType<typeof dueCards>): string {
  if (due.length === 0) return 'Come back tomorrow, or learn something new.'
  const count = (kinds: string[]) => due.filter((card) => kinds.includes(card.kind)).length
  const words = count(['recognise', 'produce', 'forms'])
  const grammar = count(['grammar'])
  const mistakes = count(['mistake'])
  return [words && `${words} words`, grammar && `${grammar} grammar`, mistakes && `${mistakes} of your mistakes`]
    .filter(Boolean)
    .join(' · ')
}

function PlanCard({
  icon,
  title,
  detail,
  to,
  action,
  done = false,
}: {
  icon: IconName
  title: string
  detail: string
  to: string
  action: string
  done?: boolean
}) {
  return (
    <Link to={to} className={`card card-link plan-card ${done ? 'done' : ''}`}>
      <div className="plan-icon">
        <Icon name={done ? 'check' : icon} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div className="muted small plan-detail">{detail}</div>
      </div>
      <span className="plan-action">{action} →</span>
    </Link>
  )
}

/** Time per strand over the last seven days, as a stacked bar. */
function StrandBalance({ state }: { state: AppState }) {
  const totals = STRANDS.map((strand) => ({ ...strand, minutes: minutesThisWeek(state, strand.kinds) }))
  const sum = totals.reduce((total, strand) => total + strand.minutes, 0)
  if (sum === 0) {
    return (
      <p className="muted" style={{ margin: 0 }}>
        Nothing yet this week. A good week splits time roughly evenly between input, output, study and fluency.
      </p>
    )
  }
  const weakest = [...totals].sort((a, b) => a.minutes - b.minutes)[0]
  return (
    <div className="stack">
      <div className="row between">
        <div>
          <span className="stat-value" style={{ fontSize: '1.4rem' }}>
            {sum}
          </span>{' '}
          <span className="muted">minutes</span>
        </div>
        <span className="small muted">
          Least practised: <strong>{weakest.label.toLowerCase()}</strong> ({weakest.description})
        </span>
      </div>
      <div className="strand-bar" aria-hidden="true">
        {totals.map((strand) =>
          strand.minutes > 0 ? (
            <span
              key={strand.id}
              style={{ flex: strand.minutes, background: strand.color }}
              title={`${strand.label}: ${strand.minutes} min`}
            />
          ) : null,
        )}
      </div>
      <div className="strand-legend">
        {totals.map((strand) => (
          <div key={strand.id} className="row" style={{ gap: 6 }}>
            <span className="legend-swatch" style={{ background: strand.color }} />
            <span className="small">
              {strand.label} <span className="muted">{strand.minutes} min</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** First-visit guide: how a day with the app is meant to look. */
function Welcome({ level }: { level: Level }) {
  return (
    <div className="card welcome">
      <div className="row between" style={{ alignItems: 'flex-start' }}>
        <h2 style={{ marginBottom: 6 }}>How this works</h2>
        <button className="btn ghost small" onClick={() => updateSettings({ welcomeDismissed: true })}>
          Got it
        </button>
      </div>
      <p className="muted" style={{ marginTop: 0 }}>
        Around 30 minutes a day, in this order:
      </p>
      <ol className="welcome-steps">
        <li>
          <strong>Reviews</strong> (10 min). Words and grammar come back just before you'd forget them. Type the answer;
          don't just think it.
        </li>
        <li>
          <strong>New words</strong> (5 min). Ten a day. Import your course's word lists under Words.
        </li>
        <li>
          <strong>Grammar, reading or listening</strong> (15 min). Alternate. Read and listen to texts you mostly
          understand.
        </li>
        <li>
          <strong>Writing</strong>, twice a week. Compare with the model answer and note your mistakes for review.
        </li>
      </ol>
      <div className="row" style={{ marginTop: 8 }}>
        <span className="small muted">Working towards:</span>
        <div className="chips">
          {LEVELS.map((item) => (
            <button
              key={item}
              className={`chip ${level === item ? 'active' : ''}`}
              onClick={() => updateSettings({ level: item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
