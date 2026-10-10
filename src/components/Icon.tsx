const PATHS = {
  speaker: 'M11 5 6 9H3v6h3l5 4V5Zm4.5 3.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13',
  slow: 'M11 5 6 9H3v6h3l5 4V5Zm5 7h5',
  stop: 'M7 7h10v10H7z',
  today: 'M4 6h16M4 12h16M4 18h10',
  words: 'M4 5h7a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4V5Zm16 0h-4a3 3 0 0 0-3 3',
  grammar: 'M5 19 10 5h1l5 14M7 14h7M18 9v10',
  reading: 'M3 6c3-1 6-1 9 1 3-2 6-2 9-1v12c-3-1-6-1-9 1-3-2-6-2-9-1V6Zm9 1v12',
  listening: 'M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z',
  writing: 'm15 5 4 4L8 20H4v-4L15 5Z',
  progress: 'M4 20V10m6 10V4m6 16v-7m4 7H3',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.3l2-1.6-2-3.4-2.4 1a7.3 7.3 0 0 0-2.2-1.3L14.4 3h-4l-.4 2.5a7.3 7.3 0 0 0-2.2 1.3l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.6l-2 1.6 2 3.4 2.4-1a7.3 7.3 0 0 0 2.2 1.3l.4 2.5h4l.4-2.5a7.3 7.3 0 0 0 2.2-1.3l2.4 1 2-3.4-2-1.6c.1-.4.1-.9.1-1.3Z',
  check: 'm5 12 5 5L20 7',
  plus: 'M12 5v14M5 12h14',
  sparkle: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  trash: 'M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3',
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
