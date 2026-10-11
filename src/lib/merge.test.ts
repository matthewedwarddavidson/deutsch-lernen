import { describe, expect, it } from 'vitest'
import { mergeStates } from './merge'
import { newCard } from './srs'
import { initialState, type AppState } from './store'

const EARLY = '2026-10-01T10:00:00.000Z'
const LATE = '2026-10-02T10:00:00.000Z'

function stateWith(changes: Partial<AppState>): AppState {
  return { ...initialState(), updatedAt: EARLY, ...changes }
}

function reviewed(at: string, reps: number) {
  return { ...newCard(new Date(EARLY)), last_review: at, reps }
}

describe('mergeStates', () => {
  it('keeps the most recently reviewed copy of each card', () => {
    const local = stateWith({ wordsLearned: { haus: EARLY }, cards: { 'w:haus:r': reviewed(EARLY, 1) } })
    const remote = stateWith({ wordsLearned: { haus: EARLY }, cards: { 'w:haus:r': reviewed(LATE, 2) } })
    expect(mergeStates(local, remote).cards['w:haus:r'].reps).toBe(2)
    expect(mergeStates(remote, local).cards['w:haus:r'].reps).toBe(2)
  })

  it('combines words learned and reviews from both devices', () => {
    const local = stateWith({ wordsLearned: { haus: EARLY }, log: [{ cardId: 'a', at: EARLY, grade: 3 }] })
    const remote = stateWith({ wordsLearned: { baum: LATE }, log: [{ cardId: 'b', at: LATE, grade: 3 }] })
    const merged = mergeStates(local, remote)
    expect(Object.keys(merged.wordsLearned).sort()).toEqual(['baum', 'haus'])
    expect(merged.log.map((record) => record.cardId)).toEqual(['a', 'b'])
  })

  it('does not bring back writing deleted on one device', () => {
    const attempt = { id: 'x', taskId: 't', text: 'Hallo', savedAt: EARLY }
    const local = stateWith({ writing: [], deleted: { 'writing:x': LATE } })
    const remote = stateWith({ writing: [attempt] })
    expect(mergeStates(local, remote).writing).toEqual([])
  })

  it('keeps an item added again after it was deleted', () => {
    const local = stateWith({ suspended: { c: LATE } })
    const remote = stateWith({ deleted: { 'suspended:c': EARLY } })
    expect(mergeStates(local, remote).suspended).toEqual({ c: LATE })
  })

  it('drops cards of a word forgotten on the other device', () => {
    const local = stateWith({ wordsLearned: { haus: EARLY }, cards: { 'w:haus:r': reviewed(EARLY, 1) } })
    const remote = stateWith({ deleted: { 'word:haus': LATE }, updatedAt: LATE })
    const merged = mergeStates(local, remote)
    expect(merged.wordsLearned).toEqual({})
    expect(merged.cards).toEqual({})
  })

  it('takes settings from the device changed last but keeps the local voice', () => {
    const local = stateWith({ settings: { ...initialState().settings, level: 'B1', voiceURI: 'mac' } })
    const remote = stateWith({
      updatedAt: LATE,
      settings: { ...initialState().settings, level: 'B2', voiceURI: 'phone' },
    })
    const merged = mergeStates(local, remote)
    expect(merged.settings.level).toBe('B2')
    expect(merged.settings.voiceURI).toBe('mac')
  })

  it('lets a newer reset replace older progress', () => {
    const local = stateWith({ wordsLearned: { haus: EARLY } })
    const remote = stateWith({ updatedAt: LATE, resetAt: LATE })
    expect(mergeStates(local, remote).wordsLearned).toEqual({})
  })
})
