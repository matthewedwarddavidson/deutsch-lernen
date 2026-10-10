import type { Word } from '../content/types'

export interface VerbForms {
  present: string
  preterite: string
  perfect: string
}

/** Splits "fährt, fuhr, ist gefahren" into its three parts. */
export function verbForms(word: Word): VerbForms | undefined {
  if (word.kind !== 'verb' || !word.forms) return undefined
  const [present, preterite, perfect] = word.forms.split(',').map((part) => part.trim())
  if (!present || !preterite || !perfect) return undefined
  return { present, preterite, perfect }
}

/**
 * A verb is irregular when its Präteritum is not simply stem + -te: strong
 * verbs (fuhr), mixed verbs (dachte) and modals (konnte) all count.
 */
export function isIrregular(word: Word): boolean {
  const forms = verbForms(word)
  if (!forms) return false
  const preterite = forms.preterite.split(' ')[0]
  const infinitive = word.german.replace(/^sich /, '')
  const stem = preterite.replace(/e?te$/, '')
  if (stem === preterite) return true
  return !(infinitive.endsWith(`${stem}en`) || infinitive.endsWith(`${stem}n`))
}

/** What is read aloud for a verb's forms: "fahren, fährt, fuhr, ist gefahren". */
export function verbFormsSpeech(word: Word): string {
  const forms = verbForms(word)
  if (!forms) return word.german
  return `${word.german.replace(/^sich /, '')}, ${forms.present}, ${forms.preterite}, ${forms.perfect}`
}
