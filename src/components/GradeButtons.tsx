import { useEffect } from 'react'
import { previewIntervals, Rating, type Grade, type StoredCard } from '../lib/srs'

const GRADES: { grade: Grade; label: string; className: string; key: string }[] = [
  { grade: Rating.Again, label: 'Again', className: 'grade-again', key: '1' },
  { grade: Rating.Hard, label: 'Hard', className: 'grade-hard', key: '2' },
  { grade: Rating.Good, label: 'Good', className: 'grade-good', key: '3' },
  { grade: Rating.Easy, label: 'Easy', className: 'grade-easy', key: '4' },
]

interface GradeButtonsProps {
  card?: StoredCard
  suggested?: Grade
  onGrade: (grade: Grade) => void
}

/**
 * Again / Hard / Good / Easy with the next interval for each. Keys 1–4 pick a
 * grade; Enter accepts the suggested one.
 */
export function GradeButtons({ card, suggested, onGrade }: GradeButtonsProps) {
  const intervals = card ? previewIntervals(card, new Date()) : undefined

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLTextAreaElement) return
      const match = GRADES.find((option) => option.key === event.key)
      if (match) {
        event.preventDefault()
        onGrade(match.grade)
      } else if (event.key === 'Enter' && suggested) {
        event.preventDefault()
        onGrade(suggested)
      }
    }
    // Wait a tick so the Enter that submitted the answer doesn't also grade it.
    const timer = setTimeout(() => window.addEventListener('keydown', handleKey), 50)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKey)
    }
  }, [onGrade, suggested])

  return (
    <div className="grade-buttons">
      {GRADES.map((option) => (
        <button
          key={option.grade}
          type="button"
          className={`btn ${option.className} ${suggested === option.grade ? 'selected' : ''}`}
          onClick={() => onGrade(option.grade)}
        >
          <span>{option.label}</span>
          {intervals && <span className="hint">{intervals[option.grade]}</span>}
        </button>
      ))}
    </div>
  )
}
