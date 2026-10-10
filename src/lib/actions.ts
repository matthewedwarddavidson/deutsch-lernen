import type { GrammarTopic, ListeningText, ReadingText, Word, WritingTask } from '../content/types'
import { cardsForNewWord, cardsForTopic } from './cards'
import { newCard, reviewCard, type Grade } from './srs'
import { update, type ActivityKind, type Mistake, type Settings, type WritingFeedback } from './store'

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

export function forgetWord(word: Word) {
  update((state) => {
    const cards = { ...state.cards }
    delete cards[`w:${word.id}:r`]
    delete cards[`w:${word.id}:p`]
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

export function completeReading(text: ReadingText, score: number) {
  update((state) => ({
    ...state,
    reading: { ...state.reading, [text.id]: { completedAt: new Date().toISOString(), score } },
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

export function saveWriting(id: string, taskId: string, text: string, feedback?: WritingFeedback) {
  update((state) => {
    const others = state.writing.filter((attempt) => attempt.id !== id)
    const existing = state.writing.find((attempt) => attempt.id === id)
    return {
      ...state,
      writing: [
        ...others,
        { id, taskId, text, savedAt: new Date().toISOString(), feedback: feedback ?? existing?.feedback },
      ],
    }
  })
}

export function deleteWriting(id: string) {
  update((state) => ({ ...state, writing: state.writing.filter((attempt) => attempt.id !== id) }))
}

export function addCustomWord(word: Word) {
  update((state) => ({ ...state, customWords: [...state.customWords.filter((w) => w.id !== word.id), word] }))
}

/** Adds imported words, skipping any already in the list. Returns how many were new. */
export function addCustomWords(words: Word[]): number {
  let added = 0
  update((state) => {
    const seen = new Set(state.customWords.map((word) => word.id))
    const fresh: Word[] = []
    for (const word of words) {
      if (seen.has(word.id)) continue
      seen.add(word.id)
      fresh.push(word)
    }
    added = fresh.length
    return { ...state, customWords: [...state.customWords, ...fresh] }
  })
  return added
}

export function removeCustomWord(word: Word) {
  forgetWord(word)
  update((state) => ({ ...state, customWords: state.customWords.filter((w) => w.id !== word.id) }))
}

export function saveGeneratedReading(text: ReadingText) {
  update((state) => ({ ...state, generated: { ...state.generated, reading: [...state.generated.reading, text] } }))
}

export function saveGeneratedListening(text: ListeningText) {
  update((state) => ({
    ...state,
    generated: { ...state.generated, listening: [...state.generated.listening, text] },
  }))
}

export function saveGeneratedWriting(task: WritingTask) {
  update((state) => ({ ...state, generated: { ...state.generated, writing: [...state.generated.writing, task] } }))
}

export function deleteGenerated(kind: 'reading' | 'listening' | 'writing', id: string) {
  update((state) => ({
    ...state,
    generated: {
      ...state.generated,
      [kind]: (state.generated[kind] as { id: string }[]).filter((item) => item.id !== id),
    },
  }))
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
