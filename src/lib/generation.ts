import { z } from 'zod'
import { THEMES } from '../content/themes'
import { slugify } from '../content/parseWords'
import type { Level, ListeningText, Question, ReadingText, ThemeId, Word, WritingTask } from '../content/types'
import type { WritingFeedback } from './store'

/**
 * Everything Claude is asked to do: the prompt, the shape of the reply and how
 * the reply becomes app content. Runs either through the API (claude.ts) or by
 * copy and paste through claude.ai (manual.ts).
 */
export interface Job<Result> {
  system: string
  prompt: string
  schema: z.ZodType
  effort: 'low' | 'medium' | 'high'
  finish: (reply: unknown) => Result
}

const LEVEL_GUIDANCE: Record<Level, string> = {
  A2: 'A2: short sentences, present tense and Perfekt, everyday topics, common connectors (und, aber, weil, dass, wenn).',
  B1: 'B1: connected text on familiar topics, Präteritum in narratives, Nebensätze, Relativsätze, Passiv, Konjunktiv II for politeness and wishes, everyday and work vocabulary.',
  B2: 'B2: complex argument and opinion, abstract topics, Konjunktiv I in reported speech, Partizipialattribute, nominal style where natural, a wide range of connectors.',
  C1: 'C1: sophisticated, idiomatic, precise texts of the kind found in quality newspapers and essays, with nuance, implicit meaning and varied syntax.',
}

const LEARNER_CONTEXT =
  'The learner is an adult native English speaker learning German. They want substance, not gamification: authentic, natural German that a German speaker would actually write or say, at the right level. Use standard German spelling with ä, ö, ü and ß.'

const THEME_IDS: ThemeId[] = THEMES.filter((theme) => theme.id !== 'eigene' && theme.id !== 'redemittel').map(
  (theme) => theme.id,
)
const READING_GENRES = ['blog', 'article', 'email', 'forum', 'story', 'notice', 'interview', 'report'] as const
const LISTENING_GENRES = ['dialogue', 'announcement', 'interview', 'report'] as const
const WRITING_FORMATS = ['informal-email', 'formal-email', 'forum', 'essay', 'story', 'summary'] as const

/** One of the allowed values, or the fallback. Enum-like fields arrive as plain strings. */
function oneOf<T extends string>(value: string, allowed: readonly T[], fallback: T): T {
  return (allowed as readonly string[]).includes(value) ? (value as T) : fallback
}

function choiceOf(allowed: readonly string[]) {
  return z.string().describe(`Exactly one of: ${allowed.join(', ')}`)
}

function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

const questionSchema = z.object({
  kind: choiceOf(['truefalse', 'choice', 'open']),
  text: z.string().describe('The statement (truefalse) or question (choice, open), in German'),
  options: z.array(z.string()).describe('Three options for choice questions; empty otherwise'),
  correctOption: z.number().describe('Index of the correct option for choice questions; 0 otherwise'),
  isTrue: z.boolean().describe('For truefalse: whether the statement is true; false otherwise'),
  explanation: z.string().describe('One short sentence in German pointing to the evidence in the text'),
  modelAnswer: z.string().describe('For open questions: a model answer in German; empty otherwise'),
})

function toQuestion(question: z.infer<typeof questionSchema>): Question {
  if (question.kind === 'truefalse') {
    return { kind: 'truefalse', statement: question.text, answer: question.isTrue, explanation: question.explanation }
  }
  if (question.kind === 'choice' && question.options.length >= 2) {
    return {
      kind: 'choice',
      question: question.text,
      options: question.options,
      answer: Math.min(Math.max(0, question.correctOption), question.options.length - 1),
      explanation: question.explanation,
    }
  }
  return { kind: 'open', question: question.text, model: question.modelAnswer || question.explanation }
}

const glossSchema = z.array(
  z.object({
    term: z.string().describe('The word or phrase exactly as it appears in the text'),
    english: z.string().describe('Short English gloss for this context'),
  }),
)

/** Keeps only glosses whose term really appears in the text. */
function toGlossary(entries: z.infer<typeof glossSchema>, text: string): Record<string, string> {
  const lower = text.toLowerCase()
  return Object.fromEntries(
    entries.filter((entry) => lower.includes(entry.term.toLowerCase())).map((entry) => [entry.term, entry.english]),
  )
}

const readingSchema = z.object({
  title: z.string(),
  theme: choiceOf(THEME_IDS),
  genre: choiceOf(READING_GENRES),
  paragraphs: z.array(z.string()),
  glossary: glossSchema,
  questions: z.array(questionSchema),
})

