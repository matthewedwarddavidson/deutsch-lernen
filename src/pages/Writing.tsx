import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router'
import { Icon } from '../components/Icon'
import { WRITING_TASKS } from '../content/writing'
import { themeById } from '../content/themes'
import { LEVELS, type WritingTask } from '../content/types'
import { addMistake, deleteWriting, recordActivity, saveWriting } from '../lib/actions'
import { useTimeOnPage } from '../lib/hooks'
import { useAppState, type WritingAttempt } from '../lib/store'

const FORMAT_LABELS: Record<WritingTask['format'], string> = {
  'informal-email': 'Informal email',
  'formal-email': 'Formal email',
  forum: 'Forum post',
  essay: 'Essay',
  story: 'Narrative',
  summary: 'Summary',
}

const CONNECTORS = [
  'weil',
  'dass',
  'obwohl',
  'deshalb',
  'deswegen',
  'trotzdem',
  'außerdem',
  'denn',
  'wenn',
  'als',
  'damit',
  'nachdem',
  'während',
  'sondern',
  'aber',
  'bevor',
  'sobald',
  'falls',
  'ob',
  'darum',
  'sonst',
  'zwar',
  'einerseits',
  'andererseits',
  'jedoch',
  'allerdings',
  'dennoch',
  'folglich',
  'indem',
  'sodass',
]

function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length
}

function connectorsUsed(text: string): string[] {
  const words = new Set(text.toLowerCase().match(/\p{L}+/gu) ?? [])
  return CONNECTORS.filter((connector) => words.has(connector))
}

