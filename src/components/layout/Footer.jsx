import SmartLink from '../ui/SmartLink'
import navigation from '../../data/navigation.json'
import offices from '../../data/offices.json'
import site from '../../data/site.json'

const firmLinks = navigation.main.filter((item) => !item.mega && !item.children)
const formsNav = navigation.main.find((item) => item.children)
const formLinks = [{ label: formsNav.label, href: formsNav.href }, ...formsNav.children]

function Column({ title, children }) {
  return (
    <div>
      <h2 className="eyebrow mb-5 text-gold-500">{title}</h2>
      <ul className="space-y-2.5 text-[14px]">{children}</ul>
    </div>
  )
}

const linkClass = 'text-navy-300 transition-colors hover:text-white'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="overflow-hidden bg-navy-950 text-white">
      <div className="container-site grid gap-14 pb-16 pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <img src={site.logo} alt={`${site.name} logo`} width="328" height="81" className="h-11 w-auto" loading="lazy" />
          <p className="mt-8 font-display text-[30px] leading-tight">{site.tagline}</p>
          <dl className="mt-8 space-y-2 text-[15px]">
            <div className="flex gap-3">
              <dt className="w-20 text-navy-300">Phone</dt>
              <dd><a href={site.phones.main.href} className="hover:text-gold-500">{site.phones.main.display}</a></dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 text-navy-300">Toll Free</dt>
              <dd><a href={site.phones.tollFree.href} className="hover:text-gold-500">{site.phones.tollFree.display}</a></dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 text-navy-300">Fax</dt>
              <dd>{site.phones.fax.display}</dd>
            </div>
          </dl>
          <div className="mt-8 flex items-center gap-3">
            <span className="eyebrow mr-2 text-navy-300">Follow Us</span>
            {site.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center border border-navy-500/60 transition-colors hover:border-gold-500"
              >
                <img src={s.icon} alt="" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          <Column title="Practice Areas">
            {navigation.practiceAreas.map((a) => (
              <li key={a.href}><SmartLink href={a.href} className={linkClass}>{a.label}</SmartLink></li>
            ))}
          </Column>
          <Column title="Firm">
            {firmLinks.map((l) => (
              <li key={l.href}><SmartLink href={l.href} className={linkClass}>{l.label}</SmartLink></li>
            ))}
          </Column>
          <Column title="Client Forms">
            {formLinks.map((l) => (
              <li key={l.href}><SmartLink href={l.href} className={linkClass}>{l.label}</SmartLink></li>
            ))}
          </Column>
          <Column title="Offices">
            {offices.map((o) => (
              <li key={o.id}>
                <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {o.cityLine.replace(/ \d{5}$/, '')}
                </a>
              </li>
            ))}
          </Column>
        </div>
      </div>

      <div className="container-site" aria-hidden="true">
        <div className="h-px bg-gold-500" />
        {/* Decorative wordmark drawn as SVG so it scales to the container and is not treated as readable text. */}
        <svg viewBox="0 0 1000 336" className="mt-4 block w-full select-none" focusable="false">
          <text x="500" y="332" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="466" letterSpacing="9" fill="var(--color-navy-800)">
            FALONI
          </text>
        </svg>
      </div>

      <div className="border-t border-navy-500/40">
        <div className="container-site flex flex-col gap-4 py-6 text-[13px] text-navy-300 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl">© {year} {site.name}. {site.legal.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {site.legal.links.map((l) => (
              <SmartLink key={l.href} href={l.href} className="hover:text-white">{l.label}</SmartLink>
            ))}
            <span>
              {site.legal.credit.prefix}{' '}
              <a href={site.legal.credit.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.legal.credit.label}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
