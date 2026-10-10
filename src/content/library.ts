import type { AppState } from '../lib/store'
import { LISTENING_TEXTS } from './listening'
import { READING_TEXTS } from './reading'
import type { Level, ListeningText, ReadingText, WritingTask } from './types'
import { LEVELS } from './types'
import { WRITING_TASKS } from './writing'

/** Built-in texts plus ones generated with Claude. */
export function readingTexts(state: AppState): ReadingText[] {
  return [...READING_TEXTS, ...state.generated.reading]
}

export function listeningTexts(state: AppState): ListeningText[] {
  return [...LISTENING_TEXTS, ...state.generated.listening]
}

export function writingTasks(state: AppState): WritingTask[] {
  return [...WRITING_TASKS, ...state.generated.writing]
}

function rank(level: Level, target: Level): number {
  // Prefer the target level, then the one below, then anything else.
  const distance = LEVELS.indexOf(target) - LEVELS.indexOf(level)
  if (distance === 0) return 0
  if (distance === 1) return 1
  if (distance > 1) return 2
  return 3
}

/** The best next item: not yet done, closest to the target level. */
export function suggest<T extends { id: string; level: Level }>(
  items: T[],
  done: Record<string, unknown>,
  target: Level,
): T | undefined {
  return items.filter((item) => !(item.id in done)).sort((a, b) => rank(a.level, target) - rank(b.level, target))[0]
}
