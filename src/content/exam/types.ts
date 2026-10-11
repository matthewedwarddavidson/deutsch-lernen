import type { Level } from '../types'

/** One exam item. Exam items are only marked at the end, as in the real exam. */
export type ExamItem =
  | { kind: 'truefalse'; statement: string; answer: boolean; labels?: [string, string] }
  | { kind: 'choice'; question: string; options: string[]; answer: number }

export interface ExamText {
  title?: string
  /** Where the text comes from, e.g. "aus einer Zeitschrift". */
  source?: string
  body: string[]
}

/** A reading paper modelled on Goethe-Zertifikat B1 Lesen: 5 parts, 30 items, 65 minutes. */
export interface LesenSet {
  id: string
  title: string
  level: Level
  /** Teil 1: a blog or email, six statements richtig/falsch. */
  teil1: { text: ExamText; items: ExamItem[] }
  /** Teil 2: two press articles, three multiple-choice items each. */
  teil2: { text: ExamText; items: ExamItem[] }[]
  /** Teil 3: matching ads to people, by matching task id. */
  teil3: string
  /** Teil 4: seven readers' comments; is each person in favour (ja) or not (nein)? */
  teil4: { question: string; opinions: { name: string; text: string; answer: boolean }[] }
  /** Teil 5: rules or instructions, four multiple-choice items. */
  teil5: { text: ExamText; items: ExamItem[] }
}

/** A listening paper modelled on Goethe-Zertifikat B1 Hören: each part's recording plays a set number of times. */
export interface HoerenSet {
  id: string
  title: string
  level: Level
  parts: { teil: number; scriptId: string; plays: number; instructions: string }[]
}
