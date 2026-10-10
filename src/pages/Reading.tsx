import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { GenerateButton } from '../components/GenerateButton'
import { Icon } from '../components/Icon'
import { InteractiveText } from '../components/InteractiveText'
import { Questions } from '../components/Questions'
import { readingTexts } from '../content/library'
import { themeById } from '../content/themes'
import { LEVELS, type ReadingText } from '../content/types'
import { completeReading, deleteGenerated, recordActivity } from '../lib/actions'
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

function wordCount(paragraphs: string[]): number {
  return paragraphs.join(' ').split(/\s+/).filter(Boolean).length
}

export function ReadingList() {
  const state = useAppState()
  const texts = readingTexts(state)
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
        <GenerateButton kind="reading" />
      </div>
      {LEVELS.map((level) => {
        const atLevel = texts.filter((text) => text.level === level)
        if (atLevel.length === 0) return null
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
                        {text.generated && ' · generated'}
                      </div>
                      {done && <span className="pill good">{Math.round(done.score * 100)}%</span>}
                    </div>
                    <h3 className="de" style={{ marginBottom: 4 }}>
                      {text.title}
                    </h3>
                    <div className="faint small">
                      {wordCount(text.body)} words · about {Math.max(1, Math.round(wordCount(text.body) / 100))} min
                    </div>
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

export function ReadingPage() {
  const { textId } = useParams()
  const state = useAppState()
  const text = readingTexts(state).find((item) => item.id === textId)
  const [speaking, setSpeaking] = useState<number>()
  const [finished, setFinished] = useState<number>()
  const [fluencyStart, setFluencyStart] = useState<number>()
  const [fluencyResult, setFluencyResult] = useState<number>()
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
    const seconds = (Date.now() - fluencyStart!) / 1000
    setFluencyResult(Math.round(words / (seconds / 60)))
    setFluencyStart(undefined)
    recordActivity('fluency', seconds)
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
          {text.generated && (
            <button
              className="btn small ghost"
              onClick={() => {
                if (window.confirm('Delete this generated text?')) {
                  deleteGenerated('reading', text.id)
                  history.back()
                }
              }}
            >
              <Icon name="trash" size={14} /> Delete
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
        />
      </article>

      {!fluencyActive && (
        <div className="section">
          <div className="section-title">Questions</div>
          {finished !== undefined ? (
            <div className="card empty">
              <h2>{Math.round(finished * 100)}%</h2>
              <p>Saved. Words you tapped and added will appear in your reviews.</p>
              <Link className="btn primary" to="/reading">
                More texts
              </Link>
            </div>
          ) : (
            <div className="card">
              <Questions
                questions={text.questions}
                onFinish={(score) => {
                  completeReading(text, score)
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
