import { z } from 'zod'
import type { Job } from './generation'

/**
 * The free route: the learner copies a prompt into claude.ai (covered by their
 * subscription) and pastes the reply back. No API key, no extra cost.
 */

export class ReplyError extends Error {}

export const CLAUDE_AI_URL = 'https://claude.ai/new'

/** The full prompt to paste into claude.ai, including the exact JSON shape to reply with. */
export function manualPrompt(job: Job<unknown>): string {
  const schema = JSON.stringify(z.toJSONSchema(job.schema), null, 1)
  return [
    job.system,
    '',
    job.prompt,
    '',
    'Reply with a single JSON object and nothing else: no introduction, no explanation, no markdown outside a ```json code block.',
    'It must match this JSON Schema exactly (every field is required):',
    '```json',
    schema,
    '```',
  ].join('\n')
}

/** Pulls the JSON object out of a pasted reply, with or without a code fence or surrounding text. */
export function extractJson(reply: string): unknown {
  const fenced = reply.match(/```(?:json)?\s*([\s\S]*?)```/)
  const candidate = fenced ? fenced[1] : reply
  const start = candidate.indexOf('{')
  const end = candidate.lastIndexOf('}')
  if (start < 0 || end <= start)
    throw new ReplyError("Couldn't find any JSON in that reply. Paste Claude's whole answer.")
  try {
    return JSON.parse(candidate.slice(start, end + 1))
  } catch {
    throw new ReplyError(
      'The reply was cut off or is not valid JSON. Ask Claude to "continue" or to send the JSON again.',
    )
  }
}

export function parseReply<Result>(job: Job<Result>, reply: string): Result {
  const data = extractJson(reply)
  try {
    return job.finish(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fields = [...new Set(error.issues.map((issue) => issue.path.join('.') || 'reply'))].slice(0, 4)
      throw new ReplyError(
        `The reply is missing or has the wrong type for: ${fields.join(', ')}. Ask Claude to fix the JSON.`,
      )
    }
    throw error
  }
}
