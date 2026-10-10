/**
 * Shared by the app and the audio build script, so a sentence spoken in the
 * app finds the recording made for it.
 */

/** Recorded neural voices (Piper, CC0): Thorsten (male), Kerstin (female), Thorsten in a second style. */
export const RECORDED_VOICES = ['thorsten', 'kerstin', 'thorsten-emotional'] as const
export type RecordedVoice = (typeof RECORDED_VOICES)[number]

export const DEFAULT_VOICE: RecordedVoice = 'thorsten'

/** Strips formatting marks and tidies whitespace, so the same sentence always has the same key. */
export function cleanForSpeech(text: string): string {
  return text.normalize('NFC').replace(/\*+/g, '').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim()
}

/** The text hashed to name a recording. */
export function recordingSource(voice: RecordedVoice, text: string): string {
  return `${voice}|${cleanForSpeech(text)}`
}

export function toHex(bytes: ArrayBuffer): string {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

/** Recordings are named by the first 16 hex characters of the SHA-1 of their source. */
export const KEY_LENGTH = 16
