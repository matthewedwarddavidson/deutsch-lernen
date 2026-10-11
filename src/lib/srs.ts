import { createEmptyCard, fsrs, Rating, State, type Card, type Grade } from 'ts-fsrs'

export { Rating, State }
export type { Grade }

/** A scheduler card as stored in localStorage: dates as ISO strings. */
export interface StoredCard {
  due: string
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  learning_steps: number
  reps: number
  lapses: number
  state: State
  last_review?: string
}

export const DEFAULT_RETENTION = 0.9

let scheduler = fsrs({ request_retention: DEFAULT_RETENTION, enable_fuzz: true })
let retention = DEFAULT_RETENTION

/** The chance of remembering a card that reviews aim for. Lower means fewer reviews and more forgetting. */
export function setDesiredRetention(value: number) {
  if (value === retention) return
  retention = value
  scheduler = fsrs({ request_retention: value, enable_fuzz: true })
}

function toStored(card: Card): StoredCard {
  return {
    ...card,
    due: card.due.toISOString(),
    last_review: card.last_review?.toISOString(),
  }
}

function fromStored(card: StoredCard): Card {
  return {
    ...card,
    due: new Date(card.due),
    last_review: card.last_review ? new Date(card.last_review) : undefined,
  }
}

export function newCard(now: Date, dueIn = 0): StoredCard {
  const card = toStored(createEmptyCard(now))
  return { ...card, due: new Date(now.getTime() + dueIn).toISOString() }
}

export function reviewCard(card: StoredCard, grade: Grade, now: Date): StoredCard {
  // A review can't come before the previous one; guards against clock changes.
  const lastReview = card.last_review ? new Date(card.last_review) : undefined
  const at = lastReview && lastReview > now ? lastReview : now
  return toStored(scheduler.next(fromStored(card), at, grade).card)
}

export function isDue(card: StoredCard, now: Date): boolean {
  return new Date(card.due).getTime() <= now.getTime()
}

/** Probability of recall now, from 0 to 1. New cards return 0. */
export function retrievability(card: StoredCard, now: Date): number {
  if (card.state === State.New) return 0
  return scheduler.get_retrievability(fromStored(card), now, false)
}

/** Time until the card would be due after each grade, for button labels. */
export function previewIntervals(card: StoredCard, now: Date): Record<Grade, string> {
  const preview = scheduler.repeat(fromStored(card), now)
  const label = (grade: Grade) => formatInterval(preview[grade].card.due.getTime() - now.getTime())
  return {
    [Rating.Again]: label(Rating.Again),
    [Rating.Hard]: label(Rating.Hard),
    [Rating.Good]: label(Rating.Good),
    [Rating.Easy]: label(Rating.Easy),
  } as Record<Grade, string>
}

export function formatInterval(milliseconds: number): string {
  const minutes = Math.max(1, Math.round(milliseconds / 60000))
  if (minutes < 60) return `${minutes} min`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours} h`
  const days = Math.round(hours / 24)
  if (days < 31) return `${days} d`
  const months = Math.round(days / 30)
  if (months < 12) return `${months} mo`
  return `${(days / 365).toFixed(1)} y`
}

/** A card counts as known once it is in review with at least three weeks' stability. */
export function isMature(card: StoredCard): boolean {
  return card.state === State.Review && card.stability >= 21
}
