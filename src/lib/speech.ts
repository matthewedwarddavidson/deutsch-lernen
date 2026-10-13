/**
 * Speech for German text. Built-in content has natural recordings made with a
 * neural voice; anything else (generated texts, your own words) falls back to
 * the browser's built-in German voices.
 */
import {
  cleanForSpeech,
  defaultVoiceFor,
  KEY_LENGTH,
  RECORDED_VOICES,
  recordingSource,
  toHex,
  type RecordedVoice,
} from './speechText'
import { getState } from './store'

const PREFERRED_VOICE_NAMES = [
  'Katja',
  'Conrad',
  'Amala',
  'Killian',
  'Google Deutsch',
  'Anna',
  'Petra',
  'Markus',
  'Yannick',
  'Helena',
]

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && ('speechSynthesis' in window || 'Audio' in window)
}

export function germanVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return []
  return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith('de'))
}

/** Edge's online "Natural" voices and macOS Premium voices sound far better than the defaults. */
function voiceQuality(voice: SpeechSynthesisVoice): number {
  let score = 0
  if (/natural|neural|online/i.test(voice.name)) score += 20
  if (/premium|enhanced/i.test(voice.name)) score += 10
  if (voice.lang === 'de-DE') score += 3
  const preferredIndex = PREFERRED_VOICE_NAMES.findIndex((name) => voice.name.includes(name))
  if (preferredIndex >= 0) score += 5 - preferredIndex * 0.1
  return score
}

export function bestGermanVoices(): SpeechSynthesisVoice[] {
  return [...germanVoices()].sort((a, b) => voiceQuality(b) - voiceQuality(a))
}

/** True when the browser offers one of the good-sounding voices. */
export function hasNaturalBrowserVoice(): boolean {
  return germanVoices().some((voice) => /natural|neural|online|premium|enhanced/i.test(voice.name))
}

/** Voices load asynchronously in some browsers. Resolves once they are available. */
export function whenVoicesReady(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) return resolve([])
    const voices = germanVoices()
    if (voices.length > 0) return resolve(voices)
    const finish = () => resolve(germanVoices())
    window.speechSynthesis.addEventListener('voiceschanged', finish, { once: true })
    setTimeout(finish, 1500)
  })
}

// Recordings

let manifest: Promise<Set<string>> | undefined

function loadManifest(): Promise<Set<string>> {
  manifest ??= fetch('audio/manifest.json')
    .then((response) => (response.ok ? response.json() : []))
    .then((keys: string[]) => new Set(keys))
    .catch(() => new Set<string>())
  return manifest
}

async function recordingUrl(voice: RecordedVoice, text: string): Promise<string | undefined> {
  if (!getState().settings.useRecordings || !crypto.subtle) return undefined
  const keys = await loadManifest()
  if (keys.size === 0) return undefined
  const digest = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(recordingSource(voice, text)))
  const key = toHex(digest).slice(0, KEY_LENGTH)
  return keys.has(key) ? `audio/${key}.m4a` : undefined
}

// Playback

let currentAudio: HTMLAudioElement | undefined
let playback = 0
/** When browser speech for the current line started, and how long it should take, for progress estimates. */
let browserLine: { startedAt: number; estimatedMs: number } | undefined

/** Browser voices manage roughly 14 characters a second at rate 1. */
const BROWSER_CHARS_PER_SECOND = 14

/** How far through the current line playback is, from 0 to 1. */
export function currentLineProgress(): number {
  if (currentAudio && Number.isFinite(currentAudio.duration) && currentAudio.duration > 0) {
    return Math.min(1, currentAudio.currentTime / currentAudio.duration)
  }
  if (browserLine) return Math.min(0.95, (Date.now() - browserLine.startedAt) / browserLine.estimatedMs)
  return 0
}

export function stopSpeaking() {
  playback++
  currentAudio?.pause()
  currentAudio = undefined
  browserLine = undefined
  if ('speechSynthesis' in window) window.speechSynthesis.cancel()
}

function playRecording(url: string, rate: number): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio(url)
    audio.playbackRate = rate
    audio.onended = () => resolve()
    audio.onerror = () => resolve()
    currentAudio = audio
    audio.play().catch(() => resolve())
  })
}

function speakWithBrowser(text: string, rate: number, browserVoice?: SpeechSynthesisVoice): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) return resolve()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = rate
    if (browserVoice) utterance.voice = browserVoice
    currentAudio = undefined
    utterance.onstart = () => {
      browserLine = { startedAt: Date.now(), estimatedMs: (text.length / BROWSER_CHARS_PER_SECOND / rate) * 1000 }
    }
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    window.speechSynthesis.speak(utterance)
  })
}

function chosenBrowserVoice(): SpeechSynthesisVoice | undefined {
  const { voiceURI } = getState().settings
  const voices = bestGermanVoices()
  return voices.find((voice) => voice.voiceURI === voiceURI) ?? voices[0]
}

/** A different browser voice for each recorded voice, so dialogues keep distinct speakers in the fallback too. */
function browserVoiceFor(voice: RecordedVoice): SpeechSynthesisVoice | undefined {
  const main = chosenBrowserVoice()
  const others = bestGermanVoices().filter((candidate) => candidate !== main)
  const index = RECORDED_VOICES.indexOf(voice)
  if (index === 0 || others.length === 0) return main
  return others[(index - 1) % others.length]
}

async function playLine(text: string, voice: RecordedVoice, slow: boolean, token: number): Promise<void> {
  const clean = cleanForSpeech(text)
  const rate = getState().settings.speechRate * (slow ? 0.75 : 1)
  const url = await recordingUrl(voice, clean)
  if (token !== playback) return
  if (url) return playRecording(url, rate)
  return speakWithBrowser(clean, rate, browserVoiceFor(voice))
}

export interface SpeakOptions {
  slow?: boolean
  voice?: RecordedVoice
  onEnd?: () => void
}

export function speak(text: string, options: SpeakOptions = {}) {
  stopSpeaking()
  const token = playback
  playLine(text, options.voice ?? defaultVoiceFor(text), options.slow ?? false, token).then(() => {
    if (token === playback) options.onEnd?.()
  })
}

export interface DialogueLine {
  text: string
  voice?: RecordedVoice
}

/** Plays lines one after another. Stopping or starting other speech cancels the rest. */
export async function speakDialogue(
  lines: DialogueLine[],
  options: { slow?: boolean; onLine?: (index: number) => void; onEnd?: () => void } = {},
) {
  stopSpeaking()
  const token = playback
  for (const [index, line] of lines.entries()) {
    if (token !== playback) return
    currentAudio = undefined
    browserLine = undefined
    options.onLine?.(index)
    await playLine(line.text, line.voice ?? defaultVoiceFor(line.text), options.slow ?? false, token)
  }
  if (token === playback) options.onEnd?.()
}
