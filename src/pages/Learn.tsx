import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { AnswerInput } from '../components/AnswerInput'
import { Feedback } from '../components/Feedback'
import { ProgressBar } from '../components/ProgressBar'
import { WordView } from '../components/WordView'
import { displayGerman } from '../content/parseWords'
import { themeById } from '../content/themes'
import type { ThemeId, Word } from '../content/types'
import { learnWord, recordActivity } from '../lib/actions'
import { newWordsLearnedToday, nextNewWords } from '../lib/cards'
import type { CheckResult } from '../lib/check'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { speak } from '../lib/speech'
import { getState, useAppState } from '../lib/store'
import { checkWord, suggestedGrade } from '../lib/grading'

const BATCH_SIZE = 5

type Step =
  | { kind: 'study'; index: number }
  | { kind: 'quiz'; queue: Word[]; firstTry: boolean }
  | { kind: 'done' }

/**
 * Introduces new words in batches: study each word, then recall the batch
 * from English. The first recall attempt becomes the word's first review.
 */
export function Learn() {
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme') as ThemeId | null
  const [words] = useState(() => {
    const state = getState()
    const remainingToday = Math.max(0, state.settings.newWordsPerDay - newWordsLearnedToday(state, new Date()))
    const count = searchParams.get('more') ? BATCH_SIZE * 2 : remainingToday
    return nextNewWords(state, count, theme ?? undefined)
  })
  const [batchStart, setBatchStart] = useState(0)
  const [step, setStep] = useState<Step>({ kind: 'study', index: 0 })
  const [graded, setGraded] = useState<Set<string>>(new Set())
  useTimeOnPage((seconds) => recordActivity('learn', seconds))

  const batch = words.slice(batchStart, batchStart + BATCH_SIZE)

  if (words.length === 0) {
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>{theme ? `No new words left in ${themeById(theme).title}` : "You've reached today's new words"}</h2>
          <p>New words are spread over days so reviews stay manageable. You can still learn more if you have the energy.</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/review">
              Review
            </Link>
            <Link className="btn" to={`/words/learn?more=1${theme ? `&theme=${theme}` : ''}`} reloadDocument>
              Learn 10 more anyway
            </Link>
          </div>
        </div>
      </div>
    )
  }

  function finishStudy() {
    setStep({ kind: 'quiz', queue: [...batch], firstTry: true })
  }

  function handleQuizAnswer(word: Word, result: CheckResult) {
    if (step.kind !== 'quiz') return
    if (!graded.has(word.id)) {
      learnWord(word, suggestedGrade(result.verdict))
      setGraded(new Set(graded).add(word.id))
    }
    const rest = step.queue.slice(1)
    // Words answered wrongly go to the back until they are right.
    const queue = result.verdict === 'wrong' ? [...rest, word] : rest
    if (queue.length > 0) {
      setStep({ kind: 'quiz', queue, firstTry: false })
    } else if (batchStart + BATCH_SIZE < words.length) {
      setBatchStart(batchStart + BATCH_SIZE)
      setStep({ kind: 'study', index: 0 })
    } else {
      setStep({ kind: 'done' })
    }
  }

  const progress = (graded.size + (step.kind === 'study' ? step.index * 0.5 : 0)) / words.length

  return (
    <div className="page narrow">
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={step.kind === 'done' ? 1 : progress} label="Progress" />
        </div>
        <span className="muted small">
          {graded.size} / {words.length} learned
        </span>
      </div>
      {step.kind === 'study' && (
        <StudyCard
          key={batch[step.index].id}
          word={batch[step.index]}
          position={step.index}
          batchSize={batch.length}
          onNext={() =>
            step.index + 1 < batch.length ? setStep({ kind: 'study', index: step.index + 1 }) : finishStudy()
          }
        />
      )}
      {step.kind === 'quiz' && (
        <QuizCard key={`${step.queue[0].id}-${step.queue.length}`} word={step.queue[0]} onAnswer={handleQuizAnswer} />
      )}
      {step.kind === 'done' && (
        <div className="card empty">
          <h2>{words.length} new words</h2>
          <p>They will come back for review tomorrow, then at growing intervals. Typing them in German starts from tomorrow.</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/">
              Back to today
            </Link>
            <Link className="btn" to="/words">
              All words
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function StudyCard({
  word,
  position,
  batchSize,
  onNext,
}: {
  word: Word
  position: number
  batchSize: number
  onNext: () => void
}) {
  const { settings } = useAppState()
  useKeyHandler(true, (key) => {
    if (key === 'Enter' || key === ' ') {
      onNext()
      return true
    }
    return false
  })

  return (
    <div className="card review-card">
      <div className="eyebrow">
        New word {position + 1} of {batchSize}
      </div>
      <WordView word={word} />
      <div className="row" style={{ marginTop: 20 }}>
        <button className="btn primary" onClick={onNext} autoFocus>
          {position + 1 < batchSize ? 'Next word' : 'Test these words'} <span className="kbd">Enter</span>
        </button>
        <button
          className="btn ghost"
          onClick={() => speak(word.example.replace(/[{}]/g, ''), { rate: settings.speechRate * 0.7, voiceURI: settings.voiceURI })}
        >
          Hear the example slowly
        </button>
      </div>
    </div>
  )
}

function QuizCard({ word, onAnswer }: { word: Word; onAnswer: (word: Word, result: CheckResult) => void }) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()
  const { settings } = useAppState()

  function submit() {
    if (result) return
    const checked = checkWord(word, value)
    setResult(checked)
    speak(displayGerman(word), { rate: settings.speechRate, voiceURI: settings.voiceURI })
  }

  useKeyHandler(!!result, (key) => {
    if (key === 'Enter') {
      onAnswer(word, result!)
      return true
    }
    return false
  })

  return (
    <div className="card review-card stack">
      <div className="eyebrow">Recall · in German{word.kind === 'noun' ? ', with the article' : ''}</div>
      <div className="review-prompt" style={{ fontFamily: 'var(--font-ui)' }}>
        {word.english}
      </div>
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result ? (
        <div>
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
        </div>
      ) : (
        <>
          <Feedback verdict={result.verdict}>
            {result.verdict !== 'correct' && (
              <div className="de">
                <strong>{displayGerman(word)}</strong>
              </div>
            )}
            {result.note && <div className="small">{result.note}</div>}
          </Feedback>
          <div>
            <button className="btn primary" onClick={() => onAnswer(word, result)} autoFocus>
              Continue <span className="kbd">Enter</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
