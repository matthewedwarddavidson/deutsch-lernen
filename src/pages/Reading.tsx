import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Icon } from '../components/Icon'
import { InteractiveText } from '../components/InteractiveText'
import { LookedUpWords } from '../components/LookedUpWords'
import { OutsideInput } from '../components/OutsideInput'
import { Questions } from '../components/Questions'
import { MATCHING_TASKS } from '../content/matching'
import { READING_TEXTS } from '../content/reading'
import { themeById } from '../content/themes'
import { LEVELS, type ReadingText, type ThemeId } from '../content/types'
import { completeReading, recordActivity, recordReadingSpeed } from '../lib/actions'
import type { LookUp } from '../lib/lookups'
import { coverageBand, knownShare } from '../lib/coverage'
import { useTimeOnPage } from '../lib/hooks'
import { speakDialogue, stopSpeaking } from '../lib/speech'
import { useAppState } from '../lib/store'

const GENRE_LABELS: Record<ReadingText['genre'], string> = {
  blog: 'Blog',
  article: 'Artikel',
  email: 'E-Mail',
  forum: 'Forum',
  story: 'Geschichte',
  notice: 'Information',
  interview: 'Interview',
  dialogue: 'Dialog',
  announcement: 'Durchsage',
  report: 'Bericht',
}

function secondsSince(start: number): number {
  return (Date.now() - start) / 1000
}

function wordCount(paragraphs: string[]): number {
  return paragraphs.join(' ').split(/\s+/).filter(Boolean).length
}

/** Below this, the estimate mostly reflects words not yet marked as learned, so it isn't shown. */
const ESTIMATE_AFTER_WORDS = 100

const BAND_LABELS = { easy: 'easy read', study: 'study text', hard: 'hard' }

/** Estimated share of known words, as a pill: 98%+ suits fast reading, 95–98% study with glosses. */
function KnownWords({ text }: { text: ReadingText }) {
  const state = useAppState()
  const share = knownShare(text, state)
  const band = coverageBand(share)
  return (
    <span
      className={`pill ${band === 'easy' ? 'good' : band === 'hard' ? 'almost' : ''}`}
      title="Estimated share of words you know. 98% or more suits fast, easy reading; 95–98% suits study with glosses."
    >
      ~{Math.floor(share * 100)}% known · {BAND_LABELS[band]}
    </span>
  )
}

