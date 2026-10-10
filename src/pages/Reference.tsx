import { useMemo, useState } from 'react'
import { Rich } from '../components/Rich'
import { SpeakButton } from '../components/SpeakButton'
import coreVerbList from '../content/coreVerbs'
import type { Word } from '../content/types'
import { allWords } from '../lib/cards'
import { useAppState } from '../lib/store'
import { isIrregular, verbForms, verbFormsSpeech } from '../lib/verbForms'

interface Table {
  title: string
  note?: string
  head: string[]
  rows: string[][]
}

const TABLES: Table[] = [
  {
    title: 'Definite article',
    head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
    rows: [
      ['Nominativ', 'der', 'das', 'die', 'die'],
      ['Akkusativ', '**den**', 'das', 'die', 'die'],
      ['Dativ', '**dem**', '**dem**', '**der**', '**den** (+n)'],
      ['Genitiv', '**des** (+s)', '**des** (+s)', '**der**', '**der**'],
    ],
  },
  {
    title: 'ein, kein, mein …',
    head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
    rows: [
      ['Nominativ', 'ein', 'ein', 'eine', 'keine'],
      ['Akkusativ', '**einen**', 'ein', 'eine', 'keine'],
      ['Dativ', '**einem**', '**einem**', '**einer**', '**keinen** (+n)'],
      ['Genitiv', '**eines** (+s)', '**eines** (+s)', '**einer**', '**keiner**'],
    ],
  },
  {
    title: 'Personal pronouns',
    head: ['Nominativ', 'Akkusativ', 'Dativ', 'Possessiv'],
    rows: [
      ['ich', 'mich', 'mir', 'mein'],
      ['du', 'dich', 'dir', 'dein'],
      ['er', 'ihn', 'ihm', 'sein'],
      ['sie', 'sie', 'ihr', 'ihr'],
      ['es', 'es', 'ihm', 'sein'],
      ['wir', 'uns', 'uns', 'unser'],
      ['ihr', 'euch', 'euch', 'euer'],
      ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen', 'ihr / Ihr'],
    ],
  },
  {
    title: 'Adjective endings',
    note: 'After der/die/das: -e or -en. After ein/kein/mein: the same, except where ein has no ending (-er, -es). No article: the ending the article would have had.',
    head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
    rows: [
      ['Nom (der)', 'der gut**e**', 'das gut**e**', 'die gut**e**', 'die gut**en**'],
      ['Nom (ein)', 'ein gut**er**', 'ein gut**es**', 'eine gut**e**', 'keine gut**en**'],
      ['Nom (–)', 'gut**er**', 'gut**es**', 'gut**e**', 'gut**e**'],
      ['Akk (der)', 'den gut**en**', 'das gut**e**', 'die gut**e**', 'die gut**en**'],
      ['Akk (ein)', 'einen gut**en**', 'ein gut**es**', 'eine gut**e**', 'keine gut**en**'],
      ['Akk (–)', 'gut**en**', 'gut**es**', 'gut**e**', 'gut**e**'],
      ['Dat (der/ein)', 'dem gut**en**', 'dem gut**en**', 'der gut**en**', 'den gut**en**'],
      ['Dat (–)', 'gut**em**', 'gut**em**', 'gut**er**', 'gut**en**'],
    ],
  },
  {
    title: 'Prepositions by case',
    head: ['Case', 'Prepositions'],
    rows: [
      ['Akkusativ', 'durch, für, gegen, ohne, um, bis, entlang'],
      ['Dativ', 'aus, bei, mit, nach, seit, von, zu, gegenüber, ab'],
      ['Akk (wohin?) / Dat (wo?)', 'an, auf, hinter, in, neben, über, unter, vor, zwischen'],
      ['Genitiv', 'wegen, trotz, während, statt, innerhalb, außerhalb, aufgrund, angesichts'],
    ],
  },
  {
    title: 'Word order',
    head: ['Clause', 'Verb position', 'Example'],
    rows: [
      ['Main clause', '2nd', 'Morgen **fahre** ich nach Berlin.'],
      ['Yes/no question, imperative', '1st', '**Fährst** du morgen? **Fahr** vorsichtig!'],
      ['After weil, dass, wenn, ob, obwohl, als, …', 'last', '…, weil ich morgen nach Berlin **fahre**.'],
      ['After und, aber, oder, denn, sondern', '2nd (no change)', '…, denn ich **fahre** morgen.'],
      ['After deshalb, trotzdem, dann, …', '2nd (right after it)', 'Deshalb **fahre** ich morgen.'],
    ],
  },
  {
    title: 'Konjunktiv II',
    head: ['', 'sein', 'haben', 'werden', 'können', 'müssen'],
    rows: [
      ['ich', 'wäre', 'hätte', 'würde', 'könnte', 'müsste'],
      ['du', 'wärst', 'hättest', 'würdest', 'könntest', 'müsstest'],
      ['er/sie/es', 'wäre', 'hätte', 'würde', 'könnte', 'müsste'],
      ['wir/sie/Sie', 'wären', 'hätten', 'würden', 'könnten', 'müssten'],
    ],
  },
]

