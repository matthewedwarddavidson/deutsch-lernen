import { updateSettings } from './actions'
import { exportState, getState } from './store'

const REMIND_AFTER_DAYS = 14

/** Saves all progress as a JSON file and remembers when. */
export function downloadBackup() {
  const blob = new Blob([exportState()], { type: 'application/json' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `deutsch-lernen-${new Date().toISOString().slice(0, 10)}.json`
  link.click()
  URL.revokeObjectURL(link.href)
  updateSettings({ lastBackupAt: new Date().toISOString() })
}

/** True once there is progress worth keeping and no recent backup. */
export function backupDue(now: Date): boolean {
  const state = getState()
  const hasProgress = Object.keys(state.wordsLearned).length > 0 || state.writing.length > 0
  if (!hasProgress) return false
  const last = state.settings.lastBackupAt
  if (!last) return true
  return now.getTime() - new Date(last).getTime() > REMIND_AFTER_DAYS * 24 * 60 * 60 * 1000
}

/** Asks the browser not to clear this site's storage when space runs low. */
export function requestPersistentStorage() {
  navigator.storage?.persist?.().catch(() => undefined)
}
