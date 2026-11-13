import { useEffect, useRef, useState } from 'react'

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

/** After this long without a key press, click, scroll or touch, time stops counting. */
const IDLE_MS = 3 * 60 * 1000
const INPUT_EVENTS = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'scroll', 'touchstart']

/**
 * Records how long a page was in active use, in seconds, when it closes. Time counts only while the
 * tab is visible and until IDLE_MS after the last input, so a tab left open doesn't count as study.
 */
export function useTimeOnPage(onLeave: (seconds: number) => void) {
  const onLeaveRef = useRef(onLeave)
  useEffect(() => {
    onLeaveRef.current = onLeave
  })
  useEffect(() => {
    let activeMs = 0
    let lastInput: number | undefined = Date.now()
    // Adds the time since the last input, up to the idle limit.
    const settle = () => {
      const now = Date.now()
      if (lastInput !== undefined) activeMs += Math.min(now - lastInput, IDLE_MS)
      return now
    }
    const onInput = () => {
      lastInput = settle()
    }
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lastInput = Date.now()
      } else {
        settle()
        lastInput = undefined
      }
    }
    for (const name of INPUT_EVENTS) window.addEventListener(name, onInput, { capture: true, passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      for (const name of INPUT_EVENTS) window.removeEventListener(name, onInput, { capture: true })
      document.removeEventListener('visibilitychange', onVisibilityChange)
      settle()
      onLeaveRef.current(activeMs / 1000)
    }
  }, [])
}

/** The current time, refreshed every minute, so due counts stay current without reading the clock during render. */
export function useNow(): Date {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])
  return now
}
