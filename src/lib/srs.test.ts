import { describe, expect, it } from 'vitest'
import { isDue, newCard, Rating, reviewCard } from './srs'

describe('reviewCard', () => {
  it('schedules a good answer later than an again', () => {
    const now = new Date('2026-01-01T10:00:00Z')
    const card = newCard(now)
    const good = reviewCard(card, Rating.Good, now)
    const again = reviewCard(card, Rating.Again, now)
    expect(new Date(good.due).getTime()).toBeGreaterThan(new Date(again.due).getTime())
  })

  it('survives a review dated before the previous one', () => {
    const now = new Date('2026-01-10T10:00:00Z')
    const reviewed = reviewCard(newCard(now), Rating.Good, now)
    expect(() => reviewCard(reviewed, Rating.Good, new Date('2026-01-09T10:00:00Z'))).not.toThrow()
  })

  it('delays new cards when asked', () => {
    const now = new Date('2026-01-01T10:00:00Z')
    expect(isDue(newCard(now, 60_000), now)).toBe(false)
    expect(isDue(newCard(now), now)).toBe(true)
  })
})
