import { describe, expect, it } from 'vitest'
import type { Word } from '../content/types'
import { checkMeaning, englishMeanings } from './grading'

function wordWithMeaning(english: string): Word {
  return { english } as Word
}

describe('englishMeanings', () => {
  it('splits a gloss into separate meanings without fillers or brackets', () => {
    expect(englishMeanings('to lock; to complete')).toEqual(['lock', 'complete'])
    expect(englishMeanings('to lend; to borrow (sich)')).toEqual(['lend', 'borrow'])
    expect(englishMeanings('as … as possible')).toEqual(['as as possible'])
  })
})

describe('checkMeaning', () => {
  const word = wordWithMeaning('to recognise')

  it('accepts a meaning with or without "to"', () => {
    expect(checkMeaning(word, 'recognise').verdict).toBe('correct')
    expect(checkMeaning(word, 'to recognise').verdict).toBe('correct')
  })

  it('accepts any listed meaning', () => {
    expect(checkMeaning(wordWithMeaning('weather'), 'the weather').verdict).toBe('correct')
    expect(checkMeaning(wordWithMeaning('to swap, exchange'), 'exchange').verdict).toBe('correct')
  })

  it('treats a small typo as almost', () => {
    expect(checkMeaning(word, 'recognize').verdict).not.toBe('wrong')
  })

  it('rejects an unrelated answer', () => {
    expect(checkMeaning(word, 'forget').verdict).toBe('wrong')
  })
})
