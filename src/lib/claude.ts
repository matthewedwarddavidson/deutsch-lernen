import Anthropic from '@anthropic-ai/sdk'
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod'
import type { Level, ListeningText, ReadingText, WritingTask } from '../content/types'
import { feedbackJob, listeningJob, readingJob, writingTaskJob, type Job } from './generation'
import type { WritingFeedback } from './store'

/** Optional: runs jobs through the Claude API with the user's own key. API use is billed per request. */

const MODEL = 'claude-opus-5-5'

export class ClaudeError extends Error {}

function client(apiKey: string): Anthropic {
  if (!apiKey) throw new ClaudeError('Add your Claude API key in Settings first.')
  // The key belongs to the user and stays in their own browser.
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
}

export async function runJob<Result>(apiKey: string, job: Job<Result>): Promise<Result> {
  try {
    const response = await client(apiKey).beta.messages.parse({
      model: MODEL,
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: job.system,
      messages: [{ role: 'user', content: job.prompt }],
      output_config: { effort: job.effort, format: betaZodOutputFormat(job.schema) },
    })
    if (response.stop_reason === 'refusal') throw new ClaudeError('Claude declined this request. Try a different topic.')
    if (response.stop_reason === 'max_tokens') throw new ClaudeError('The response was cut off. Try again.')
    if (!response.parsed_output) throw new ClaudeError('Could not read the response. Try again.')
    return job.finish(response.parsed_output)
  } catch (error) {
    if (error instanceof ClaudeError) throw error
    if (error instanceof Anthropic.AuthenticationError) throw new ClaudeError('The API key was rejected. Check it in Settings.')
    if (error instanceof Anthropic.RateLimitError) throw new ClaudeError('Rate limited. Wait a minute and try again.')
    if (error instanceof Anthropic.APIError) throw new ClaudeError(`Claude API error ${error.status ?? ''}: ${error.message}`)
    throw new ClaudeError('Could not reach Claude. Check your connection.')
  }
}

export function generateReading(apiKey: string, level: Level, topic: string): Promise<ReadingText> {
  return runJob(apiKey, readingJob(level, topic))
}

export function generateListening(apiKey: string, level: Level, topic: string): Promise<ListeningText> {
  return runJob(apiKey, listeningJob(level, topic))
}

export function generateWritingTask(apiKey: string, level: Level, topic: string): Promise<WritingTask> {
  return runJob(apiKey, writingTaskJob(level, topic))
}

export function correctWriting(apiKey: string, task: WritingTask, text: string): Promise<WritingFeedback> {
  return runJob(apiKey, feedbackJob(task, text))
}
