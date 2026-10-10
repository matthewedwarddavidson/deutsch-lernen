import { describe, expect, it } from 'vitest'
import { checkAnswer, checkNoun, diffScore, diffWords, editDistance, normalise } from './check'

describe('normalise', () => {
  it('tidies spacing and final punctuation', () => {
    expect(normalise('  Ich  gehe nach Hause . ')).toBe('Ich gehe nach Hause')
  })
})

describe('editDistance', () => {
  it('counts edits', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3)
    expect(editDistance('', 'abc')).toBe(3)
  })
})

describe('checkAnswer', () => {
  it('accepts exact answers and any listed alternative', () => {
    expect(checkAnswer('weil', ['weil']).verdict).toBe('correct')
    expect(checkAnswer('obwohl', ['weil', 'obwohl']).verdict).toBe('correct')
  })

  it('treats ae/oe/ue as nearly right', () => {
    const result = checkAnswer('waere', ['wäre'])
    expect(result.verdict).toBe('almost')
    expect(result.note).toMatch(/ä/)
  })

  it('treats ss for ß as nearly right', () => {
    expect(checkAnswer('Strasse', ['Straße']).verdict).toBe('almost')
  })

  it('treats a capitalisation slip as nearly right', () => {
    expect(checkAnswer('wohnung', ['Wohnung']).verdict).toBe('almost')
  })

  it('allows one typo in longer words but not short ones', () => {
    expect(checkAnswer('Wohnnug', ['Wohnung']).verdict).toBe('wrong')
    expect(checkAnswer('Wohnug', ['Wohnung']).verdict).toBe('almost')
    expect(checkAnswer('dem', ['den']).verdict).toBe('wrong')
  })

  it('flags missing commas', () => {
    expect(checkAnswer('Ich weiß dass er kommt', ['Ich weiß, dass er kommt.']).verdict).toBe('almost')
  })

  it('rejects empty input', () => {
    expect(checkAnswer('  ', ['ja']).verdict).toBe('wrong')
  })
})

describe('checkNoun', () => {
  it('needs the right article', () => {
    expect(checkNoun('die Wohnung', 'die', 'Wohnung').verdict).toBe('correct')
    const wrongGender = checkNoun('der Wohnung', 'die', 'Wohnung')
    expect(wrongGender.verdict).toBe('wrong')
    expect(wrongGender.note).toMatch(/gender/)
  })

  it('marks a missing article as wrong with a note', () => {
    const result = checkNoun('Wohnung', 'die', 'Wohnung')
    expect(result.verdict).toBe('wrong')
    expect(result.note).toMatch(/article/)
  })

  it('accepts a lower-case article and tolerates a typo', () => {
    expect(checkNoun('Die Wohnung', 'die', 'Wohnung').verdict).toBe('correct')
    expect(checkNoun('die Wohnug', 'die', 'Wohnung').verdict).toBe('almost')
  })
})

describe('diffWords', () => {
  it('marks every word right when the text matches', () => {
    const diff = diffWords('Ich habe keine Zeit', 'Ich habe keine Zeit.')
    expect(diff.every((token) => token.status === 'ok')).toBe(true)
    expect(diffScore(diff)).toBe(1)
  })

  it('finds wrong, missing and extra words', () => {
    const diff = diffWords('Ich hatte keine Zeit heute', 'Ich habe leider keine Zeit.')
    expect(diff).toEqual([
      { text: 'Ich', status: 'ok' },
      { text: 'habe', status: 'wrong', typed: 'hatte' },
      { text: 'leider', status: 'missing' },
      { text: 'keine', status: 'ok' },
      { text: 'Zeit', status: 'ok' },
      { text: 'heute', status: 'extra' },
    ])
  })
})
