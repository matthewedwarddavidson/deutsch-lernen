import type { ReactNode } from 'react'
import type { Verdict } from '../lib/check'

const TITLES: Record<Verdict, string> = {
  correct: 'Richtig',
  almost: 'Fast richtig',
  wrong: 'Nicht ganz',
}

export function Feedback({ verdict, children }: { verdict: Verdict; children?: ReactNode }) {
  return (
    <div className={`feedback ${verdict}`} role="status">
      <div className="feedback-title">{TITLES[verdict]}</div>
      {children}
    </div>
  )
}