export function ReadingList() {
  const state = useAppState()
  const [theme, setTheme] = useState<ThemeId>()
  const texts = theme ? READING_TEXTS.filter((text) => text.theme === theme) : READING_TEXTS
  const themes = [...new Set(READING_TEXTS.map((text) => text.theme))]
  const learnedCount = Object.keys(state.wordsLearned).length
  return (
    <div className="page">
      <div className="page-header row between" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Lesen</div>
          <h1>Reading</h1>
          <p>
            Texts you can mostly understand, with every word one tap away. Read for meaning first, then answer the
            questions. Afterwards, read it again faster for fluency.
          </p>
        </div>
      </div>
      <div className="chips" style={{ marginBottom: 8 }}>
        <button className={`chip ${theme === undefined ? 'active' : ''}`} onClick={() => setTheme(undefined)}>
          All topics
        </button>
        {themes.map((id) => (
          <button key={id} className={`chip ${theme === id ? 'active' : ''}`} onClick={() => setTheme(id)}>
            {themeById(id).title}
          </button>
        ))}
      </div>
      {theme && (
        <p className="small muted">
          Reading several texts on one topic brings the same words back, which is how they stick.
        </p>
      )}
      {LEVELS.map((level) => {
        const atLevel = texts.filter((text) => text.level === level)
        const matching = MATCHING_TASKS.filter((task) => task.level === level && (!theme || task.theme === theme))
        if (atLevel.length === 0 && matching.length === 0) return null
        return (
          <div key={level} className="section">
            <div className="section-title">{level}</div>
            <div className="grid two">
              {atLevel.map((text) => {
                const done = state.reading[text.id]
                return (
                  <Link key={text.id} to={`/reading/${text.id}`} className="card card-link">
                    <div className="row between" style={{ alignItems: 'flex-start' }}>
                      <div className="eyebrow">
                        {GENRE_LABELS[text.genre]} · {themeById(text.theme).title}
                      </div>
                      {done && <span className="pill good">{Math.round(done.score * 100)}%</span>}
                    </div>
                    <h3 className="de" style={{ marginBottom: 4 }}>
                      {text.title}
                    </h3>
                    <div className="row between faint small">
                      <span>
                        {wordCount(text.body)} words · about {Math.max(1, Math.round(wordCount(text.body) / 100))} min
                      </span>
                      {!done && learnedCount >= ESTIMATE_AFTER_WORDS && <KnownWords text={text} />}
                    </div>
                  </Link>
                )
              })}
              {matching.map((task) => {
                const done = state.reading[task.id]
                return (
                  <Link key={task.id} to={`/reading/match/${task.id}`} className="card card-link">
                    <div className="row between" style={{ alignItems: 'flex-start' }}>
                      <div className="eyebrow">Zuordnung · {themeById(task.theme).title}</div>
                      {done && <span className="pill good">{Math.round(done.score * 100)}%</span>}
                    </div>
                    <h3 className="de" style={{ marginBottom: 4 }}>
                      {task.title}
                    </h3>
                    <div className="faint small">
                      Match {task.people.length} people to {task.ads.length} ads, as in Lesen Teil 3
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
      <OutsideInput kind="reading" />
    </div>
  )
}

export function ReadingPage() {
  const { textId } = useParams()
  const state = useAppState()
  const text = READING_TEXTS.find((item) => item.id === textId)
  const [speaking, setSpeaking] = useState<number>()
  const [finished, setFinished] = useState<number>()
  const [fluencyStart, setFluencyStart] = useState<number>()
  const [fluencyResult, setFluencyResult] = useState<number>()
  const [lookUps, setLookUps] = useState<LookUp[]>([])
  const fluencyActive = fluencyStart !== undefined
  useTimeOnPage((seconds) => !fluencyActive && recordActivity('reading', seconds))

  useEffect(() => stopSpeaking, [])

  if (!text) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Text not found. <Link to="/reading">All texts</Link>
        </div>
      </div>
    )
  }

  const words = wordCount(text.body)
  const completion = state.reading[text.id]

  function listen() {
    if (!text) return
    if (speaking !== undefined) {
      stopSpeaking()
      setSpeaking(undefined)
      return
    }
    speakDialogue(
      [text.title, ...text.body].map((paragraph) => ({ text: paragraph })),
      {
        onLine: (index) => setSpeaking(index - 1),
        onEnd: () => setSpeaking(undefined),
      },
    )
    setSpeaking(-1)
  }

  function finishFluency() {
    const seconds = secondsSince(fluencyStart!)
    const wordsPerMinute = Math.round(words / (seconds / 60))
    setFluencyResult(wordsPerMinute)
    setFluencyStart(undefined)
    recordActivity('fluency', seconds)
    recordReadingSpeed(text!.id, wordsPerMinute)
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/reading">
        ← Reading
      </Link>
      <div className="page-header">
        <div className="eyebrow">
          {text.level} · {GENRE_LABELS[text.genre]} · {themeById(text.theme).title} · {words} words
        </div>
        <h1 className="de">{text.title}</h1>
        <div className="row">
          <button className="btn small" onClick={listen}>
            <Icon name={speaking !== undefined ? 'stop' : 'speaker'} size={16} />
            {speaking !== undefined ? 'Stop' : 'Listen'}
          </button>
          {completion && !fluencyActive && (
            <button
              className="btn small"
              onClick={() => {
                setFluencyResult(undefined)
                setFluencyStart(Date.now())
              }}
            >
              Fluency read: again, faster
            </button>
          )}
        </div>
        {!fluencyActive && (
          <p className="small faint" style={{ marginTop: 10 }}>
            Tap any word for its meaning. Dotted words have a gloss.
          </p>
        )}
      </div>

      {fluencyActive && (
        <div className="card fluency-bar">
          <span>Read for meaning, a little faster than is comfortable. No looking things up.</span>
          <button className="btn primary" onClick={finishFluency}>
            Done
          </button>
        </div>
      )}
      {fluencyResult !== undefined && (
        <div className="feedback correct" style={{ marginBottom: 20 }}>
          <div className="feedback-title">{fluencyResult} words per minute</div>
          <div className="small">
            Confident adult readers manage 200–300 in their own language. Re-reading familiar texts faster builds the
            automatic recognition that frees attention for meaning.
          </div>
        </div>
      )}

      <article className="card reader">
        <InteractiveText
          paragraphs={text.body}
          glossary={text.glossary}
          activeParagraph={speaking}
          showGlossHints={!fluencyActive}
          onLookUp={(lookUp) => setLookUps((current) => [...current, lookUp])}
        />
      </article>

      {!fluencyActive && lookUps.length > 0 && (
        <div className="section">
          <LookedUpWords lookUps={lookUps} />
        </div>
      )}

      {!fluencyActive && (
        <div className="section">
          <div className="section-title">Questions</div>
          {finished !== undefined ? (
            <div className="card empty">
              <h2>{Math.round(finished * 100)}%</h2>
              <p>Saved. Words you added will appear in your reviews.</p>
              <Link className="btn primary" to="/reading">
                More texts
              </Link>
            </div>
          ) : (
            <div className="card">
              <Questions
                questions={text.questions}
                onFinish={(score) => {
                  completeReading(text.id, score)
                  setFinished(score)
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
