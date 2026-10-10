import { useMemo, useState } from 'react'
import type { GrammarExercise } from '../content/types'
import { checkAnswer, normalise, type CheckResult, type Verdict } from '../lib/check'
import { solvedSentence } from '../lib/grading'
import { useKeyHandler } from '../lib/hooks'
import { AnswerInput } from './AnswerInput'
import { Feedback } from './Feedback'
import { Rich } from './Rich'
import { SpeakButton } from './SpeakButton'

interface ExerciseViewProps {
  exercise: GrammarExercise
  onAnswered: (verdict: Verdict) => void
}

export function ExerciseView({ exercise, onAnswered }: ExerciseViewProps) {
  switch (exercise.kind) {
    case 'gap':
      return <GapExercise exercise={exercise} onAnswered={onAnswered} />
    case 'choice':
      return <ChoiceExercise exercise={exercise} onAnswered={onAnswered} />
    case 'order':
      return <OrderExercise exercise={exercise} onAnswered={onAnswered} />
    case 'transform':
      return <TransformExercise exercise={exercise} onAnswered={onAnswered} />
  }
}

function Explanation({ exercise, result }: { exercise: GrammarExercise; result: CheckResult }) {
  const sentence = solvedSentence(exercise)
  return (
    <Feedback verdict={result.verdict}>
      {result.verdict !== 'correct' && (
        <div className="de" style={{ marginBottom: 6 }}>
          {exercise.kind === 'gap' || exercise.kind === 'choice' ? (
            <>
              Answer: <strong>{result.expected}</strong>
            </>
          ) : (
            <strong>{result.expected}</strong>
          )}
        </div>
      )}
      {result.note && <div className="small">{result.note}</div>}
      <div className="row" style={{ gap: 4, marginTop: 4 }}>
        <SpeakButton text={sentence} />
        <span className="small">
          <Rich text={exercise.explanation} />
        </span>
      </div>
    </Feedback>
  )
}

function GapPrompt({ prompt, filled }: { prompt: string; filled?: string }) {
  if (!prompt.includes('___')) {
    return (
      <p className="de" style={{ fontSize: '1.2rem', margin: 0 }}>
        {prompt}
      </p>
    )
  }
  const [before, after] = prompt.split('___')
  return (
    <p className="de" style={{ fontSize: '1.3rem', lineHeight: 1.6, margin: 0 }}>
      {before}
      <span className="gap">{filled ?? ' '.repeat(8)}</span>
      {after}
    </p>
  )
}

type GapExerciseData = Extract<GrammarExercise, { kind: 'gap' }>

function GapExercise({ exercise, onAnswered }: { exercise: GapExerciseData; onAnswered: (verdict: Verdict) => void }) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    const checked = checkAnswer(value, exercise.answers)
    setResult(checked)
    onAnswered(checked.verdict)
  }

  return (
    <div className="stack">
      <GapPrompt prompt={exercise.prompt} filled={result ? value || '—' : undefined} />
      {exercise.hint && <div className="muted small">Hint: {exercise.hint}</div>}
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result && (
        <div>
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
        </div>
      )}
      {result && <Explanation exercise={exercise} result={result} />}
    </div>
  )
}

type ChoiceExerciseData = Extract<GrammarExercise, { kind: 'choice' }>

function ChoiceExercise({
  exercise,
  onAnswered,
}: {
  exercise: ChoiceExerciseData
  onAnswered: (verdict: Verdict) => void
}) {
  const [chosen, setChosen] = useState<number>()
  const answered = chosen !== undefined
  const result: CheckResult | undefined = answered
    ? { verdict: chosen === exercise.answer ? 'correct' : 'wrong', expected: exercise.options[exercise.answer] }
    : undefined

  function choose(index: number) {
    if (answered) return
    setChosen(index)
    onAnswered(index === exercise.answer ? 'correct' : 'wrong')
  }

  return (
    <div className="stack">
      <GapPrompt prompt={exercise.prompt} filled={answered ? exercise.options[chosen] : undefined} />
      <div className="choice-grid">
        {exercise.options.map((option, index) => {
          const state = !answered ? '' : index === exercise.answer ? 'correct' : index === chosen ? 'wrong' : 'dimmed'
          return (
            <button key={option} className={`choice de ${state}`} onClick={() => choose(index)} disabled={answered}>
              <span className="kbd">{index + 1}</span> {option}
            </button>
          )
        })}
      </div>
      <ChoiceKeys count={exercise.options.length} onChoose={choose} active={!answered} />
      {result && <Explanation exercise={exercise} result={result} />}
    </div>
  )
}

