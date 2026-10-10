import { useRef, type KeyboardEvent } from 'react'
import type { Verdict } from '../lib/check'

const SPECIAL_LETTERS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü']

interface AnswerInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  verdict?: Verdict
  placeholder?: string
  autoFocus?: boolean
  disabled?: boolean
  label?: string
}

/** A text field for German answers with buttons for umlauts and ß. */
export function AnswerInput({
  value,
  onChange,
  onSubmit,
  verdict,
  placeholder,
  autoFocus = true,
  disabled = false,
  label = 'Your answer',
}: AnswerInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function insert(letter: string) {
    const input = inputRef.current
    if (!input) return
    const start = input.selectionStart ?? value.length
    const end = input.selectionEnd ?? value.length
    onChange(value.slice(0, start) + letter + value.slice(end))
    requestAnimationFrame(() => {
      input.focus()
      input.setSelectionRange(start + 1, start + 1)
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit()
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        className={`input large ${verdict ?? ''}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        aria-label={label}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        lang="de"
      />
      {!disabled && (
        <div className="umlauts" aria-label="Special letters">
          {SPECIAL_LETTERS.map((letter) => (
            <button key={letter} type="button" tabIndex={-1} onMouseDown={(event) => event.preventDefault()} onClick={() => insert(letter)}>
              {letter}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
