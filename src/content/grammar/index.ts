import type { GrammarTopic } from '../types'
import {
  funktionsverbgefuege,
  konjunktiv1,
  konnektorenB2,
  modalpartikeln,
  modalverbenSubjektiv,
  nominalisierung,
  partizipialattribute,
  passivErsatz,
} from './b2'
import { konjunktiv2 } from './konjunktiv2'
import { passiv } from './passiv'
import { adjektivdeklination, genitiv, nDeklination, verbenMitPraepositionen, wechselpraepositionen } from './kasus'
import { relativsaetze } from './relativsaetze'
import { finalsaetze, indirekteFragen, infinitivMitZu, zweiteiligeKonnektoren } from './saetze'
import { futur, komparativ, lassen, modalverben, reflexiveVerben, satzbau } from './verben'
import { konnektoren, plusquamperfekt, praeteritum, temporaleNebensaetze } from './zeiten'

/** Topics in teaching order within each level. */
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // A2 review
  modalverben,
  reflexiveVerben,
  komparativ,
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
  futur,
  lassen,
  satzbau,
  // B2
  konjunktiv1,
  passivErsatz,
  partizipialattribute,
  nominalisierung,
  modalverbenSubjektiv,
  konnektorenB2,
  modalpartikeln,
  // C1
  funktionsverbgefuege,
]

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
