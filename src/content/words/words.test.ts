import { describe, expect, it } from 'vitest'
import { clozeParts } from '../parseWords'
import { BUILT_IN_WORDS } from './index'

describe('built-in word lists', () => {
  it('have unique ids', () => {
    const seen = new Map<string, string>()
    const duplicates: string[] = []
    for (const word of BUILT_IN_WORDS) {
      if (seen.has(word.id)) duplicates.push(`${word.id} (${seen.get(word.id)} and ${word.theme})`)
      seen.set(word.id, word.theme)
    }
    expect(duplicates).toEqual([])
  })

  it('give every noun a valid article', () => {
    const bad = BUILT_IN_WORDS.filter(
      (word) => word.kind === 'noun' && !['der', 'die', 'das'].includes(word.gender ?? ''),
    )
    expect(bad.map((word) => word.german)).toEqual([])
  })

  it('give every verb its principal parts', () => {
    const bad = BUILT_IN_WORDS.filter(
      (word) => word.kind === 'verb' && (word.forms ?? '').split(',').length !== 3,
    )
    expect(bad.map((word) => word.german)).toEqual([])
  })

  it('mark at least one gap in every example', () => {
    const bad = BUILT_IN_WORDS.filter((word) => !clozeParts(word.example).some((part) => part.gap))
    expect(bad.map((word) => word.german)).toEqual([])
  })

  it('have balanced braces in every example', () => {
    const bad = BUILT_IN_WORDS.filter(
      (word) => (word.example.match(/\{/g) ?? []).length !== (word.example.match(/\}/g) ?? []).length,
    )
    expect(bad.map((word) => word.german)).toEqual([])
  })

  it('fill in every field', () => {
    const bad = BUILT_IN_WORDS.filter((word) => !word.german || !word.english || !word.exampleEnglish)
    expect(bad.map((word) => word.id)).toEqual([])
  })
})
