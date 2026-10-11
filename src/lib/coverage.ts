import { BUILT_IN_WORDS } from '../content/words'
import type { ReadingText, Word } from '../content/types'
import { levelIndex } from './cards'
import type { AppState } from './store'

/** Lower-case word forms the app teaches (lemma and plural), mapped to their words. */
let formsIndex: Map<string, Word> | undefined

function wordForms(): Map<string, Word> {
  if (formsIndex) return formsIndex
  formsIndex = new Map()
  for (const word of BUILT_IN_WORDS) {
    const lemma = word.german.toLowerCase().replace(/^sich /, '')
    if (!lemma.includes(' ')) formsIndex.set(lemma, word)
    if (word.plural) formsIndex.set(word.plural.toLowerCase(), word)
  }
  return formsIndex
}

function tokens(text: string): string[] {
  return text.toLowerCase().match(/\p{L}+/gu) ?? []
}

/** The longest word of a glossed phrase: the hard one, rather than small words like "um". */
function mainToken(phrase: string): string {
  return tokens(phrase).sort((a, b) => b.length - a.length)[0] ?? ''
}

/**
 * A rough share of the text's running words you know. A word counts as unknown if it is
 * in the app's word list at or above your target level and you haven't learned it, or if
 * it is the main word of a glossed phrase. Everything else is assumed known: words below
 * your level and everyday words the list leaves out. Inflected forms (geht, ging) aren't
 * matched, so the estimate leans optimistic.
 */
export function knownShare(text: ReadingText, state: AppState): number {
  const forms = wordForms()
  const glossed = new Set(Object.keys(text.glossary).map(mainToken))
  const target = levelIndex(state.settings.level)
  const all = text.body.flatMap((paragraph) => tokens(paragraph))
  if (all.length === 0) return 1
  const unknown = all.filter((token) => {
    const word = forms.get(token)
    if (word) return levelIndex(word.level) >= target && !(word.id in state.wordsLearned)
    return glossed.has(token)
  }).length
  return 1 - unknown / all.length
}

/** How a share of known words suits reading: 98%+ for easy reading, 95–98% with help, below that hard. */
export function coverageBand(share: number): 'easy' | 'study' | 'hard' {
  if (share >= 0.98) return 'easy'
  if (share >= 0.95) return 'study'
  return 'hard'
}
