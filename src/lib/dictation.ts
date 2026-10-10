import { GRAMMAR_TOPICS } from '../content/grammar'
import { plainExample } from '../content/parseWords'
import { allWords, isWordLearned, levelIndex } from './cards'
import type { AppState } from './store'

export interface DictationSentence {
  german: string
  english: string
}

function shuffle<T>(items: T[]): T[] {
  return items
    .map((item) => ({ item, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item)
}

/**
 * Sentences for dictation. Familiar material first: examples of words you are
 * learning and of grammar you have studied, topped up from your level.
 */
export function dictationSentences(state: AppState, count: number): DictationSentence[] {
  const target = levelIndex(state.settings.level)
  const words = allWords(state).filter((word) => word.theme !== 'eigene' || word.exampleEnglish)
  const fromWords = (learned: boolean) =>
    words
      .filter((word) => isWordLearned(state, word) === learned && levelIndex(word.level) <= target)
      .map((word) => ({ german: plainExample(word.example), english: word.exampleEnglish }))
  const fromGrammar = GRAMMAR_TOPICS.filter((topic) => topic.id in state.grammar).flatMap((topic) =>
    topic.sections.flatMap((section) =>
      (section.examples ?? []).map((example) => ({ german: example.de.replace(/\*/g, ''), english: example.en })),
    ),
  )
  const familiar = shuffle([...fromWords(true), ...fromGrammar])
  const rest = shuffle(fromWords(false))
  // Skip very short or very long sentences: too easy, or too much to hold in memory.
  const suitable = [...familiar, ...rest].filter((sentence) => {
    const length = sentence.german.split(/\s+/).length
    return length >= 4 && length <= 16
  })
  return suitable.slice(0, count)
}
