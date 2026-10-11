import { useEffect, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { Icon } from '../components/Icon'
import { HOEREN_SETS, LESEN_SETS, type ExamItem, type ExamText } from '../content/exam'
import { LISTENING_TEXTS, voiceForSpeaker } from '../content/listening'
import { MATCHING_TASKS } from '../content/matching'
import type { MatchingTask, Question } from '../content/types'
import { recordActivity, recordExam } from '../lib/actions'
import { useTimeOnPage } from '../lib/hooks'
import { speakDialogue, stopSpeaking } from '../lib/speech'
import { PlaybackProgress } from './Listening'

const PASS_MARK = 60
const NO_AD = 'none'

/** Answers by item key, e.g. "t1-3". Booleans for richtig/falsch, numbers for options, strings for ads. */
type Answers = Record<string, boolean | number | string>

interface Marked {
  key: string
  correct: boolean
}

function letter(index: number): string {
  return String.fromCharCode(65 + index)
}

function isRight(item: ExamItem, answer: Answers[string] | undefined): boolean {
  return answer === item.answer
}

/** A countdown that warns when time is up but never takes the paper away. */
function Timer({ minutes, startedAt }: { minutes: number; startedAt: number }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])
  const left = Math.max(0, minutes * 60 - Math.floor((now - startedAt) / 1000))
  const label = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`
  return (
    <div className={`exam-timer ${left === 0 ? 'over' : left < 300 ? 'low' : ''}`}>
      {left === 0 ? "Time's up: finish your last answers and check" : `${label} left`}
    </div>
  )
}

/** Before starting: guess your score. Comparing the guess with the result trains your sense of readiness. */
function Start({
  title,
  minutes,
  items,
  onStart,
}: {
  title: string
  minutes: number
  items: number
  onStart: (predicted: number | undefined, timed: boolean) => void
}) {
  const [predicted, setPredicted] = useState('')
  const [timed, setTimed] = useState(true)
  const value = predicted === '' ? undefined : Math.min(100, Math.max(0, Number(predicted)))
  return (
    <div className="card stack">
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p className="muted" style={{ margin: 0 }}>
        {items} items, {minutes} minutes in the real exam. Scored out of 100; {PASS_MARK} passes. Answers are marked
        only at the end, as in the exam.
      </p>
      <label className="field">
        What score do you expect? (optional)
        <input
          className="input"
          type="number"
          min={0}
          max={100}
          value={predicted}
          onChange={(event) => setPredicted(event.target.value)}
          style={{ maxWidth: 120 }}
        />
      </label>
      <label className="row small" style={{ gap: 8 }}>
        <input type="checkbox" checked={timed} onChange={(event) => setTimed(event.target.checked)} /> Show a {minutes}
        -minute timer
      </label>
      <div>
        <button className="btn primary" onClick={() => onStart(value, timed)}>
          Start
        </button>
      </div>
    </div>
  )
}

function Result({
  score,
  predicted,
  parts,
  backTo,
}: {
  score: number
  predicted?: number
  parts: { label: string; correct: number; total: number }[]
  backTo: string
}) {
  const passed = score >= PASS_MARK
  return (
    <div className={`feedback ${passed ? 'correct' : 'wrong'}`}>
      <div className="feedback-title">
        {score} / 100 · {passed ? 'Bestanden' : `Not yet: ${PASS_MARK} passes`}
      </div>
      {predicted !== undefined && (
        <div className="small">
          You expected {predicted}.{' '}
          {Math.abs(predicted - score) <= 5
            ? 'A good estimate.'
            : predicted > score
              ? 'You overestimated: practise the parts where you lost most points before booking.'
              : 'You did better than you thought.'}
        </div>
      )}
      <div className="exam-part-scores small">
        {parts.map((part) => (
          <span key={part.label}>
            {part.label}: {part.correct}/{part.total}
          </span>
        ))}
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <Link className="btn small" to={backTo}>
          Back to exam practice
        </Link>
      </div>
    </div>
  )
}

function ItemView({
  number,
  item,
  answer,
  checked,
  onAnswer,
}: {
  number: number
  item: ExamItem
  answer: Answers[string] | undefined
  checked: boolean
  onAnswer: (answer: boolean | number) => void
}) {
  const state = (value: boolean | number) => {
    if (!checked) return answer === value ? 'selected' : ''
    if (value === item.answer) return 'correct'
    return answer === value ? 'wrong' : ''
  }
  const options: { value: boolean | number; label: string }[] =
    item.kind === 'truefalse'
      ? [
          { value: true, label: item.labels?.[0] ?? 'Richtig' },
          { value: false, label: item.labels?.[1] ?? 'Falsch' },
        ]
      : item.options.map((option, index) => ({ value: index, label: `${letter(index).toLowerCase()}  ${option}` }))
  return (
    <div className="question">
      <div className="question-number">{number}</div>
      <div style={{ flex: 1 }}>
        <div className="de question-text">{item.kind === 'truefalse' ? item.statement : item.question}</div>
        <div className={item.kind === 'truefalse' ? 'row' : 'stack'} style={{ marginTop: 8, gap: 6 }}>
          {options.map((option) => (
            <button
              key={String(option.value)}
              className={`choice de ${state(option.value)}`}
              onClick={() => !checked && onAnswer(option.value)}
              disabled={checked}
              style={item.kind === 'truefalse' ? { minWidth: 110 } : undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function TextBlock({ text }: { text: ExamText }) {
  return (
    <div className="card reader">
      {text.source && <div className="eyebrow">{text.source}</div>}
      {text.title && <h3 className="de">{text.title}</h3>}
      <div className="reader-text de">
        {text.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

function Part({ teil, instructions, children }: { teil: number; instructions: string; children: ReactNode }) {
  return (
    <section className="section stack">
      <div className="section-title">Teil {teil}</div>
      <p className="de muted" style={{ margin: 0 }}>
        {instructions}
      </p>
      {children}
    </section>
  )
}

function MatchingPart({
  task,
  answers,
  checked,
  onAnswer,
}: {
  task: MatchingTask
  answers: Answers
  checked: boolean
  onAnswer: (key: string, value: string) => void
}) {
  return (
    <>
      <div className="grid two">
        {task.ads.map((ad, index) => (
          <div key={ad.title} className="card">
            <div className="eyebrow">{letter(index)}</div>
            <h3 className="de" style={{ marginBottom: 4 }}>
              {ad.title}
            </h3>
            <div className="de small">{ad.text}</div>
          </div>
        ))}
      </div>
      <div className="stack">
        {task.people.map((person, index) => {
          const key = `t3-${index}`
          const expected = person.answer === null ? NO_AD : String(person.answer)
          const correct = answers[key] === expected
          return (
            <div key={person.situation} className="card stack">
              <div className="de">{person.situation}</div>
              <select
                className="select"
                value={(answers[key] as string | undefined) ?? ''}
                onChange={(event) => onAnswer(key, event.target.value)}
                disabled={checked}
                aria-label={`Ad for situation ${index + 1}`}
              >
                <option value="">Choose…</option>
                {task.ads.map((ad, adIndex) => (
                  <option key={ad.title} value={String(adIndex)}>
                    {letter(adIndex)}: {ad.title}
                  </option>
                ))}
                <option value={NO_AD}>0: keine Anzeige passt</option>
              </select>
              {checked && (
                <div className={`small ${correct ? 'good-text' : 'bad-text'}`}>
                  {correct ? 'Richtig. ' : 'Falsch. '}
                  {person.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export function LesenPaper() {
  const { setId } = useParams()
  const set = LESEN_SETS.find((item) => item.id === setId)
  const matching = MATCHING_TASKS.find((task) => task.id === set?.teil3)
  const [startedAt, setStartedAt] = useState<number>()
  const [timed, setTimed] = useState(true)
  const [predicted, setPredicted] = useState<number>()
  const [answers, setAnswers] = useState<Answers>({})
  const [marked, setMarked] = useState<Marked[]>()
  useTimeOnPage((seconds) => recordActivity('reading', seconds))

  if (!set || !matching) return <NotFound />

  const parts = [
    { label: 'Teil 1', keys: set.teil1.items.map((item, index) => ({ key: `t1-${index}`, item })) },
    {
      label: 'Teil 2',
      keys: set.teil2.flatMap((text, textIndex) =>
        text.items.map((item, index) => ({ key: `t2-${textIndex}-${index}`, item })),
      ),
    },
    {
      label: 'Teil 3',
      keys: matching.people.map((person, index) => ({
        key: `t3-${index}`,
        expected: person.answer === null ? NO_AD : String(person.answer),
      })),
    },
    {
      label: 'Teil 4',
      keys: set.teil4.opinions.map((opinion, index) => ({
        key: `t4-${index}`,
        item: { kind: 'truefalse', statement: '', answer: opinion.answer } as ExamItem,
      })),
    },
    { label: 'Teil 5', keys: set.teil5.items.map((item, index) => ({ key: `t5-${index}`, item })) },
  ]
  const total = parts.reduce((sum, part) => sum + part.keys.length, 0)
  const checked = marked !== undefined

  function answer(key: string, value: boolean | number | string) {
    setAnswers({ ...answers, [key]: value })
  }

  function check() {
    const results = parts.flatMap((part) =>
      part.keys.map((entry) => ({
        key: entry.key,
        correct: 'expected' in entry ? answers[entry.key] === entry.expected : isRight(entry.item!, answers[entry.key]),
      })),
    )
    setMarked(results)
    const score = Math.round((results.filter((result) => result.correct).length / results.length) * 100)
    recordExam({
      setId: set!.id,
      module: 'lesen',
      score,
      predicted,
      startedAt: startedAt!,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const score = marked ? Math.round((marked.filter((result) => result.correct).length / marked.length) * 100) : 0
  let number = 0

  return (
    <div className="page narrow">
      <Link className="back-link" to="/exam">
        ← Exam practice
      </Link>
      <div className="page-header">
        <div className="eyebrow">{set.level} · Lesen · Modelled on the Goethe-Zertifikat</div>
        <h1>{set.title}</h1>
      </div>

      {startedAt === undefined ? (
        <Start
          title="Lesen"
          minutes={65}
          items={total}
          onStart={(guess, withTimer) => {
            setPredicted(guess)
            setTimed(withTimer)
            setStartedAt(Date.now())
          }}
        />
      ) : (
        <>
          {timed && !checked && <Timer minutes={65} startedAt={startedAt} />}
          {marked && (
            <Result
              score={score}
              predicted={predicted}
              backTo="/exam"
              parts={parts.map((part) => ({
                label: part.label,
                total: part.keys.length,
                correct: part.keys.filter((entry) => marked.find((result) => result.key === entry.key)?.correct).length,
              }))}
            />
          )}

          <Part teil={1} instructions="Lesen Sie den Text und die Aufgaben. Richtig oder falsch?">
            <TextBlock text={set.teil1.text} />
            {set.teil1.items.map((item, index) => (
              <ItemView
                key={index}
                number={++number}
                item={item}
                answer={answers[`t1-${index}`]}
                checked={checked}
                onAnswer={(value) => answer(`t1-${index}`, value)}
              />
            ))}
          </Part>

          <Part
            teil={2}
            instructions="Lesen Sie die Texte und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c."
          >
            {set.teil2.map((text, textIndex) => (
              <div key={textIndex} className="stack">
                <TextBlock text={text.text} />
                {text.items.map((item, index) => (
                  <ItemView
                    key={index}
                    number={++number}
                    item={item}
                    answer={answers[`t2-${textIndex}-${index}`]}
                    checked={checked}
                    onAnswer={(value) => answer(`t2-${textIndex}-${index}`, value)}
                  />
                ))}
              </div>
            ))}
          </Part>

          <Part teil={3} instructions={matching.instructions}>
            <MatchingPart
              task={matching}
              answers={answers}
              checked={checked}
              onAnswer={(key, value) => answer(key, value)}
            />
          </Part>

          <Part
            teil={4}
            instructions={`Lesen Sie die Texte. Ist die Person für das Thema? Ja oder nein? Thema: ${set.teil4.question}`}
          >
            {set.teil4.opinions.map((opinion, index) => (
              <div key={opinion.name} className="stack" style={{ gap: 6 }}>
                <div className="card">
                  <div className="eyebrow">{opinion.name}</div>
                  <div className="de">{opinion.text}</div>
                </div>
                <ItemView
                  number={++number}
                  item={{
                    kind: 'truefalse',
                    statement: `Ist ${opinion.name.split(',')[0]} dafür?`,
                    answer: opinion.answer,
                    labels: ['Ja', 'Nein'],
                  }}
                  answer={answers[`t4-${index}`]}
                  checked={checked}
                  onAnswer={(value) => answer(`t4-${index}`, value)}
                />
              </div>
            ))}
          </Part>

          <Part
            teil={5}
            instructions="Lesen Sie die Aufgaben und den Text. Wählen Sie die richtige Lösung a, b oder c."
          >
            <TextBlock text={set.teil5.text} />
            {set.teil5.items.map((item, index) => (
              <ItemView
                key={index}
                number={++number}
                item={item}
                answer={answers[`t5-${index}`]}
                checked={checked}
                onAnswer={(value) => answer(`t5-${index}`, value)}
              />
            ))}
          </Part>

          {!checked && (
            <div className="section row">
              <button className="btn primary" onClick={check}>
                Check answers
              </button>
              <span className="small muted">
                {Object.keys(answers).length} of {total} answered
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function closedQuestions(questions: Question[]): ExamItem[] {
  return questions.flatMap((question): ExamItem[] => {
    if (question.kind === 'truefalse')
      return [{ kind: 'truefalse', statement: question.statement, answer: question.answer }]
    if (question.kind === 'choice') {
      return [{ kind: 'choice', question: question.question, options: question.options, answer: question.answer }]
    }
    return []
  })
}

export function HoerenPaper() {
  const { setId } = useParams()
  const set = HOEREN_SETS.find((item) => item.id === setId)
  const [startedAt, setStartedAt] = useState<number>()
  const [predicted, setPredicted] = useState<number>()
  const [answers, setAnswers] = useState<Answers>({})
  const [plays, setPlays] = useState<Record<number, number>>({})
  const [playing, setPlaying] = useState<{ teil: number; line: number }>()
  const [marked, setMarked] = useState<Marked[]>()
  useTimeOnPage((seconds) => recordActivity('listening', seconds))
  useEffect(() => stopSpeaking, [])

  if (!set) return <NotFound />

  const parts = set.parts.map((part) => {
    const script = LISTENING_TEXTS.find((text) => text.id === part.scriptId)!
    return { ...part, script, items: closedQuestions(script.questions) }
  })
  const total = parts.reduce((sum, part) => sum + part.items.length, 0)
  const checked = marked !== undefined

  function play(teil: number) {
    const part = parts.find((candidate) => candidate.teil === teil)!
    setPlays({ ...plays, [teil]: (plays[teil] ?? 0) + 1 })
    setPlaying({ teil, line: 0 })
    speakDialogue(
      part.script.lines.map((line) => ({ text: line.text, voice: voiceForSpeaker(part.script, line.speaker) })),
      { onLine: (line) => setPlaying({ teil, line }), onEnd: () => setPlaying(undefined) },
    )
  }

  function check() {
    stopSpeaking()
    setPlaying(undefined)
    const results = parts.flatMap((part) =>
      part.items.map((item, index) => {
        const key = `t${part.teil}-${index}`
        return { key, correct: isRight(item, answers[key]) }
      }),
    )
    setMarked(results)
    const score = Math.round((results.filter((result) => result.correct).length / results.length) * 100)
    recordExam({
      setId: set!.id,
      module: 'hoeren',
      score,
      predicted,
      startedAt: startedAt!,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const score = marked ? Math.round((marked.filter((result) => result.correct).length / marked.length) * 100) : 0
  let number = 0

  return (
    <div className="page narrow">
      <Link className="back-link" to="/exam">
        ← Exam practice
      </Link>
      <div className="page-header">
        <div className="eyebrow">{set.level} · Hören · Modelled on the Goethe-Zertifikat</div>
        <h1>{set.title}</h1>
      </div>

      {startedAt === undefined ? (
        <Start
          title="Hören"
          minutes={40}
          items={total}
          onStart={(guess) => {
            setPredicted(guess)
            setStartedAt(Date.now())
          }}
        />
      ) : (
        <>
          {marked && (
            <Result
              score={score}
              predicted={predicted}
              backTo="/exam"
              parts={parts.map((part) => ({
                label: `Teil ${part.teil}`,
                total: part.items.length,
                correct: part.items.filter(
                  (_, index) => marked.find((result) => result.key === `t${part.teil}-${index}`)?.correct,
                ).length,
              }))}
            />
          )}
          {parts.map((part) => {
            const used = plays[part.teil] ?? 0
            const isPlaying = playing?.teil === part.teil
            return (
              <Part key={part.teil} teil={part.teil} instructions={part.instructions}>
                <div className="card player">
                  <button
                    className="btn primary player-button"
                    onClick={() => play(part.teil)}
                    disabled={playing !== undefined || (used >= part.plays && !checked)}
                  >
                    <Icon name="speaker" />
                    {used === 0 ? 'Play' : 'Play again'}
                  </button>
                  <div className="player-status">
                    {isPlaying ? (
                      <PlaybackProgress lines={part.script.lines.map((line) => line.text)} playing={playing.line} />
                    ) : (
                      <span className="small muted">
                        {checked
                          ? 'Replay as often as you like now.'
                          : `${Math.max(0, part.plays - used)} of ${part.plays} ${part.plays === 1 ? 'play' : 'plays'} left`}
                      </span>
                    )}
                  </div>
                </div>
                {part.items.map((item, index) => (
                  <ItemView
                    key={index}
                    number={++number}
                    item={item}
                    answer={answers[`t${part.teil}-${index}`]}
                    checked={checked}
                    onAnswer={(value) => setAnswers({ ...answers, [`t${part.teil}-${index}`]: value })}
                  />
                ))}
                {checked && (
                  <details className="card">
                    <summary>Transcript</summary>
                    <div className="stack de small" style={{ marginTop: 10 }}>
                      {part.script.lines.map((line, index) => (
                        <div key={index}>
                          <strong>{line.speaker}:</strong> {line.text}
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </Part>
            )
          })}
          {!checked && (
            <div className="section row">
              <button className="btn primary" onClick={check} disabled={playing !== undefined}>
                Check answers
              </button>
              <span className="small muted">
                {Object.keys(answers).length} of {total} answered
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function NotFound() {
  return (
    <div className="page narrow">
      <div className="card empty">
        Not found. <Link to="/exam">Exam practice</Link>
      </div>
    </div>
  )
}
