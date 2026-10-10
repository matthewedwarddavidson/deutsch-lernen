import type { Gender, Level, ThemeId, Word, WordKind } from './types'

const KINDS: Record<string, WordKind> = {
  N: 'noun',
  V: 'verb',
  ADJ: 'adjective',
  ADV: 'adverb',
  P: 'phrase',
  PREP: 'preposition',
  KONJ: 'conjunction',
  X: 'other',
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Parses a word list. One word per line, seven fields separated by "|":
 *
 *   KIND | german | grammar | usage | english | example | example in English
 *
 * KIND is N, V, ADJ, ADV, P, PREP, KONJ or X. Nouns start with their article
 * and give the plural in "grammar" ("–" for none). Verbs give their principal
 * parts there. Lines starting with "# A2" etc. set the level for what follows.
 */
export function parseWords(source: string, theme: ThemeId): Word[] {
  let level: Level = 'A2'
  const words: Word[] = []

  for (const rawLine of source.split('\n')) {
    const line = rawLine.trim()
    if (!line) continue
    const levelMatch = line.match(/^#\s*(A2|B1|B2|C1)\b/)
    if (levelMatch) {
      level = levelMatch[1] as Level
      continue
    }
    if (line.startsWith('#')) continue

    const fields = line.split('|').map((field) => field.trim())
    if (fields.length !== 7) {
      throw new Error(`Expected 7 fields in ${theme} word list, got ${fields.length}: ${line}`)
    }
    const [kindCode, germanField, grammar, usage, english, example, exampleEnglish] = fields
    const kind = KINDS[kindCode]
    if (!kind) throw new Error(`Unknown word kind "${kindCode}": ${line}`)

    const word: Word = { id: '', kind, german: germanField, english, example, exampleEnglish, theme, level }
    if (kind === 'noun') {
      const [article, ...rest] = germanField.split(' ')
      word.gender = article as Gender
      word.german = rest.join(' ')
      word.plural = grammar === '–' ? '' : grammar
    } else if (grammar && grammar !== '–') {
      word.forms = grammar
    }
    if (usage) word.usage = usage
    word.id = kind === 'noun' ? slugify(word.german) : `${slugify(word.german)}-${kind}`
    words.push(word)
  }
  return words
}

/** The word as shown on a card, with its article for nouns. */
export function displayGerman(word: Word): string {
  return word.gender ? `${word.gender} ${word.german}` : word.german
}

/** Removes the {braces} that mark the target word in an example. */
export function plainExample(example: string): string {
  return example.replace(/[{}]/g, '')
}

/** Splits an example into text and gaps, for cloze practice. */
export function clozeParts(example: string): { text: string; gap: boolean }[] {
  return example
    .split(/(\{[^}]+\})/)
    .filter(Boolean)
    .map((part) => (part.startsWith('{') ? { text: part.slice(1, -1), gap: true } : { text: part, gap: false }))
}
