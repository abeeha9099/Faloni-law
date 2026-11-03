import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SmartLink from '../ui/SmartLink'
import Button from '../ui/Button'
import MegaMenu from './MegaMenu'
import MobileNav from './MobileNav'
import { Chevron, Menu, Phone } from '../ui/Icons'
import navigation from '../../data/navigation.json'
import site from '../../data/site.json'

const navLinkClass = ({ isActive }) =>
  `relative flex h-full items-center gap-1.5 text-[14px] transition-colors hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-gold-500 after:transition-transform after:duration-300 ${
    isActive ? 'text-white after:scale-x-100' : 'text-white/75 after:scale-x-0 hover:after:scale-x-100'
  }`

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef()
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onKey = (e) => e.key === 'Escape' && (setOpenMenu(null), setMobileOpen(false))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const open = (label) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }
  const close = () => setOpenMenu(null)

  return (
    <header className={`sticky top-0 z-50 bg-navy-900 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-navy-950/30' : ''}`}>
      <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-[88px]">
        <SmartLink href="/" className="shrink-0" aria-label={`${site.name}, home`}>
          <img src={site.logo} alt={`${site.name} logo`} width="328" height="81" className="h-9 w-auto lg:h-11" />
        </SmartLink>

        <nav aria-label="Main" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-7 xl:gap-9">
            {navigation.main.map((item) => {
              const hasMenu = item.mega || item.children
              const isOpen = openMenu === item.label
              const panelId = `menu-${item.label.replace(/\W/g, '')}`
              return (
                <li
                  key={item.href}
                  className={`flex h-full items-center ${item.children ? 'relative' : ''}`}
                  onMouseEnter={hasMenu ? () => open(item.label) : undefined}
                  onMouseLeave={hasMenu ? scheduleClose : undefined}
                  onBlur={hasMenu ? (e) => !e.currentTarget.contains(e.relatedTarget) && close() : undefined}
                >
                  <NavLink to={item.href} end={item.href === '/'} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                  {hasMenu && (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={`Show ${item.label} menu`}
                      onClick={() => (isOpen ? close() : open(item.label))}
                      className="ml-1 flex h-6 w-5 items-center justify-center text-gold-500"
                    >
                      <Chevron direction={isOpen ? 'up' : 'down'} />
                    </button>
                  )}
                  {isOpen && item.mega && <MegaMenu id={panelId} onNavigate={close} />}
                  {isOpen && item.children && (
                    <ul id={panelId} className="absolute left-0 top-full min-w-[240px] border border-navy-500/50 bg-navy-900 py-3 shadow-2xl shadow-navy-950/40">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SmartLink href={child.href} onClick={close} className="block px-5 py-2.5 text-[14px] text-navy-100 hover:bg-navy-800 hover:text-gold-500">
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-6">
          <a href={site.phones.main.href} className="hidden text-right leading-tight xl:block">
            <span className="block text-[12px] uppercase tracking-[0.12em] text-navy-300">Free initial consult</span>
            <span className="font-label text-[24px] tracking-wide text-white hover:text-gold-500">{site.phones.main.display}</span>
          </a>
          <span className="hidden sm:block">
            <Button href={site.consultCta.href}>Free Consult</Button>
          </span>
          <a
            href={site.phones.main.href}
            aria-label={`Call ${site.phones.main.display}`}
            className="flex h-11 w-11 items-center justify-center bg-gold-500 text-navy-900 sm:hidden"
          >
            <Phone />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-navy-500/70 text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Menu open={mobileOpen} />
          </button>
        </div>
      </div>
      {mobileOpen && <MobileNav id="mobile-nav" onNavigate={() => setMobileOpen(false)} />}
    </header>
  )
}
