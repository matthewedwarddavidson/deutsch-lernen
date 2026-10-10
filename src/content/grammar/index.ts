import type { GrammarTopic } from '../types'
import { konjunktiv2 } from './konjunktiv2'
import { passiv } from './passiv'
import { relativsaetze } from './relativsaetze'

/** Topics in teaching order within each level. */
export const GRAMMAR_TOPICS: GrammarTopic[] = [relativsaetze, passiv, konjunktiv2]

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
