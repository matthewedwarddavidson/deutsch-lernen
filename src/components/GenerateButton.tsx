import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { LEVELS, type Level } from '../content/types'
import { saveGeneratedListening, saveGeneratedReading, saveGeneratedWriting } from '../lib/actions'
import { ClaudeError, generateListening, generateReading, generateWritingTask } from '../lib/claude'
import { useAppState } from '../lib/store'
import { Icon } from './Icon'

type Kind = 'reading' | 'listening' | 'writing'

const LABELS: Record<Kind, { button: string; placeholder: string }> = {
  reading: { button: 'Generate a text', placeholder: 'e.g. a news story about a heatwave, or leave empty' },
  listening: { button: 'Generate a listening', placeholder: 'e.g. calling a garage about a car repair' },
  writing: { button: 'Generate a task', placeholder: 'e.g. complaining to a landlord about mould' },
}

/** Creates new material at the learner's level with Claude, so the app never runs out. */
export function GenerateButton({ kind }: { kind: Kind }) {
  const { settings } = useAppState()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState('')
  const [level, setLevel] = useState<Level>(settings.level)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function generate(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      if (kind === 'reading') {
        const text = await generateReading(settings.apiKey, level, topic.trim())
        saveGeneratedReading(text)
        navigate(`/reading/${text.id}`)
      } else if (kind === 'listening') {
        const text = await generateListening(settings.apiKey, level, topic.trim())
        saveGeneratedListening(text)
        navigate(`/listening/${text.id}`)
      } else {
        const task = await generateWritingTask(settings.apiKey, level, topic.trim())
        saveGeneratedWriting(task)
        navigate(`/writing/${task.id}`)
      }
    } catch (caught) {
      setError(caught instanceof ClaudeError ? caught.message : 'Something went wrong. Try again.')
      setBusy(false)
    }
  }

  if (!open) {
    return (
      <button className="btn" onClick={() => setOpen(true)}>
        <Icon name="sparkle" /> {LABELS[kind].button}
      </button>
    )
  }

  return (
    <div className="generate-panel card">
      {!settings.apiKey ? (
        <div className="stack">
          <div>
            Generating new material uses Claude. <Link to="/settings">Add your API key in Settings</Link> to turn it on.
          </div>
          <div>
            <button className="btn small ghost" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <form className="stack" onSubmit={generate}>
          <label className="field">
            Topic (optional)
            <input
              className="input"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder={LABELS[kind].placeholder}
              autoFocus
              disabled={busy}
            />
          </label>
          <div className="row">
            <div className="chips">
              {LEVELS.map((item) => (
                <button type="button" key={item} className={`chip ${level === item ? 'active' : ''}`} onClick={() => setLevel(item)} disabled={busy}>
                  {item}
                </button>
              ))}
            </div>
            <button className="btn primary" type="submit" disabled={busy}>
              {busy ? 'Writing… (about 30 seconds)' : 'Generate'}
            </button>
            <button type="button" className="btn ghost" onClick={() => setOpen(false)} disabled={busy}>
              Cancel
            </button>
          </div>
          {error && <div className="small" style={{ color: 'var(--bad)' }}>{error}</div>}
        </form>
      )}
    </div>
  )
}
