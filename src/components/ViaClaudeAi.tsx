import { useState } from 'react'
import type { Job } from '../lib/generation'
import { CLAUDE_AI_URL, manualPrompt, parseReply, ReplyError } from '../lib/manual'

interface ViaClaudeAiProps<Result> {
  job: () => Job<Result>
  onResult: (result: Result) => void
  disabled?: boolean
}

/**
 * Two steps: copy a prompt into claude.ai, paste the reply back. Uses the
 * learner's Claude subscription, so it costs nothing extra.
 */
export function ViaClaudeAi<Result>({ job, onResult, disabled = false }: ViaClaudeAiProps<Result>) {
  const [copied, setCopied] = useState(false)
  const [reply, setReply] = useState('')
  const [error, setError] = useState('')
  const [showPrompt, setShowPrompt] = useState<string>()

  async function copy() {
    const prompt = manualPrompt(job() as Job<unknown>)
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setShowPrompt(undefined)
    } catch {
      // Clipboard access can be blocked; show the prompt to copy by hand.
      setShowPrompt(prompt)
    }
  }

  function importReply() {
    setError('')
    try {
      onResult(parseReply(job(), reply))
      setReply('')
      setCopied(false)
    } catch (caught) {
      setError(caught instanceof ReplyError ? caught.message : 'Could not read that reply.')
    }
  }

  return (
    <ol className="via-steps">
      <li>
        <div className="row">
          <button type="button" className="btn" onClick={copy} disabled={disabled}>
            {copied ? 'Copied ✓' : 'Copy prompt'}
          </button>
          <a className="btn ghost" href={CLAUDE_AI_URL} target="_blank" rel="noreferrer">
            Open claude.ai ↗
          </a>
        </div>
        <div className="small muted">Paste it into a new chat on claude.ai.</div>
        {showPrompt && (
          <textarea className="textarea" style={{ minHeight: 120, fontSize: '0.8rem', fontFamily: 'monospace' }} readOnly value={showPrompt} onFocus={(event) => event.target.select()} />
        )}
      </li>
      <li>
        <textarea
          className="textarea"
          style={{ minHeight: 90, fontSize: '0.85rem', fontFamily: 'ui-monospace, monospace' }}
          placeholder="Paste Claude's reply here"
          value={reply}
          onChange={(event) => setReply(event.target.value)}
          aria-label="Claude's reply"
        />
        <div className="row" style={{ marginTop: 6 }}>
          <button type="button" className="btn primary" onClick={importReply} disabled={!reply.trim()}>
            Import reply
          </button>
          {error && <span className="small" style={{ color: 'var(--bad)' }}>{error}</span>}
        </div>
      </li>
    </ol>
  )
}
