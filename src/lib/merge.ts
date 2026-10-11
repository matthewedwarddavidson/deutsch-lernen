import type { AppState } from './store'
import { LONG_AGO } from './store'
import type { StoredCard } from './srs'

/** The later of two ISO timestamps. */
function later(a = '', b = ''): string {
  return a > b ? a : b
}

/** Combines two maps key by key; when both have a key, `pick` chooses. */
function mergeMaps<T>(a: Record<string, T>, b: Record<string, T>, pick: (x: T, y: T) => T): Record<string, T> {
  const merged = { ...a }
  for (const [key, value] of Object.entries(b)) {
    merged[key] = key in merged ? pick(merged[key], value) : value
  }
  return merged
}

/** Combines two lists, keeping one item per key; when both have a key, `pick` chooses. */
function mergeLists<T>(a: T[], b: T[], keyOf: (item: T) => string, pick: (x: T, y: T) => T = (x) => x): T[] {
  const byKey = new Map<string, T>()
  for (const item of [...a, ...b]) {
    const key = keyOf(item)
    const existing = byKey.get(key)
    byKey.set(key, existing ? pick(existing, item) : item)
  }
  return [...byKey.values()]
}

function byTime<T>(timeOf: (item: T) => string) {
  return (a: T, b: T) => timeOf(a).localeCompare(timeOf(b))
}

/** The card reviewed most recently; it carries the most up-to-date schedule. */
function newerCard(a: StoredCard, b: StoredCard): StoredCard {
  if ((a.last_review ?? '') !== (b.last_review ?? ''))
    return later(a.last_review, b.last_review) === a.last_review ? a : b
  return a.reps >= b.reps ? a : b
}

/** Keeps an item only if it was added after it was last deleted. */
function notDeleted(deleted: Record<string, string>, key: string, addedAt: string | undefined): boolean {
  const deletedAt = deleted[key]
  return !deletedAt || (addedAt ?? LONG_AGO) > deletedAt
}

/** Drops word and mistake cards whose word or mistake no longer exists. */
function withoutOrphanCards(state: AppState): Record<string, StoredCard> {
  const mistakeIds = new Set(state.mistakes.map((mistake) => mistake.id))
  return Object.fromEntries(
    Object.entries(state.cards).filter(([id]) => {
      const [kind, ownerId] = id.split(':')
      if (kind === 'w') return ownerId in state.wordsLearned
      if (kind === 'm') return mistakeIds.has(ownerId)
      return true
    }),
  )
}

/**
 * Merges progress from two devices so that nothing done on either is lost.
 * Reviews keep the most recent schedule per card; lists are combined;
 * deletions win over older copies; settings come from the device changed last.
 * A reset or restored backup discards everything older than it.
 */
export function mergeStates(local: AppState, remote: AppState): AppState {
  const localTime = local.updatedAt ?? ''
  const remoteTime = remote.updatedAt ?? ''
  if (remote.resetAt && remote.resetAt > localTime && remote.resetAt !== local.resetAt) return remote
  if (local.resetAt && local.resetAt > remoteTime && local.resetAt !== remote.resetAt) return local

  const newer = remoteTime > localTime ? remote : local
  const deleted = mergeMaps(local.deleted, remote.deleted, later)

  const wordsLearned = Object.fromEntries(
    Object.entries(mergeMaps(local.wordsLearned, remote.wordsLearned, later)).filter(([id, learnedAt]) =>
      notDeleted(deleted, `word:${id}`, learnedAt),
    ),
  )
  const suspended = Object.fromEntries(
    Object.entries(mergeMaps(local.suspended, remote.suspended, later)).filter(([id, suspendedAt]) =>
      notDeleted(deleted, `suspended:${id}`, suspendedAt),
    ),
  )
  const merged: AppState = {
    version: 1,
    cards: mergeMaps(local.cards, remote.cards, newerCard),
    log: mergeLists(local.log, remote.log, (record) => `${record.cardId}|${record.at}`).sort(
      byTime((record) => record.at),
    ),
    wordsLearned,
    customWords: mergeLists(
      local.customWords,
      remote.customWords,
      (word) => word.id,
      (a, b) => (later(a.addedAt, b.addedAt) === a.addedAt ? a : b),
    ).filter((word) => notDeleted(deleted, `customWord:${word.id}`, word.addedAt)),
    mistakes: mergeLists(local.mistakes, remote.mistakes, (mistake) => mistake.id).filter((mistake) =>
      notDeleted(deleted, `mistake:${mistake.id}`, mistake.createdAt),
    ),
    suspended,
    grammar: mergeMaps(local.grammar, remote.grammar, (a, b) => (a.studiedAt >= b.studiedAt ? a : b)),
    reading: mergeMaps(local.reading, remote.reading, (a, b) => (a.completedAt >= b.completedAt ? a : b)),
    listening: mergeMaps(local.listening, remote.listening, (a, b) => (a.completedAt >= b.completedAt ? a : b)),
    dictations: mergeLists(local.dictations, remote.dictations, (dictation) => dictation.at).sort(
      byTime((dictation) => dictation.at),
    ),
    writing: mergeLists(
      local.writing,
      remote.writing,
      (attempt) => attempt.id,
      (a, b) => (a.savedAt >= b.savedAt ? a : b),
    ).filter((attempt) => notDeleted(deleted, `writing:${attempt.id}`, attempt.savedAt)),
    rewrites: mergeMaps(local.rewrites, remote.rewrites, (a, b) => (a.changedAt >= b.changedAt ? a : b)),
    activity: mergeLists(local.activity, remote.activity, (entry) => `${entry.at}|${entry.kind}`).sort(
      byTime((entry) => entry.at),
    ),
    // The voice list differs between devices, so the chosen voice stays per device.
    settings: { ...newer.settings, voiceURI: local.settings.voiceURI },
    updatedAt: later(localTime, remoteTime),
    resetAt: later(local.resetAt, remote.resetAt) || undefined,
    deleted,
  }
  return { ...merged, cards: withoutOrphanCards(merged) }
}
