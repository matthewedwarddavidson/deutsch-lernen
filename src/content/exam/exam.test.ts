import { describe, expect, it } from 'vitest'
import { LISTENING_TEXTS } from '../listening'
import { MATCHING_TASKS } from '../matching'
import { HOEREN_SETS, LESEN_SETS } from './index'
import type { ExamItem } from './types'

function validChoice(item: ExamItem): boolean {
  return item.kind !== 'choice' || (item.answer >= 0 && item.answer < item.options.length)
}

describe('exam practice papers', () => {
  it('follow the B1 Lesen layout with valid answers', () => {
    for (const set of LESEN_SETS) {
      expect(set.teil1.items).toHaveLength(6)
      expect(set.teil2.flatMap((text) => text.items)).toHaveLength(6)
      expect(MATCHING_TASKS.some((task) => task.id === set.teil3)).toBe(true)
      expect(set.teil4.opinions).toHaveLength(7)
      expect(set.teil5.items).toHaveLength(4)
      const items = [...set.teil1.items, ...set.teil2.flatMap((text) => text.items), ...set.teil5.items]
      expect(items.every(validChoice)).toBe(true)
    }
  })

  it('use listening scripts that exist', () => {
    for (const set of HOEREN_SETS) {
      for (const part of set.parts) expect(LISTENING_TEXTS.some((text) => text.id === part.scriptId)).toBe(true)
    }
  })
})
