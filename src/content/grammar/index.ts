import type { GrammarTopic } from '../types'
import { konjunktiv2 } from './konjunktiv2'
import { passiv } from './passiv'
import { relativsaetze } from './relativsaetze'
import { konnektoren, plusquamperfekt, praeteritum, temporaleNebensaetze } from './zeiten'

/** Topics in teaching order within each level. */
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  praeteritum,
  plusquamperfekt,
  temporaleNebensaetze,
  konnektoren,
  relativsaetze,
  passiv,
  konjunktiv2,
]

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
