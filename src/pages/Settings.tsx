import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { LEVELS, type Level } from '../content/types'
import { updateSettings } from '../lib/actions'
import { bestGermanVoices, speak, whenVoicesReady } from '../lib/speech'
import { exportState, importState, resetState, useAppState } from '../lib/store'

const LEVEL_DESCRIPTIONS: Record<Level, string> = {
  A2: 'Consolidate the basics',
  B1: 'Independent in everyday situations',
  B2: 'Fluent on familiar topics, can argue a point',
  C1: 'Flexible and precise, including at work',
}

export function Settings() {
  const { settings } = useAppState()
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [message, setMessage] = useState('')
  const [showKey, setShowKey] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    whenVoicesReady().then(() => setVoices(bestGermanVoices()))
  }, [])

  function download() {
    const blob = new Blob([exportState()], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `deutsch-lernen-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      importState(await file.text())
      setMessage('Progress restored.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Could not read that file.')
    }
    event.target.value = ''
  }

  function reset() {
    if (window.confirm('Delete all progress? Your settings are kept. This cannot be undone.')) {
      resetState()
      setMessage('Progress deleted.')
    }
  }

  return (
    <div className="page narrow">
      <div className="page-header">
        <div className="eyebrow">Einstellungen</div>
        <h1>Settings</h1>
      </div>

      <div className="card stack">
        <h3>Target level</h3>
        <p className="muted small" style={{ margin: 0 }}>
          New words, grammar topics and texts come from this level and below. Raise it when you pass your exam.
        </p>
        <div className="level-options">
          {LEVELS.map((level) => (
            <button
              key={level}
              className={`level-option ${settings.level === level ? 'active' : ''}`}
              onClick={() => updateSettings({ level })}
            >
              <strong>{level}</strong>
              <span className="small muted">{LEVEL_DESCRIPTIONS[level]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="card stack">
        <h3>Daily new words</h3>
        <div className="row">
          <input
            type="range"
            min={0}
            max={30}
            step={5}
            value={settings.newWordsPerDay}
            onChange={(event) => updateSettings({ newWordsPerDay: Number(event.target.value) })}
            aria-label="New words per day"
            style={{ flex: 1 }}
          />
          <strong style={{ width: 40, textAlign: 'right' }}>{settings.newWordsPerDay}</strong>
        </div>
        <p className="muted small" style={{ margin: 0 }}>
          Each new word adds about 10 reviews over the following month. 10 a day is a steady pace alongside a course.
        </p>
      </div>

      <div className="card stack">
        <h3>Voice</h3>
        {voices.length === 0 ? (
          <p className="muted small" style={{ margin: 0 }}>
            No German voice found. On macOS, add one under System Settings → Accessibility → Spoken Content → System
            voice → Manage voices (Anna or Petra, ideally the Premium versions).
          </p>
        ) : (
          <div className="row">
            <select
              className="select"
              value={settings.voiceURI ?? voices[0]?.voiceURI}
              onChange={(event) => updateSettings({ voiceURI: event.target.value })}
              aria-label="German voice"
            >
              {voices.map((voice) => (
                <option key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
            <button
              className="btn"
              onClick={() =>
                speak('Guten Tag! Wie geht es Ihnen heute?', { rate: settings.speechRate, voiceURI: settings.voiceURI })
              }
            >
              Test
            </button>
          </div>
        )}
        <label className="field">
          Speed: {Math.round(settings.speechRate * 100)}%
          <input
            type="range"
            min={0.6}
            max={1.3}
            step={0.05}
            value={settings.speechRate}
            onChange={(event) => updateSettings({ speechRate: Number(event.target.value) })}
          />
        </label>
      </div>

      <div className="card stack">
        <h3>Claude</h3>
        <p className="muted small" style={{ margin: 0 }}>
          Writing corrections and new texts work through claude.ai at no extra cost: the app copies a prompt, you paste
          Claude's reply back. You don't need anything here for that.
        </p>
        <p className="muted small" style={{ margin: 0 }}>
          Optional, for one-click use: an API key from{' '}
          <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer">
            console.anthropic.com
          </a>
          . API use is billed separately from a Pro or Max plan, per request (a correction costs a few cents). The key
          is stored only in this browser and sent only to Anthropic.
        </p>
        <div className="row">
          <input
            className="input"
            type={showKey ? 'text' : 'password'}
            value={settings.apiKey}
            onChange={(event) => updateSettings({ apiKey: event.target.value.trim() })}
            placeholder="sk-ant-…"
            aria-label="Claude API key"
            style={{ flex: 1 }}
            autoComplete="off"
          />
          <button className="btn" onClick={() => setShowKey(!showKey)}>
            {showKey ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <div className="card stack">
        <h3>Your name</h3>
        <input
          className="input"
          value={settings.name}
          onChange={(event) => updateSettings({ name: event.target.value })}
          placeholder="For the greeting on the Today page"
          aria-label="Your name"
        />
      </div>

      <div className="card stack">
        <h3>Your data</h3>
        <p className="muted small" style={{ margin: 0 }}>
          Everything (progress, your writing, your words and any API key) is stored only in this browser. The app has no
          server and no accounts, so nobody else can see it, even though the app itself is public. Download a backup now
          and then, or to move to another computer or browser.
        </p>
        <div className="row">
          <button className="btn" onClick={download}>
            Download backup
          </button>
          <button className="btn" onClick={() => fileInput.current?.click()}>
            Restore from backup
          </button>
          <input ref={fileInput} type="file" accept="application/json" onChange={upload} hidden />
          <button className="btn ghost" onClick={reset} style={{ color: 'var(--bad)' }}>
            Delete all progress
          </button>
        </div>
        {message && <div className="small">{message}</div>}
      </div>
    </div>
  )
}
