import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { AnswerInput } from '../components/AnswerInput'
import { Feedback } from '../components/Feedback'
import { ProgressBar } from '../components/ProgressBar'
import { WordView } from '../components/WordView'
import { clozeParts, displayGerman } from '../content/parseWords'
import { themeById } from '../content/themes'
import type { ThemeId, Word } from '../content/types'
import { learnWord, recordActivity } from '../lib/actions'
import { dueCards, newWordsLearnedToday, nextNewWords, REVIEW_BACKLOG_LIMIT } from '../lib/cards'
import { checkAnswer, type CheckResult } from '../lib/check'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { speak } from '../lib/speech'
import { Rating } from '../lib/srs'
import { getState } from '../lib/store'
import { checkWord, suggestedGrade } from '../lib/grading'

const BATCH_SIZE = 5
/** Correct recalls of each new word before the batch is done. More early retrieval, better retention. */
const RECALLS_PER_WORD = 3

type Step = { kind: 'study'; index: number } | { kind: 'quiz'; queue: Word[] } | { kind: 'done' }

/**
 * Introduces new words in batches: study each word, then recall the batch
 * until each word has been recalled three times, alternating translation and
 * gap-filling, with other words in between. The first recall becomes the word's first review.
 */
export function Learn() {
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme') as ThemeId | null
  const [{ words, limitReached, backlog }] = useState(() => {
    const state = getState()
    const now = new Date()
    const remainingToday = Math.max(0, state.settings.newWordsPerDay - newWordsLearnedToday(state, now))
    const requested = Number(searchParams.get('count'))
    const due = dueCards(state, now).length
    const paused = due >= REVIEW_BACKLOG_LIMIT
    const count = requested > 0 ? requested : searchParams.get('more') ? BATCH_SIZE * 2 : paused ? 0 : remainingToday
    return {
      words: nextNewWords(state, count, theme ?? undefined),
      limitReached: count === 0,
      backlog: paused ? due : 0,
    }
  })
  const [recalls, setRecalls] = useState<Record<string, number>>({})
  const [batchStart, setBatchStart] = useState(0)
  const [step, setStep] = useState<Step>({ kind: 'study', index: 0 })
  const [graded, setGraded] = useState<Set<string>>(new Set())
  useTimeOnPage((seconds) => recordActivity('learn', seconds))

  const batch = words.slice(batchStart, batchStart + BATCH_SIZE)

  if (words.length === 0) {
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>
            {backlog > 0
              ? 'New words are paused'
              : limitReached
                ? "You've reached today's new words"
                : `No new words left${theme ? ` in ${themeById(theme).title}` : ' at your level'}`}
          </h2>
          <p>
            {backlog > 0
              ? `You have ${backlog} reviews due. Clearing them first keeps the backlog from growing; new words come back when fewer than ${REVIEW_BACKLOG_LIMIT} are due.`
              : limitReached
                ? 'New words are spread over days so reviews stay manageable. You can still learn more if you have the energy.'
                : 'Raise your target level in Settings, or import words from your course.'}
          </p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/review">
              Review
            </Link>
            {limitReached && (
              <Link className="btn" to={`/words/learn?more=1${theme ? `&theme=${theme}` : ''}`}>
                Learn 10 more anyway
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  function finishStudy(known = graded) {
    const queue = batch.filter((word) => !known.has(word.id))
    if (queue.length > 0) setStep({ kind: 'quiz', queue })
    else advanceBatch()
  }

  function advanceBatch() {
    if (batchStart + BATCH_SIZE < words.length) {
      setBatchStart(batchStart + BATCH_SIZE)
      setStep({ kind: 'study', index: 0 })
    } else {
      setStep({ kind: 'done' })
    }
  }

  /** Words you already know skip the quiz and start with long intervals. */
  function markKnown(word: Word) {
    if (step.kind !== 'study') return
    learnWord(word, Rating.Easy)
    const known = new Set(graded).add(word.id)
    setGraded(known)
    if (step.index + 1 < batch.length) setStep({ kind: 'study', index: step.index + 1 })
    else finishStudy(known)
  }

  function handleQuizAnswer(word: Word, result: CheckResult) {
    if (step.kind !== 'quiz') return
    if (!graded.has(word.id)) {
      learnWord(word, suggestedGrade(result.verdict))
      setGraded(new Set(graded).add(word.id))
    }
    const count = (recalls[word.id] ?? 0) + (result.verdict === 'wrong' ? 0 : 1)
    setRecalls({ ...recalls, [word.id]: count })
    const rest = step.queue.slice(1)
    // Each word goes to the back until it has been recalled enough times, so other words come in between.
    const queue = count < RECALLS_PER_WORD ? [...rest, word] : rest
    if (queue.length > 0) setStep({ kind: 'quiz', queue })
    else advanceBatch()
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
          onKnown={() => markKnown(batch[step.index])}
        />
      )}
      {step.kind === 'quiz' && (
        <QuizCard
          key={`${step.queue[0].id}-${recalls[step.queue[0].id] ?? 0}-${step.queue.length}`}
          word={step.queue[0]}
          recallNumber={(recalls[step.queue[0].id] ?? 0) + 1}
          onAnswer={handleQuizAnswer}
        />
      )}
      {step.kind === 'done' && (
        <div className="card empty">
          <h2>{words.length} new words</h2>
          <p>
            You recalled each one {RECALLS_PER_WORD} times. They come back for review tomorrow, then at growing
            intervals.
          </p>
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
  onKnown,
}: {
  word: Word
  position: number
  batchSize: number
  onNext: () => void
  onKnown: () => void
}) {
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
        <button className="btn" onClick={onKnown}>
          I already know this
        </button>
        <button className="btn ghost" onClick={() => speak(word.example, { slow: true })}>
          Hear the example slowly
        </button>
      </div>
    </div>
  )
}

interface QuizCardProps {
  word: Word
  /** Which correct recall this would be: the second uses the example sentence. */
  recallNumber: number
  onAnswer: (word: Word, result: CheckResult) => void
}

function QuizCard({ word, recallNumber, onAnswer }: QuizCardProps) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()
  const parts = useMemo(() => clozeParts(word.example), [word])
  const gap = parts
    .filter((part) => part.gap)
    .map((part) => part.text)
    .join(' ')
  const useCloze = recallNumber === 2 && gap !== ''

  function submit() {
    if (result) return
    setResult(useCloze ? checkAnswer(value, [gap]) : checkWord(word, value))
    speak(useCloze ? word.example : displayGerman(word))
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
      {useCloze ? (
        <>
          <div className="eyebrow">
            Recall {recallNumber} of {RECALLS_PER_WORD} · fill the gap
          </div>
          <p className="de" style={{ fontSize: '1.3rem', lineHeight: 1.6, margin: 0 }}>
            {parts.map((part, index) =>
              part.gap ? (
                <span key={index} className="gap">
                  {result ? part.text : '\u00a0'.repeat(Math.max(4, part.text.length))}
                </span>
              ) : (
                <span key={index}>{part.text}</span>
              ),
            )}
          </p>
          <div className="muted">{word.exampleEnglish}</div>
        </>
      ) : (
        <>
          <div className="eyebrow">
            Recall {recallNumber} of {RECALLS_PER_WORD} · in German{word.kind === 'noun' ? ', with the article' : ''}
          </div>
          <div className="review-prompt" style={{ fontFamily: 'var(--font-ui)' }}>
            {word.english}
          </div>
        </>
      )}
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
                <strong>{useCloze ? gap : displayGerman(word)}</strong>
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
