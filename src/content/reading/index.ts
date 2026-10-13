import type { ReadingText } from '../types'
import { textsA1 } from './texts-a1'
import { textsA2B1 } from './texts-a2-b1'
import { textsB1B2 } from './texts-b1-b2'
import { textsAdvanced } from './texts-advanced'
import { textsMore } from './texts-more'
import { textsC1 } from './texts-c1'

export const READING_TEXTS: ReadingText[] = [
  ...textsA1,
  ...textsA2B1,
  ...textsB1B2,
  ...textsMore,
  ...textsAdvanced,
  ...textsC1,
]
