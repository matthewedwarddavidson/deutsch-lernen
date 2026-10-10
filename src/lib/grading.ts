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
