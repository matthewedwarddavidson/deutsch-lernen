import { useState } from 'react'
import { useNavigate } from 'react-router'
import { LEVELS, type Level, type ListeningText, type ReadingText, type WritingTask } from '../content/types'
import { saveGeneratedListening, saveGeneratedReading, saveGeneratedWriting } from '../lib/actions'
import { ClaudeError, runJob } from '../lib/claude'
import { listeningJob, readingJob, writingTaskJob, type Job } from '../lib/generation'
import { useAppState } from '../lib/store'
import { Icon } from './Icon'
import { ViaClaudeAi } from './ViaClaudeAi'

type Kind = 'reading' | 'listening' | 'writing'
type Generated = ReadingText | ListeningText | WritingTask

const LABELS: Record<Kind, { button: string; placeholder: string }> = {
  reading: { button: 'New text with Claude', placeholder: 'e.g. a news story about a heatwave, or leave empty' },
  listening: { button: 'New listening with Claude', placeholder: 'e.g. calling a garage about a car repair' },
  writing: { button: 'New task with Claude', placeholder: 'e.g. complaining to a landlord about mould' },
}

function jobFor(kind: Kind, level: Level, topic: string): Job<Generated> {
  if (kind === 'reading') return readingJob(level, topic)
  if (kind === 'listening') return listeningJob(level, topic)
  return writingTaskJob(level, topic)
}

/** Creates new material at any level, so the app never runs out. */
export function GenerateButton({ kind }: { kind: Kind }) {
  const { settings } = useAppState()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState('')
  const [level, setLevel] = useState<Level>(settings.level)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  function save(item: Generated) {
    if (kind === 'reading') {
      saveGeneratedReading(item as ReadingText)
      navigate(`/reading/${item.id}`)
    } else if (kind === 'listening') {
      saveGeneratedListening(item as ListeningText)
      navigate(`/listening/${item.id}`)
    } else {
      saveGeneratedWriting(item as WritingTask)
      navigate(`/writing/${item.id}`)
    }
  }

  async function generateWithApi() {
    setBusy(true)
    setError('')
    try {
      save(await runJob(settings.apiKey, jobFor(kind, level, topic.trim())))
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
    <div className="generate-panel card stack">
      <div className="row between">
        <strong>{LABELS[kind].button}</strong>
        <button className="btn ghost small" onClick={() => setOpen(false)} disabled={busy}>
          Close
        </button>
      </div>
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
      <div className="chips" aria-label="Level">
        {LEVELS.map((item) => (
          <button
            type="button"
            key={item}
            className={`chip ${level === item ? 'active' : ''}`}
            onClick={() => setLevel(item)}
            disabled={busy}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="small muted">
        Free with your Claude plan: copy the prompt to claude.ai, then paste the reply here.
      </div>
      <ViaClaudeAi job={() => jobFor(kind, level, topic.trim())} onResult={save} disabled={busy} />
      {settings.apiKey && (
        <div className="row">
          <button className="btn small" onClick={generateWithApi} disabled={busy}>
            {busy ? 'Writing… (about 30 seconds)' : 'Or generate with your API key (paid per use)'}
          </button>
          {error && (
            <span className="small" style={{ color: 'var(--bad)' }}>
              {error}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
