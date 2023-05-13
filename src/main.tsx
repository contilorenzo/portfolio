import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ThemeProvider>
)
