import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PendingPage from './pages/PendingPage'
import NotFound from './pages/NotFound'
import { pendingRoutes } from './routes'

// Pages rebuilt so far. Every other original URL falls back to PendingPage.
const builtPages = [{ path: '/about-us/', element: <About /> }]
const built = new Set(builtPages.map((p) => p.path))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {builtPages.map((p) => (
          <Route key={p.path} path={p.path} element={p.element} />
        ))}
        {pendingRoutes
          .filter((r) => !built.has(r.href))
          .map((r) => (
            <Route key={r.href} path={r.href} element={<PendingPage title={r.label} />} />
          ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
