import { describe, expect, it } from 'vitest'
import type { Word } from '../content/types'
import { BUILT_IN_WORDS } from '../content/words'
import { isIrregular, verbForms } from './verbForms'

function verb(german: string, forms: string): Word {
  return {
    id: german,
    kind: 'verb',
    german,
    forms,
    english: '',
    example: '',
    exampleEnglish: '',
    theme: 'alltag',
    level: 'B1',
  }
}

describe('isIrregular', () => {
  it('spots strong, mixed and modal verbs', () => {
    expect(isIrregular(verb('fahren', 'fährt, fuhr, ist gefahren'))).toBe(true)
    expect(isIrregular(verb('einziehen', 'zieht ein, zog ein, ist eingezogen'))).toBe(true)
    expect(isIrregular(verb('denken', 'denkt, dachte, hat gedacht'))).toBe(true)
    expect(isIrregular(verb('können', 'kann, konnte, hat gekonnt'))).toBe(true)
    expect(isIrregular(verb('haben', 'hat, hatte, hat gehabt'))).toBe(true)
  })

  it('leaves regular verbs out', () => {
    expect(isIrregular(verb('arbeiten', 'arbeitet, arbeitete, hat gearbeitet'))).toBe(false)
    expect(isIrregular(verb('aufräumen', 'räumt auf, räumte auf, hat aufgeräumt'))).toBe(false)
    expect(isIrregular(verb('sich beschweren', 'beschwert sich, beschwerte sich, hat sich beschwert'))).toBe(false)
    expect(isIrregular(verb('auswendig lernen', 'lernt auswendig, lernte auswendig, hat auswendig gelernt'))).toBe(
      false,
    )
  })

  it('finds a reasonable number of irregular verbs in the word lists', () => {
    const irregular = BUILT_IN_WORDS.filter(isIrregular)
    expect(irregular.length).toBeGreaterThan(40)
    expect(irregular.every((word) => verbForms(word))).toBe(true)
  })
})
