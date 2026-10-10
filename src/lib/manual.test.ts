import { describe, expect, it } from 'vitest'
import { readingJob } from './generation'
import { extractJson, manualPrompt, parseReply, ReplyError } from './manual'

const reply = {
  title: 'Test',
  theme: 'reisen',
  genre: 'blog',
  paragraphs: ['Wir sind nach Wien gefahren.'],
  glossary: [{ term: 'gefahren', english: 'travelled' }],
  questions: [
    {
      kind: 'truefalse',
      text: 'Sie waren in Wien.',
      options: [],
      correctOption: 0,
      isTrue: true,
      explanation: '',
      modelAnswer: '',
    },
  ],
}

describe('manual route', () => {
  it('includes the task and a JSON schema in the prompt', () => {
    const prompt = manualPrompt(readingJob('B1', 'Wien'))
    expect(prompt).toContain('CEFR level B1')
    expect(prompt).toContain('Topic: Wien')
    expect(prompt).toContain('"paragraphs"')
  })

  it('reads JSON from a fenced reply with chatter around it', () => {
    const pasted = `Hier ist der Text:\n\`\`\`json\n${JSON.stringify(reply)}\n\`\`\`\nViel Spaß!`
    expect(extractJson(pasted)).toEqual(reply)
  })

  it('turns a reply into a reading text', () => {
    const text = parseReply(readingJob('B1', ''), JSON.stringify(reply))
    expect(text.level).toBe('B1')
    expect(text.glossary).toEqual({ gefahren: 'travelled' })
    expect(text.generated).toBe(true)
  })

  it('explains missing fields', () => {
    expect(() => parseReply(readingJob('B1', ''), JSON.stringify({ title: 'x' }))).toThrow(ReplyError)
    expect(() => parseReply(readingJob('B1', ''), 'no json here')).toThrow(/Couldn't find/)
  })
})
