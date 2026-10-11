import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import { HOEREN_SETS, LESEN_SETS } from '../content/exam'
import { WRITING_TASKS } from '../content/writing'
import type { Level, WritingFormat, WritingTask } from '../content/types'
import { recordActivity, saveWriting } from '../lib/actions'
import { useTimeOnPage } from '../lib/hooks'
import { useAppState } from '../lib/store'

interface ExamModule {
  name: string
  minutes: number
  parts: string
}

const EXAMS: Partial<
  Record<Level, { modules: ExamModule[]; writingMinutes: number; writingFormats: WritingFormat[] }>
> = {
  B1: {
    modules: [
      {
        name: 'Lesen',
        minutes: 65,
        parts:
          '5 parts: a blog (richtig/falsch), two newspaper articles (multiple choice), matching ads to people, opinions on a topic (ja/nein), rules or instructions (multiple choice).',
      },
      {
        name: 'Hören',
        minutes: 40,
        parts:
          '4 parts: short announcements and messages (heard twice), a guided tour or talk, a conversation between two people (richtig/falsch), a radio discussion (who says what).',
      },
      {
        name: 'Schreiben',
        minutes: 60,
        parts:
          '3 tasks: an informal email (about 80 words), a forum post giving your opinion (about 80 words), a short formal message (about 40 words).',
      },
      {
        name: 'Sprechen',
        minutes: 15,
        parts:
          'Planning something together, a short presentation, responding to questions. (Not practised in this app.)',
      },
    ],
    writingMinutes: 60,
    writingFormats: ['informal-email', 'forum', 'formal-email'],
  },
  B2: {
    modules: [
      {
        name: 'Lesen',
        minutes: 65,
        parts: '5 parts: longer articles, opinions, a report and rules; more inference than at B1.',
      },
      { name: 'Hören', minutes: 40, parts: '4 parts: short texts, an interview, a discussion and a lecture.' },
      {
        name: 'Schreiben',
        minutes: 75,
        parts: '2 tasks: an argumentative forum post (about 150 words) and a formal message (about 100 words).',
      },
      { name: 'Sprechen', minutes: 15, parts: 'A presentation and a discussion. (Not practised in this app.)' },
    ],
    writingMinutes: 75,
    writingFormats: ['forum', 'formal-email'],
  },
}

/** One task per required format, preferring ones you haven't written yet. */
function pickWritingSet(level: Level, formats: WritingFormat[], written: Set<string>): WritingTask[] {
  const atLevel = WRITING_TASKS.filter((task) => task.level === level)
  return formats
    .map((format) => {
      const options = atLevel.filter(
        (task) => task.format === format || (format === 'forum' && task.format === 'essay'),
      )
      return options.find((task) => !written.has(task.id)) ?? options[0]
    })
    .filter((task): task is WritingTask => task !== undefined)
}

