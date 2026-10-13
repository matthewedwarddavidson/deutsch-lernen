/**
 * Builds a believable two months of study, for README screenshots and demos.
 * Usage: npx tsx scripts/demo-state.ts > demo-state.json
 */
import { READING_TEXTS } from '../src/content/reading'
import { LISTENING_TEXTS } from '../src/content/listening'
import { WRITING_TASKS } from '../src/content/writing'
import { cardsForNewWord, cardsForTopic, nextNewWords } from '../src/lib/cards'
import { nextTopic } from '../src/lib/grading'
import { Rating, reviewCard, type Grade } from '../src/lib/srs'
import { initialState, type ActivityKind, type AppState } from '../src/lib/store'

const DAY = 24 * 60 * 60 * 1000
const DAYS = 60

// Repeatable pseudo-random numbers, so the screenshots don't change between runs.
let seed = 42
function random(): number {
  seed = (seed * 1103515245 + 12345) % 2 ** 31
  return seed / 2 ** 31
}

function grade(): Grade {
  const roll = random()
  if (roll < 0.1) return Rating.Again
  if (roll < 0.22) return Rating.Hard
  if (roll < 0.93) return Rating.Good
  return Rating.Easy
}

function addActivity(state: AppState, at: Date, kind: ActivityKind, minutes: number) {
  state.activity.push({ at: at.toISOString(), kind, seconds: Math.round(minutes * 60) })
}

function reviewDueCards(state: AppState, now: Date) {
  let reviewed = 0
  for (const [id, card] of Object.entries(state.cards)) {
    if (new Date(card.due) > now) continue
    const chosen = grade()
    state.cards[id] = reviewCard(card, chosen, now)
    state.log.push({ cardId: id, at: now.toISOString(), grade: chosen })
    reviewed++
  }
  addActivity(state, now, 'review', reviewed * 0.15)
}

function learnWords(state: AppState, now: Date, count: number) {
  for (const word of nextNewWords(state, count)) {
    Object.assign(state.cards, cardsForNewWord(word, now))
    state.wordsLearned[word.id] = now.toISOString()
  }
  addActivity(state, now, 'learn', 6)
}

function studyDay(state: AppState, day: number, now: Date) {
  reviewDueCards(state, now)
  learnWords(state, now, 8)
  if (day % 4 === 0) {
    const topic = nextTopic(state)
    if (topic) {
      state.grammar[topic.id] = { studiedAt: now.toISOString() }
      Object.assign(state.cards, cardsForTopic(topic, now))
      addActivity(state, now, 'grammar', 15)
    }
  }
  if (day % 3 === 0) {
    const text = READING_TEXTS.filter((item) => item.level === 'B1' && !(item.id in state.reading))[0]
    if (text) state.reading[text.id] = { completedAt: now.toISOString(), score: 0.6 + random() * 0.4 }
    addActivity(state, now, 'reading', 12)
  }
  if (day % 3 === 1) {
    const text = LISTENING_TEXTS.filter((item) => item.level === 'B1' && !(item.id in state.listening))[0]
    if (text) state.listening[text.id] = { completedAt: now.toISOString(), score: 0.5 + random() * 0.5 }
    addActivity(state, now, 'listening', 10)
  }
  if (day % 7 === 2) {
    const task = WRITING_TASKS.filter((item) => item.level === 'B1')[state.writing.length]
    if (task) {
      state.writing.push({ id: `demo-${day}`, taskId: task.id, text: task.model, savedAt: now.toISOString() })
      addActivity(state, now, 'writing', 25)
    }
  }
  if (day % 5 === 0) addActivity(state, now, 'fluency', 5)
  if (day % 9 === 0) {
    state.readingSpeeds.push({
      at: now.toISOString(),
      textId: 'neu-in-der-wg',
      wordsPerMinute: Math.round(90 + (DAYS - day) * 0.7 + random() * 8),
    })
  }
}

const state = initialState()
state.settings = {
  ...state.settings,
  name: 'Sam',
  welcomeDismissed: true,
  lastBackupAt: new Date().toISOString(),
  studyPlan: 'Nach dem Abendessen, am Schreibtisch, 20 Minuten.',
}
state.mistakes = [
  {
    id: 'demo-mistake-1',
    category: 'Word order',
    original: 'Ich weiß, dass er kommt morgen.',
    correction: 'Ich weiß, dass er morgen kommt.',
    explanation: 'dass sends the verb to the end.',
    createdAt: new Date(Date.now() - 20 * DAY).toISOString(),
  },
  {
    id: 'demo-mistake-2',
    category: 'Adjective endings',
    original: 'mit einem neuen Auto, in einer kleine Wohnung',
    correction: 'in einer kleinen Wohnung',
    explanation: 'Dative after ein-words: -en.',
    createdAt: new Date(Date.now() - 12 * DAY).toISOString(),
  },
]
state.exams.push({
  id: 'demo-exam',
  setId: 'lesen-b1-1',
  module: 'lesen',
  at: new Date(Date.now() - 10 * DAY).toISOString(),
  score: 67,
  predicted: 75,
  minutes: 58,
})

for (let day = DAYS; day >= 1; day--) {
  // About one day in six off, like real life.
  if (day % 6 === 3) continue
  const now = new Date(Date.now() - day * DAY)
  now.setHours(19, 0, 0, 0)
  // The first month at A2, then B1.
  state.settings.level = day > 30 ? 'A2' : 'B1'
  studyDay(state, day, now)
}

process.stdout.write(JSON.stringify(state))
