import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ExerciseView } from '../components/ExerciseView'
import { ProgressBar } from '../components/ProgressBar'
import { Rich } from '../components/Rich'
import { SpeakButton } from '../components/SpeakButton'
import { GRAMMAR_TOPICS, topicById } from '../content/grammar'
import { nextTopic } from '../lib/grading'
import { LEVELS, type GrammarTopic } from '../content/types'
import { completeTopic, recordActivity, unsuspendCards } from '../lib/actions'
import { grammarCardId, levelIndex } from '../lib/cards'
import type { Verdict } from '../lib/check'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { isDue, isMature } from '../lib/srs'
import { useAppState, type AppState } from '../lib/store'

function topicProgress(state: AppState, topic: GrammarTopic) {
  const cards = topic.exercises.map((exercise) => state.cards[grammarCardId(topic, exercise)]).filter(Boolean)
  const now = new Date()
  return {
    studied: topic.id in state.grammar,
    mature: cards.filter(isMature).length,
    due: cards.filter((card) => isDue(card, now)).length,
    total: topic.exercises.length,
  }
}

export function GrammarList() {
  const state = useAppState()
  const recommended = nextTopic(state)
  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">Grammatik</div>
        <h1>Grammar</h1>
        <p>
          Each topic explains the rule, shows the usual mistakes, then gives you practice. After you finish a topic, its
          exercises come back in your daily review, mixed with other topics.
        </p>
        <Link to="/reference">Reference tables: cases, endings, prepositions, irregular verbs →</Link>
      </div>
      {recommended && (
        <Link className="card card-link" to={`/grammar/${recommended.id}`} style={{ marginBottom: 28 }}>
          <div className="eyebrow">Next up</div>
          <h2 style={{ marginBottom: 4 }}>{recommended.title}</h2>
          <div className="muted">{recommended.english}</div>
        </Link>
      )}
      {LEVELS.map((level) => {
        const topics = GRAMMAR_TOPICS.filter((topic) => topic.level === level)
        if (topics.length === 0) return null
        return (
          <div key={level} className="section">
            <div className="section-title">
              {level}
              {levelIndex(level) > levelIndex(state.settings.level) && ' · above your target level'}
            </div>
            <div className="grid two">
              {topics.map((topic) => {
                const progress = topicProgress(state, topic)
                return (
                  <Link key={topic.id} className="card card-link" to={`/grammar/${topic.id}`}>
                    <div className="row between" style={{ alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ marginBottom: 2 }}>{topic.title}</h3>
                        <div className="muted small">{topic.english}</div>
                      </div>
                      {progress.studied ? (
                        progress.due > 0 ? (
                          <span className="pill almost">{progress.due} due</span>
                        ) : (
                          <span className="pill good">Studied</span>
                        )
                      ) : null}
                    </div>
                    {progress.studied && (
                      <div style={{ marginTop: 14 }}>
                        <ProgressBar value={progress.mature / progress.total} label="Mastery" />
                        <div className="faint small" style={{ marginTop: 4 }}>
                          {progress.mature} of {progress.total} exercises mastered
                        </div>
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function GrammarLesson() {
  const { topicId } = useParams()
  const topic = topicId ? topicById(topicId) : undefined
  const [practising, setPractising] = useState(false)
  useTimeOnPage((seconds) => recordActivity('grammar', seconds))

  if (!topic) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Topic not found. <Link to="/grammar">All topics</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/grammar">
        ← Grammar
      </Link>
      {practising ? (
        <Practice topic={topic} onExit={() => setPractising(false)} />
      ) : (
        <Lesson topic={topic} onPractise={() => setPractising(true)} />
      )}
    </div>
  )
}

function Lesson({ topic, onPractise }: { topic: GrammarTopic; onPractise: () => void }) {
  const state = useAppState()
  const studied = topic.id in state.grammar
  const suspendedIds = topic.exercises
    .map((exercise) => grammarCardId(topic, exercise))
    .filter((id) => state.suspended[id])
  return (
    <article className="lesson">
      <div className="page-header">
        <div className="eyebrow">
          {topic.level} · {topic.english}
        </div>
        <h1>{topic.title}</h1>
        <p className="lead">
          <Rich text={topic.summary} />
        </p>
      </div>

      {topic.sections.map((section) => (
        <section key={section.heading} className="lesson-section">
          <h2>{section.heading}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
          {section.table && (
            <div className="table-wrap">
              <table className="grammar-table">
                <thead>
                  <tr>
                    {section.table.head.map((cell, index) => (
                      <th key={index}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, index) => (
                        <td key={index}>
                          <Rich text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.examples && (
            <ul className="examples">
              {section.examples.map((example) => (
                <li key={example.de} className="example">
                  <SpeakButton text={example.de.replace(/\*/g, '')} />
                  <div className="example-text">
                    <div className="de">
                      <Rich text={example.de} />
                    </div>
                    <div className="en">{example.en}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {topic.mistakes.length > 0 && (
        <section className="lesson-section">
          <h2>Common mistakes</h2>
          <div className="mistakes">
            {topic.mistakes.map((mistake) => (
              <div key={mistake.wrong} className="mistake">
                <div className="de mistake-wrong">✗ {mistake.wrong}</div>
                <div className="de mistake-right">✓ {mistake.right}</div>
                <div className="small muted">{mistake.why}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="card lesson-cta">
        <div>
          <h3 style={{ marginBottom: 2 }}>Practise: {topic.exercises.length} exercises</h3>
          <div className="muted small">
            {studied
              ? 'These exercises are already in your reviews. Practising again does not change their schedule.'
              : 'When you finish, the exercises join your spaced reviews.'}
          </div>
        </div>
        {suspendedIds.length > 0 && (
          <button className="btn ghost small" onClick={() => unsuspendCards(suspendedIds)}>
            Restore {suspendedIds.length} hidden exercise{suspendedIds.length > 1 ? 's' : ''}
          </button>
        )}
        <button className="btn primary" onClick={onPractise}>
          {studied ? 'Practise again' : 'Start practice'}
        </button>
      </div>
    </article>
  )
}

function shuffle<T>(items: T[]): T[] {
  return items
    .map((item) => ({ item, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item)
}

function Practice({ topic, onExit }: { topic: GrammarTopic; onExit: () => void }) {
  const exercises = useMemo(() => shuffle(topic.exercises), [topic])
  const [index, setIndex] = useState(0)
  const [verdicts, setVerdicts] = useState<Verdict[]>([])
  const answered = verdicts.length > index
  const finished = index >= exercises.length

  function next() {
    const nextIndex = index + 1
    if (nextIndex >= exercises.length) completeTopic(topic)
    setIndex(nextIndex)
  }

  useKeyHandler(answered && !finished, (key) => {
    if (key === 'Enter') {
      next()
      return true
    }
    return false
  })

  if (finished) {
    const correct = verdicts.filter((verdict) => verdict === 'correct').length
    const almost = verdicts.filter((verdict) => verdict === 'almost').length
    return (
      <div className="card empty">
        <h2>
          {correct} of {exercises.length} right
        </h2>
        <p>
          {almost > 0 && `${almost} nearly right. `}
          These exercises will come back in your reviews over the next days, mixed with everything else.
        </p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <button className="btn" onClick={onExit}>
            Back to the rule
          </button>
          <Link className="btn primary" to="/grammar">
            All topics
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={index / exercises.length} label="Practice progress" />
        </div>
        <span className="muted small">
          {index + 1} / {exercises.length}
        </span>
        <button className="btn ghost small" onClick={onExit}>
          Show the rule
        </button>
      </div>
      <div className="card review-card">
        <div className="eyebrow">{topic.title}</div>
        <ExerciseView
          key={index}
          exercise={exercises[index]}
          onAnswered={(verdict) => setVerdicts([...verdicts, verdict])}
        />
        {answered && (
          <div style={{ marginTop: 16 }}>
            <button className="btn primary" onClick={next}>
              {index + 1 < exercises.length ? 'Next' : 'Finish'} <span className="kbd">Enter</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
