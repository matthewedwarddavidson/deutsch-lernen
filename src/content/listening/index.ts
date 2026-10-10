import { RECORDED_VOICES, type RecordedVoice } from '../../lib/speechText'
import type { ListeningText } from '../types'
import { SCRIPTS } from './scripts'
import { SCRIPTS_MORE } from './scripts-more'

export const LISTENING_TEXTS: ListeningText[] = [...SCRIPTS, ...SCRIPTS_MORE]

/** The voice for a speaker: as set in the script, otherwise the speakers take the voices in turn. */
export function voiceForSpeaker(text: ListeningText, speaker: string): RecordedVoice {
  const chosen = text.voices?.[speaker]
  if (chosen) return chosen
  const speakers = [...new Set(text.lines.map((line) => line.speaker))]
  return RECORDED_VOICES[speakers.indexOf(speaker) % RECORDED_VOICES.length]
}
