interface Source {
  name: string
  url: string
  level: string
  description: string
}

const READING: Source[] = [
  {
    name: 'nachrichtenleicht',
    url: 'https://www.nachrichtenleicht.de',
    level: 'A2–B1',
    description: 'Weekly news in simple German from Deutschlandfunk, with a glossary and audio.',
  },
  {
    name: 'DW Learn German',
    url: 'https://learngerman.dw.com/de/overview',
    level: 'A1–C1',
    description: 'Graded articles, Top-Thema with vocabulary, and slowly spoken news.',
  },
  {
    name: 'logo!',
    url: 'https://www.zdf.de/kinder/logo',
    level: 'B1',
    description: "ZDF's children's news: real current events in clear, short German.",
  },
]

const LISTENING: Source[] = [
  {
    name: 'Easy German',
    url: 'https://www.youtube.com/@EasyGerman',
    level: 'A2–C1',
    description: 'Unscripted street interviews with German and English subtitles. Real speech, many voices.',
  },
  {
    name: 'Easy German podcast',
    url: 'https://www.easygerman.fm',
    level: 'B1–C1',
    description: 'Two Berliners chatting about everyday life, with transcripts for members.',
  },
  {
    name: 'Slow German',
    url: 'https://slowgerman.com',
    level: 'A2–B1',
    description: 'Short episodes on German life and culture, read slowly, with transcripts.',
  },
  {
    name: 'ARD Audiothek',
    url: 'https://www.ardaudiothek.de',
    level: 'B2–C1',
    description: 'Public radio podcasts, features and radio plays on every topic.',
  },
  {
    name: 'Deutschlandfunk Nova',
    url: 'https://www.deutschlandfunknova.de',
    level: 'C1',
    description: 'Science, society and culture podcasts for a young audience: natural, fast speech.',
  },
]

/**
 * Real German beyond the app. The app can't hold enough text and audio for B2 and C1,
 * and human voices with natural speed and hesitations matter for listening.
 */
export function OutsideInput({ kind }: { kind: 'reading' | 'listening' }) {
  const sources = kind === 'reading' ? READING : LISTENING
  return (
    <div className="section">
      <div className="section-title">Beyond the app</div>
      <p className="small muted">
        {kind === 'reading'
          ? 'From B1, most new words come from reading a lot. These are free and pitched at learners or young readers.'
          : 'From B1, listen to real people too: natural speed, accents and hesitations that recorded voices lack.'}
      </p>
      <div className="grid two">
        {sources.map((source) => (
          <a key={source.name} className="card card-link" href={source.url} target="_blank" rel="noreferrer">
            <div className="row between">
              <h3 style={{ margin: 0 }}>{source.name} ↗</h3>
              <span className="pill">{source.level}</span>
            </div>
            <div className="small muted">{source.description}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
