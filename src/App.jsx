import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PendingPage from './pages/PendingPage'
import NotFound from './pages/NotFound'
import { pendingRoutes } from './routes'

// Opt in to React Router v7 behaviour now (silences the v6 upgrade warnings). Shared by client and prerender.
export const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true }

// Pages rebuilt so far (the home route is the index below). Add new pages here and to builtPaths in routes.js.
const builtPages = [{ path: '/about-us/', element: <About /> }]

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {builtPages.map((p) => (
          <Route key={p.path} path={p.path} element={p.element} />
        ))}
        {pendingRoutes.map((r) => (
          <Route key={r.href} path={r.href} element={<PendingPage title={r.label} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
