import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { LEVELS, type Level } from '../content/types'
import { updateSettings } from '../lib/actions'
import { bestGermanVoices, hasNaturalBrowserVoice, speak, whenVoicesReady } from '../lib/speech'
import { downloadBackup } from '../lib/backup'
import { importState, resetState, useAppState } from '../lib/store'

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
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    whenVoicesReady().then(() => setVoices(bestGermanVoices()))
  }, [])

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
        <h3>Voices</h3>
        <label className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
          <input
            type="checkbox"
            checked={settings.useRecordings}
            onChange={(event) => updateSettings({ useRecordings: event.target.checked })}
            style={{ marginTop: 4 }}
          />
          <span>
            <strong>Natural recorded voices</strong>
            <span className="small muted" style={{ display: 'block' }}>
              Built-in words, examples, texts and dialogues come with recordings made by a neural voice. Recommended.
            </span>
          </span>
        </label>
        <div className="small muted">
          Your own words use a browser voice.{' '}
          {voices.length > 0 && !hasNaturalBrowserVoice() && (
            <>
              Yours sound robotic. For much better ones, open the app in <strong>Microsoft Edge</strong>, which has free
              natural German voices (Katja, Conrad), or on macOS download a Premium voice (Anna or Petra) under System
              Settings → Accessibility → Spoken Content → Manage voices.
            </>
          )}
        </div>
        {voices.length === 0 ? (
          <p className="muted small" style={{ margin: 0 }}>
            This browser has no German voice. Try Microsoft Edge or Chrome.
          </p>
        ) : (
          <div className="row">
            <select
              className="select"
              value={settings.voiceURI ?? voices[0]?.voiceURI}
              onChange={(event) => updateSettings({ voiceURI: event.target.value })}
              aria-label="Browser voice"
            >
              {voices.map((voice) => (
                <option key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
            <button className="btn" onClick={() => speak('Ich habe heute leider keine Zeit, aber morgen gern.')}>
              Test browser voice
            </button>
            <button className="btn" onClick={() => speak('Guten Tag! Wie geht es Ihnen heute?')}>
              Test recorded voice
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
        <h3>Appearance</h3>
        <div className="chips">
          {(['system', 'light', 'dark'] as const).map((theme) => (
            <button
              key={theme}
              className={`chip ${settings.theme === theme ? 'active' : ''}`}
              onClick={() => updateSettings({ theme })}
            >
              {theme === 'system' ? 'Match system' : theme === 'light' ? 'Light' : 'Dark'}
            </button>
          ))}
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
          <button className="btn" onClick={downloadBackup}>
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
