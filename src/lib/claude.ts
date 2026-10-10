import Anthropic from '@anthropic-ai/sdk'
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod'
import { z } from 'zod'
import { THEMES } from '../content/themes'
import type { Level, ListeningText, ReadingText, ThemeId, WritingTask } from '../content/types'
import type { WritingFeedback } from './store'

const MODEL = 'claude-opus-5-5'

const LEVEL_GUIDANCE: Record<Level, string> = {
  A2: 'A2: short sentences, present tense and Perfekt, everyday topics, common connectors (und, aber, weil, dass, wenn).',
  B1: 'B1: connected text on familiar topics, Präteritum in narratives, Nebensätze, Relativsätze, Passiv, Konjunktiv II for politeness and wishes, everyday and work vocabulary.',
  B2: 'B2: complex argument and opinion, abstract topics, Konjunktiv I in reported speech, Partizipialattribute, nominal style where natural, a wide range of connectors.',
  C1: 'C1: sophisticated, idiomatic, precise texts of the kind found in quality newspapers and essays, with nuance, implicit meaning and varied syntax.',
}

const LEARNER_CONTEXT =
  'The learner is an adult native English speaker learning German. They want substance, not gamification: authentic, natural German that a German speaker would actually write or say, at the right level. Use standard German spelling with ä, ö, ü and ß.'

export class ClaudeError extends Error {}

function client(apiKey: string): Anthropic {
  if (!apiKey) throw new ClaudeError('Add your Claude API key in Settings first.')
  // The key belongs to the user and stays in their own browser.
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
}

async function ask<Schema extends z.ZodType>(
  apiKey: string,
  schema: Schema,
  system: string,
  prompt: string,
  effort: 'low' | 'medium' | 'high',
): Promise<z.infer<Schema>> {
  try {
    const response = await client(apiKey).beta.messages.parse({
      model: MODEL,
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system,
      messages: [{ role: 'user', content: prompt }],
      output_config: { effort, format: betaZodOutputFormat(schema) },
    })
    if (response.stop_reason === 'refusal') throw new ClaudeError('Claude declined this request. Try a different topic.')
    if (response.stop_reason === 'max_tokens') throw new ClaudeError('The response was cut off. Try again.')
    if (!response.parsed_output) throw new ClaudeError('Could not read the response. Try again.')
    return response.parsed_output as z.infer<Schema>
  } catch (error) {
    if (error instanceof ClaudeError) throw error
    if (error instanceof Anthropic.AuthenticationError) throw new ClaudeError('The API key was rejected. Check it in Settings.')
    if (error instanceof Anthropic.RateLimitError) throw new ClaudeError('Rate limited. Wait a minute and try again.')
    if (error instanceof Anthropic.APIError) throw new ClaudeError(`Claude API error ${error.status ?? ''}: ${error.message}`)
    throw new ClaudeError('Could not reach Claude. Check your connection.')
  }
}

const themeIds = THEMES.filter((theme) => theme.id !== 'eigene' && theme.id !== 'redemittel').map((theme) => theme.id) as [
  ThemeId,
  ...ThemeId[],
]

const questionSchema = z.object({
  kind: z.enum(['truefalse', 'choice', 'open']),
  text: z.string().describe('The statement (truefalse) or question (choice, open), in German'),
  options: z.array(z.string()).describe('Three options for choice questions; empty otherwise'),
  correctOption: z.number().describe('Index of the correct option for choice questions; 0 otherwise'),
  isTrue: z.boolean().describe('For truefalse: whether the statement is true; false otherwise'),
  explanation: z.string().describe('One short sentence in German pointing to the evidence in the text'),
  modelAnswer: z.string().describe('For open questions: a model answer in German; empty otherwise'),
})

type GeneratedQuestion = z.infer<typeof questionSchema>

