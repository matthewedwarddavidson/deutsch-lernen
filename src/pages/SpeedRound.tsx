import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ProgressBar } from '../components/ProgressBar'
import { displayGerman } from '../content/parseWords'
import type { Word } from '../content/types'
import { recordActivity } from '../lib/actions'
import { allWords, isWordLearned, recogniseId } from '../lib/cards'
import { useKeyHandler, useTimeOnPage } from '../lib/hooks'
import { State } from '../lib/srs'
import { getState, type AppState } from '../lib/store'

const ROUND_LENGTH = 20
const SECONDS_PER_WORD = 5
const MIN_POOL = 8

interface Item {
  word: Word
  options: string[]
  answer: number
}

function shuffle<T>(items: T[]): T[] {
  return items
    .map((item) => ({ item, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item)
}

/** Words you have already reviewed at least twice: fluency practice uses only known material. */
function familiarWords(state: AppState): Word[] {
  return allWords(state).filter((word) => {
    if (!isWordLearned(state, word)) return false
    const card = state.cards[recogniseId(word)]
    return card && card.state === State.Review && card.reps >= 2
  })
}

/** Each item offers three wrong meanings, preferring words of the same kind so the choice isn't trivial. */
function buildRound(pool: Word[]): Item[] {
  return shuffle(pool)
    .slice(0, ROUND_LENGTH)
    .map((word) => {
      const others = pool.filter((other) => other.id !== word.id && other.english !== word.english)
      const sameKind = shuffle(others.filter((other) => other.kind === word.kind))
      const distractors = [...sameKind, ...shuffle(others)]
        .map((other) => other.english)
        .filter((english, index, list) => list.indexOf(english) === index)
        .slice(0, 3)
      const options = shuffle([word.english, ...distractors])
      return { word, options, answer: options.indexOf(word.english) }
    })
}

export function SpeedRound() {
  const [items] = useState(() => {
    const pool = familiarWords(getState())
    return pool.length >= MIN_POOL ? buildRound(pool) : []
  })
  const [index, setIndex] = useState(0)
  const [results, setResults] = useState<{ correct: boolean; seconds: number }[]>([])
  useTimeOnPage((seconds) => recordActivity('fluency', seconds))

  if (items.length === 0) {
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>Not enough familiar words yet</h2>
          <p>
            The speed round uses only words you have already reviewed a few times, so it trains speed, not memory. Come
            back once you have at least {MIN_POOL}.
          </p>
          <Link className="btn primary" to="/words/learn">
            Learn new words
          </Link>
        </div>
      </div>
    )
  }

  if (index >= items.length) {
    const correct = results.filter((result) => result.correct).length
    const answered = results.filter((result) => result.correct)
    const averageSeconds = answered.length
      ? answered.reduce((total, result) => total + result.seconds, 0) / answered.length
      : 0
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>
            {correct} of {items.length} · {averageSeconds.toFixed(1)} s per word
          </h2>
          <p>
            Fluency means recognising words without effort. Aim to get under 1.5 seconds per word. Misses here don't
            affect your reviews.
          </p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn primary" to="/words/speed">
              Another round
            </Link>
            <Link className="btn" to="/">
              Back to today
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/words">
        ← Words
      </Link>
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={index / items.length} label="Round progress" />
        </div>
        <span className="muted small">
          {index + 1} / {items.length}
        </span>
      </div>
      <SpeedItem
        key={index}
        item={items[index]}
        onDone={(correct, seconds) => {
          setResults([...results, { correct, seconds }])
          setIndex(index + 1)
        }}
      />
    </div>
  )
}

function SpeedItem({ item, onDone }: { item: Item; onDone: (correct: boolean, seconds: number) => void }) {
  const [started] = useState(() => Date.now())
  const [chosen, setChosen] = useState<number>()
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_WORD)

  useEffect(() => {
    if (chosen !== undefined) return
    const timer = setInterval(() => {
      const left = SECONDS_PER_WORD - (Date.now() - started) / 1000
      setTimeLeft(Math.max(0, left))
      if (left <= 0) setChosen(-1)
    }, 100)
    return () => clearInterval(timer)
  }, [chosen, started])

  useEffect(() => {
    if (chosen === undefined) return
    const seconds = (Date.now() - started) / 1000
    const timer = setTimeout(() => onDone(chosen === item.answer, seconds), chosen === item.answer ? 350 : 1200)
    return () => clearTimeout(timer)
    // Runs once when an answer is chosen or time runs out.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosen])

  useKeyHandler(chosen === undefined, (key) => {
    const number = Number(key)
    if (number >= 1 && number <= item.options.length) {
      setChosen(number - 1)
      return true
    }
    return false
  })

  return (
    <div className="card review-card stack">
      <div className="speed-timer">
        <span style={{ width: `${(timeLeft / SECONDS_PER_WORD) * 100}%` }} />
      </div>
      <div className="review-prompt" style={{ textAlign: 'center', margin: '20px 0' }}>
        {displayGerman(item.word)}
      </div>
      <div className="stack" style={{ gap: 8 }}>
        {item.options.map((option, optionIndex) => {
          const state =
            chosen === undefined
              ? ''
              : optionIndex === item.answer
                ? 'correct'
                : optionIndex === chosen
                  ? 'wrong'
                  : 'dimmed'
          return (
            <button
              key={option}
              className={`choice ${state}`}
              onClick={() => chosen === undefined && setChosen(optionIndex)}
              disabled={chosen !== undefined}
              style={{ fontFamily: 'var(--font-ui)' }}
            >
              <span className="kbd">{optionIndex + 1}</span> {option}
            </button>
          )
        })}
      </div>
      {chosen === -1 && <div className="small muted">Time's up.</div>}
    </div>
  )
}
