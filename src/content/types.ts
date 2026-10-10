export const LEVELS = ['A2', 'B1', 'B2', 'C1'] as const
export type Level = (typeof LEVELS)[number]

export type ThemeId =
  | 'alltag'
  | 'wohnen'
  | 'arbeit'
  | 'gesundheit'
  | 'reisen'
  | 'medien'
  | 'umwelt'
  | 'gesellschaft'
  | 'bildung'
  | 'freizeit'
  | 'beziehungen'
  | 'einkaufen'
  | 'essen'
  | 'behoerden'
  | 'redemittel'
  | 'eigene'

export interface Theme {
  id: ThemeId
  title: string
  english: string
}

export type WordKind =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'phrase'
  | 'preposition'
  | 'conjunction'
  | 'other'

export type Gender = 'der' | 'die' | 'das'

export interface Word {
  id: string
  kind: WordKind
  /** Lemma without article, e.g. "Wohnung", "sich bewerben". */
  german: string
  gender?: Gender
  /** Full plural form, e.g. "Wohnungen". Empty when the noun has no plural. */
  plural?: string
  /** Verb principal parts, e.g. "bewirbt, bewarb, hat beworben". */
  forms?: string
  /** Case or preposition the word takes, e.g. "um + A". */
  usage?: string
  english: string
  /** Example sentence. Target word forms are wrapped in {braces}. */
  example: string
  exampleEnglish: string
  theme: ThemeId
  level: Level
}

export interface GrammarExplanationSection {
  heading: string
  /** Paragraphs in a small markdown subset: **bold**, *italic*, `code`. */
  body: string[]
  table?: { head: string[]; rows: string[][] }
  examples?: { de: string; en: string }[]
}

export type GrammarExercise =
  | {
      kind: 'gap'
      /** Sentence with one "___" gap. */
      prompt: string
      answers: string[]
      hint?: string
      explanation: string
    }
  | {
      kind: 'choice'
      prompt: string
      options: string[]
      answer: number
      explanation: string
    }
  | {
      kind: 'order'
      /** Words in correct order; shuffled when shown. */
      words: string[]
      /** Other accepted orders, as full sentences. */
      alternatives?: string[]
      english: string
      explanation: string
    }
  | {
      kind: 'transform'
      instruction: string
      prompt: string
      answers: string[]
      explanation: string
    }

export interface GrammarTopic {
  id: string
  title: string
  english: string
  level: Level
  summary: string
  sections: GrammarExplanationSection[]
  mistakes: { wrong: string; right: string; why: string }[]
  exercises: GrammarExercise[]
}

export type Question =
  | { kind: 'truefalse'; statement: string; answer: boolean; explanation?: string }
  | { kind: 'choice'; question: string; options: string[]; answer: number; explanation?: string }
  | { kind: 'open'; question: string; model: string }

export type TextGenre =
  | 'blog'
  | 'article'
  | 'email'
  | 'forum'
  | 'story'
  | 'notice'
  | 'interview'
  | 'dialogue'
  | 'announcement'
  | 'report'

export interface ReadingText {
  id: string
  title: string
  level: Level
  theme: ThemeId
  genre: TextGenre
  /** Paragraphs. */
  body: string[]
  /** Surface form in text (case-insensitive) → English gloss. */
  glossary: Record<string, string>
  questions: Question[]
  generated?: boolean
}

export interface ListeningLine {
  speaker: string
  text: string
}

export interface ListeningText {
  id: string
  title: string
  level: Level
  theme: ThemeId
  genre: TextGenre
  /** What the learner is told before listening. */
  situation: string
  lines: ListeningLine[]
  questions: Question[]
  generated?: boolean
}

export type WritingFormat = 'informal-email' | 'formal-email' | 'forum' | 'essay' | 'story' | 'summary'

export interface WritingTask {
  id: string
  title: string
  level: Level
  theme: ThemeId
  format: WritingFormat
  /** The situation and instructions, in German. */
  instructions: string
  /** Content points the text must cover. */
  points: string[]
  minWords: number
  phrases: { de: string; en: string }[]
  model: string
  generated?: boolean
}
