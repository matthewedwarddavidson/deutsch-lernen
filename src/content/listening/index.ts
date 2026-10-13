import { RECORDED_VOICES, type RecordedVoice } from '../../lib/speechText'
import type { ListeningText } from '../types'
import { SCRIPTS_A1 } from './scripts-a1'
import { SCRIPTS } from './scripts'
import { SCRIPTS_ADVANCED } from './scripts-advanced'
import { SCRIPTS_EXAM } from './scripts-exam'
import { SCRIPTS_MORE } from './scripts-more'
import { SCRIPTS_SPOKEN } from './scripts-spoken'

export const LISTENING_TEXTS: ListeningText[] = [
  ...SCRIPTS_A1,
  ...SCRIPTS,
  ...SCRIPTS_MORE,
  ...SCRIPTS_EXAM,
  ...SCRIPTS_ADVANCED,
  ...SCRIPTS_SPOKEN,
]

/** The voice for a speaker: as set in the script, otherwise the speakers take the voices in turn. */
export function voiceForSpeaker(text: ListeningText, speaker: string): RecordedVoice {
  const chosen = text.voices?.[speaker]
  if (chosen) return chosen
  const speakers = [...new Set(text.lines.map((line) => line.speaker))]
  return RECORDED_VOICES[speakers.indexOf(speaker) % RECORDED_VOICES.length]
}
