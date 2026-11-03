import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { routerFuture } from './App'

// Used only at build time by scripts/prerender.js to turn routes into static HTML.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url} future={routerFuture}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
