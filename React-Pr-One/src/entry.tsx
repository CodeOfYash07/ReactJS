import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import LuckyLoot from './LuckyLoot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LuckyLoot />
  </StrictMode>,
)
