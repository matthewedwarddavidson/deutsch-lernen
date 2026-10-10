import { useEffect } from 'react'
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router'
import { Icon, type IconName } from './components/Icon'
import { dueCards } from './lib/cards'
import { useNow } from './lib/hooks'
import { useAppState } from './lib/store'
import { Exam } from './pages/Exam'
import { GrammarLesson, GrammarList } from './pages/Grammar'
import { Learn } from './pages/Learn'
import { Dictation, ListeningList, ListeningPage } from './pages/Listening'
import { MatchingPage } from './pages/Matching'
import { Progress } from './pages/Progress'
import { ReadingList, ReadingPage } from './pages/Reading'
import { Reference } from './pages/Reference'
import { Review } from './pages/Review'
import { Settings } from './pages/Settings'
import { SpeedRound } from './pages/SpeedRound'
import { Today } from './pages/Today'
import { Words } from './pages/Words'
import { WritingList, WritingPage } from './pages/Writing'

const NAV: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Today', icon: 'today' },
  { to: '/words', label: 'Words', icon: 'words' },
  { to: '/grammar', label: 'Grammar', icon: 'grammar' },
  { to: '/reading', label: 'Reading', icon: 'reading' },
  { to: '/listening', label: 'Listening', icon: 'listening' },
  { to: '/writing', label: 'Writing', icon: 'writing' },
  { to: '/progress', label: 'Progress', icon: 'progress' },
]

function Sidebar() {
  const state = useAppState()
  const now = useNow()
  const due = dueCards(state, now).length
  return (
    <nav className="sidebar" aria-label="Main">
      <NavLink to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        Deutsch lernen
      </NavLink>
      {NAV.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav-link">
          <span className="row" style={{ gap: 10 }}>
            <Icon name={item.icon} />
            {item.label}
          </span>
          {item.to === '/' && due > 0 && <span className="nav-badge">{due}</span>}
        </NavLink>
      ))}
      <NavLink to="/exam" className="nav-link desktop-only">
        <span className="row" style={{ gap: 10 }}>
          <Icon name="check" />
          Exam
        </span>
      </NavLink>
      <NavLink to="/reference" className="nav-link desktop-only">
        <span className="row" style={{ gap: 10 }}>
          <Icon name="words" />
          Reference
        </span>
      </NavLink>
      <div className="nav-spacer" />
      <NavLink to="/settings" className="nav-link">
        <span className="row" style={{ gap: 10 }}>
          <Icon name="settings" />
          Settings
        </span>
      </NavLink>
    </nav>
  )
}

/** Starts a page afresh on every navigation, even to the same address, so "another round" links work. */
function Fresh({ page: Page }: { page: () => React.ReactNode }) {
  const location = useLocation()
  return <Page key={location.key} />
}

/** Applies the colour theme chosen in Settings; "system" follows the OS. */
function useTheme() {
  const { theme } = useAppState().settings
  useEffect(() => {
    if (theme === 'system') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = theme
  }, [theme])
}

export default function App() {
  useTheme()
  return (
    // Hash routes work on static hosting such as GitHub Pages without server rewrites.
    <HashRouter>
      <div className="app">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/review" element={<Fresh page={Review} />} />
            <Route path="/words" element={<Words />} />
            <Route path="/words/learn" element={<Fresh page={Learn} />} />
            <Route path="/words/speed" element={<Fresh page={SpeedRound} />} />
            <Route path="/grammar" element={<GrammarList />} />
            <Route path="/grammar/:topicId" element={<GrammarLesson />} />
            <Route path="/reading" element={<ReadingList />} />
            <Route path="/reading/:textId" element={<ReadingPage />} />
            <Route path="/reading/match/:taskId" element={<MatchingPage />} />
            <Route path="/listening" element={<ListeningList />} />
            <Route path="/listening/dictation" element={<Fresh page={Dictation} />} />
            <Route path="/listening/:textId" element={<ListeningPage />} />
            <Route path="/writing" element={<WritingList />} />
            <Route path="/writing/:taskId" element={<WritingPage />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Today />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
