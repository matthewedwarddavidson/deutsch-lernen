import { useSyncExternalStore } from 'react'
import type { Level, ListeningText, ReadingText, Word, WritingTask } from '../content/types'
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

export interface WritingFeedback {
  correctedText: string
  summary: string
  estimatedLevel: string
  pointsCovered: { point: string; covered: boolean }[]
  errors: { category: string; original: string; correction: string; explanation: string }[]
  nextStep: string
}

/** An error from your own writing, kept for spaced practice. */
export interface Mistake {
  id: string
  category: string
  original: string
  correction: string
  explanation: string
  createdAt: string
}

export interface WritingAttempt {
  id: string
  taskId: string
  text: string
  savedAt: string
  feedback?: WritingFeedback
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
  apiKey: string
  name: string
  /** Prefer the recorded neural voices where available. */
  useRecordings: boolean
  lastBackupAt?: string
  welcomeDismissed?: boolean
}

export interface AppState {
  version: 1
  cards: Record<string, StoredCard>
  log: ReviewRecord[]
  /** Word id → when it was first learned. */
  wordsLearned: Record<string, string>
  customWords: Word[]
  mistakes: Mistake[]
  grammar: Record<string, { studiedAt: string }>
  reading: Record<string, Completion>
  listening: Record<string, Completion>
  dictations: { at: string; score: number }[]
  writing: WritingAttempt[]
  activity: Activity[]
  generated: { reading: ReadingText[]; listening: ListeningText[]; writing: WritingTask[] }
  settings: Settings
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
    grammar: {},
    reading: {},
    listening: {},
    dictations: [],
    writing: [],
    activity: [],
    generated: { reading: [], listening: [], writing: [] },
    settings: { level: 'B1', newWordsPerDay: 10, speechRate: 0.95, apiKey: '', name: '', useRecordings: true },
  }
}

/** Fills in fields added since the state was saved. */
function withDefaults(saved: Partial<AppState>): AppState {
  const defaults = initialState()
  return {
    ...defaults,
    ...saved,
    generated: { ...defaults.generated, ...saved.generated },
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
  state = updater(state)
  if (state.log.length > MAX_LOG_ENTRIES) {
    state = { ...state, log: state.log.slice(-MAX_LOG_ENTRIES) }
  }
  save()
  listeners.forEach((listener) => listener())
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
  update(() => withDefaults(parsed))
}

export function resetState() {
  update(() => ({ ...initialState(), settings: state.settings }))
}
