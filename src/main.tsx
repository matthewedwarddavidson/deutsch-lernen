import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { addMissingCards } from './lib/actions'
import { requestPersistentStorage } from './lib/backup'

requestPersistentStorage()
addMissingCards()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
