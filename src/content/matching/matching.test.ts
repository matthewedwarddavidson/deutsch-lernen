import { describe, expect, it } from 'vitest'
import { MATCHING_TASKS } from './index'

describe('matching tasks', () => {
  it.each(MATCHING_TASKS.map((task) => [task.id, task] as const))('%s has valid answers', (_, task) => {
    const answers = task.people.map((person) => person.answer)
    const used = answers.filter((answer): answer is number => answer !== null)
    expect(answers.filter((answer) => answer === null)).toHaveLength(1)
    expect(new Set(used).size).toBe(used.length)
    expect(used.every((answer) => answer >= 0 && answer < task.ads.length)).toBe(true)
  })
})
