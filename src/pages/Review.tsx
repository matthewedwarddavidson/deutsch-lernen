import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { AnswerInput } from '../components/AnswerInput'
import { ExerciseView } from '../components/ExerciseView'
import { Feedback } from '../components/Feedback'
import { GradeButtons } from '../components/GradeButtons'
import { ProgressBar } from '../components/ProgressBar'
import { SpeakButton } from '../components/SpeakButton'
import { WordView } from '../components/WordView'
import { clozeParts, displayGerman } from '../content/parseWords'
import type { Word } from '../content/types'
import { gradeCard, recordActivity, suspendCard } from '../lib/actions'
import { dueCards, type CardRef } from '../lib/cards'
import { checkAnswer, type CheckResult, type Verdict } from '../lib/check'
import { checkWord, suggestedGrade } from '../lib/grading'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { speak } from '../lib/speech'
import { Rating, type Grade, type StoredCard } from '../lib/srs'
import { getState, useAppState, type Mistake } from '../lib/store'

export function Review() {
  // The queue is fixed when the session starts; cards failed again come back at the end.
  const [queue, setQueue] = useState<CardRef[]>(() => dueCards(getState(), new Date()))
  const [position, setPosition] = useState(0)
  const [results, setResults] = useState<Grade[]>([])
  const state = useAppState()
  useTimeOnPage((seconds) => recordActivity('review', seconds))

  const current = queue[position]
  const total = queue.length

  function handleGrade(grade: Grade) {
    gradeCard(current.id, grade)
    setResults([...results, grade])
    if (grade === Rating.Again) setQueue([...queue, current])
    setPosition(position + 1)
  }

  if (total === 0) {
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>Nothing due</h2>
          <p>All your reviews are done. Learn some new words or study a grammar topic.</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/words/learn">
              Learn new words
            </Link>
            <Link className="btn" to="/grammar">
              Grammar
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!current) return <SessionSummary results={results} />

  const stored = state.cards[current.id]
  return (
    <div className="page narrow">
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={position / total} label="Session progress" />
        </div>
        <span className="muted small">
          {position + 1} / {total}
        </span>
      </div>
      <div className="card review-card">
        <ReviewCard key={`${current.id}-${position}`} card={current} stored={stored} onGrade={handleGrade} />
      </div>
      <div className="row between" style={{ marginTop: 12 }}>
        <p className="faint small keys-hint" style={{ margin: 0 }}>
          Keys: <span className="kbd">Enter</span> check or accept the suggested grade, <span className="kbd">1</span>–
          <span className="kbd">4</span> pick a grade.
        </p>
        <button
          className="btn ghost small"
          title="Removes this card from your reviews. Undo from the word list."
          onClick={() => {
            suspendCard(current.id)
            setPosition(position + 1)
          }}
        >
          Don't show again
        </button>
      </div>
    </div>
  )
}

function SessionSummary({ results }: { results: Grade[] }) {
  const firstTry = results.filter((grade) => grade !== Rating.Again).length
  return (
    <div className="page narrow">
      <div className="card empty">
        <h2>Session complete</h2>
        <p>
          {results.length} reviews. {firstTry} remembered, {results.length - firstTry} to see again soon.
        </p>
        <Link className="btn primary" to="/">
          Back to today
        </Link>
      </div>
    </div>
  )
}

interface CardProps {
  card: CardRef
  stored: StoredCard
  onGrade: (grade: Grade) => void
}

export function ReviewCard({ card, stored, onGrade }: CardProps) {
  if (card.kind === 'recognise') return <RecogniseCard word={card.word} stored={stored} onGrade={onGrade} />
  if (card.kind === 'produce') return <ProduceCard word={card.word} stored={stored} onGrade={onGrade} />
  if (card.kind === 'mistake') return <MistakeCard mistake={card.mistake} stored={stored} onGrade={onGrade} />
  return <GrammarCard card={card} stored={stored} onGrade={onGrade} />
}

function RecogniseCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const [revealed, setRevealed] = useState(false)

  function reveal() {
    setRevealed(true)
    speak(displayGerman(word))
  }

  useKeyHandler(!revealed, (key) => {
    if (key === 'Enter' || key === ' ') {
      reveal()
      return true
    }
    return false
  })

  return (
    <div className="stack">
      <div className="eyebrow">What does it mean?</div>
      {!revealed ? (
        <>
          <div className="row" style={{ gap: 6 }}>
            <span className="review-prompt">{displayGerman(word)}</span>
            <SpeakButton text={displayGerman(word)} />
          </div>
          <div>
            <button className="btn primary" onClick={reveal}>
              Show answer <span className="kbd">Space</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <WordView word={word} />
          <GradeButtons card={stored} suggested={Rating.Good} onGrade={onGrade} />
        </>
      )}
    </div>
  )
}

