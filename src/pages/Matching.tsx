import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { MATCHING_TASKS } from '../content/matching'
import { completeReading, recordActivity } from '../lib/actions'
import { useTimeOnPage } from '../lib/hooks'

/** Value of the "no ad fits" option. */
const NONE = 'none'

function letter(index: number): string {
  return String.fromCharCode(65 + index)
}

function isCorrect(choice: string, answer: number | null): boolean {
  return answer === null ? choice === NONE : choice === String(answer)
}

export function MatchingPage() {
  const { taskId } = useParams()
  const task = MATCHING_TASKS.find((item) => item.id === taskId)
  const [choices, setChoices] = useState<string[]>(() => task?.people.map(() => '') ?? [])
  const [checked, setChecked] = useState(false)
  useTimeOnPage((seconds) => recordActivity('reading', seconds))

  if (!task) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Task not found. <Link to="/reading">All texts</Link>
        </div>
      </div>
    )
  }

  const correctCount = task.people.filter((person, index) => isCorrect(choices[index], person.answer)).length

  function check() {
    if (!task) return
    completeReading(task.id, correctCount / task.people.length)
    setChecked(true)
  }

  /** The ad picked in a dropdown, shown under it so you can compare without scrolling back. */
  function chosenAd(choice: string) {
    return choice === '' || choice === NONE ? undefined : task!.ads[Number(choice)]
  }

  function choose(personIndex: number, value: string) {
    setChoices(choices.map((choice, index) => (index === personIndex ? value : choice)))
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/reading">
        ← Reading
      </Link>
      <div className="page-header">
        <div className="eyebrow">{task.level} · Zuordnung · Lesen Teil 3</div>
        <h1 className="de">{task.title}</h1>
        <p className="de">{task.instructions}</p>
      </div>

      <div className="section">
        <div className="section-title">Anzeigen</div>
        <div className="grid two">
          {task.ads.map((ad, index) => (
            <div key={ad.title} className="card">
              <div className="eyebrow">{letter(index)}</div>
              <h3 className="de" style={{ marginBottom: 4 }}>
                {ad.title}
              </h3>
              <div className="de small">{ad.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Personen</div>
        <div className="stack">
          {task.people.map((person, index) => (
            <div key={person.situation} className="card stack">
              <div className="de">
                {index + 1}. {person.situation}
              </div>
              <select
                className="select"
                value={choices[index]}
                onChange={(event) => choose(index, event.target.value)}
                disabled={checked}
                aria-label={`Ad for person ${index + 1}`}
              >
                <option value="">Choose…</option>
                {task.ads.map((ad, adIndex) => (
                  <option key={ad.title} value={String(adIndex)}>
                    {letter(adIndex)}: {ad.title}
                  </option>
                ))}
                <option value={NONE}>0: keine Anzeige passt</option>
              </select>
              {chosenAd(choices[index]) && <div className="small muted de">{chosenAd(choices[index])!.text}</div>}
              {checked && (
                <div className={isCorrect(choices[index], person.answer) ? 'feedback correct' : 'feedback wrong'}>
                  <div className="feedback-title">
                    {isCorrect(choices[index], person.answer) ? 'Richtig' : 'Falsch'}
                  </div>
                  <div className="small de">{person.explanation}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        {checked ? (
          <div className="card empty">
            <h2>
              {correctCount} / {task.people.length}
            </h2>
            <p>Saved. Look again at any ad you misread: the trap is usually one detail such as time or place.</p>
            <Link className="btn primary" to="/reading">
              More texts
            </Link>
          </div>
        ) : (
          <button className="btn primary" onClick={check} disabled={choices.some((choice) => choice === '')}>
            Check
          </button>
        )}
      </div>
    </div>
  )
}
