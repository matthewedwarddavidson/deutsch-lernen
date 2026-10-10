import type { GrammarTopic, ListeningText, Word } from '../content/types'
import { cardsForNewWord, cardsForTopic, missingCards } from './cards'
import { newCard, reviewCard, type Grade } from './srs'
import { update, type ActivityKind, type Mistake, type Settings } from './store'

export function recordActivity(kind: ActivityKind, seconds: number) {
  if (seconds < 5) return
  update((state) => ({
    ...state,
    activity: [...state.activity, { at: new Date().toISOString(), kind, seconds: Math.round(seconds) }],
  }))
}

export function gradeCard(cardId: string, grade: Grade) {
  const now = new Date()
  update((state) => {
    const card = state.cards[cardId]
    if (!card) return state
    return {
      ...state,
      cards: { ...state.cards, [cardId]: reviewCard(card, grade, now) },
      log: [...state.log, { cardId, at: now.toISOString(), grade }],
    }
  })
}

/** Adds a word's cards. The first check during learning counts as its first review. */
export function learnWord(word: Word, grade: Grade) {
  const now = new Date()
  update((state) => {
    if (word.id in state.wordsLearned) return state
    const cards = cardsForNewWord(word, now)
    const recogniseId = Object.keys(cards)[0]
    cards[recogniseId] = reviewCard(cards[recogniseId], grade, now)
    return {
      ...state,
      cards: { ...state.cards, ...cards },
      wordsLearned: { ...state.wordsLearned, [word.id]: now.toISOString() },
      log: [...state.log, { cardId: recogniseId, at: now.toISOString(), grade }],
    }
  })
}

export function suspendCard(cardId: string) {
  update((state) => ({ ...state, suspended: { ...state.suspended, [cardId]: true } }))
}

export function unsuspendCards(cardIds: string[]) {
  update((state) => {
    const suspended = { ...state.suspended }
    for (const id of cardIds) delete suspended[id]
    return { ...state, suspended }
  })
}

export function addMissingCards() {
  update((state) => {
    const cards = missingCards(state, new Date())
    return Object.keys(cards).length === 0 ? state : { ...state, cards: { ...state.cards, ...cards } }
  })
}

export function forgetWord(word: Word) {
  update((state) => {
    const cards = { ...state.cards }
    delete cards[`w:${word.id}:r`]
    delete cards[`w:${word.id}:p`]
    delete cards[`w:${word.id}:f`]
    const wordsLearned = { ...state.wordsLearned }
    delete wordsLearned[word.id]
    return { ...state, cards, wordsLearned }
  })
}

/** Marks a topic as studied and schedules its exercises for spaced review. */
export function completeTopic(topic: GrammarTopic) {
  const now = new Date()
  update((state) => ({
    ...state,
    grammar: { ...state.grammar, [topic.id]: { studiedAt: now.toISOString() } },
    cards: { ...cardsForTopic(topic, now), ...state.cards },
  }))
}

/** Records a reading text or matching task by id. */
export function completeReading(id: string, score: number) {
  update((state) => ({
    ...state,
    reading: { ...state.reading, [id]: { completedAt: new Date().toISOString(), score } },
  }))
}

export function completeListening(text: ListeningText, score: number) {
  update((state) => ({
    ...state,
    listening: { ...state.listening, [text.id]: { completedAt: new Date().toISOString(), score } },
  }))
}

export function recordDictation(score: number) {
  update((state) => ({
    ...state,
    dictations: [...state.dictations, { at: new Date().toISOString(), score }],
  }))
}

export function saveWriting(id: string, taskId: string, text: string) {
  update((state) => {
    const others = state.writing.filter((attempt) => attempt.id !== id)
    return {
      ...state,
      writing: [...others, { id, taskId, text, savedAt: new Date().toISOString() }],
    }
  })
}

export function deleteWriting(id: string) {
  update((state) => ({ ...state, writing: state.writing.filter((attempt) => attempt.id !== id) }))
}

export function addCustomWord(word: Word) {
  update((state) => ({ ...state, customWords: [...state.customWords.filter((w) => w.id !== word.id), word] }))
}

export function removeCustomWord(word: Word) {
  forgetWord(word)
  update((state) => ({ ...state, customWords: state.customWords.filter((w) => w.id !== word.id) }))
}

export function updateSettings(changes: Partial<Settings>) {
  update((state) => ({ ...state, settings: { ...state.settings, ...changes } }))
}

/** Turns an error from a correction into a review card, due tomorrow. */
export function addMistake(error: Omit<Mistake, 'id' | 'createdAt'>) {
  const now = new Date()
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
  update((state) => {
    if (
      state.mistakes.some((mistake) => mistake.original === error.original && mistake.correction === error.correction)
    ) {
      return state
    }
    return {
      ...state,
      mistakes: [...state.mistakes, { ...error, id, createdAt: now.toISOString() }],
      cards: { ...state.cards, [`m:${id}`]: newCard(now, 24 * 60 * 60 * 1000) },
    }
  })
}

export function removeMistake(id: string) {
  update((state) => {
    const cards = { ...state.cards }
    delete cards[`m:${id}`]
    return { ...state, cards, mistakes: state.mistakes.filter((mistake) => mistake.id !== id) }
  })
}