export function WritingList() {
  const state = useAppState()
  const tasks = WRITING_TASKS
  return (
    <div className="page">
      <div className="page-header row between" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Schreiben</div>
          <h1>Writing</h1>
          <p>
            Exam-style tasks. Write first, then compare with the model answer and note your mistakes: they come back in
            your reviews.
          </p>
        </div>
      </div>
      {LEVELS.map((level) => {
        const atLevel = tasks.filter((task) => task.level === level)
        if (atLevel.length === 0) return null
        return (
          <div key={level} className="section">
            <div className="section-title">{level}</div>
            <div className="grid two">
              {atLevel.map((task) => {
                const attempts = state.writing.filter((attempt) => attempt.taskId === task.id)
                return (
                  <Link key={task.id} to={`/writing/${task.id}`} className="card card-link">
                    <div className="row between" style={{ alignItems: 'flex-start' }}>
                      <div className="eyebrow">
                        {FORMAT_LABELS[task.format]} · {task.minWords} words
                      </div>
                      {attempts.length > 0 && <span className="pill good">Written</span>}
                    </div>
                    <h3 className="de" style={{ marginBottom: 4 }}>
                      {task.title}
                    </h3>
                    <div className="faint small">{themeById(task.theme).title}</div>
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

export function WritingPage() {
  const { taskId } = useParams()
  const task = WRITING_TASKS.find((item) => item.id === taskId)
  if (!task) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Task not found. <Link to="/writing">All tasks</Link>
        </div>
      </div>
    )
  }
  return <WritingEditor key={task.id} task={task} />
}

function WritingEditor({ task }: { task: WritingTask }) {
  const state = useAppState()
  const attempts = state.writing
    .filter((attempt) => attempt.taskId === task.id)
    .sort((a, b) => b.savedAt.localeCompare(a.savedAt))
  const [attemptId, setAttemptId] = useState(() => attempts[0]?.id ?? newAttemptId())
  const current = state.writing.find((attempt) => attempt.id === attemptId)
  const [text, setText] = useState(current?.text ?? '')
  const [showModel, setShowModel] = useState(false)
  const [notingMistake, setNotingMistake] = useState(false)
  const textarea = useRef<HTMLTextAreaElement>(null)
  useTimeOnPage((seconds) => recordActivity('writing', seconds))

  // Save the draft shortly after typing stops.
  useEffect(() => {
    if (!text.trim() || text === current?.text) return
    const timer = setTimeout(() => saveWriting(attemptId, task.id, text), 600)
    return () => clearTimeout(timer)
  }, [text, attemptId, task.id, current?.text])

  const words = countWords(text)
  const connectors = useMemo(() => connectorsUsed(text), [text])
  const isEmail = task.format.includes('email')
  const hasGreeting = /^(liebe|lieber|hallo|hi|sehr geehrte|guten tag)/i.test(text.trim())
  const hasClosing = /(grüße|grüßen|gruß|bis bald|tschüss|ciao)/i.test(text)

  function insertPhrase(phrase: string) {
    const element = textarea.current
    const clean = phrase.replace(/…/g, '').trim()
    if (!element) return setText(text + clean)
    const start = element.selectionStart
    const end = element.selectionEnd
    const before = text.slice(0, start)
    const spacer = before && !/\s$/.test(before) ? ' ' : ''
    const next = before + spacer + clean + ' ' + text.slice(end)
    setText(next)
    requestAnimationFrame(() => {
      element.focus()
      const position = start + spacer.length + clean.length + 1
      element.setSelectionRange(position, position)
    })
  }

  function startNew() {
    setAttemptId(newAttemptId())
    setText('')
    setShowModel(false)
  }

  function openAttempt(attempt: WritingAttempt) {
    setAttemptId(attempt.id)
    setText(attempt.text)
  }

  return (
    <div className="page">
      <Link className="back-link" to="/writing">
        ← Writing
      </Link>
      <div className="writing-layout">
        <div className="writing-main">
          <div className="page-header" style={{ marginBottom: 16 }}>
            <div className="eyebrow">
              {task.level} · {FORMAT_LABELS[task.format]} · at least {task.minWords} words
            </div>
            <h1 className="de">{task.title}</h1>
          </div>
          <div className="card task-card">
            <p className="de" style={{ fontSize: '1.05rem' }}>
              {task.instructions}
            </p>
            <ul className="task-points de">
              {task.points.map((point) => {
                return <li key={point}>{point}</li>
              })}
            </ul>
          </div>

          <textarea
            ref={textarea}
            className="textarea"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Schreib hier deinen Text…"
            lang="de"
            spellCheck={false}
            aria-label="Your text"
          />
          <div className="writing-stats">
            <span className={words >= task.minWords ? 'ok' : ''}>
              {words} / {task.minWords} words
            </span>
            <span className={connectors.length >= 3 ? 'ok' : ''} title={connectors.join(', ')}>
              {connectors.length} connectors{connectors.length > 0 && `: ${connectors.slice(0, 6).join(', ')}`}
            </span>
            {isEmail && <span className={hasGreeting ? 'ok' : ''}>{hasGreeting ? '✓' : '○'} greeting</span>}
            {isEmail && <span className={hasClosing ? 'ok' : ''}>{hasClosing ? '✓' : '○'} closing</span>}
            {current && <span className="faint">Draft saved</span>}
          </div>

          <div className="row" style={{ marginTop: 14 }}>
            <button className="btn primary" onClick={() => setShowModel(!showModel)}>
              {showModel ? 'Hide model answer' : 'Model answer'}
            </button>
            <button className="btn" onClick={() => setNotingMistake(!notingMistake)}>
              Note a mistake
            </button>
            {text && (
              <button className="btn ghost" onClick={startNew}>
                Start a new version
              </button>
            )}
          </div>

          {showModel && (
            <div className="card model-text" style={{ marginTop: 20 }}>
              <div className="eyebrow">Model answer</div>
              <div className="de" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                {task.model}
              </div>
            </div>
          )}

          {notingMistake && <MistakeForm onDone={() => setNotingMistake(false)} />}

          {attempts.length > 1 && (
            <div className="section">
              <div className="section-title">Earlier versions</div>
              <div className="stack" style={{ gap: 6 }}>
                {attempts.map((attempt) => (
                  <div key={attempt.id} className="row between attempt-row">
                    <button
                      className="btn ghost small"
                      onClick={() => openAttempt(attempt)}
                      disabled={attempt.id === attemptId}
                    >
                      {new Date(attempt.savedAt).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' })} ·{' '}
                      {countWords(attempt.text)} words
                    </button>
                    <button
                      className="btn ghost small"
                      aria-label="Delete version"
                      onClick={() => deleteWriting(attempt.id)}
                    >
                      <Icon name="trash" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="writing-aside">
          <div className="card">
            <div className="eyebrow">Redemittel</div>
            <p className="small muted" style={{ marginTop: 0 }}>
              Tap to insert at the cursor.
            </p>
            <div className="stack" style={{ gap: 4 }}>
              {task.phrases.map((phrase) => (
                <button key={phrase.de} className="phrase" onClick={() => insertPhrase(phrase.de)}>
                  <span className="de">{phrase.de}</span>
                  <span className="small muted">{phrase.en}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="eyebrow">Before you finish</div>
            <ul className="checklist small">
              <li>Every point answered, in its own sentence or paragraph?</li>
              <li>Verb second in main clauses, last in weil/dass/wenn clauses?</li>
              <li>Articles and adjective endings checked?</li>
              <li>
                {task.format === 'formal-email'
                  ? 'Sie throughout, formal greeting and closing?'
                  : 'Right tone for the reader?'}
              </li>
              <li>Nouns capitalised?</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

function newAttemptId(): string {
  return `w-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

/**
 * Comparing your text with the model answer, write down what you got wrong.
 * It becomes a review card: you see your version and write the correct one.
 */
function MistakeForm({ onDone }: { onDone: () => void }) {
  const [original, setOriginal] = useState('')
  const [correction, setCorrection] = useState('')
  const [explanation, setExplanation] = useState('')

  function save(event: FormEvent) {
    event.preventDefault()
    if (!original.trim() || !correction.trim()) return
    addMistake({
      category: 'Writing',
      original: original.trim(),
      correction: correction.trim(),
      explanation: explanation.trim() || 'From your writing.',
    })
    onDone()
  }

  return (
    <form className="card stack" style={{ marginTop: 16 }} onSubmit={save}>
      <h3 style={{ margin: 0 }}>Note a mistake</h3>
      <p className="small muted" style={{ margin: 0 }}>
        It comes back in your reviews: you see what you wrote and type the correct version.
      </p>
      <label className="field">
        What you wrote
        <input
          className="input de"
          value={original}
          onChange={(event) => setOriginal(event.target.value)}
          lang="de"
          required
        />
      </label>
      <label className="field">
        Correct version
        <input
          className="input de"
          value={correction}
          onChange={(event) => setCorrection(event.target.value)}
          lang="de"
          required
        />
      </label>
      <label className="field">
        Rule or note (optional)
        <input className="input" value={explanation} onChange={(event) => setExplanation(event.target.value)} />
      </label>
      <div className="row">
        <button className="btn primary" type="submit">
          Add to reviews
        </button>
        <button className="btn ghost" type="button" onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
  )
}
