/**
 * Writes src/content/ipa.json: the IPA transcription of each built-in word, from German Wiktionary
 * (de.wiktionary.org, CC BY-SA 4.0) as extracted by kaikki.org. German Wiktionary transcribes far
 * more words than English Wiktionary, in one consistent phonetic style. Matches the headword and its part of speech, so
 * homographs get the right reading, and falls back to any part of speech. Reflexive verbs are
 * looked up without "sich", which Wiktionary leaves out of headwords.
 *
 * Usage: download https://kaikki.org/dewiktionary/Deutsch/kaikki.org-dictionary-Deutsch.jsonl.gz (about 300 MB), then
 *   npx tsx scripts/build-ipa.ts <path to the .jsonl.gz>
 */
import { createReadStream, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { createGunzip } from 'node:zlib'
import type { Word, WordKind } from '../src/content/types'
import { BUILT_IN_WORDS } from '../src/content/words'

/** kaikki.org part-of-speech names for each word kind. */
const PARTS_OF_SPEECH: Record<WordKind, string[]> = {
  noun: ['noun'],
  verb: ['verb'],
  adjective: ['adj'],
  adverb: ['adv'],
  phrase: ['phrase', 'intj', 'prep_phrase'],
  preposition: ['prep', 'postp'],
  conjunction: ['conj'],
  other: ['num', 'pron', 'det', 'article', 'particle', 'name'],
}

interface KaikkiEntry {
  word: string
  pos: string
  sounds?: { ipa?: string }[]
}

/**
 * Wiktionary headwords to try for an app word, best first: "sich bewerben" → "bewerben";
 * "Danke!" → "Danke", then "danke".
 */
function headwords(word: Word): string[] {
  const plain = word.german.replace(/^sich\s+/, '').replace(/[\s.!?…]+$/, '')
  const lowerFirst = plain.charAt(0).toLowerCase() + plain.slice(1)
  return [...new Set([plain, lowerFirst])]
}

/** The first transcription, which German Wiktionary gives for the standard pronunciation. */
function bestIpa(entry: KaikkiEntry): string | undefined {
  return (entry.sounds ?? []).map((sound) => sound.ipa).find((ipa): ipa is string => !!ipa)
}

async function main() {
  const dumpPath = process.argv[2]
  if (!dumpPath) throw new Error('Pass the path to the kaikki.org German Wiktionary .jsonl.gz file.')
  const wanted = new Set(BUILT_IN_WORDS.flatMap(headwords))
  // Headword → part of speech → IPA, keeping the first entry seen for each.
  const found = new Map<string, Map<string, string>>()

  const file = createReadStream(dumpPath)
  const input = dumpPath.endsWith('.gz') ? file.pipe(createGunzip()) : file
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) {
    if (!line.includes('"ipa"')) continue
    const entry = JSON.parse(line) as KaikkiEntry
    if (!wanted.has(entry.word)) continue
    const ipa = bestIpa(entry)
    if (!ipa) continue
    const byPart = found.get(entry.word) ?? new Map<string, string>()
    if (!byPart.has(entry.pos)) byPart.set(entry.pos, ipa)
    found.set(entry.word, byPart)
  }

  const ipaById: Record<string, string> = {}
  for (const word of BUILT_IN_WORDS) {
    const byPart = headwords(word)
      .map((candidate) => found.get(candidate))
      .find(Boolean)
    if (!byPart) continue
    const matching = PARTS_OF_SPEECH[word.kind].map((part) => byPart.get(part)).find(Boolean)
    ipaById[word.id] = matching ?? [...byPart.values()][0]
  }

  const sorted = Object.fromEntries(Object.entries(ipaById).sort(([a], [b]) => a.localeCompare(b)))
  writeFileSync('src/content/ipa.json', `${JSON.stringify(sorted, null, 1)}\n`)
  const missing = BUILT_IN_WORDS.filter((word) => !sorted[word.id])
  console.log(`${Object.keys(sorted).length} of ${BUILT_IN_WORDS.length} words have IPA`)
  console.log(`missing (${missing.length}):`, missing.slice(0, 60).map((word) => word.german).join(', '))
}

main()
