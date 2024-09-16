import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
      <Toaster visibleToasts={1} position='bottom-right'/>
    </Router>
  </StrictMode>,
)
