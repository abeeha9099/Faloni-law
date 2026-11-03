import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App, { routerFuture } from './App'
// Self-hosted, latin-only font files (only the weights the site uses). Orpheus Pro still comes from Adobe Fonts.
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/bebas-neue/latin-400.css'
import './index.css'

const app = (
  <StrictMode>
    <BrowserRouter future={routerFuture}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages pre-rendered at build time arrive with markup and are hydrated; all other routes render on the client.
const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
