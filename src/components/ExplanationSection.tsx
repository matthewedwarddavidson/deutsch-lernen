import type { ReactNode } from 'react'
import type { GrammarExplanationSection } from '../content/types'
import { Rich } from './Rich'
import { SpeakButton } from './SpeakButton'

/** One explained section of a lesson: paragraphs, an optional table and German examples. */
export function ExplanationSection({
  section,
  id,
  children,
}: {
  section: GrammarExplanationSection
  id?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="lesson-section">
      <h2>{section.heading}</h2>
      {section.body.map((paragraph, index) => (
        <p key={index}>
          <Rich text={paragraph} />
        </p>
      ))}
      {section.table && (
        <div className="table-wrap">
          <table className="grammar-table">
            <thead>
              <tr>
                {section.table.head.map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
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
      )}
      {section.examples && (
        <ul className="examples">
          {section.examples.map((example) => (
            <li key={example.de} className="example">
              <SpeakButton text={example.de.replace(/\*/g, '')} />
              <div className="example-text">
                <div className="de">
                  <Rich text={example.de} />
                </div>
                <div className="en">{example.en}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {children}
    </section>
  )
}
