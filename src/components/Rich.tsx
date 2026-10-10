import { Fragment, type ReactNode } from 'react'

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g

/** Renders a small markdown subset: **bold**, *italic* and `code`. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean)
  return (
    <span className="rich">
      {parts.map((part, index) => (
        <Fragment key={index}>{renderPart(part)}</Fragment>
      ))}
    </span>
  )
}

function renderPart(part: string): ReactNode {
  if (part.startsWith('**') && part.endsWith('**')) return <strong>{part.slice(2, -2)}</strong>
  if (part.startsWith('*') && part.endsWith('*')) return <em>{part.slice(1, -1)}</em>
  if (part.startsWith('`') && part.endsWith('`')) return <code>{part.slice(1, -1)}</code>
  return part
}
