import { displayGerman, plainExample } from '../content/parseWords'
import { themeById } from '../content/themes'
import type { Word } from '../content/types'
import { SpeakButton } from './SpeakButton'

const KIND_LABELS: Record<Word['kind'], string> = {
  noun: 'Nomen',
  verb: 'Verb',
  adjective: 'Adjektiv',
  adverb: 'Adverb',
  phrase: 'Redemittel',
  preposition: 'Präposition',
  conjunction: 'Konnektor',
  other: 'Wort',
}

export function GermanWord({ word, size = 'normal' }: { word: Word; size?: 'normal' | 'large' }) {
  const style = size === 'large' ? { fontSize: '2rem', fontWeight: 600 } : { fontWeight: 600 }
  return (
    <span className="de" style={style}>
      {word.gender && <span className={`gender-${word.gender}`}>{word.gender} </span>}
      {word.german}
    </span>
  )
}

/** Everything known about a word: forms, usage, example with audio. */
export function WordView({ word, showEnglish = true }: { word: Word; showEnglish?: boolean }) {
  const example = plainExample(word.example)
  return (
    <div className="stack" style={{ gap: 14 }}>
      <div className="row between">
        <div className="row" style={{ gap: 6 }}>
          <GermanWord word={word} size="large" />
          <SpeakButton text={displayGerman(word)} />
        </div>
        <div className="row" style={{ gap: 6 }}>
          <span className="pill">{KIND_LABELS[word.kind]}</span>
          <span className="pill accent">{word.level}</span>
        </div>
      </div>
      {showEnglish && <div style={{ fontSize: '1.15rem' }}>{word.english}</div>}
      <WordGrammar word={word} />
      <div className="example">
        <SpeakButton text={example} />
        <div className="example-text">
          <div className="de">{example}</div>
          {showEnglish && <div className="en">{word.exampleEnglish}</div>}
        </div>
      </div>
      <div className="faint small">{themeById(word.theme).title}</div>
    </div>
  )
}

export function WordGrammar({ word }: { word: Word }) {
  const facts: { label: string; value: string }[] = []
  if (word.kind === 'noun') {
    facts.push({ label: 'Plural', value: word.plural ? `die ${word.plural}` : 'no plural' })
  }
  if (word.forms) facts.push({ label: word.kind === 'verb' ? 'Forms' : 'Comparison', value: word.forms })
  if (word.usage) facts.push({ label: 'Usage', value: word.usage })
  if (facts.length === 0) return null
  return (
    <dl className="word-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd className="de">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
