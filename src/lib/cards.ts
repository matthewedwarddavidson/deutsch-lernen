import { GRAMMAR_TOPICS } from '../content/grammar'
import type { GrammarExercise, GrammarTopic, Level, Word } from '../content/types'
import { LEVELS } from '../content/types'
import { BUILT_IN_WORDS } from '../content/words'
import { FREQUENCY_RANK } from '../content/words/frequency'
import type { AppState, Mistake } from './store'
import { isDue, newCard, type StoredCard } from './srs'
import { isIrregular } from './verbForms'

export type CardRef =
  | { id: string; kind: 'recognise'; word: Word }
  | { id: string; kind: 'produce'; word: Word }
  | { id: string; kind: 'forms'; word: Word }
  | { id: string; kind: 'grammar'; topic: GrammarTopic; exercise: GrammarExercise }
  | { id: string; kind: 'mistake'; mistake: Mistake }

const ONE_DAY = 24 * 60 * 60 * 1000

export function recogniseId(word: Word) {
  return `w:${word.id}:r`
}

export function produceId(word: Word) {
  return `w:${word.id}:p`
}

export function formsId(word: Word) {
  return `w:${word.id}:f`
}

/** A short, stable hash so exercise cards survive reordering. */
function hash(text: string): string {
  let value = 5381
  for (let index = 0; index < text.length; index++) {
    value = ((value << 5) + value + text.charCodeAt(index)) | 0
  }
  return (value >>> 0).toString(36)
}

export function exerciseKey(exercise: GrammarExercise): string {
  switch (exercise.kind) {
    case 'gap':
    case 'choice':
    case 'transform':
      return exercise.prompt
    case 'order':
      return exercise.words.join(' ')
  }
}

export function grammarCardId(topic: GrammarTopic, exercise: GrammarExercise) {
  return `g:${topic.id}:${hash(exerciseKey(exercise))}`
}

export function allWords(state: AppState): Word[] {
  return [...BUILT_IN_WORDS, ...state.customWords]
}

/** Looks up what a stored card id refers to. Returns undefined for content that no longer exists. */
export function buildCardIndex(state: AppState): Map<string, CardRef> {
  const index = new Map<string, CardRef>()
  for (const word of allWords(state)) {
    index.set(recogniseId(word), { id: recogniseId(word), kind: 'recognise', word })
    index.set(produceId(word), { id: produceId(word), kind: 'produce', word })
    if (isIrregular(word)) index.set(formsId(word), { id: formsId(word), kind: 'forms', word })
  }
  for (const topic of GRAMMAR_TOPICS) {
    for (const exercise of topic.exercises) {
      const id = grammarCardId(topic, exercise)
      index.set(id, { id, kind: 'grammar', topic, exercise })
    }
  }
  for (const mistake of state.mistakes) {
    const id = `m:${mistake.id}`
    index.set(id, { id, kind: 'mistake', mistake })
  }
  return index
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[other]] = [result[other], result[index]]
  }
  return result
}

/**
 * Due cards, most overdue first, then lightly shuffled in blocks so words and
 * grammar interleave. Two cards for the same word are kept apart.
 */
export function dueCards(state: AppState, now: Date): CardRef[] {
  const index = buildCardIndex(state)
  const due = Object.entries(state.cards)
    .filter(([id, card]) => index.has(id) && !state.suspended[id] && isDue(card, now))
    .sort(([, a], [, b]) => new Date(a.due).getTime() - new Date(b.due).getTime())
    .map(([id]) => index.get(id)!)

  const blocks: CardRef[] = []
  for (let start = 0; start < due.length; start += 10) {
    blocks.push(...shuffle(due.slice(start, start + 10)))
  }
  return separateSiblings(blocks)
}

function siblingKey(card: CardRef): string {
  return card.kind === 'grammar' || card.kind === 'mistake' ? card.id : card.word.id
}

function separateSiblings(cards: CardRef[]): CardRef[] {
  const result = [...cards]
  for (let index = 1; index < result.length; index++) {
    if (siblingKey(result[index]) === siblingKey(result[index - 1])) {
      const swapWith = result.findIndex(
        (card, other) => other > index && siblingKey(card) !== siblingKey(result[index]),
      )
      if (swapWith > 0) [result[index], result[swapWith]] = [result[swapWith], result[index]]
    }
  }
  return result
}

export function levelIndex(level: Level): number {
  return LEVELS.indexOf(level)
}

/**
 * Sort key for new material up to the target level: the target level and the one below come
 * first, easiest first; lower levels come last, as they are likely known already. Above the
 * target level: undefined.
 */
export function studyOrder(level: Level, target: Level): number | undefined {
  const distance = levelIndex(target) - levelIndex(level)
  if (distance < 0) return undefined
  return distance <= 1 ? levelIndex(level) : LEVELS.length + levelIndex(level)
}

export function isWordLearned(state: AppState, word: Word): boolean {
  return word.id in state.wordsLearned
}

