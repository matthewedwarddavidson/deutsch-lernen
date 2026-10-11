import { describe, expect, it } from 'vitest'
import { READING_TEXTS } from '../content/reading'
import { coverageBand, knownShare } from './coverage'
import { initialState } from './store'

describe('knownShare', () => {
  it('rates easier texts as better known than harder ones for a B1 learner', () => {
    const state = initialState()
    const average = (level: string) => {
      const texts = READING_TEXTS.filter((text) => text.level === level)
      return texts.reduce((sum, text) => sum + knownShare(text, state), 0) / texts.length
    }
    expect(average('A2')).toBeGreaterThan(average('C1'))
  })

  it('bands shares by the 95% and 98% thresholds', () => {
    expect(coverageBand(0.99)).toBe('easy')
    expect(coverageBand(0.96)).toBe('study')
    expect(coverageBand(0.9)).toBe('hard')
  })
})
