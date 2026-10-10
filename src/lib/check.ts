export type Verdict = 'correct' | 'almost' | 'wrong'

export interface CheckResult {
  verdict: Verdict
  /** The accepted answer closest to what was typed. */
  expected: string
  note?: string
}

const UMLAUT_SPELLINGS: [RegExp, string][] = [
  [/ae/g, 'ä'],
  [/oe/g, 'ö'],
  [/ue/g, 'ü'],
  [/Ae/g, 'Ä'],
  [/Oe/g, 'Ö'],
  [/Ue/g, 'Ü'],
]

/** Tidies spacing, quotes and dashes, and drops final punctuation. */
export function normalise(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[‘’‚`´]/g, "'")
    .replace(/[“”„«»]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim()
}

function withoutCommas(text: string): string {
  return text.replace(/,/g, '').replace(/\s+/g, ' ')
}

function replaceUmlautSpellings(text: string): string {
  return UMLAUT_SPELLINGS.reduce((result, [pattern, umlaut]) => result.replace(pattern, umlaut), text)
}

export function editDistance(a: string, b: string): number {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i++) {
    let diagonal = previous[0]
    previous[0] = i
    for (let j = 1; j <= b.length; j++) {
      const above = previous[j]
      const substitution = diagonal + (a[i - 1] === b[j - 1] ? 0 : 1)
      previous[j] = Math.min(above + 1, previous[j - 1] + 1, substitution)
      diagonal = above
    }
  }
  return previous[b.length]
}

function allowedTypos(length: number): number {
  if (length >= 12) return 2
  if (length >= 5) return 1
  return 0
}

function compareOne(given: string, expected: string): CheckResult {
  const typed = normalise(given)
  const target = normalise(expected)

  if (typed === target) return { verdict: 'correct', expected }

  if (withoutCommas(typed) === withoutCommas(target)) {
    return { verdict: 'almost', expected, note: 'Check the commas.' }
  }
  if (typed.toLowerCase() === target.toLowerCase()) {
    return { verdict: 'almost', expected, note: 'Check capital letters: nouns are capitalised.' }
  }
  if (replaceUmlautSpellings(typed) === target) {
    return { verdict: 'almost', expected, note: 'Use ä, ö, ü rather than ae, oe, ue.' }
  }
  if (typed.replace(/ss/g, 'ß') === target || typed.replace(/ß/g, 'ss') === target) {
    return { verdict: 'almost', expected, note: 'Check ß and ss.' }
  }
  const distance = editDistance(typed.toLowerCase(), target.toLowerCase())
  if (distance > 0 && distance <= allowedTypos(target.length)) {
    return { verdict: 'almost', expected, note: 'Small spelling mistake.' }
  }
  return { verdict: 'wrong', expected }
}

const VERDICT_RANK: Record<Verdict, number> = { correct: 2, almost: 1, wrong: 0 }

/** Checks a typed answer against every accepted answer and returns the best match. */
export function checkAnswer(given: string, accepted: string[]): CheckResult {
  if (normalise(given) === '') return { verdict: 'wrong', expected: accepted[0], note: 'No answer.' }
  let best: CheckResult | undefined
  for (const answer of accepted) {
    const result = compareOne(given, answer)
    if (!best || VERDICT_RANK[result.verdict] > VERDICT_RANK[best.verdict]) best = result
    if (result.verdict === 'correct') break
  }
  return best!
}

const ARTICLES = ['der', 'die', 'das']

/**
 * Checks a noun typed with its article. A wrong or missing article is wrong,
 * because gender is part of knowing the word.
 */
export function checkNoun(given: string, article: string, noun: string): CheckResult {
  const expected = `${article} ${noun}`
  const [firstWord, ...rest] = normalise(given).split(' ')
  const typedArticle = firstWord?.toLowerCase()

  if (!ARTICLES.includes(typedArticle)) {
    const nounOnly = compareOne(given, noun)
    if (nounOnly.verdict !== 'wrong') {
      return { verdict: 'wrong', expected, note: `Right word, but learn it with its article: ${expected}.` }
    }
    return { verdict: 'wrong', expected }
  }

  const nounResult = compareOne(rest.join(' '), noun)
  if (typedArticle !== article) {
    const note =
      nounResult.verdict === 'wrong'
        ? undefined
        : `Wrong gender: it's ${expected}.`
    return { verdict: 'wrong', expected, note }
  }
  return { ...nounResult, expected }
}

export type TokenStatus = 'ok' | 'wrong' | 'missing' | 'extra'

export interface TokenDiff {
  text: string
  status: TokenStatus
  /** For wrong tokens: what was typed. */
  typed?: string
}

function tokenise(text: string, keepPunctuation: boolean): string[] {
  const tokens = text.normalize('NFC').replace(/[–—]/g, '-').split(/\s+/)
  const cleaned = keepPunctuation
    ? tokens
    : tokens.map((token) => token.replace(/^[„"“»«(]+|[.,!?;:"“”»«)]+$/g, ''))
  return cleaned.filter(Boolean)
}

/**
 * Word-by-word comparison. Uses the longest common subsequence to line the two
 * texts up. Case always counts; punctuation is ignored unless asked for.
 */
export function diffWords(typed: string, expected: string, keepPunctuation = false): TokenDiff[] {
  const typedTokens = tokenise(typed, keepPunctuation)
  const expectedTokens = tokenise(expected, keepPunctuation)
  const rows = typedTokens.length
  const cols = expectedTokens.length
  const lengths = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0))
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      lengths[i][j] =
        typedTokens[i] === expectedTokens[j]
          ? lengths[i + 1][j + 1] + 1
          : Math.max(lengths[i + 1][j], lengths[i][j + 1])
    }
  }

  const result: TokenDiff[] = []
  let i = 0
  let j = 0
  while (i < rows && j < cols) {
    if (typedTokens[i] === expectedTokens[j]) {
      result.push({ text: expectedTokens[j], status: 'ok' })
      i++
      j++
    } else if (lengths[i + 1][j] === lengths[i][j + 1] && lengths[i + 1][j + 1] === lengths[i][j]) {
      // Neither skip helps: treat as a substitution.
      result.push({ text: expectedTokens[j], status: 'wrong', typed: typedTokens[i] })
      i++
      j++
    } else if (lengths[i + 1][j] >= lengths[i][j + 1]) {
      result.push({ text: typedTokens[i], status: 'extra' })
      i++
    } else {
      result.push({ text: expectedTokens[j], status: 'missing' })
      j++
    }
  }
  while (j < cols) result.push({ text: expectedTokens[j++], status: 'missing' })
  while (i < rows) result.push({ text: typedTokens[i++], status: 'extra' })
  return result
}

export function diffScore(diff: TokenDiff[]): number {
  const expectedCount = diff.filter((token) => token.status !== 'extra').length
  const correct = diff.filter((token) => token.status === 'ok').length
  const extra = diff.filter((token) => token.status === 'extra').length
  if (expectedCount === 0) return 0
  return Math.max(0, (correct - extra * 0.5) / expectedCount)
}
