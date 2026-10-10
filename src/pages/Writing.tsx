import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { GenerateButton } from '../components/GenerateButton'
import { Icon } from '../components/Icon'
import { ViaClaudeAi } from '../components/ViaClaudeAi'
import { writingTasks } from '../content/library'
import { themeById } from '../content/themes'
import { LEVELS, type WritingTask } from '../content/types'
import { addMistake, deleteGenerated, deleteWriting, recordActivity, saveWriting } from '../lib/actions'
import { diffWords } from '../lib/check'
import { feedbackJob } from '../lib/generation'
import { useTimeOnPage } from '../lib/hooks'
import { useAppState, type WritingAttempt, type WritingFeedback } from '../lib/store'

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
  const tasks = writingTasks(state)
  return (
    <div className="page">
      <div className="page-header row between" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Schreiben</div>
          <h1>Writing</h1>
          <p>
            Exam-style tasks. Write first, then compare with the model answer. Claude can correct your text: a corrected
            version plus the few error types that matter most. That works free through your claude.ai plan.
          </p>
        </div>
        <GenerateButton kind="writing" />
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
                        {task.generated && ' · generated'}
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
  const state = useAppState()
  const task = writingTasks(state).find((item) => item.id === taskId)
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
  const [busy, setBusy] = useState(false)
  const [correcting, setCorrecting] = useState(false)
  const [error, setError] = useState('')
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

  async function getFeedback() {
    setBusy(true)
    setError('')
    try {
      // Loaded on demand: only API-key users need the SDK.
      const { correctWriting } = await import('../lib/claude')
      const feedback = await correctWriting(state.settings.apiKey, task, text)
      saveWriting(attemptId, task.id, text, feedback)
      setCorrecting(false)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Something went wrong.')
    }
    setBusy(false)
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

  const feedback = current?.feedback && current.text === text ? current.feedback : undefined
  const staleFeedback = current?.feedback && current.text !== text

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
                const covered = feedback?.pointsCovered.find((item) => item.point === point)?.covered
                return (
                  <li key={point} className={covered === undefined ? '' : covered ? 'covered' : 'missing'}>
                    {point}
                  </li>
                )
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
            <button className="btn primary" onClick={() => setCorrecting(!correcting)} disabled={words < 10}>
              <Icon name="sparkle" /> {feedback ? 'Check again' : 'Get corrections'}
            </button>
            <button className="btn" onClick={() => setShowModel(!showModel)}>
              {showModel ? 'Hide model answer' : 'Model answer'}
            </button>
            {text && (
              <button className="btn ghost" onClick={startNew}>
                Start a new version
              </button>
            )}
          </div>
          {correcting && (
            <div className="card stack" style={{ marginTop: 14 }}>
              <div className="small muted">
                Free with your Claude plan: copy the prompt (it includes your text) to claude.ai, then paste the reply
                here.
              </div>
              <ViaClaudeAi
                job={() => feedbackJob(task, text)}
                onResult={(result) => {
                  saveWriting(attemptId, task.id, text, result)
                  setCorrecting(false)
                }}
              />
              {state.settings.apiKey && (
                <div>
                  <button className="btn small" onClick={getFeedback} disabled={busy}>
                    {busy ? 'Reading your text…' : 'Or correct with your API key (paid per use)'}
                  </button>
                </div>
              )}
            </div>
          )}
          {error && (
            <div className="feedback wrong">
              <div className="small">{error}</div>
            </div>
          )}
          {staleFeedback && !busy && (
            <p className="small muted" style={{ marginTop: 10 }}>
              You have changed the text since the last correction.
            </p>
          )}

          {showModel && (
            <div className="card model-text" style={{ marginTop: 20 }}>
              <div className="eyebrow">Model answer</div>
              <div className="de" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                {task.model}
              </div>
            </div>
          )}

          {feedback && <FeedbackPanel original={text} feedback={feedback} />}

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
                      {attempt.feedback && ` · ${attempt.feedback.estimatedLevel}`}
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

          {task.generated && (
            <button
              className="btn small ghost"
              style={{ marginTop: 24 }}
              onClick={() => {
                if (window.confirm('Delete this generated task?')) {
                  deleteGenerated('writing', task.id)
                  history.back()
                }
              }}
            >
              <Icon name="trash" size={14} /> Delete this generated task
            </button>
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

function FeedbackPanel({ original, feedback }: { original: string; feedback: WritingFeedback }) {
  const diff = useMemo(() => diffWords(original, feedback.correctedText, true), [original, feedback.correctedText])
  return (
    <div className="section">
      <div className="section-title">Corrections</div>
      <div className="card stack">
        <div className="row between">
          <p style={{ margin: 0, flex: 1 }}>{feedback.summary}</p>
          <span className="pill accent" title="Estimated level of this text">
            ≈ {feedback.estimatedLevel}
          </span>
        </div>
        <hr className="divider" style={{ margin: '4px 0' }} />
        {feedback.errors.length > 1 && (
          <div>
            <button className="btn small" onClick={() => feedback.errors.forEach((error) => addMistake(error))}>
              Practise all {feedback.errors.length} in reviews
            </button>
          </div>
        )}
        {feedback.errors.length > 0 ? (
          <div className="stack" style={{ gap: 12 }}>
            {feedback.errors.map((error, index) => (
              <div key={index} className="error-item">
                <div className="eyebrow" style={{ marginBottom: 2 }}>
                  {error.category}
                </div>
                <div className="de">
                  <span className="error-original">{error.original}</span> →{' '}
                  <strong className="error-fix">{error.correction}</strong>
                </div>
                <div className="small muted">{error.explanation}</div>
                <MistakeButton error={error} />
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">No significant errors.</p>
        )}
        <div className="feedback almost" style={{ marginTop: 4 }}>
          <div className="feedback-title">Next step</div>
          <div className="small">{feedback.nextStep}</div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <div className="eyebrow">Corrected text · changes highlighted</div>
        <div className="corrected de">
          {diff.map((token, index) =>
            token.status === 'ok' ? (
              <span key={index}>{token.text} </span>
            ) : token.status === 'extra' ? (
              <span key={index} className="removed">
                {token.text}{' '}
              </span>
            ) : (
              <span key={index} className="changed" title={token.typed ? `You wrote: ${token.typed}` : 'Added'}>
                {token.text}{' '}
              </span>
            ),
          )}
        </div>
        <details style={{ marginTop: 12 }}>
          <summary className="small muted">Plain corrected text</summary>
          <div className="de" style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>
            {feedback.correctedText}
          </div>
        </details>
      </div>
    </div>
  )
}

function MistakeButton({ error }: { error: WritingFeedback['errors'][number] }) {
  const { mistakes } = useAppState()
  const added = mistakes.some(
    (mistake) => mistake.original === error.original && mistake.correction === error.correction,
  )
  return added ? (
    <span className="small pill good" style={{ marginTop: 6, display: 'inline-block' }}>
      In your reviews
    </span>
  ) : (
    <button className="btn small" style={{ marginTop: 6 }} onClick={() => addMistake(error)}>
      Practise this in reviews
    </button>
  )
}