export function readingJob(level: Level, topic: string): Job<ReadingText> {
  return {
    system: `You write graded reading texts for a German learning app. ${LEARNER_CONTEXT}`,
    prompt: [
      `Write a reading text at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
      topic ? `Topic: ${topic}.` : 'Choose an interesting, realistic topic from life in German-speaking countries.',
      'Length: A2 about 180 words, B1 about 280, B2 about 380, C1 about 480. Split into paragraphs.',
      'The learner should know about 95–98% of the words. Gloss the remaining 10–20 harder words or phrases; each term must appear exactly as written in the text.',
      'Then write 6 comprehension questions in German: 2–3 true/false, 2 multiple choice with 3 options, 1–2 open questions. Test understanding of meaning, not word matching. Vary the position of the correct option.',
    ].join('\n'),
    schema: readingSchema,
    effort: 'medium',
    finish: (reply) => {
      const result = readingSchema.parse(reply)
      return {
        id: newId('gen-lesen'),
        title: result.title,
        level,
        theme: oneOf(result.theme, THEME_IDS, 'alltag'),
        genre: oneOf(result.genre, READING_GENRES, 'article'),
        body: result.paragraphs,
        glossary: toGlossary(result.glossary, [result.title, ...result.paragraphs].join(' ')),
        questions: result.questions.map(toQuestion),
        generated: true,
      }
    },
  }
}

const listeningSchema = z.object({
  title: z.string(),
  theme: choiceOf(THEME_IDS),
  genre: choiceOf(LISTENING_GENRES),
  situation: z.string().describe('One sentence in English telling the learner what they will hear'),
  lines: z.array(z.object({ speaker: z.string(), text: z.string() })),
  questions: z.array(questionSchema),
})

export function listeningJob(level: Level, topic: string): Job<ListeningText> {
  return {
    system: `You write scripts for listening practice in a German learning app. The scripts are read aloud by text-to-speech, so write spoken German: natural fillers are fine (also, na ja, genau), but no stage directions, sound effects or brackets. ${LEARNER_CONTEXT}`,
    prompt: [
      `Write a listening script at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
      topic ? `Topic: ${topic}.` : 'Choose a realistic everyday or work situation.',
      'Use a dialogue between two speakers with German first names, or an announcement, voicemail or short radio report with one speaker. 8–14 lines, each one to three sentences.',
      'Then write 5 comprehension questions in German about details someone would need to catch: times, places, reasons, decisions. Mix true/false and multiple choice with 3 options; at most one open question.',
    ].join('\n'),
    schema: listeningSchema,
    effort: 'medium',
    finish: (reply) => {
      const result = listeningSchema.parse(reply)
      return {
        id: newId('gen-hoeren'),
        title: result.title,
        level,
        theme: oneOf(result.theme, THEME_IDS, 'alltag'),
        genre: oneOf(result.genre, LISTENING_GENRES, 'dialogue'),
        situation: result.situation,
        lines: result.lines,
        questions: result.questions.map(toQuestion),
        generated: true,
      }
    },
  }
}

const writingTaskSchema = z.object({
  title: z.string(),
  theme: choiceOf(THEME_IDS),
  format: choiceOf(WRITING_FORMATS),
  instructions: z.string().describe('The situation and task in German, as in an exam'),
  points: z.array(z.string()).describe('3–4 content points the text must cover, in German'),
  minWords: z.number(),
  phrases: z.array(z.object({ de: z.string(), en: z.string() })).describe('6–8 useful phrases for this task'),
  model: z.string().describe('A model answer at the target level that covers every point'),
})

