import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { AnswerInput } from '../components/AnswerInput'
import { GenerateButton } from '../components/GenerateButton'
import { Icon } from '../components/Icon'
import { ProgressBar } from '../components/ProgressBar'
import { Questions } from '../components/Questions'
import { SpeakButton } from '../components/SpeakButton'
import { listeningTexts } from '../content/library'
import { themeById } from '../content/themes'
import { LEVELS, type ListeningText } from '../content/types'
import { completeListening, deleteGenerated, recordActivity, recordDictation } from '../lib/actions'
import { diffScore, diffWords, type TokenDiff } from '../lib/check'
import { dictationSentences, type DictationSentence } from '../lib/dictation'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { speak, speakDialogue, speechSupported, stopSpeaking } from '../lib/speech'
import { getState, useAppState } from '../lib/store'

export function ListeningList() {
  const state = useAppState()
  const texts = listeningTexts(state)
  const recentDictations = state.dictations.slice(-20)
  const dictationAverage =
    recentDictations.length > 0
      ? recentDictations.reduce((total, entry) => total + entry.score, 0) / recentDictations.length
      : undefined

  return (
    <div className="page">
      <div className="page-header row between" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Hören</div>
          <h1>Listening</h1>
          <p>
            Read the questions first, then listen without the transcript, as in the exam. The transcript appears once
            you have answered.
          </p>
        </div>
        <GenerateButton kind="listening" />
      </div>
      {!speechSupported() && (
        <div className="feedback almost" style={{ marginBottom: 20 }}>
          This browser has no speech synthesis. Use a recent Chrome, Edge or Safari.
        </div>
      )}

      <Link to="/listening/dictation" className="card card-link dictation-card">
        <div>
          <div className="eyebrow">Diktat</div>
          <h2 style={{ marginBottom: 4 }}>Dictation</h2>
          <div className="muted">
            Hear a sentence, type exactly what you hear, and see every word you missed. Trains you to split fast speech
            into words.
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          {dictationAverage !== undefined && (
            <>
              <div className="stat-value">{Math.round(dictationAverage * 100)}%</div>
              <div className="stat-label">recent accuracy</div>
            </>
          )}
        </div>
      </Link>

      {LEVELS.map((level) => {
        const atLevel = texts.filter((text) => text.level === level)
        if (atLevel.length === 0) return null
        return (
          <div key={level} className="section">
            <div className="section-title">{level}</div>
            <div className="grid two">
              {atLevel.map((text) => {
                const done = state.listening[text.id]
                return (
                  <Link key={text.id} to={`/listening/${text.id}`} className="card card-link">
                    <div className="row between" style={{ alignItems: 'flex-start' }}>
                      <div className="eyebrow">
                        {themeById(text.theme).title}
                        {text.generated && ' · generated'}
                      </div>
                      {done && <span className="pill good">{Math.round(done.score * 100)}%</span>}
                    </div>
                    <h3 className="de" style={{ marginBottom: 4 }}>
                      {text.title}
                    </h3>
                    <div className="faint small">{text.situation}</div>
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

export function ListeningPage() {
  const { textId } = useParams()
  const state = useAppState()
  const text = listeningTexts(state).find((item) => item.id === textId)
  const [playing, setPlaying] = useState<number>()
  const [plays, setPlays] = useState(0)
  const [score, setScore] = useState<number>()
  const [showTranscript, setShowTranscript] = useState(false)
  useTimeOnPage((seconds) => recordActivity('listening', seconds))
  useEffect(() => stopSpeaking, [])

  if (!text) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Not found. <Link to="/listening">All listening</Link>
        </div>
      </div>
    )
  }

  function play(rate: number) {
    if (!text) return
    if (playing !== undefined) {
      stopSpeaking()
      setPlaying(undefined)
      return
    }
    setPlays(plays + 1)
    setPlaying(0)
    speakDialogue(text.lines, {
      rate,
      voiceURI: state.settings.voiceURI,
      onLine: setPlaying,
      onEnd: () => setPlaying(undefined),
    })
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/listening">
        ← Listening
      </Link>
      <div className="page-header">
        <div className="eyebrow">
          {text.level} · {themeById(text.theme).title}
        </div>
        <h1 className="de">{text.title}</h1>
        <p>{text.situation}</p>
      </div>

      <div className="card player">
        <button className="btn primary player-button" onClick={() => play(state.settings.speechRate)}>
          <Icon name={playing !== undefined ? 'stop' : 'speaker'} />
          {playing !== undefined ? 'Stop' : plays === 0 ? 'Play' : 'Play again'}
        </button>
        <button className="btn" onClick={() => play(state.settings.speechRate * 0.75)} disabled={playing !== undefined}>
          Slower
        </button>
        <div className="player-status">
          {playing !== undefined ? (
            <ProgressBar value={(playing + 1) / text.lines.length} label="Playback" />
          ) : (
            <span className="small muted">
              {plays === 0 ? 'In the exam you hear most texts twice.' : `Played ${plays}×`}
            </span>
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Questions</div>
        <div className="card">
          {score === undefined ? (
            <Questions
              questions={text.questions}
              onFinish={(result) => {
                completeListening(text, result)
                setScore(result)
                setShowTranscript(true)
              }}
            />
          ) : (
            <div className="row between">
              <strong>{Math.round(score * 100)}% saved</strong>
              <Link className="btn" to="/listening">
                More listening
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <div className="row between">
          <div className="section-title" style={{ margin: 0 }}>
            Transcript
          </div>
          {!showTranscript && (
            <button className="btn small ghost" onClick={() => setShowTranscript(true)}>
              <Icon name="eye" size={14} /> Show anyway
            </button>
          )}
        </div>
        {showTranscript && <Transcript text={text} activeLine={playing} />}
      </div>

      {text.generated && (
        <button
          className="btn small ghost"
          style={{ marginTop: 20 }}
          onClick={() => {
            if (window.confirm('Delete this generated listening text?')) {
              deleteGenerated('listening', text.id)
              history.back()
            }
          }}
        >
          <Icon name="trash" size={14} /> Delete this generated text
        </button>
      )}
    </div>
  )
}

function Transcript({ text, activeLine }: { text: ListeningText; activeLine?: number }) {
  const speakers = [...new Set(text.lines.map((line) => line.speaker))]
  const showSpeakers = speakers.length > 1
  return (
    <div className="card transcript" style={{ marginTop: 12 }}>
      {text.lines.map((line, index) => (
        <div key={index} className={`transcript-line ${activeLine === index ? 'speaking' : ''}`}>
          <SpeakButton text={line.text} />
          <div>
            {showSpeakers && (
              <div className={`speaker speaker-${speakers.indexOf(line.speaker) % 2}`}>{line.speaker}</div>
            )}
            <div className="de">{line.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const DICTATION_LENGTH = 10

export function Dictation() {
  const [sentences] = useState<DictationSentence[]>(() => dictationSentences(getState(), DICTATION_LENGTH))
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<number[]>([])
  useTimeOnPage((seconds) => recordActivity('dictation', seconds))
  useEffect(() => stopSpeaking, [])

  const finished = index >= sentences.length
  useEffect(() => {
    if (finished && scores.length > 0) {
      recordDictation(scores.reduce((total, score) => total + score, 0) / scores.length)
    }
  }, [finished, scores])

  if (finished) {
    const average = scores.reduce((total, score) => total + score, 0) / Math.max(1, scores.length)
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>{Math.round(average * 100)}% of words right</h2>
          <p>
            Words you miss in dictation are usually short, unstressed ones: articles, endings, prepositions. Those are
            exactly what to listen for.
          </p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/listening/dictation">
              Another 10
            </Link>
            <Link className="btn" to="/">
              Back to today
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/listening">
        ← Listening
      </Link>
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={index / sentences.length} label="Dictation progress" />
        </div>
        <span className="muted small">
          {index + 1} / {sentences.length}
        </span>
      </div>
      <DictationItem
        key={index}
        sentence={sentences[index]}
        onNext={(score) => {
          setScores([...scores, score])
          setIndex(index + 1)
        }}
      />
    </div>
  )
}

function DictationItem({ sentence, onNext }: { sentence: DictationSentence; onNext: (score: number) => void }) {
  const { settings } = useAppState()
  const [value, setValue] = useState('')
  const [diff, setDiff] = useState<TokenDiff[]>()

  const play = (slow = false) =>
    speak(sentence.german, {
      rate: slow ? settings.speechRate * 0.7 : settings.speechRate,
      voiceURI: settings.voiceURI,
    })

  useEffect(() => {
    const timer = setTimeout(() => play(), 300)
    return () => clearTimeout(timer)
    // Play once when the sentence appears.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function check() {
    if (diff) return
    setDiff(diffWords(value, sentence.german))
  }

  useKeyHandler(!!diff, (key) => {
    if (key === 'Enter') {
      onNext(diffScore(diff!))
      return true
    }
    return false
  })

  const score = diff ? diffScore(diff) : 0
  return (
    <div className="card review-card stack">
      <div className="eyebrow">Type what you hear</div>
      <div className="row">
        <button className="btn" onClick={() => play()}>
          <Icon name="speaker" /> Play
        </button>
        <button className="btn" onClick={() => play(true)}>
          <Icon name="slow" /> Slowly
        </button>
      </div>
      <AnswerInput
        value={value}
        onChange={setValue}
        onSubmit={check}
        disabled={!!diff}
        placeholder="Schreib den Satz…"
      />
      {!diff ? (
        <div>
          <button className="btn primary" onClick={check}>
            Check <span className="kbd">Enter</span>
          </button>
        </div>
      ) : (
        <>
          <div className={`feedback ${score === 1 ? 'correct' : score >= 0.8 ? 'almost' : 'wrong'}`}>
            <div className="feedback-title">{Math.round(score * 100)}% of words</div>
            <div className="diff de">
              {diff.map((token, tokenIndex) => (
                <span
                  key={tokenIndex}
                  className={`token ${token.status}`}
                  title={token.typed ? `You wrote: ${token.typed}` : undefined}
                >
                  {token.text}
                  {token.typed && <span className="typed">{token.typed}</span>}
                </span>
              ))}
            </div>
            <div className="small muted" style={{ marginTop: 6 }}>
              {sentence.english}
            </div>
          </div>
          <div className="faint small">
            <span className="token-key ok">correct</span> <span className="token-key wrong">wrong</span>{' '}
            <span className="token-key missing">missed</span> <span className="token-key extra">extra</span>
          </div>
          <div>
            <button className="btn primary" onClick={() => onNext(score)}>
              Next <span className="kbd">Enter</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