export function Exam() {
  const { settings, writing, exams } = useAppState()
  const level: Level = settings.level === 'B2' || settings.level === 'C1' ? 'B2' : 'B1'
  const exam = EXAMS[level]!
  const [simulating, setSimulating] = useState(false)
  const tasks = useMemo(
    () => pickWritingSet(level, exam.writingFormats, new Set(writing.map((attempt) => attempt.taskId))),
    [level, exam, writing],
  )

  if (simulating)
    return <WritingSimulation tasks={tasks} minutes={exam.writingMinutes} onExit={() => setSimulating(false)} />

  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">Prüfung</div>
        <h1>Goethe-Zertifikat {level}</h1>
        <p>
          The exam your course is probably leading to. You need 60% in each module. Practise each part here, then do a
          full model test from the Goethe-Institut website under exam conditions.
        </p>
      </div>
      <div className="grid halves">
        {exam.modules.map((module) => (
          <div key={module.name} className="card">
            <div className="row between">
              <h3 style={{ margin: 0 }}>{module.name}</h3>
              <span className="pill">{module.minutes} min</span>
            </div>
            <p className="small muted" style={{ marginBottom: 0 }}>
              {module.parts}
            </p>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title">Practice papers</div>
        <div className="grid halves">
          {[
            ...LESEN_SETS.filter((set) => set.level === level).map((set) => ({ ...set, module: 'lesen' as const })),
            ...HOEREN_SETS.filter((set) => set.level === level).map((set) => ({ ...set, module: 'hoeren' as const })),
          ].map((set) => {
            const results = exams.filter((result) => result.setId === set.id)
            const last = results[results.length - 1]
            return (
              <Link key={set.id} className="card card-link" to={`/exam/${set.module}/${set.id}`}>
                <div className="row between">
                  <h3 style={{ margin: 0 }}>
                    {set.module === 'lesen' ? 'Lesen' : 'Hören'} · {set.title}
                  </h3>
                  {last && <span className={`pill ${last.score >= 60 ? 'good' : 'almost'}`}>{last.score}/100</span>}
                </div>
                <div className="small muted">
                  {set.module === 'lesen'
                    ? 'All five parts, 65 minutes, scored out of 100.'
                    : 'All four parts. Each recording plays only as often as in the exam.'}
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="section card lesson-cta">
        <div>
          <h3 style={{ marginBottom: 2 }}>Timed writing: the full module</h3>
          <div className="muted small">
            {tasks.length} tasks in {exam.writingMinutes} minutes, as in the exam:{' '}
            {tasks.map((task) => task.title).join(' · ')}
          </div>
        </div>
        <button className="btn primary" onClick={() => setSimulating(true)} disabled={tasks.length === 0}>
          Start the clock
        </button>
      </div>

      <div className="section">
        <div className="section-title">Practise each module</div>
        <div className="grid halves">
          <Link className="card card-link" to="/reading">
            <h3>Lesen</h3>
            <div className="small muted">
              Blogs, articles, notices and ad matching at {level}, with exam-style questions.
            </div>
          </Link>
          <Link className="card card-link" to="/listening">
            <h3>Hören</h3>
            <div className="small muted">
              Announcements, phone messages, conversations and radio. Read the questions first.
            </div>
          </Link>
          <Link className="card card-link" to="/writing">
            <h3>Schreiben</h3>
            <div className="small muted">Single tasks with useful phrases and model answers.</div>
          </Link>
          <a
            className="card card-link"
            href={`https://www.goethe.de/ins/cs/de/spr/prf/gz${level.toLowerCase()}/ueb.html`}
            target="_blank"
            rel="noreferrer"
          >
            <h3>Official model tests ↗</h3>
            <div className="small muted">Free Übungsmaterialien with audio from the Goethe-Institut.</div>
          </a>
        </div>
      </div>
    </div>
  )
}

function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length
}

function WritingSimulation({ tasks, minutes, onExit }: { tasks: WritingTask[]; minutes: number; onExit: () => void }) {
  const [startedAt] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  const [texts, setTexts] = useState<string[]>(() => tasks.map(() => ''))
  const [finished, setFinished] = useState(false)
  useTimeOnPage((seconds) => recordActivity('writing', seconds))

  useEffect(() => {
    if (finished) return
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [finished])

  const remaining = Math.max(0, minutes * 60 - Math.floor((now - startedAt) / 1000))
  const timeUp = remaining === 0

  function finish() {
    tasks.forEach((task, index) => {
      if (texts[index].trim()) saveWriting(`exam-${startedAt}-${index}`, task.id, texts[index])
    })
    setFinished(true)
  }

  useEffect(() => {
    if (timeUp && !finished) finish()
    // Finish once, when the time runs out.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeUp])

  const clock = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`

  return (
    <div className="page narrow">
      <div className="card fluency-bar">
        <strong className={remaining < 300 && !finished ? 'clock warning' : 'clock'}>
          {finished ? 'Finished' : clock}
        </strong>
        {!finished ? (
          <button className="btn primary" onClick={finish}>
            Hand in
          </button>
        ) : (
          <button className="btn" onClick={onExit}>
            Back
          </button>
        )}
      </div>
      {tasks.map((task, index) => (
        <div key={task.id} className="card stack" style={{ marginBottom: 16 }}>
          <div className="eyebrow">
            Aufgabe {index + 1} · about {task.minWords} words
          </div>
          <p className="de" style={{ margin: 0 }}>
            {task.instructions}
          </p>
          <ul className="task-points de">
            {task.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <textarea
            className="textarea"
            style={{ minHeight: 200 }}
            value={texts[index]}
            onChange={(event) => setTexts(texts.map((text, other) => (other === index ? event.target.value : text)))}
            disabled={finished}
            lang="de"
            spellCheck={false}
            aria-label={`Answer to task ${index + 1}`}
          />
          <div className="writing-stats">
            <span className={countWords(texts[index]) >= task.minWords ? 'ok' : ''}>
              {countWords(texts[index])} / {task.minWords} words
            </span>
          </div>
          {finished && (
            <div className="stack">
              <details>
                <summary className="small">Model answer</summary>
                <div className="de" style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>
                  {task.model}
                </div>
              </details>
              {texts[index].trim() && (
                <Link className="btn small" to={`/writing/${task.id}`}>
                  Open in Writing to note mistakes →
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
