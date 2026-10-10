import { useState } from 'react'
import type { Question } from '../content/types'

type Answer = boolean | number | 'got-it' | 'missed' | undefined

function isCorrect(question: Question, answer: Answer): boolean {
  if (question.kind === 'open') return answer === 'got-it'
  return answer === question.answer
}

/**
 * Comprehension questions. True/false and multiple choice are marked
 * automatically; open questions show a model answer to compare against.
 */
export function Questions({ questions, onFinish }: { questions: Question[]; onFinish: (score: number) => void }) {
  const [answers, setAnswers] = useState<Answer[]>(() => questions.map(() => undefined))
  const [checked, setChecked] = useState(false)
  const [openRevealed, setOpenRevealed] = useState<boolean[]>(() => questions.map(() => false))

  const closedAnswered = questions.every((question, index) => question.kind === 'open' || answers[index] !== undefined)
  const openAssessed = questions.every((question, index) => question.kind !== 'open' || answers[index] !== undefined)

  function setAnswer(index: number, answer: Answer) {
    setAnswers(answers.map((current, other) => (other === index ? answer : current)))
  }

  function check() {
    setChecked(true)
    setOpenRevealed(questions.map(() => true))
  }

  function finish() {
    const correct = questions.filter((question, index) => isCorrect(question, answers[index])).length
    onFinish(correct / questions.length)
  }

  const score = questions.filter((question, index) => isCorrect(question, answers[index])).length

  return (
    <div className="stack" style={{ gap: 16 }}>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <div className="question-number">{index + 1}</div>
          <div style={{ flex: 1 }}>
            {question.kind === 'truefalse' && (
              <>
                <div className="de question-text">{question.statement}</div>
                <div className="row" style={{ marginTop: 8 }}>
                  {[true, false].map((value) => (
                    <button
                      key={String(value)}
                      className={`choice ${optionState(checked, answers[index] === value, question.answer === value)}`}
                      onClick={() => !checked && setAnswer(index, value)}
                      disabled={checked}
                      style={{ minWidth: 110 }}
                    >
                      {value ? 'Richtig' : 'Falsch'}
                    </button>
                  ))}
                </div>
              </>
            )}
            {question.kind === 'choice' && (
              <>
                <div className="de question-text">{question.question}</div>
                <div className="stack" style={{ gap: 6, marginTop: 8 }}>
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={option}
                      className={`choice ${optionState(checked, answers[index] === optionIndex, question.answer === optionIndex)}`}
                      onClick={() => !checked && setAnswer(index, optionIndex)}
                      disabled={checked}
                    >
                      <span className="kbd">{String.fromCharCode(97 + optionIndex)}</span> {option}
                    </button>
                  ))}
                </div>
              </>
            )}
            {question.kind === 'open' && (
              <>
                <div className="de question-text">{question.question}</div>
                <textarea
                  className="textarea"
                  style={{ minHeight: 70, marginTop: 8, fontSize: '1rem' }}
                  placeholder="Write your answer in German, then compare."
                  lang="de"
                  disabled={checked}
                />
                {!openRevealed[index] ? (
                  <button
                    className="btn small"
                    style={{ marginTop: 6 }}
                    onClick={() => setOpenRevealed(openRevealed.map((value, other) => (other === index ? true : value)))}
                  >
                    Show model answer
                  </button>
                ) : (
                  <div className="model-answer">
                    <div className="small faint">Model answer</div>
                    <div className="de">{question.model}</div>
                    <div className="row" style={{ marginTop: 8 }}>
                      <span className="small muted">Did you get the main point?</span>
                      <button
                        className={`btn small ${answers[index] === 'got-it' ? 'grade-good selected' : ''}`}
                        onClick={() => setAnswer(index, 'got-it')}
                      >
                        Yes
                      </button>
                      <button
                        className={`btn small ${answers[index] === 'missed' ? 'grade-again selected' : ''}`}
                        onClick={() => setAnswer(index, 'missed')}
                      >
                        Not really
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            {checked && question.kind !== 'open' && question.explanation && (
              <div className="small muted" style={{ marginTop: 6 }}>
                {question.explanation}
              </div>
            )}
          </div>
        </div>
      ))}
      {!checked ? (
        <div>
          <button className="btn primary" onClick={check} disabled={!closedAnswered}>
            Check answers
          </button>
        </div>
      ) : (
        <div className="row">
          <strong>
            {score} of {questions.length} correct
          </strong>
          <button className="btn primary" onClick={finish} disabled={!openAssessed}>
            {openAssessed ? 'Save result' : 'Mark the open answers first'}
          </button>
        </div>
      )}
    </div>
  )
}

function optionState(checked: boolean, chosen: boolean, correct: boolean): string {
  if (!checked) return chosen ? 'chosen' : ''
  if (correct) return 'correct'
  if (chosen) return 'wrong'
  return 'dimmed'
}
