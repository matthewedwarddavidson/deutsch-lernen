import { useEffect, useRef } from 'react'

/**
 * Calls the handler for key presses while active, ignoring typing in text
 * fields. The handler returns true if it used the key.
 */
export function useKeyHandler(active: boolean, handler: (key: string) => boolean) {
  const handlerRef = useRef(handler)
  useEffect(() => {
    handlerRef.current = handler
  })

  useEffect(() => {
    if (!active) return
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (handlerRef.current(event.key)) event.preventDefault()
    }
    // Register after the current event finishes, so the key press that
    // activated this handler isn't handled twice.
    const timer = setTimeout(() => window.addEventListener('keydown', onKey), 0)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [active])
}

/** Records how long a page was open, in seconds, when it closes. */
export function useTimeOnPage(onLeave: (seconds: number) => void) {
  const onLeaveRef = useRef(onLeave)
  useEffect(() => {
    onLeaveRef.current = onLeave
  })
  useEffect(() => {
    const started = Date.now()
    return () => onLeaveRef.current((Date.now() - started) / 1000)
  }, [])
}
