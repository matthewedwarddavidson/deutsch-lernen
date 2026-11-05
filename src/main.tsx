import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fonts are bundled with the site rather than loaded from Google Fonts, so visitors' IP addresses aren't sent there.
import '@fontsource-variable/inter'
import '@fontsource-variable/literata/opsz.css'
import '@fontsource-variable/literata/opsz-italic.css'
import './index.css'
import App from './App.tsx'
import { addMissingCards } from './lib/actions'
import { requestPersistentStorage } from './lib/backup'
import { DEFAULT_RETENTION, setDesiredRetention } from './lib/srs'
import { getState, subscribeToState } from './lib/store'
import { startSync } from './lib/sync'

requestPersistentStorage()
const applyRetention = () => setDesiredRetention(getState().settings.desiredRetention ?? DEFAULT_RETENTION)
applyRetention()
subscribeToState(applyRetention)
addMissingCards()
startSync()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
