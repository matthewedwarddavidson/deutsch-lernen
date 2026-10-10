import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { displayGerman, slugify } from '../content/parseWords'
import type { Word } from '../content/types'
import { addCustomWord, learnWord } from '../lib/actions'
import { allWords, isWordLearned } from '../lib/cards'
import { speak } from '../lib/speech'
import { Rating } from '../lib/srs'
import { getState, useAppState } from '../lib/store'
import { Icon } from './Icon'
import { GermanWord } from './WordView'

interface Selection {
  surface: string
  sentence: string
  gloss?: string
  word?: Word
  x: number
  y: number
}

/** Finds a word-list entry for a form seen in a text: the lemma, a plural, or a reflexive verb without "sich". */
function lookUpWord(surface: string, words: Word[]): Word | undefined {
  const form = surface.toLowerCase()
  return words.find((word) => {
    const lemma = word.german.toLowerCase()
    return (
      lemma === form || word.plural?.toLowerCase() === form || (lemma.startsWith('sich ') && lemma.slice(5) === form)
    )
  })
}

function sentenceAround(paragraph: string, index: number): string {
  const sentences = paragraph.match(/[^.!?]+[.!?]+["“”«»]?|[^.!?]+$/g) ?? [paragraph]
  let position = 0
  for (const sentence of sentences) {
    position += sentence.length
    if (index < position) return sentence.trim()
  }
  return paragraph
}

interface Segment {
  text: string
  start: number
  kind: 'gloss' | 'word' | 'plain' | 'bold'
  gloss?: string
}

/** Splits a paragraph into glossed phrases, tappable words and the text between. */
function segment(paragraph: string, glossary: Record<string, string>): Segment[] {
  const keys = Object.keys(glossary).sort((a, b) => b.length - a.length)
  const segments: Segment[] = []
  const lower = paragraph.toLowerCase()
  let index = 0
  let plainStart = 0

  function flushPlain(end: number) {
    const text = paragraph.slice(plainStart, end)
    const parts = text.split(/([\p{L}\p{N}][\p{L}\p{N}-]*)/u)
    let offset = plainStart
    for (const part of parts) {
      if (!part) continue
      segments.push({ text: part, start: offset, kind: /^[\p{L}\p{N}]/u.test(part) ? 'word' : 'plain' })
      offset += part.length
    }
  }

  while (index < paragraph.length) {
    if (paragraph.startsWith('**', index)) {
      const end = paragraph.indexOf('**', index + 2)
      if (end > 0) {
        flushPlain(index)
        segments.push({ text: paragraph.slice(index + 2, end), start: index, kind: 'bold' })
        index = end + 2
        plainStart = index
        continue
      }
    }
    const atWordStart = index === 0 || !/[\p{L}\p{N}]/u.test(paragraph[index - 1])
    const key = atWordStart
      ? keys.find((candidate) => {
          if (!lower.startsWith(candidate.toLowerCase(), index)) return false
          const after = paragraph[index + candidate.length]
          return after === undefined || !/[\p{L}\p{N}]/u.test(after)
        })
      : undefined
    if (key) {
      flushPlain(index)
      segments.push({
        text: paragraph.slice(index, index + key.length),
        start: index,
        kind: 'gloss',
        gloss: glossary[key],
      })
      index += key.length
      plainStart = index
    } else {
      index++
    }
  }
  flushPlain(paragraph.length)
  return segments
}

interface InteractiveTextProps {
  paragraphs: string[]
  glossary: Record<string, string>
  activeParagraph?: number
  showGlossHints?: boolean
}

/** A German text where every word can be tapped for its meaning and saved for practice. */
export function InteractiveText({
  paragraphs,
  glossary,
  activeParagraph,
  showGlossHints = true,
}: InteractiveTextProps) {
  const [selection, setSelection] = useState<Selection>()
  const segmented = useMemo(() => paragraphs.map((paragraph) => segment(paragraph, glossary)), [paragraphs, glossary])

  useEffect(() => {
    if (!selection) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelection(undefined)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selection])

  function select(event: MouseEvent<HTMLElement>, paragraph: string, part: Segment) {
    const rect = event.currentTarget.getBoundingClientRect()
    const word = lookUpWord(part.text, allWords(getState()))
    setSelection({
      surface: part.text,
      sentence: sentenceAround(paragraph, part.start),
      gloss: part.gloss,
      word,
      x: rect.left + rect.width / 2,
      y: rect.bottom + 8,
    })
  }

  return (
    <div className="reader-text de">
      {segmented.map((parts, paragraphIndex) => {
        const paragraph = paragraphs[paragraphIndex]
        const lines = paragraph.split('\n')
        return (
          <p key={paragraphIndex} className={activeParagraph === paragraphIndex ? 'speaking' : ''}>
            {lines.length > 1
              ? lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </span>
                ))
              : parts.map((part, index): ReactNode => {
                  if (part.kind === 'plain') return part.text
                  if (part.kind === 'bold') return <strong key={index}>{part.text}</strong>
                  return (
                    <span
                      key={index}
                      className={part.kind === 'gloss' && showGlossHints ? 'glossed' : 'tappable'}
                      onClick={(event) => select(event, paragraph, part)}
                    >
                      {part.text}
                    </span>
                  )
                })}
          </p>
        )
      })}
      {selection && <WordPopover selection={selection} onClose={() => setSelection(undefined)} />}
    </div>
  )
}