function toQuestion(question: GeneratedQuestion): ReadingText['questions'][number] {
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

function toGlossary(entries: z.infer<typeof glossSchema>, text: string): Record<string, string> {
  const lower = text.toLowerCase()
  return Object.fromEntries(
    entries.filter((entry) => lower.includes(entry.term.toLowerCase())).map((entry) => [entry.term, entry.english]),
  )
}

function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

const readingSchema = z.object({
  title: z.string(),
  theme: z.enum(themeIds),
  genre: z.enum(['blog', 'article', 'email', 'forum', 'story', 'notice', 'interview', 'report']),
  paragraphs: z.array(z.string()),
  glossary: glossSchema,
  questions: z.array(questionSchema),
})

export async function generateReading(apiKey: string, level: Level, topic: string): Promise<ReadingText> {
  const system = `You write graded reading texts for a German learning app. ${LEARNER_CONTEXT}`
  const prompt = [
    `Write a reading text at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
    topic ? `Topic: ${topic}.` : 'Choose an interesting, realistic topic from life in German-speaking countries.',
    'Length: A2 about 180 words, B1 about 280, B2 about 380, C1 about 480. Split into paragraphs.',
    'The learner should know about 95–98% of the words. Gloss the remaining 10–20 harder words or phrases; each term must appear exactly as written in the text.',
    'Then write 6 comprehension questions in German: 2–3 true/false, 2 multiple choice with 3 options, 1–2 open questions. Test understanding of meaning, not word matching. Vary the position of the correct option.',
  ].join('\n')
  const result = await ask(apiKey, readingSchema, system, prompt, 'medium')
  return {
    id: newId('gen-lesen'),
    title: result.title,
    level,
    theme: result.theme,
    genre: result.genre,
    body: result.paragraphs,
    glossary: toGlossary(result.glossary, [result.title, ...result.paragraphs].join(' ')),
    questions: result.questions.map(toQuestion),
    generated: true,
  }
}

const listeningSchema = z.object({
  title: z.string(),
  theme: z.enum(themeIds),
  genre: z.enum(['dialogue', 'announcement', 'interview', 'report']),
  situation: z.string().describe('One sentence in English telling the learner what they will hear'),
  lines: z.array(z.object({ speaker: z.string(), text: z.string() })),
  questions: z.array(questionSchema),
})

export async function generateListening(apiKey: string, level: Level, topic: string): Promise<ListeningText> {
  const system = `You write scripts for listening practice in a German learning app. The scripts are read aloud by text-to-speech, so write spoken German: natural fillers are fine (also, na ja, genau), but no stage directions, sound effects or brackets. ${LEARNER_CONTEXT}`
  const prompt = [
    `Write a listening script at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
    topic ? `Topic: ${topic}.` : 'Choose a realistic everyday or work situation.',
    'Use a dialogue between two speakers with German first names, or an announcement, voicemail or short radio report with one speaker. 8–14 lines, each one to three sentences.',
    'Then write 5 comprehension questions in German about details someone would need to catch: times, places, reasons, decisions. Mix true/false and multiple choice with 3 options; at most one open question.',
  ].join('\n')
  const result = await ask(apiKey, listeningSchema, system, prompt, 'medium')
  return {
    id: newId('gen-hoeren'),
    title: result.title,
    level,
    theme: result.theme,
    genre: result.genre,
    situation: result.situation,
    lines: result.lines,
    questions: result.questions.map(toQuestion),
    generated: true,
  }
}

const writingTaskSchema = z.object({
  title: z.string(),
  theme: z.enum(themeIds),
  format: z.enum(['informal-email', 'formal-email', 'forum', 'essay', 'story', 'summary']),
  instructions: z.string().describe('The situation and task in German, as in an exam'),
  points: z.array(z.string()).describe('3–4 content points the text must cover, in German'),
  minWords: z.number(),
  phrases: z.array(z.object({ de: z.string(), en: z.string() })).describe('6–8 useful phrases for this task'),
  model: z.string().describe('A model answer at the target level that covers every point'),
})

export async function generateWritingTask(apiKey: string, level: Level, topic: string): Promise<WritingTask> {
  const system = `You write exam-style writing tasks for a German learning app, modelled on Goethe-Zertifikat and telc tasks. ${LEARNER_CONTEXT}`
  const prompt = [
    `Write one writing task at CEFR level ${level}. ${LEVEL_GUIDANCE[level]}`,
    topic ? `Topic: ${topic}.` : 'Choose a realistic situation.',
    'Typical lengths: A2 about 40 words; B1 informal email or forum post about 80 words, formal message about 40; B2 forum post about 150 words, formal email about 100; C1 about 200 words.',
    'Use paragraph breaks in the model answer.',
  ].join('\n')
  const result = await ask(apiKey, writingTaskSchema, system, prompt, 'medium')
  return { id: newId('gen-schreiben'), level, ...result, generated: true }
}

const feedbackSchema = z.object({
  correctedText: z.string().describe("The learner's text with errors corrected, keeping their words and ideas where possible"),
  summary: z.string().describe('Two or three sentences in English: what works, and the most important thing to improve'),
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

export async function correctWriting(apiKey: string, task: WritingTask, text: string): Promise<WritingFeedback> {
  const system = [
    `You are an experienced, direct German teacher marking writing. ${LEARNER_CONTEXT}`,
    'Research on written corrective feedback shows focused feedback works best: correct everything in the corrected text, but list only the errors that matter most, in at most five categories, each with a short rule. Do not praise vaguely; say plainly what is wrong and why. Do not list stylistic preferences as errors.',
  ].join('\n')
  const prompt = [
    `Task (${task.level}, ${task.format}, at least ${task.minWords} words):`,
    task.instructions,
    `Points to cover:\n${task.points.map((point) => `- ${point}`).join('\n')}`,
    '',
    "Learner's text:",
    text,
  ].join('\n')
  return ask(apiKey, feedbackSchema, system, prompt, 'high')
}
