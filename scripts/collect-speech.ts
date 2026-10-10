/**
 * Lists every sentence the app can read aloud from built-in content, with the
 * voice to use and the file name of its recording.
 *
 * Usage: npx tsx scripts/collect-speech.ts > audio-build/requests.json
 */
import { createHash } from 'node:crypto'
import coreVerbs from '../src/content/coreVerbs'
import { GRAMMAR_TOPICS } from '../src/content/grammar'
import { LISTENING_TEXTS, voiceForSpeaker } from '../src/content/listening'
import { displayGerman } from '../src/content/parseWords'
import { READING_TEXTS } from '../src/content/reading'
import { BUILT_IN_WORDS } from '../src/content/words'
import { solvedSentence } from '../src/lib/grading'
import { isIrregular, verbFormsSpeech } from '../src/lib/verbForms'
import { cleanForSpeech, DEFAULT_VOICE, KEY_LENGTH, recordingSource, type RecordedVoice } from '../src/lib/speechText'

interface Request {
  key: string
  voice: RecordedVoice
  text: string
}

const requests = new Map<string, Request>()

function add(text: string, voice: RecordedVoice = DEFAULT_VOICE) {
  const clean = cleanForSpeech(text)
  if (!clean) return
  const key = createHash('sha1').update(recordingSource(voice, clean), 'utf8').digest('hex').slice(0, KEY_LENGTH)
  requests.set(key, { key, voice, text: clean })
}

for (const word of BUILT_IN_WORDS) {
  add(displayGerman(word))
  add(word.example)
  if (isIrregular(word)) add(verbFormsSpeech(word))
}

for (const topic of GRAMMAR_TOPICS) {
  for (const section of topic.sections) {
    for (const example of section.examples ?? []) add(example.de)
  }
  for (const exercise of topic.exercises) add(solvedSentence(exercise))
}

for (const text of READING_TEXTS) {
  add(text.title)
  for (const paragraph of text.body) add(paragraph)
}

for (const text of LISTENING_TEXTS) {
  for (const line of text.lines) add(line.text, voiceForSpeaker(text, line.speaker))
}

add('Guten Tag! Wie geht es Ihnen heute?')

for (const line of coreVerbs.trim().split('\n')) {
  const [german, forms] = line.split('|').map((part) => part.trim())
  add(`${german}, ${forms}`)
}

process.stdout.write(JSON.stringify([...requests.values()], null, 1))
