import { describe, expect, it } from 'vitest'
import { wordCore } from './cards'

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
