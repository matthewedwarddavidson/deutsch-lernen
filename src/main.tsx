import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { addMissingCards } from './lib/actions'
import { requestPersistentStorage } from './lib/backup'
import { startSync } from './lib/sync'

requestPersistentStorage()
addMissingCards()
startSync()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