/** Number keys pick an option. */
function ChoiceKeys({
  count,
  onChoose,
  active,
}: {
  count: number
  onChoose: (index: number) => void
  active: boolean
}) {
  useKeyHandler(active, (key) => {
    const number = Number(key)
    if (number >= 1 && number <= count) {
      onChoose(number - 1)
      return true
    }
    return false
  })
  return null
}

type OrderExerciseData = Extract<GrammarExercise, { kind: 'order' }>

function shuffled(words: string[]): string[] {
  const indexes = words.map((_, index) => index)
  for (let attempt = 0; attempt < 10; attempt++) {
    for (let index = indexes.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1))
      ;[indexes[index], indexes[other]] = [indexes[other], indexes[index]]
    }
    if (indexes.some((value, index) => value !== index)) break
  }
  return indexes.map((index) => words[index])
}

function OrderExercise({
  exercise,
  onAnswered,
}: {
  exercise: OrderExerciseData
  onAnswered: (verdict: Verdict) => void
}) {
  // Tiles keep their position in the shuffled list so duplicates ("ich", "ich") work.
  const tiles = useMemo(() => shuffled(exercise.words), [exercise])
  const [picked, setPicked] = useState<number[]>([])
  const [result, setResult] = useState<CheckResult>()
  const sentence = picked.map((index) => tiles[index]).join(' ')

  function submit() {
    if (result || picked.length !== tiles.length) return
    const accepted = [exercise.words.join(' '), ...(exercise.alternatives ?? [])]
    const correct = accepted.some((answer) => normalise(answer) === normalise(sentence))
    const checked: CheckResult = { verdict: correct ? 'correct' : 'wrong', expected: accepted[0] }
    setResult(checked)
    onAnswered(checked.verdict)
  }

  useKeyHandler(!result, (key) => {
    if (key === 'Enter') {
      submit()
      return true
    }
    if (key === 'Backspace') {
      setPicked((current) => current.slice(0, -1))
      return true
    }
    return false
  })

  return (
    <div className="stack">
      <div className="muted">{exercise.english}</div>
      <div className={`order-line de ${result?.verdict ?? ''}`}>
        {picked.length === 0 && <span className="faint">Tap the words in order</span>}
        {picked.map((tileIndex, position) => (
          <button
            key={tileIndex}
            className="tile"
            disabled={!!result}
            onClick={() => setPicked(picked.filter((_, other) => other !== position))}
          >
            {tiles[tileIndex]}
          </button>
        ))}
      </div>
      <div className="tile-bank de">
        {tiles.map((word, index) => (
          <button
            key={index}
            className="tile"
            disabled={picked.includes(index) || !!result}
            onClick={() => setPicked([...picked, index])}
          >
            {word}
          </button>
        ))}
      </div>
      {!result && (
        <div className="row">
          <button className="btn primary" onClick={submit} disabled={picked.length !== tiles.length}>
            Check <span className="kbd">Enter</span>
          </button>
          <button className="btn ghost" onClick={() => setPicked([])} disabled={picked.length === 0}>
            Clear
          </button>
        </div>
      )}
      {result && <Explanation exercise={exercise} result={result} />}
    </div>
  )
}

type TransformExerciseData = Extract<GrammarExercise, { kind: 'transform' }>

function TransformExercise({
  exercise,
  onAnswered,
}: {
  exercise: TransformExerciseData
  onAnswered: (verdict: Verdict) => void
}) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    const checked = checkAnswer(value, exercise.answers)
    setResult(checked)
    onAnswered(checked.verdict)
  }

  return (
    <div className="stack">
      <div className="muted">{exercise.instruction}</div>
      <p className="de" style={{ fontSize: '1.25rem', margin: 0 }}>
        {exercise.prompt}
      </p>
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result && (
        <div>
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
        </div>
      )}
      {result && (
        <>
          {result.verdict !== 'correct' && (
            <div className="small muted">
              You wrote: <span className="de">{value || '—'}</span>
            </div>
          )}
          <Explanation exercise={exercise} result={result} />
        </>
      )}
    </div>
  )
}