/** The core verbs as words, so they share the forms helpers. */
function coreVerbs(): Word[] {
  return coreVerbList
    .trim()
    .split('\n')
    .map((line) => {
      const [german, forms, english] = line.split('|').map((part) => part.trim())
      return {
        id: `core-${german}`,
        kind: 'verb',
        german,
        forms,
        english,
        example: '',
        exampleEnglish: '',
        theme: 'allgemein',
        level: 'A2',
      }
    })
}

export function Reference() {
  const state = useAppState()
  const [filter, setFilter] = useState('')
  const verbs = useMemo(
    () =>
      [
        ...allWords(state).filter(isIrregular),
        ...coreVerbs().filter((core) => !allWords(state).some((word) => word.german === core.german)),
      ]
        .map((word) => ({ word, forms: verbForms(word)! }))
        .sort((a, b) => a.word.german.replace(/^sich /, '').localeCompare(b.word.german.replace(/^sich /, ''), 'de')),
    [state],
  )
  const search = filter.trim().toLowerCase()
  const shownVerbs = verbs.filter(
    ({ word, forms }) =>
      !search ||
      word.german.toLowerCase().includes(search) ||
      word.english.toLowerCase().includes(search) ||
      forms.preterite.toLowerCase().includes(search) ||
      forms.perfect.toLowerCase().includes(search),
  )

  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">Nachschlagen</div>
        <h1>Reference</h1>
        <p>The tables you reach for while writing.</p>
      </div>
      <div className="reference-grid">
        {TABLES.map((table) => (
          <section key={table.title} className="card">
            <h3>{table.title}</h3>
            {table.note && <p className="small muted">{table.note}</p>}
            <div className="table-wrap">
              <table className="grammar-table">
                <thead>
                  <tr>
                    {table.head.map((cell, index) => (
                      <th key={index}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, index) => (
                        <td key={index}>
                          <Rich text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <div className="section">
        <div className="row between">
          <h2 style={{ margin: 0 }}>Irregular verbs</h2>
          <input
            className="input"
            style={{ maxWidth: 260 }}
            placeholder="Search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Search verbs"
          />
        </div>
        <p className="small muted">{verbs.length} verbs: the basics plus every irregular verb in the word lists.</p>
        <div className="card table-wrap" style={{ padding: 0 }}>
          <table className="grammar-table verb-table">
            <thead>
              <tr>
                <th>Infinitiv</th>
                <th>Präsens</th>
                <th>Präteritum</th>
                <th>Perfekt</th>
                <th>English</th>
                <th aria-label="Listen" />
              </tr>
            </thead>
            <tbody>
              {shownVerbs.map(({ word, forms }) => (
                <tr key={word.id}>
                  <td className="de">
                    <strong>{word.german}</strong>
                  </td>
                  <td>{forms.present}</td>
                  <td>{forms.preterite}</td>
                  <td>{forms.perfect}</td>
                  <td className="muted small">{word.english}</td>
                  <td>
                    <SpeakButton text={verbFormsSpeech(word)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