export function writingTaskJob(level: Level, topic: string): Job<WritingTask> {
  return {
    system: `You write exam-style writing tasks for a German learning app, modelled on Goethe-Zertifikat and telc tasks. ${LEARNER_CONTEXT}`,
    prompt: [
      `Write one writing task at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
      topic ? `Topic: ${topic}.` : 'Choose a realistic situation.',
      'Typical lengths: A2 about 40 words; B1 informal email or forum post about 80 words, formal message about 40; B2 forum post about 150 words, formal email about 100; C1 about 200 words.',
      'Use paragraph breaks in the model answer.',
    ].join('\n'),
    schema: writingTaskSchema,
    effort: 'medium',
    finish: (reply) => {
      const result = writingTaskSchema.parse(reply)
      return {
        id: newId('gen-schreiben'),
        level,
        ...result,
        theme: oneOf(result.theme, THEME_IDS, 'alltag'),
        format: oneOf(result.format, WRITING_FORMATS, 'informal-email'),
        generated: true,
      }
    },
  }
}

const feedbackSchema = z.object({
  correctedText: z
    .string()
    .describe("The learner's text with errors corrected, keeping their words and ideas where possible"),
  summary: z
    .string()
    .describe('Two or three sentences in English: what works, and the most important thing to improve'),
  estimatedLevel: z.string().describe('CEFR estimate for this text, e.g. "B1" or "A2+"'),
  pointsCovered: z.array(z.object({ point: z.string(), covered: z.boolean() })),
  errors: z
    .array(
      z.object({
        category: z.string().describe('Short English label, e.g. "Word order", "Adjective endings", "Gender"'),
        original: z.string().describe('The wrong phrase as written'),
        correction: z.string(),
        explanation: z.string().describe('The rule, briefly, in English'),
      }),
    )
    .describe('The most important errors, grouped into at most five categories'),
  nextStep: z.string().describe('One concrete thing to practise next, in English'),
})

export function feedbackJob(task: WritingTask, text: string): Job<WritingFeedback> {
  return {
    system: [
      `You are an experienced, direct German teacher marking writing. ${LEARNER_CONTEXT}`,
      'Research on written corrective feedback shows focused feedback works best: correct everything in the corrected text, but list only the errors that matter most, in at most five categories, each with a short rule. Do not praise vaguely; say plainly what is wrong and why. Do not list stylistic preferences as errors.',
    ].join('\n'),
    prompt: [
      `Task (${task.level}, ${task.format}, at least ${task.minWords} words):`,
      task.instructions,
      `Points to cover (copy each point exactly into pointsCovered):\n${task.points.map((point) => `- ${point}`).join('\n')}`,
      '',
      "Learner's text:",
      text,
    ].join('\n'),
    schema: feedbackSchema,
    effort: 'high',
    finish: (reply) => feedbackSchema.parse(reply),
  }
}

const importedWordSchema = z.object({
  kind: choiceOf(['noun', 'verb', 'adjective', 'adverb', 'phrase', 'preposition', 'conjunction', 'other']),
  german: z.string().describe('Dictionary form without article; reflexive verbs start with "sich"'),
  gender: z.string().describe('For nouns: der, die or das. Empty string otherwise'),
  plural: z.string().describe('For nouns: the full plural form without article, or empty if none'),
  forms: z
    .string()
    .describe(
      'For verbs: "3rd person present, Präteritum, Perfekt", e.g. "fährt, fuhr, ist gefahren". Empty otherwise',
    ),
  usage: z.string().describe('Fixed preposition or case, e.g. "auf + A". Empty if none'),
  english: z.string().describe('Short English meaning'),
  example: z
    .string()
    .describe(
      "A natural example sentence at the learner's level, with the form of the word that appears wrapped in {curly braces}; separable prefixes get their own braces",
    ),
  exampleEnglish: z.string(),
})

const wordImportSchema = z.object({ words: z.array(importedWordSchema) })

const WORD_KINDS = ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'preposition', 'conjunction', 'other'] as const
const GENDERS = ['der', 'die', 'das'] as const

/** Turns a word list from a course or textbook into complete flashcards. */
export function wordImportJob(list: string, level: Level): Job<Word[]> {
  return {
    system: `You prepare vocabulary flashcards for a German learning app. ${LEARNER_CONTEXT}`,
    prompt: [
      `Below is a list of German words or phrases from the learner's course (level ${level}). It may be messy: copied from a book, with or without articles, translations or page numbers.`,
      'Make one card for each German word or phrase. Correct obvious typos. Skip anything that is not German vocabulary. Keep the order.',
      'Every example must contain the word, with the inflected form wrapped in {braces}, e.g. "Wir {ziehen} nächste Woche {um}."',
      '',
      list,
    ].join('\n'),
    schema: wordImportSchema,
    effort: 'medium',
    finish: (reply) =>
      wordImportSchema.parse(reply).words.map((entry) => {
        const kind = oneOf(entry.kind, WORD_KINDS, 'other')
        const gender = oneOf(entry.gender, [...GENDERS, ''] as const, '')
        const example = entry.example.includes('{') ? entry.example : `{${entry.german}}. ${entry.example}`
        const word: Word = {
          id: `eigene-${slugify(entry.german)}-${kind}`,
          kind,
          german: entry.german.replace(/^(der|die|das)\s+/i, ''),
          english: entry.english,
          example,
          exampleEnglish: entry.exampleEnglish,
          theme: 'eigene',
          level,
        }
        if (kind === 'noun' && gender) {
          word.gender = gender
          word.plural = entry.plural
        }
        if (entry.forms) word.forms = entry.forms
        if (entry.usage) word.usage = entry.usage
        return word
      }),
  }
}
