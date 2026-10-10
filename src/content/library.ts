import type { Level } from './types'
import { LEVELS } from './types'

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
