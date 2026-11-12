import type { Word } from './types'
import ipaById from './ipa.json'

const IPA: Record<string, string> = ipaById

/**
 * The word's pronunciation in IPA, from German Wiktionary (CC BY-SA 4.0) via kaikki.org; built by
 * scripts/build-ipa.ts. Undefined for words Wiktionary has no transcription for, and your own words.
 */
export function ipaFor(word: Word): string | undefined {
  return IPA[word.id]
}