/** Alternates between typing the word itself and filling it into its example sentence. */
function ProduceCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const useCloze = !['noun', 'verb', 'adjective'].includes(word.kind) || stored.reps % 2 === 1
  return useCloze ? (
    <ClozeCard word={word} stored={stored} onGrade={onGrade} />
  ) : (
    <TranslateCard word={word} stored={stored} onGrade={onGrade} />
  )
}

function TranslateCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    setResult(checkWord(word, value))
    speak(displayGerman(word))
  }

  return (
    <div className="stack">
      <div className="eyebrow">In German{word.kind === 'noun' ? ', with the article' : ''}</div>
      <div className="review-prompt" style={{ fontFamily: 'var(--font-ui)' }}>
        {word.english}
      </div>
      {word.usage && <div className="muted small">Usage: {word.usage}</div>}
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result ? (
        <div className="row">
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
          <button className="btn ghost" onClick={() => setResult({ verdict: 'wrong', expected: displayGerman(word) })}>
            I don't know
          </button>
        </div>
      ) : (
        <>
          <Feedback verdict={result.verdict}>{result.note && <div className="small">{result.note}</div>}</Feedback>
          <hr className="divider" />
          <WordView word={word} />
          <GradeButtons card={stored} suggested={suggestedGrade(result.verdict)} onGrade={onGrade} />
        </>
      )}
    </div>
  )
}

function ClozeCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const parts = useMemo(() => clozeParts(word.example), [word])
  const expected = parts
    .filter((part) => part.gap)
    .map((part) => part.text)
    .join(' ')
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    setResult(checkAnswer(value, [expected]))
    speak(word.example)
  }

  const gapCount = parts.filter((part) => part.gap).length
  return (
    <div className="stack">
      <div className="eyebrow">Fill the gap{gapCount > 1 ? `s (${gapCount} parts, separated by spaces)` : ''}</div>
      <p className="de" style={{ fontSize: '1.3rem', lineHeight: 1.6, margin: 0 }}>
        {parts.map((part, index) =>
          part.gap ? (
            <span key={index} className="gap">
              {result ? part.text : ' '.repeat(Math.max(4, part.text.length))}
            </span>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </p>
      <div className="muted">{word.exampleEnglish}</div>
      <div className="muted small">
        Word: <strong>{word.english}</strong>
      </div>
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result ? (
        <div className="row">
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
          <button className="btn ghost" onClick={() => setResult({ verdict: 'wrong', expected })}>
            I don't know
          </button>
        </div>
      ) : (
        <>
          <Feedback verdict={result.verdict}>
            {result.verdict !== 'correct' && (
              <div className="de">
                Answer: <strong>{expected}</strong>
              </div>
            )}
            {result.note && <div className="small">{result.note}</div>}
          </Feedback>
          <hr className="divider" />
          <WordView word={word} />
          <GradeButtons card={stored} suggested={suggestedGrade(result.verdict)} onGrade={onGrade} />
        </>
      )}
    </div>
  )
}

function GrammarCard({
  card,
  stored,
  onGrade,
}: {
  card: Extract<CardRef, { kind: 'grammar' }>
  stored: StoredCard
  onGrade: (grade: Grade) => void
}) {
  const [verdict, setVerdict] = useState<Verdict>()
  return (
    <div className="stack">
      <div className="row between">
        <div className="eyebrow" style={{ margin: 0 }}>
          Grammatik · {card.topic.title}
        </div>
        <Link className="small muted" to={`/grammar/${card.topic.id}`}>
          Review the rule
        </Link>
      </div>
      <ExerciseView exercise={card.exercise} onAnswered={setVerdict} />
      {verdict && <GradeButtons card={stored} suggested={suggestedGrade(verdict)} onGrade={onGrade} />}
    </div>
  )
}

/** An error from your own writing: correct it from memory. */
function MistakeCard({
  mistake,
  stored,
  onGrade,
}: {
  mistake: Mistake
  stored: StoredCard
  onGrade: (grade: Grade) => void
}) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    setResult(checkAnswer(value, [mistake.correction]))
  }

  return (
    <div className="stack">
      <div className="eyebrow">Your mistake · {mistake.category}</div>
      <div className="muted small">You once wrote this. Write it correctly.</div>
      <p className="de review-prompt" style={{ color: 'var(--bad)' }}>
        {mistake.original}
      </p>
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result ? (
        <div className="row">
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
          <button className="btn ghost" onClick={() => setResult({ verdict: 'wrong', expected: mistake.correction })}>
            Show me
          </button>
        </div>
      ) : (
        <>
          <Feedback verdict={result.verdict}>
            <div className="de">
              <strong>{mistake.correction}</strong>
            </div>
            <div className="small">{mistake.explanation}</div>
            {result.note && <div className="small">{result.note}</div>}
          </Feedback>
          <GradeButtons card={stored} suggested={suggestedGrade(result.verdict)} onGrade={onGrade} />
        </>
      )}
    </div>
  )
}
