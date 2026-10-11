import { slugify } from '../content/parseWords'
import type { Word } from '../content/types'
import { addCustomWord, learnWord } from './actions'
import { isWordLearned } from './cards'
import { Rating } from './srs'
import { getState } from './store'

/** A word or phrase tapped in a text. */
export interface LookUp {
  surface: string
  sentence: string
  gloss?: string
  word?: Word
}

export function lookUpMeaning(lookUp: LookUp): string {
  return lookUp.gloss ?? lookUp.word?.english ?? ''
}

export function isLookUpSaved(lookUp: LookUp): boolean {
  const state = getState()
  if (lookUp.word) return isWordLearned(state, lookUp.word)
  return state.customWords.some((word) => word.id === customId(lookUp.surface))
}

function customId(surface: string): string {
  return `eigene-${slugify(surface)}-other`
}

/** Adds a looked-up word to reviews: a word-list entry as it is, anything else with the sentence it came from. */
export function saveLookUp(lookUp: LookUp, meaning = lookUpMeaning(lookUp)) {
  if (lookUp.word) {
    learnWord(lookUp.word, Rating.Good)
    return
  }
  if (!meaning.trim()) return
  const escaped = lookUp.surface.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const custom: Word = {
    id: customId(lookUp.surface),
    kind: 'other',
    german: lookUp.surface,
    english: meaning.trim(),
    example: lookUp.sentence.replace(new RegExp(escaped), `{${lookUp.surface}}`),
    exampleEnglish: `(${meaning.trim()})`,
    theme: 'eigene',
    level: getState().settings.level,
  }
  addCustomWord(custom)
  learnWord(custom, Rating.Good)
}

/** Two other glosses from the same text, as wrong options for guessing the meaning first. */
export function distractors(gloss: string, glossary: Record<string, string>, count = 2): string[] {
  const isVerb = (text: string) => text.startsWith('to ')
  const others = [...new Set(Object.values(glossary))]
    .filter((other) => other !== gloss)
    .sort(() => Math.random() - 0.5)
  // Prefer glosses of the same shape, so a verb's "to …" doesn't give the answer away.
  const sameShape = others.filter((other) => isVerb(other) === isVerb(gloss))
  const rest = others.filter((other) => isVerb(other) !== isVerb(gloss))
  return [...sameShape, ...rest].slice(0, count)
}
