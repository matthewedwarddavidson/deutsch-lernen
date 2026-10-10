import { afterEach, describe, expect, it, vi } from 'vitest'
import { generateReading } from './claude'

function fakeResponse(json: unknown) {
  return new Response(
    JSON.stringify({
      id: 'msg_test',
      type: 'message',
      role: 'assistant',
      model: 'claude-opus-5-5',
      stop_reason: 'end_turn',
      stop_sequence: null,
      usage: { input_tokens: 10, output_tokens: 10 },
      content: [{ type: 'text', text: JSON.stringify(json) }],
    }),
    { status: 200, headers: { 'content-type': 'application/json' } },
  )
}

afterEach(() => vi.unstubAllGlobals())

describe('generateReading', () => {
  it('sends a structured-output request and maps the reply into a reading text', async () => {
    const fetchMock = vi.fn(async () =>
      fakeResponse({
        title: 'Ein Test',
        theme: 'wohnen',
        genre: 'not-a-genre',
        paragraphs: ['Das ist ein kurzer Text über eine Wohnung.'],
        glossary: [
          { term: 'Wohnung', english: 'flat' },
          { term: 'fehlt', english: 'is missing' },
        ],
        questions: [
          { kind: 'truefalse', text: 'Der Text ist kurz.', options: [], correctOption: 0, isTrue: true, explanation: 'Ja.', modelAnswer: '' },
          { kind: 'choice', text: 'Worüber?', options: ['Auto', 'Wohnung', 'Hund'], correctOption: 1, isTrue: false, explanation: '', modelAnswer: '' },
          { kind: 'open', text: 'Warum?', options: [], correctOption: 0, isTrue: false, explanation: '', modelAnswer: 'Darum.' },
        ],
      }),
    )
    vi.stubGlobal('fetch', fetchMock)

    const text = await generateReading('sk-test', 'B1', 'Wohnen')

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(String(url)).toContain('/v1/messages')
    const body = JSON.parse(String(init.body))
    expect(body.model).toBe('claude-opus-5-5')
    expect(body.fallbacks).toBe('default')
    expect(body.output_config.format.type).toBe('json_schema')

    expect(text.title).toBe('Ein Test')
    expect(text.level).toBe('B1')
    expect(text.genre).toBe('article')
    expect(text.glossary).toEqual({ Wohnung: 'flat' })
    expect(text.questions).toEqual([
      { kind: 'truefalse', statement: 'Der Text ist kurz.', answer: true, explanation: 'Ja.' },
      { kind: 'choice', question: 'Worüber?', options: ['Auto', 'Wohnung', 'Hund'], answer: 1, explanation: '' },
      { kind: 'open', question: 'Warum?', model: 'Darum.' },
    ])
  })

  it('explains a missing key', async () => {
    await expect(generateReading('', 'B1', '')).rejects.toThrow(/API key/)
  })
})
