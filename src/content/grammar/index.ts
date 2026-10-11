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
import { doppelterInfinitiv, genitivPraepositionen, konnektorenC1 } from './c1'
import { adjektiveMitPraepositionen, alsOb, dativAkkusativ, perfekt, praepositionenKasus } from './grundlagen'
import { konjunktiv2 } from './konjunktiv2'
import { passiv } from './passiv'
import { adjektivdeklination, genitiv, nDeklination, verbenMitPraepositionen, wechselpraepositionen } from './kasus'
import { EXTRA_EXERCISES } from './extra'
import { MEANING_EXERCISES } from './meaning'
import { relativsaetze } from './relativsaetze'
import { finalsaetze, indirekteFragen, infinitivMitZu, zweiteiligeKonnektoren } from './saetze'
import { futur, komparativ, lassen, modalverben, reflexiveVerben, satzbau } from './verben'
import { konnektoren, plusquamperfekt, praeteritum, temporaleNebensaetze } from './zeiten'

const BASE_TOPICS: GrammarTopic[] = [
  // A2 review
  perfekt,
  dativAkkusativ,
  praepositionenKasus,
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
  adjektiveMitPraepositionen,
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
  alsOb,
  // C1
  funktionsverbgefuege,
  konnektorenC1,
  doppelterInfinitiv,
  genitivPraepositionen,
]

/** Topics in teaching order within each level, with their extra exercises. */
export const GRAMMAR_TOPICS: GrammarTopic[] = BASE_TOPICS.map((topic) => ({
  ...topic,
  exercises: [...topic.exercises, ...(EXTRA_EXERCISES[topic.id] ?? []), ...(MEANING_EXERCISES[topic.id] ?? [])],
}))

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
