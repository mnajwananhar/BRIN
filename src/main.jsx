import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Temporarily disable StrictMode to prevent double API calls in development
  // <StrictMode>
    <App />
  // </StrictMode>,
)
