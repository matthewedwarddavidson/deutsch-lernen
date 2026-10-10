import type { GrammarTopic } from '../types'
import { konjunktiv2 } from './konjunktiv2'
import { passiv } from './passiv'
import { adjektivdeklination, genitiv, nDeklination, verbenMitPraepositionen, wechselpraepositionen } from './kasus'
import { relativsaetze } from './relativsaetze'
import { finalsaetze, indirekteFragen, infinitivMitZu, zweiteiligeKonnektoren } from './saetze'
import { konnektoren, plusquamperfekt, praeteritum, temporaleNebensaetze } from './zeiten'

/** Topics in teaching order within each level. */
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // A2 review
  adjektivdeklination,
  wechselpraepositionen,
  // B1
  praeteritum,
  plusquamperfekt,
  temporaleNebensaetze,
  konnektoren,
  relativsaetze,
  passiv,
  konjunktiv2,
  finalsaetze,
  infinitivMitZu,
  verbenMitPraepositionen,
  genitiv,
  indirekteFragen,
  zweiteiligeKonnektoren,
  nDeklination,
]

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
