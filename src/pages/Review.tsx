import { useMemo, useRef, useState, type KeyboardEvent } from 'react'
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
import { verbForms, verbFormsSpeech } from '../lib/verbForms'
import { checkMeaning, checkNounParts, checkWord, nounVerdict, suggestedGrade, type NounParts } from '../lib/grading'
import { useTimeOnPage } from '../lib/hooks'
import { speak } from '../lib/speech'
import { Rating, type Grade, type StoredCard } from '../lib/srs'
import { getState, useAppState, type Mistake } from '../lib/store'

const SESSION_SIZE = 60

export function Review() {
  // The queue is fixed when the session starts; cards failed again come back at the end.
  // Long backlogs are split into sessions, most overdue first.
  const [queue, setQueue] = useState<CardRef[]>(() => dueCards(getState(), new Date()).slice(0, SESSION_SIZE))
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
  const [stillDue] = useState(() => dueCards(getState(), new Date()).length)
  return (
    <div className="page narrow">
      <div className="card empty">
        <h2>Session complete</h2>
        <p>
          {results.length} reviews. {firstTry} remembered, {results.length - firstTry} to see again soon.
        </p>
        <p className="small muted">
          If that felt hard, it was meant to. Recalling something just before you forget it, with topics mixed, feels
          slower than rereading but is remembered far longer.
        </p>
        <div className="row" style={{ justifyContent: 'center' }}>
          {stillDue > 0 && (
            <Link className="btn" to="/review">
              {stillDue} more due: keep going
            </Link>
          )}
          <Link className="btn primary" to="/">
            Back to today
          </Link>
        </div>
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
  if (card.kind === 'forms') return <FormsCard word={card.word} stored={stored} onGrade={onGrade} />
  return <GrammarCard card={card} stored={stored} onGrade={onGrade} />
}

/** German to English. A typed meaning that doesn't match may still be a synonym, so you can grade yourself. */
function RecogniseCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    setResult(checkMeaning(word, value))
    speak(displayGerman(word))
  }

  return (
    <div className="stack">
      <div className="eyebrow">What does it mean? In English</div>
      <div className="row" style={{ gap: 6 }}>
        <span className="review-prompt">{displayGerman(word)}</span>
        <SpeakButton text={displayGerman(word)} />
      </div>
      <AnswerInput
        value={value}
        onChange={setValue}
        onSubmit={submit}
        verdict={result?.verdict === 'wrong' ? undefined : result?.verdict}
        disabled={!!result}
        label="Meaning in English"
      />
      {!result ? (
        <div className="row">
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
          <button className="btn ghost" onClick={() => setResult({ verdict: 'wrong', expected: word.english })}>
            I don't know
          </button>
        </div>
      ) : (
        <>
          {result.verdict === 'wrong' ? (
            value.trim() !== '' && (
              <div className="muted small">
                Not one of the listed meanings. If yours means the same, pick <strong>Good</strong>.
              </div>
            )
          ) : (
            <Feedback verdict={result.verdict}>{result.note && <div className="small">{result.note}</div>}</Feedback>
          )}
          <hr className="divider" />
          <WordView word={word} />
          <GradeButtons card={stored} suggested={suggestedGrade(result.verdict)} onGrade={onGrade} />
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
  const isNoun = word.kind === 'noun' && !!word.gender
  const askPlural = isNoun && !!word.plural
  const [value, setValue] = useState('')
  const [plural, setPlural] = useState('')
  const [result, setResult] = useState<CheckResult>()
  const [parts, setParts] = useState<NounParts>()
  const pluralRef = useRef<HTMLInputElement>(null)

  function submit() {
    if (result) return
    const checked = checkWord(word, value)
    if (isNoun) {
      const nounParts = checkNounParts(word, value, askPlural ? plural : undefined)
      setParts(nounParts)
      setResult({ ...checked, verdict: nounVerdict(nounParts) })
    } else {
      setResult(checked)
    }
    speak(displayGerman(word))
  }

  return (
    <div className="stack">
      <div className="eyebrow">In German{isNoun ? ', with the article' : ''}</div>
      <div className="review-prompt" style={{ fontFamily: 'var(--font-ui)' }}>
        {word.english}
      </div>
      {word.usage && <div className="muted small">Usage: {word.usage}</div>}
      <AnswerInput
        value={value}
        onChange={setValue}
        onSubmit={askPlural ? () => pluralRef.current?.focus() : submit}
        verdict={parts ? nounVerdict({ ...parts, plural: undefined }) : result?.verdict}
        disabled={!!result}
      />
      {askPlural && (
        <AnswerInput
          value={plural}
          onChange={setPlural}
          onSubmit={submit}
          verdict={parts?.plural}
          disabled={!!result}
          autoFocus={false}
          placeholder="Plural: die …"
          label="Plural"
          inputRef={pluralRef}
        />
      )}
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
          <Feedback verdict={result.verdict}>
            {parts && <NounPartsLine word={word} parts={parts} />}
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

/** Which parts of a noun answer were right: article, word and plural. */
function NounPartsLine({ word, parts }: { word: Word; parts: NounParts }) {
  const mark = (ok: boolean) => (ok ? '✓' : '✗')
  return (
    <div className="small de noun-parts">
      <span>
        {mark(parts.article)} {word.gender}
      </span>
      <span>
        {mark(parts.noun !== 'wrong')} {word.german}
      </span>
      {parts.plural && (
        <span>
          {mark(parts.plural === 'correct')} die {word.plural}
        </span>
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

const FORM_FIELDS = [
  { key: 'present', label: 'er/sie/es (Präsens)' },
  { key: 'preterite', label: 'Präteritum (er)' },
  { key: 'perfect', label: 'Perfekt (er), with hat or ist' },
] as const

/** Strips a leading pronoun, so "er fuhr" and "fuhr" both count. */
function withoutPronoun(text: string): string {
  return text.trim().replace(/^(er|sie|es)\s+/i, '')
}

/** An irregular verb: type its three key forms. */
function FormsCard({ word, stored, onGrade }: { word: Word; stored: StoredCard; onGrade: (grade: Grade) => void }) {
  const forms = verbForms(word)!
  const [values, setValues] = useState({ present: '', preterite: '', perfect: '' })
  const [results, setResults] = useState<Record<string, CheckResult>>()
  const fieldRefs = useRef<(HTMLInputElement | null)[]>([])

  function submit() {
    if (results) return
    const checked: Record<string, CheckResult> = {}
    for (const field of FORM_FIELDS) {
      checked[field.key] = checkAnswer(withoutPronoun(values[field.key]), [forms[field.key]])
    }
    setResults(checked)
    speak(verbFormsSpeech(word))
  }

  function handleKey(event: KeyboardEvent<HTMLInputElement>, index: number) {
    if (event.key !== 'Enter') return
    event.preventDefault()
    if (index < FORM_FIELDS.length - 1) fieldRefs.current[index + 1]?.focus()
    else submit()
  }

  const verdicts = results ? Object.values(results).map((result) => result.verdict) : []
  const overall: Verdict | undefined = !results
    ? undefined
    : verdicts.includes('wrong')
      ? 'wrong'
      : verdicts.includes('almost')
        ? 'almost'
        : 'correct'

  return (
    <div className="stack">
      <div className="eyebrow">Verb forms · irregular</div>
      <div className="review-prompt">{word.german}</div>
      <div className="muted">{word.english}</div>
      <div className="forms-grid">
        {FORM_FIELDS.map((field, index) => (
          <label key={field.key} className="field">
            {field.label}
            <input
              ref={(element) => {
                fieldRefs.current[index] = element
              }}
              className={`input de ${results?.[field.key].verdict ?? ''}`}
              value={values[field.key]}
              onChange={(event) => setValues({ ...values, [field.key]: event.target.value })}
              onKeyDown={(event) => handleKey(event, index)}
              disabled={!!results}
              autoFocus={index === 0}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              lang="de"
            />
            {results && results[field.key].verdict !== 'correct' && (
              <span className="small de">
                <strong>{forms[field.key]}</strong>
              </span>
            )}
          </label>
        ))}
      </div>
      {!results ? (
        <div>
          <button className="btn primary" onClick={submit}>
            Check <span className="kbd">Enter</span>
          </button>
        </div>
      ) : (
        <>
          <Feedback verdict={overall!}>
            <div className="de small">
              {forms.present} · {forms.preterite} · {forms.perfect}
            </div>
          </Feedback>
          <GradeButtons card={stored} suggested={suggestedGrade(overall!)} onGrade={onGrade} />
        </>
      )}
    </div>
  )
}
