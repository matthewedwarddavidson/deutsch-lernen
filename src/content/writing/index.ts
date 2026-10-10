import type { WritingTask } from '../types'
import { TASKS } from './tasks'
import { TASKS_MORE } from './tasks-more'

export const WRITING_TASKS: WritingTask[] = [...TASKS, ...TASKS_MORE]
