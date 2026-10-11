import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router'
import { Icon } from '../components/Icon'
import { WRITING_TASKS } from '../content/writing'
import { themeById } from '../content/themes'
import { LEVELS, type WritingTask } from '../content/types'
import {
  addMistake,
  completeRewrite,
  deleteWriting,
  recordActivity,
  saveCantSay,
  saveWriting,
  scheduleRewrite,
} from '../lib/actions'
import { useNow, useTimeOnPage } from '../lib/hooks'
import { MISTAKE_CATEGORIES, useAppState, type WritingAttempt } from '../lib/store'

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
  // Write, then note what you couldn't say, then compare with the model.
  const [phase, setPhase] = useState<'write' | 'cant-say' | 'compare'>('write')
  const [cantSay, setCantSay] = useState(current?.cantSay ?? '')
  const [notingMistake, setNotingMistake] = useState(false)
  const now = useNow()
  const rewrite = state.rewrites[task.id]
  const rewriteDue = rewrite && !rewrite.doneAt && new Date(rewrite.dueAt) <= now
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
    if (rewriteDue) completeRewrite(task.id)
    setAttemptId(newAttemptId())
    setText('')
    setCantSay('')
    setPhase('write')
    setNotingMistake(false)
  }

  function openAttempt(attempt: WritingAttempt) {
    setAttemptId(attempt.id)
    setText(attempt.text)
    setCantSay(attempt.cantSay ?? '')
  }

  function showModel() {
    if (current) saveCantSay(current.id, cantSay.trim())
    scheduleRewrite(task.id)
    setPhase('compare')
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

          {rewriteDue && (
            <div className="feedback almost" style={{ marginTop: 14 }}>
              <div className="feedback-title">Time to rewrite this from memory</div>
              <div className="small">
                Start a new version and write it again without looking at the model. Then compare the two versions.
              </div>
            </div>
          )}

          {phase === 'write' && (
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn primary" onClick={() => setPhase('cant-say')} disabled={!text.trim()}>
                Finished: compare with the model
              </button>
              {text && (
                <button className="btn ghost" onClick={startNew}>
                  Start a new version
                </button>
              )}
            </div>
          )}

          {phase === 'cant-say' && (
            <div className="card stack" style={{ marginTop: 16 }}>
              <h3 style={{ margin: 0 }}>Before you look</h3>
              <p className="small muted" style={{ margin: 0 }}>
                What did you want to say but couldn't, or weren't sure how to? English is fine. Then look for it in the
                model.
              </p>
              <textarea
                className="textarea small-textarea"
                value={cantSay}
                onChange={(event) => setCantSay(event.target.value)}
                placeholder="e.g. how to say I'm looking forward to it; which case after trotz"
                aria-label="What you couldn't say"
              />
              <div>
                <button className="btn primary" onClick={showModel}>
                  Show the model answer
                </button>
              </div>
            </div>
          )}

          {phase === 'compare' && (
            <>
              <div className="card model-text" style={{ marginTop: 20 }}>
                <div className="eyebrow">Model answer</div>
                <div className="de" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                  {task.model}
                </div>
              </div>
              <div className="card stack" style={{ marginTop: 16 }}>
                <h3 style={{ margin: 0 }}>Compare</h3>
                {cantSay.trim() && (
                  <p className="small" style={{ margin: 0 }}>
                    <strong>You wanted to say:</strong> {cantSay.trim().replace(/[.!?]+$/, '')}. Find how the model says
                    it, or something close.
                  </p>
                )}
                <p className="small muted" style={{ margin: 0 }}>
                  Most people only notice words. Go through your own text once for each line below, and note each
                  mistake you find.
                </p>
                <GrammarChecklist format={task.format} />
                <div className="row">
                  <button className="btn primary" onClick={() => setNotingMistake(true)}>
                    Note a mistake
                  </button>
                  <button className="btn" onClick={startNew}>
                    Rewrite from memory
                  </button>
                  <button className="btn ghost" onClick={() => setPhase('write')}>
                    Hide the model
                  </button>
                </div>
                {rewrite && !rewrite.doneAt && !rewriteDue && (
                  <p className="faint small" style={{ margin: 0 }}>
                    You'll be asked to rewrite this from scratch on{' '}
                    {new Date(rewrite.dueAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}. Writing it
                    again later is what makes the corrections stick.
                  </p>
                )}
              </div>
            </>
          )}

          {notingMistake && <MistakeForm attemptId={current?.id} onDone={() => setNotingMistake(false)} />}

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
            <div className="eyebrow">How this works</div>
            <ol className="checklist small">
              <li>Write without looking anything up, if you can.</li>
              <li>Note what you couldn't say.</li>
              <li>Compare with the model, line by line through the checklist.</li>
              <li>Note your mistakes: they come back in reviews.</li>
              <li>Rewrite from memory, now and again in two weeks.</li>
            </ol>
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
function MistakeForm({ attemptId, onDone }: { attemptId?: string; onDone: () => void }) {
  const [category, setCategory] = useState<string>(MISTAKE_CATEGORIES[0])
  const [original, setOriginal] = useState('')
  const [correction, setCorrection] = useState('')
  const [explanation, setExplanation] = useState('')

  function save(event: FormEvent) {
    event.preventDefault()
    if (!original.trim() || !correction.trim()) return
    addMistake({
      category,
      attemptId,
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
        Kind of mistake
        <select className="select" value={category} onChange={(event) => setCategory(event.target.value)}>
          {MISTAKE_CATEGORIES.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
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

const CHECKLIST = [
  'Verb second in every main clause, including after a fronted time or place (Morgen fahre ich …)?',
  'Verb at the end after weil, dass, wenn, ob, obwohl, als and relative pronouns?',
  'Separable verbs split in main clauses (ich rufe … an)?',
  'Right case after each preposition (mit + Dativ, für + Akkusativ, wegen + Genitiv)?',
  'Adjective endings after der/ein/no article?',
  'Every noun capitalised, with the right article?',
  'Every point of the task answered?',
]

/** Grammar to check in your own text, one pass per line. Ticks reset each time. */
function GrammarChecklist({ format }: { format: WritingTask['format'] }) {
  const items = [
    ...CHECKLIST,
    format === 'formal-email' ? 'Sie throughout, with a formal greeting and closing?' : 'Right tone for the reader?',
  ]
  const [ticked, setTicked] = useState<string[]>([])
  return (
    <ul className="checklist-ticks small">
      {items.map((item) => (
        <li key={item}>
          <label>
            <input
              type="checkbox"
              checked={ticked.includes(item)}
              onChange={() =>
                setTicked(ticked.includes(item) ? ticked.filter((other) => other !== item) : [...ticked, item])
              }
            />{' '}
            {item}
          </label>
        </li>
      ))}
    </ul>
  )
}
