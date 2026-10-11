import { useSyncExternalStore } from 'react'
import type { Level, Word } from '../content/types'
import type { StoredCard } from './srs'

export interface ReviewRecord {
  cardId: string
  at: string
  grade: number
}

export interface Completion {
  completedAt: string
  /** Fraction correct, 0 to 1. */
  score: number
}

/** An error from your own writing, kept for spaced practice. */
export interface Mistake {
  id: string
  category: string
  original: string
  correction: string
  explanation: string
  createdAt: string
  /** The writing version it came from, for errors per 100 words. */
  attemptId?: string
}

/** Kinds of writing mistake, so you can see which ones are falling over time. */
export const MISTAKE_CATEGORIES = [
  'Word order',
  'Case and articles',
  'Adjective endings',
  'Verb forms',
  'Prepositions',
  'Vocabulary',
  'Spelling',
  'Other',
] as const

export interface WritingAttempt {
  id: string
  taskId: string
  text: string
  savedAt: string
  /** What you wanted to say but couldn't, noted before seeing the model. */
  cantSay?: string
}

/** A reminder to write a task again from scratch, about two weeks after comparing it with the model. */
export interface Rewrite {
  dueAt: string
  doneAt?: string
  changedAt: string
}

export type ActivityKind =
  'review' | 'learn' | 'grammar' | 'reading' | 'listening' | 'dictation' | 'writing' | 'fluency'

export interface Activity {
  at: string
  kind: ActivityKind
  seconds: number
}

export interface Settings {
  /** The level being worked towards. New material comes from this level and below. */
  level: Level
  newWordsPerDay: number
  voiceURI?: string
  speechRate: number
  name: string
  /** Prefer the recorded neural voices where available. */
  useRecordings: boolean
  theme: 'system' | 'light' | 'dark'
  lastBackupAt?: string
  welcomeDismissed?: boolean
  /** An if-then plan: when and where you study. Concrete plans make it far more likely to happen. */
  studyPlan?: string
}

export interface AppState {
  version: 1
  cards: Record<string, StoredCard>
  log: ReviewRecord[]
  /** Word id → when it was first learned. */
  wordsLearned: Record<string, string>
  customWords: Word[]
  mistakes: Mistake[]
  /** Cards you chose never to see again, with when. */
  suspended: Record<string, string>
  grammar: Record<string, { studiedAt: string }>
  reading: Record<string, Completion>
  listening: Record<string, Completion>
  dictations: { at: string; score: number }[]
  writing: WritingAttempt[]
  /** Task id → rewrite reminder. */
  rewrites: Record<string, Rewrite>
  activity: Activity[]
  settings: Settings
  /** When anything last changed. Sync uses it to pick the newer settings. */
  updatedAt?: string
  /** When progress was last reset or replaced by a backup. Older data on other devices is discarded. */
  resetAt?: string
  /** Deleted items, keyed like "writing:abc", with when. Sync uses them so deletions aren't undone. */
  deleted: Record<string, string>
}

const STORAGE_KEY = 'deutsch-lernen:v1'
const MAX_LOG_ENTRIES = 20000

export function initialState(): AppState {
  return {
    version: 1,
    cards: {},
    log: [],
    wordsLearned: {},
    customWords: [],
    mistakes: [],
    suspended: {},
    grammar: {},
    reading: {},
    listening: {},
    dictations: [],
    writing: [],
    rewrites: {},
    activity: [],
    deleted: {},
    settings: { level: 'B1', newWordsPerDay: 10, speechRate: 0.95, name: '', useRecordings: true, theme: 'system' },
  }
}

/** Stands in for the unknown time of items saved before times were recorded. */
export const LONG_AGO = '1970-01-01T00:00:00.000Z'

/** Fills in fields added since the state was saved. */
export function withDefaults(saved: Partial<AppState>): AppState {
  const defaults = initialState()
  const suspended: Record<string, string> = {}
  for (const [id, value] of Object.entries(saved.suspended ?? {})) {
    suspended[id] = typeof value === 'string' ? value : LONG_AGO
  }
  return {
    ...defaults,
    ...saved,
    suspended,
    settings: { ...defaults.settings, ...saved.settings },
  }
}

function load(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? withDefaults(JSON.parse(saved)) : initialState()
  } catch {
    return initialState()
  }
}

let state: AppState = load()
const listeners = new Set<() => void>()

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Could not save progress', error)
  }
}

export function getState(): AppState {
  return state
}

/** Applies a change and saves. The updater must return a new object, not mutate. */
export function update(updater: (current: AppState) => AppState) {
  const next = updater(state)
  if (next === state) return
  state = { ...next, updatedAt: new Date().toISOString() }
  if (state.log.length > MAX_LOG_ENTRIES) {
    state = { ...state, log: state.log.slice(-MAX_LOG_ENTRIES) }
  }
  save()
  listeners.forEach((listener) => listener())
}

/** Replaces the state with one merged from another device, keeping its timestamps. */
export function applySynced(synced: AppState) {
  state = synced
  save()
  listeners.forEach((listener) => listener())
}

export function subscribeToState(listener: () => void) {
  return subscribe(listener)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState)
}

export function exportState(): string {
  return JSON.stringify(state, null, 2)
}

export function importState(json: string) {
  const parsed = JSON.parse(json)
  if (parsed?.version !== 1 || typeof parsed.cards !== 'object') {
    throw new Error('This file is not a Deutsch lernen backup.')
  }
  update(() => ({ ...withDefaults(parsed), resetAt: new Date().toISOString() }))
}

export function resetState() {
  update(() => ({ ...initialState(), settings: state.settings, resetAt: new Date().toISOString() }))
}