function WordPopover({ selection, onClose }: { selection: Selection; onClose: () => void }) {
  const state = useAppState()
  const [meaning, setMeaning] = useState(selection.gloss ?? selection.word?.english ?? '')
  const [added, setAdded] = useState(false)
  const width = 300
  const left = Math.min(Math.max(12, selection.x - width / 2), window.innerWidth - width - 12)
  const { word } = selection
  const learned = word ? isWordLearned(state, word) : false

  function addFromText() {
    if (!meaning.trim()) return
    const surface = selection.surface
    const escaped = surface.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const example = selection.sentence.replace(new RegExp(escaped), `{${surface}}`)
    const custom: Word = {
      id: `eigene-${slugify(surface)}-other`,
      kind: 'other',
      german: surface,
      english: meaning.trim(),
      example,
      exampleEnglish: `(${meaning.trim()})`,
      theme: 'eigene',
      level: state.settings.level,
    }
    addCustomWord(custom)
    learnWord(custom, Rating.Good)
    setAdded(true)
  }

  return (
    <>
      <div className="popover-backdrop" onClick={onClose} />
      <div
        className="popover"
        style={{ left, top: Math.min(selection.y, window.innerHeight - 260), width }}
        role="dialog"
      >
        <div className="row between">
          {word ? <GermanWord word={word} /> : <strong>{selection.surface}</strong>}
          <button
            className="btn ghost icon"
            aria-label="Listen"
            onClick={() => speak(word ? displayGerman(word) : selection.surface)}
          >
            <Icon name="speaker" />
          </button>
        </div>
        {selection.gloss && <div style={{ marginTop: 4 }}>{selection.gloss}</div>}
        {word && (
          <div className="small muted" style={{ marginTop: 4 }}>
            {!selection.gloss && <div style={{ color: 'var(--text)' }}>{word.english}</div>}
            {word.plural !== undefined && word.plural !== '' && <div>Plural: die {word.plural}</div>}
            {word.forms && <div>{word.forms}</div>}
          </div>
        )}
        <div className="popover-actions">
          {word ? (
            learned ? (
              <span className="small pill good">In your reviews</span>
            ) : (
              <>
                <button className="btn small primary" onClick={() => learnWord(word, Rating.Good)}>
                  Add to reviews
                </button>
                <Link className="small" to={`/words?q=${encodeURIComponent(word.german)}`}>
                  Details
                </Link>
              </>
            )
          ) : added ? (
            <span className="small pill good">Added with this sentence</span>
          ) : (
            <div className="stack" style={{ gap: 6, width: '100%' }}>
              {!selection.gloss && (
                <input
                  className="input"
                  placeholder="Meaning in English"
                  value={meaning}
                  onChange={(event) => setMeaning(event.target.value)}
                  autoFocus
                />
              )}
              <button className="btn small primary" onClick={addFromText} disabled={!meaning.trim()}>
                Practise with this sentence
              </button>
              <a
                className="small"
                href={`https://www.dwds.de/wb/${encodeURIComponent(selection.surface)}`}
                target="_blank"
                rel="noreferrer"
              >
                Look up in DWDS
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
