import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/styles.scss'
import App from './App.jsx'
import Navigation from './components/ui/Navigation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
</BrowserRouter>
  </StrictMode>,
)
