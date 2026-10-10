import { useMemo, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Icon } from '../components/Icon'
import { SpeakButton } from '../components/SpeakButton'
import { GermanWord, WordView } from '../components/WordView'
import { displayGerman, slugify } from '../content/parseWords'
import { THEMES } from '../content/themes'
import { LEVELS, type Gender, type Level, type ThemeId, type Word, type WordKind } from '../content/types'
import { ViaClaudeAi } from '../components/ViaClaudeAi'
import { addCustomWord, addCustomWords, forgetWord, learnWord, removeCustomWord } from '../lib/actions'
import { wordImportJob } from '../lib/generation'
import { allWords, isWordLearned, recogniseId } from '../lib/cards'
import { isMature, Rating, retrievability } from '../lib/srs'
import { useNow } from '../lib/hooks'
import { useAppState, type AppState } from '../lib/store'

type Status = 'new' | 'learning' | 'known'

function wordStatus(state: AppState, word: Word): Status {
  if (!isWordLearned(state, word)) return 'new'
  const card = state.cards[recogniseId(word)]
  return card && isMature(card) ? 'known' : 'learning'
}

const STATUS_LABELS: Record<Status, string> = { new: 'Not started', learning: 'Learning', known: 'Known' }

export function Words() {
  const state = useAppState()
  const [theme, setTheme] = useState<ThemeId | 'all'>('all')
  const [level, setLevel] = useState<Level | 'all'>('all')
  const [status, setStatus] = useState<Status | 'all'>('all')
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [openId, setOpenId] = useState<string>()
  const [adding, setAdding] = useState(false)
  const [importing, setImporting] = useState(false)

  const words = allWords(state)
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    return words.filter(
      (word) =>
        (theme === 'all' || word.theme === theme) &&
        (level === 'all' || word.level === level) &&
        (status === 'all' || wordStatus(state, word) === status) &&
        (!search || word.german.toLowerCase().includes(search) || word.english.toLowerCase().includes(search)),
    )
  }, [words, theme, level, status, query, state])

  const counts = { new: 0, learning: 0, known: 0 }
  for (const word of words) counts[wordStatus(state, word)]++
  const themesWithWords = THEMES.filter((item) => words.some((word) => word.theme === item.id))

  return (
    <div className="page">
      <div className="page-header row between" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Wortschatz</div>
          <h1>Words</h1>
          <p>
            {words.length} words · {counts.known} known · {counts.learning} learning. New words come from your target
            level ({state.settings.level}) and below, easiest first.
          </p>
        </div>
        <div className="row">
          <button
            className="btn"
            onClick={() => {
              setImporting(!importing)
              setAdding(false)
            }}
          >
            <Icon name="sparkle" /> Import a list
          </button>
          <button
            className="btn"
            onClick={() => {
              setAdding(!adding)
              setImporting(false)
            }}
          >
            <Icon name="plus" /> Add one
          </button>
          <Link className="btn primary" to={theme === 'all' ? '/words/learn' : `/words/learn?theme=${theme}`}>
            Learn new words
          </Link>
        </div>
      </div>

      {adding && <AddWordForm onDone={() => setAdding(false)} />}
      {importing && <ImportWords onClose={() => setImporting(false)} />}

      <div className="card stack" style={{ marginBottom: 16 }}>
        <input
          className="input"
          placeholder="Search German or English"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search words"
        />
        <div className="row">
          <select
            className="select"
            value={theme}
            onChange={(event) => setTheme(event.target.value as ThemeId | 'all')}
            aria-label="Theme"
          >
            <option value="all">All themes</option>
            {themesWithWords.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <div className="chips">
            {(['all', ...LEVELS] as const).map((item) => (
              <button key={item} className={`chip ${level === item ? 'active' : ''}`} onClick={() => setLevel(item)}>
                {item === 'all' ? 'All levels' : item}
              </button>
            ))}
          </div>
          <div className="chips">
            {(['all', 'new', 'learning', 'known'] as const).map((item) => (
              <button key={item} className={`chip ${status === item ? 'active' : ''}`} onClick={() => setStatus(item)}>
                {item === 'all' ? 'Any status' : STATUS_LABELS[item]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="word-list">
        {filtered.length === 0 && <div className="empty">No words match.</div>}
        {filtered.map((word) => (
          <WordRow
            key={word.id}
            word={word}
            state={state}
            open={openId === word.id}
            onToggle={() => setOpenId(openId === word.id ? undefined : word.id)}
          />
        ))}
      </div>
    </div>
  )
}

function WordRow({
  word,
  state,
  open,
  onToggle,
}: {
  word: Word
  state: AppState
  open: boolean
  onToggle: () => void
}) {
  const status = wordStatus(state, word)
  const card = state.cards[recogniseId(word)]
  const now = useNow()
  const recall = card ? retrievability(card, now) : 0
  return (
    <div className={`word-row ${open ? 'open' : ''}`}>
      <button className="word-row-summary" onClick={onToggle} aria-expanded={open}>
        <span className={`status-dot ${status}`} title={STATUS_LABELS[status]} />
        <GermanWord word={word} />
        <span className="muted word-row-english">{word.english}</span>
        <span className="pill">{word.level}</span>
      </button>
      {open && (
        <div className="word-row-detail">
          <WordView word={word} />
          <div className="row" style={{ marginTop: 14 }}>
            {status === 'new' ? (
              <button className="btn small" onClick={() => learnWord(word, Rating.Good)}>
                I know this already: start reviewing
              </button>
            ) : (
              <>
                <span className="small muted">
                  {STATUS_LABELS[status]} · recall now about {Math.round(recall * 100)}%
                </span>
                <button className="btn small ghost" onClick={() => forgetWord(word)}>
                  Reset progress
                </button>
              </>
            )}
            {word.theme === 'eigene' && (
              <button className="btn small ghost" onClick={() => removeCustomWord(word)}>
                <Icon name="trash" size={14} /> Delete
              </button>
            )}
            <SpeakButton text={displayGerman(word)} />
          </div>
        </div>
      )}
    </div>
  )
}

const KIND_OPTIONS: { value: WordKind; label: string }[] = [
  { value: 'noun', label: 'Noun' },
  { value: 'verb', label: 'Verb' },
  { value: 'adjective', label: 'Adjective' },
  { value: 'adverb', label: 'Adverb' },
  { value: 'phrase', label: 'Phrase' },
  { value: 'other', label: 'Other' },
]

/** For words from your course or reading. Mark the word in the example with {braces} for gap practice. */
function AddWordForm({ onDone }: { onDone: () => void }) {
  const { settings } = useAppState()
  const [kind, setKind] = useState<WordKind>('noun')
  const [gender, setGender] = useState<Gender>('der')
  const [german, setGerman] = useState('')
  const [plural, setPlural] = useState('')
  const [forms, setForms] = useState('')
  const [english, setEnglish] = useState('')
  const [example, setExample] = useState('')
  const [exampleEnglish, setExampleEnglish] = useState('')

  function submit(event: FormEvent) {
    event.preventDefault()
    const lemma = german.trim()
    if (!lemma || !english.trim()) return
    const markedExample = example.includes('{')
      ? example
      : example.replace(new RegExp(`\\b(${escapeRegExp(lemma)})\\b`, 'i'), '{$1}')
    const word: Word = {
      id: `eigene-${slugify(lemma)}-${kind}`,
      kind,
      german: lemma,
      english: english.trim(),
      example: markedExample.includes('{') ? markedExample : `{${lemma}}`,
      exampleEnglish: exampleEnglish.trim() || english.trim(),
      theme: 'eigene',
      level: settings.level,
    }
    if (kind === 'noun') {
      word.gender = gender
      word.plural = plural.trim()
    }
    if (forms.trim()) word.forms = forms.trim()
    addCustomWord(word)
    onDone()
  }

  return (
    <form className="card stack" style={{ marginBottom: 16 }} onSubmit={submit}>
      <h3>Add a word</h3>
      <p className="muted small" style={{ margin: 0 }}>
        For words from your course or from reading. Put the word in the example inside {'{braces}'} to practise it as a
        gap; otherwise the app finds it for you.
      </p>
      <div className="row">
        <select
          className="select"
          value={kind}
          onChange={(event) => setKind(event.target.value as WordKind)}
          aria-label="Kind"
        >
          {KIND_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {kind === 'noun' && (
          <div className="chips">
            {(['der', 'die', 'das'] as const).map((item) => (
              <button
                type="button"
                key={item}
                className={`chip ${gender === item ? 'active' : ''}`}
                onClick={() => setGender(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="grid two">
        <label className="field">
          German {kind === 'noun' ? '(without article)' : ''}
          <input
            className="input"
            value={german}
            onChange={(event) => setGerman(event.target.value)}
            required
            lang="de"
          />
        </label>
        <label className="field">
          English
          <input className="input" value={english} onChange={(event) => setEnglish(event.target.value)} required />
        </label>
        {kind === 'noun' && (
          <label className="field">
            Plural (optional)
            <input className="input" value={plural} onChange={(event) => setPlural(event.target.value)} lang="de" />
          </label>
        )}
        {kind === 'verb' && (
          <label className="field">
            Forms, e.g. "fährt, fuhr, ist gefahren"
            <input className="input" value={forms} onChange={(event) => setForms(event.target.value)} lang="de" />
          </label>
        )}
        <label className="field">
          Example sentence (optional)
          <input className="input" value={example} onChange={(event) => setExample(event.target.value)} lang="de" />
        </label>
        <label className="field">
          Example in English (optional)
          <input className="input" value={exampleEnglish} onChange={(event) => setExampleEnglish(event.target.value)} />
        </label>
      </div>
      <div className="row">
        <button className="btn primary" type="submit">
          Add word
        </button>
        <button className="btn ghost" type="button" onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
  )
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Turns a word list from a course into full cards via claude.ai: free with a Claude plan. */
function ImportWords({ onClose }: { onClose: () => void }) {
  const { settings } = useAppState()
  const [list, setList] = useState('')
  const [level, setLevel] = useState<Level>(settings.level)
  const [imported, setImported] = useState<number>()

  return (
    <div className="card stack" style={{ marginBottom: 16 }}>
      <div className="row between">
        <h3 style={{ margin: 0 }}>Import words from your course</h3>
        <button className="btn ghost small" onClick={onClose}>
          Close
        </button>
      </div>
      <p className="muted small" style={{ margin: 0 }}>
        Paste a word list in any format: from your course book, a handout, your notes. Claude adds articles, plurals,
        verb forms and an example sentence for each. Free through claude.ai.
      </p>
      <textarea
        className="textarea"
        style={{ minHeight: 140, fontSize: '1rem' }}
        placeholder={'die Kündigung\nsich bewerben um\nder Lebenslauf, -läufe\nbefristet …'}
        value={list}
        onChange={(event) => setList(event.target.value)}
        lang="de"
        aria-label="Word list"
      />
      <div className="chips" aria-label="Level">
        {LEVELS.map((item) => (
          <button
            type="button"
            key={item}
            className={`chip ${level === item ? 'active' : ''}`}
            onClick={() => setLevel(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {imported === undefined ? (
        <ViaClaudeAi
          job={() => wordImportJob(list.trim(), level)}
          onResult={(words) => setImported(addCustomWords(words))}
          disabled={!list.trim()}
        />
      ) : (
        <div className="feedback correct">
          <div className="feedback-title">{imported} new words added to Meine Wörter</div>
          <div className="row" style={{ marginTop: 8 }}>
            {imported > 0 && (
              <Link className="btn primary small" to={`/words/learn?theme=eigene&count=${imported}`}>
                Learn them now
              </Link>
            )}
            <button
              className="btn small"
              onClick={() => {
                setList('')
                setImported(undefined)
              }}
            >
              Import another list
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
