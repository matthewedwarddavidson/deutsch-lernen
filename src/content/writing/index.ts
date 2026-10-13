import type { WritingTask } from '../types'
import { TASKS_A1 } from './tasks-a1'
import { TASKS } from './tasks'
import { TASKS_MORE } from './tasks-more'

export const WRITING_TASKS: WritingTask[] = [...TASKS_A1, ...TASKS, ...TASKS_MORE]
