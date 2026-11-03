import { useState } from 'react'
import SmartLink from '../ui/SmartLink'
import Button from '../ui/Button'
import { Chevron, Phone } from '../ui/Icons'
import navigation from '../../data/navigation.json'
import site from '../../data/site.json'

function Expandable({ label, href, items, onNavigate, depth = 0 }) {
  const [open, setOpen] = useState(false)
  const id = `m-${href.replace(/\W/g, '')}`
  return (
    <li className={depth === 0 ? 'border-b border-navy-500/40' : ''}>
      <div className="flex items-center justify-between">
        <SmartLink
          href={href}
          onClick={onNavigate}
          className={depth === 0 ? 'block py-4 font-display text-[26px] text-white' : 'block py-2.5 text-[16px] text-white'}
        >
          {label}
        </SmartLink>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${label}`}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center border border-navy-500/60 text-gold-500"
        >
          <Chevron direction={open ? 'up' : 'down'} />
        </button>
      </div>
      {open && (
        <ul id={id} className={`pb-4 ${depth === 0 ? 'pl-1' : 'border-l border-navy-500/50 pl-4'}`}>
          {items.map((item) =>
            item.children ? (
              <Expandable key={item.href} {...item} items={item.children} onNavigate={onNavigate} depth={depth + 1} />
            ) : (
              <li key={item.href}>
                <SmartLink href={item.href} onClick={onNavigate} className={`block py-2.5 ${depth === 0 ? 'text-[16px] text-white' : 'text-[15px] text-navy-300'}`}>
                  {item.label}
                </SmartLink>
              </li>
            ),
          )}
        </ul>
      )}
    </li>
  )
}

export default function MobileNav({ id, onNavigate }) {
  return (
    <div id={id} className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-navy-950 lg:hidden">
      <nav aria-label="Mobile" className="container-site pb-10 pt-4">
        <ul>
          {navigation.main.map((item) => {
            const children = item.mega ? navigation.practiceAreas : item.children
            return children ? (
              <Expandable key={item.href} label={item.label} href={item.href} items={children} onNavigate={onNavigate} />
            ) : (
              <li key={item.href} className="border-b border-navy-500/40">
                <SmartLink href={item.href} onClick={onNavigate} className="block py-4 font-display text-[26px] text-white">
                  {item.label}
                </SmartLink>
              </li>
            )
          })}
        </ul>
        <div className="mt-8 space-y-3">
          <Button href={site.consultCta.href} className="w-full" onClick={onNavigate}>
            {site.consultCta.label}
          </Button>
          <Button href={site.phones.main.href} variant="outlineLight" className="w-full" icon={<Phone />}>
            {site.phones.main.display}
          </Button>
        </div>
      </nav>
    </div>
  )
}
