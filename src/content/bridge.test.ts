import { describe, expect, it } from 'vitest'
import { BRIDGE_SECTIONS } from './bridge'
import { topicById } from './grammar'

describe('English bridge', () => {
  it('has unique ids', () => {
    const ids = BRIDGE_SECTIONS.map((section) => section.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('links only to grammar topics that exist', () => {
    const missing = BRIDGE_SECTIONS.flatMap((section) => section.topicIds.filter((id) => !topicById(id)))
    expect(missing).toEqual([])
  })
})
