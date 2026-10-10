/** Text-to-speech using the browser's built-in German voices. */

const PREFERRED_VOICE_NAMES = ['Anna', 'Petra', 'Markus', 'Yannick', 'Helena', 'Google Deutsch', 'Katja', 'Conrad']

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function germanVoices(): SpeechSynthesisVoice[] {
  if (!speechSupported()) return []
  return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith('de'))
}

function voiceQuality(voice: SpeechSynthesisVoice): number {
  let score = 0
  if (/premium|enhanced|natural|neural/i.test(voice.name)) score += 10
  if (voice.lang === 'de-DE') score += 3
  const preferredIndex = PREFERRED_VOICE_NAMES.findIndex((name) => voice.name.includes(name))
  if (preferredIndex >= 0) score += 5 - preferredIndex * 0.1
  if (voice.localService) score += 1
  return score
}

export function bestGermanVoices(): SpeechSynthesisVoice[] {
  return [...germanVoices()].sort((a, b) => voiceQuality(b) - voiceQuality(a))
}

/** Voices load asynchronously in some browsers. Resolves once they are available. */
export function whenVoicesReady(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (!speechSupported()) return resolve([])
    const voices = germanVoices()
    if (voices.length > 0) return resolve(voices)
    const finish = () => resolve(germanVoices())
    window.speechSynthesis.addEventListener('voiceschanged', finish, { once: true })
    setTimeout(finish, 1500)
  })
}

export interface SpeakOptions {
  rate?: number
  voiceURI?: string
  onEnd?: () => void
}

function chooseVoice(voiceURI?: string): SpeechSynthesisVoice | undefined {
  const voices = bestGermanVoices()
  return voices.find((voice) => voice.voiceURI === voiceURI) ?? voices[0]
}

export function stopSpeaking() {
  if (speechSupported()) window.speechSynthesis.cancel()
}

export function speak(text: string, options: SpeakOptions = {}) {
  if (!speechSupported()) return
  stopSpeaking()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'de-DE'
  utterance.rate = options.rate ?? 0.95
  const voice = chooseVoice(options.voiceURI)
  if (voice) utterance.voice = voice
  if (options.onEnd) utterance.onend = options.onEnd
  window.speechSynthesis.speak(utterance)
}

/**
 * Speaks lines one after another, giving each speaker their own voice where
 * more than one German voice is installed.
 */
export function speakDialogue(
  lines: { speaker: string; text: string }[],
  options: SpeakOptions & { onLine?: (index: number) => void } = {},
) {
  if (!speechSupported()) return
  stopSpeaking()
  const voices = bestGermanVoices()
  const main = chooseVoice(options.voiceURI)
  const speakers = [...new Set(lines.map((line) => line.speaker))]
  const voiceFor = (speaker: string) => {
    const index = speakers.indexOf(speaker)
    if (index === 0 || voices.length < 2) return main
    const others = voices.filter((voice) => voice !== main)
    return others[(index - 1) % others.length]
  }

  lines.forEach((line, index) => {
    const utterance = new SpeechSynthesisUtterance(line.text)
    utterance.lang = 'de-DE'
    utterance.rate = options.rate ?? 0.95
    const voice = voiceFor(line.speaker)
    if (voice) utterance.voice = voice
    utterance.onstart = () => options.onLine?.(index)
    if (index === lines.length - 1 && options.onEnd) utterance.onend = options.onEnd
    window.speechSynthesis.speak(utterance)
  })
}
