import type { ReadingText } from '../types'
import { textsA2B1 } from './texts-a2-b1'
import { textsB1B2 } from './texts-b1-b2'
import { textsMore } from './texts-more'

export const READING_TEXTS: ReadingText[] = [...textsA2B1, ...textsB1B2, ...textsMore]