/** New words pause while this many reviews are waiting, so the backlog doesn't keep growing. */
export const REVIEW_BACKLOG_LIMIT = 100

const PREFIXES = [
  'zusammen',
  'zurück',
  'weiter',
  'wieder',
  'durch',
  'unter',
  'über',
  'nach',
  'ver',
  'vor',
  'ein',
  'aus',
  'auf',
  'zer',
  'ent',
  'mit',
  'ab',
  'an',
  'um',
  'zu',
  'be',
  'er',
  'ge',
]

/** The stem a word shares with its near-pairs: einziehen and umziehen → ziehen, Vermieter → mieter. */
export function wordCore(german: string): string {
  const lemma =
    german
      .toLowerCase()
      .replace(/^sich /, '')
      .split(' ')
      .pop() ?? ''
  const prefix = PREFIXES.find((candidate) => lemma.startsWith(candidate) && lemma.length - candidate.length >= 4)
  return prefix ? lemma.slice(prefix.length) : lemma
}

/**
 * Leaves out words that look like a word already chosen or learned today, so near-pairs
 * such as einziehen/umziehen are learned on different days and confused less.
 */
function withoutNearPairs(words: Word[], state: AppState, count: number): Word[] {
  const today = new Date().toDateString()
  const learnedToday = allWords(state).filter(
    (word) => word.id in state.wordsLearned && new Date(state.wordsLearned[word.id]).toDateString() === today,
  )
  const cores = new Set(learnedToday.map((word) => wordCore(word.german)))
  const chosen: Word[] = []
  const later: Word[] = []
  for (const word of words) {
    const core = wordCore(word.german)
    if (cores.has(core)) {
      later.push(word)
    } else {
      cores.add(core)
      chosen.push(word)
    }
  }
  return [...chosen, ...later].slice(0, count)
}

/** Words not yet learned up to the target level, in study order, themes interleaved. */
export function nextNewWords(state: AppState, count: number, theme?: string): Word[] {
  return withoutNearPairs(orderedNewWords(state, theme), state, count)
}

/** Rank for ordering: unranked words (rare, or your own) after ranked ones. */
function frequencyRank(word: Word): number {
  return FREQUENCY_RANK[word.id] ?? Number.MAX_SAFE_INTEGER
}

/** Words not yet learned up to the target level: in study order, most common words first within a level. */
function orderedNewWords(state: AppState, theme?: string): Word[] {
  const target = state.settings.level
  // Your own words are always available, whatever their level, and come first.
  const candidates = allWords(state).filter(
    (word) =>
      !isWordLearned(state, word) &&
      (studyOrder(word.level, target) !== undefined || word.theme === 'eigene') &&
      (!theme || word.theme === theme),
  )
  return candidates.sort(
    (a, b) =>
      Number(b.theme === 'eigene') - Number(a.theme === 'eigene') ||
      (studyOrder(a.level, target) ?? 0) - (studyOrder(b.level, target) ?? 0) ||
      frequencyRank(a) - frequencyRank(b),
  )
}

/** Cards to add when a word is learned. Irregular verbs also get a card for their forms, a few days later. */
export function cardsForNewWord(word: Word, now: Date): Record<string, StoredCard> {
  const cards: Record<string, StoredCard> = {
    [recogniseId(word)]: newCard(now),
    [produceId(word)]: newCard(now, ONE_DAY),
  }
  if (isIrregular(word)) cards[formsId(word)] = newCard(now, 3 * ONE_DAY)
  return cards
}

/**
 * Cards that should exist but don't, because content was added after you
 * learned the word or studied the topic: verb forms and new grammar exercises.
 * They are spread over the next few days.
 */
export function missingCards(state: AppState, now: Date): Record<string, StoredCard> {
  const cards: Record<string, StoredCard> = {}
  let spread = 0
  const add = (id: string) => {
    if (id in state.cards) return
    cards[id] = newCard(now, ONE_DAY * (1 + (spread++ % 5)))
  }
  for (const word of allWords(state)) {
    if (isWordLearned(state, word) && isIrregular(word)) add(formsId(word))
  }
  for (const topic of GRAMMAR_TOPICS) {
    if (!(topic.id in state.grammar)) continue
    for (const exercise of topic.exercises) add(grammarCardId(topic, exercise))
  }
  return cards
}

export function cardsForTopic(topic: GrammarTopic, now: Date): Record<string, StoredCard> {
  const cards: Record<string, StoredCard> = {}
  topic.exercises.forEach((exercise, index) => {
    // Spread the first reviews over a few days so a topic doesn't arrive all at once.
    cards[grammarCardId(topic, exercise)] = newCard(now, ONE_DAY * (1 + (index % 3)))
  })
  return cards
}

export function newWordsLearnedToday(state: AppState, now: Date): number {
  const today = now.toDateString()
  return Object.values(state.wordsLearned).filter((at) => new Date(at).toDateString() === today).length
}
