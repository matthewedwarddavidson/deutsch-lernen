import { GRAMMAR_TOPICS } from '../content/grammar'
import type { GrammarExercise, GrammarTopic, Word } from '../content/types'
import { levelIndex } from './cards'
import { checkAnswer, checkNoun, type CheckResult, type Verdict } from './check'
import { Rating, type Grade } from './srs'
import type { AppState } from './store'

export function suggestedGrade(verdict: Verdict): Grade {
  if (verdict === 'correct') return Rating.Good
  if (verdict === 'almost') return Rating.Hard
  return Rating.Again
}

export function checkWord(word: Word, typed: string): CheckResult {
  if (word.gender) return checkNoun(typed, word.gender, word.german)
  const result = checkAnswer(typed, [word.german])
  if (result.verdict === 'wrong' && word.german.startsWith('sich ')) {
    const withoutSich = checkAnswer(typed, [word.german.slice(5)])
    if (withoutSich.verdict !== 'wrong') {
      return { verdict: 'almost', expected: word.german, note: 'This verb is reflexive: include sich.' }
    }
  }
  return result
}

/** A noun answer split into its parts, so feedback can say which one was wrong. */
export interface NounParts {
  article: boolean
  noun: Verdict
  plural?: Verdict
}

export function checkNounParts(word: Word, typed: string, typedPlural?: string): NounParts {
  const [first = '', ...rest] = typed.trim().split(/\s+/)
  const hasArticle = ['der', 'die', 'das'].includes(first.toLowerCase())
  const parts: NounParts = {
    article: hasArticle && first.toLowerCase() === word.gender,
    noun: checkAnswer(hasArticle ? rest.join(' ') : typed, [word.german]).verdict,
  }
  if (typedPlural !== undefined && word.plural) {
    parts.plural = checkAnswer(typedPlural.trim().replace(/^die\s+/i, ''), [word.plural]).verdict
  }
  return parts
}

/**
 * One verdict for the card. The word and its article decide it; a wrong plural alone
 * only lowers it to "almost", so the word isn't treated as forgotten.
 */
export function nounVerdict(parts: NounParts): Verdict {
  if (!parts.article || parts.noun === 'wrong') return 'wrong'
  if (parts.noun === 'almost' || (parts.plural && parts.plural !== 'correct')) return 'almost'
  return 'correct'
}

/** Drops words that don't change the meaning, so "to recognise" matches "recognise". */
function withoutFillers(text: string): string {
  return text
    .trim()
    .replace(/^(to|a|an|the)\s+/i, '')
    .replace(/\s*\.\.\.|\s*…/g, '')
    .trim()
}

/** Each separate meaning in an English gloss such as "to lock; to complete (sth)". */
export function englishMeanings(english: string): string[] {
  const withoutBrackets = english.replace(/\([^)]*\)/g, '')
  return withoutBrackets
    .split(/[;,/]/)
    .map(withoutFillers)
    .filter((meaning) => meaning !== '')
}

/** Checks a typed English meaning against the gloss. A miss may still be a valid synonym. */
export function checkMeaning(word: Word, typed: string): CheckResult {
  return checkAnswer(withoutFillers(typed), englishMeanings(word.english))
}

/** The first topic not yet studied, at or below the target level. */
export function nextTopic(state: AppState): GrammarTopic | undefined {
  const target = levelIndex(state.settings.level)
  return [...GRAMMAR_TOPICS]
    .filter((topic) => levelIndex(topic.level) <= target && !(topic.id in state.grammar))
    .sort((a, b) => levelIndex(a.level) - levelIndex(b.level))[0]
}

/** The full correct sentence, for reading aloud after answering. */
export function solvedSentence(exercise: GrammarExercise): string {
  switch (exercise.kind) {
    case 'gap':
      return exercise.prompt.replace('___', exercise.answers[0])
    case 'choice':
      return exercise.prompt.includes('___')
        ? exercise.prompt.replace('___', exercise.options[exercise.answer])
        : exercise.options[exercise.answer]
    case 'order':
      return exercise.words.join(' ')
    case 'transform':
      return exercise.answers[0]
  }
}
