import { describe, expect, it } from 'vitest'
import { studyOrder, wordCore } from './cards'

describe('wordCore', () => {
  it('gives near-pairs the same stem', () => {
    expect(wordCore('einziehen')).toBe(wordCore('umziehen'))
    expect(wordCore('Vermieter')).toBe(wordCore('Mieter'))
    expect(wordCore('sich anmelden')).toBe(wordCore('abmelden'))
  })

  it('keeps short words whole', () => {
    expect(wordCore('Ende')).toBe('ende')
    expect(wordCore('Bein')).toBe('bein')
  })
})

describe('studyOrder', () => {
  it('puts the target level and the one below first, easiest first', () => {
    expect(studyOrder('A2', 'B1')).toBeLessThan(studyOrder('B1', 'B1')!)
  })

  it('puts levels further below after the target range', () => {
    expect(studyOrder('A1', 'B1')).toBeGreaterThan(studyOrder('B1', 'B1')!)
  })

  it('leaves out levels above the target', () => {
    expect(studyOrder('B2', 'B1')).toBeUndefined()
  })
})
