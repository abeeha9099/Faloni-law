import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import site from '../../data/site.json'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)

  // On navigation: jump to the #anchor if there is one, otherwise to the top. The first load is left to the browser.
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (firstRender.current) {
      firstRender.current = false
      target?.scrollIntoView()
      return
    }
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-900">
        Skip to content
      </a>
      {/* Preview notice: explains why most links leave this site. Remove when every page is rebuilt. */}
      <aside aria-label="About this preview" className="bg-navy-950 px-4 py-2 text-center text-[12px] leading-snug text-navy-100 sm:text-[13px]">
        <span className="font-label tracking-[0.14em] text-gold-500">{site.preview.label}</span>
        <span className="mx-2 text-navy-500" aria-hidden="true">·</span>
        {site.preview.text}
      </aside>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
