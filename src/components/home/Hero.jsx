import Button from '../ui/Button'
import GridLines from '../ui/GridLines'
import { Clock, Phone } from '../ui/Icons'
import home from '../../data/home.json'
import site from '../../data/site.json'
import attorneys from '../../data/attorneys.json'

const { hero } = home

function HoursCard({ className = '' }) {
  return (
    <div className={`bg-navy-900 p-6 text-white shadow-2xl shadow-navy-950/30 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="font-display text-[24px] leading-tight">Hours of Operation</p>
        <span className="flex h-8 w-8 items-center justify-center bg-gold-500 text-navy-900"><Clock /></span>
      </div>
      <dl className="mt-5 space-y-2 border-t border-navy-500/60 pt-4 text-[14px]">
        {site.hours.map((h) => (
          <div key={h.days} className="flex justify-between gap-4">
            <dt className="text-navy-300">{h.days}</dt>
            <dd>{h.time}</dd>
          </div>
        ))}
      </dl>
      <a href={site.phones.tollFree.href} className="mt-5 block border-t border-navy-500/60 pt-4">
        <span className="block text-[12px] uppercase tracking-[0.12em] text-navy-300">Toll Free</span>
        <span className="font-label text-[30px] tracking-wide text-gold-500">{site.phones.tollFree.display}</span>
      </a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <GridLines tone="light" topRule={false} />

      <div className="container-site relative pt-16 text-center sm:pt-20 lg:pt-24">
        <p className="hero-enter eyebrow flex items-center justify-center gap-3 text-gold-800">
          <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="hero-enter mx-auto mt-6 max-w-5xl text-[52px] text-navy-900 [--enter-delay:80ms] sm:text-[80px] lg:text-[112px]">
          {hero.titleLead} <span className="accent-mark">{hero.titleAccent}</span>
        </h1>
        <p className="hero-enter mx-auto mt-6 max-w-xl text-[17px] text-slate [--enter-delay:160ms] sm:text-[19px]">{hero.subtitle}</p>
        <div className="hero-enter relative mt-9 [--enter-delay:240ms]">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={site.consultCta.href} arrow>{site.consultCta.label}</Button>
            <Button href={site.phones.main.href} variant="outlineDark" icon={<Phone />}>
              Call {site.phones.main.display}
            </Button>
          </div>

          {/* Side labels pinned to the quarter grid lines, level with the CTAs, as in the reference hero. */}
          <ul className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 text-[13px] text-slate xl:block" aria-hidden="true">
            <li className="absolute right-[75%] flex items-center gap-3">
              Estate Planning · Elder Law
              <span className="h-[7px] w-[7px] translate-x-[3.5px] rounded-full bg-silver ring-4 ring-offwhite" />
            </li>
            <li className="absolute left-[75%] flex items-center gap-3">
              <span className="h-[7px] w-[7px] -translate-x-[3.5px] rounded-full bg-silver ring-4 ring-offwhite" />
              Injury · Collections · Real Estate
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site relative mt-14 lg:mt-20">
        <div className="relative">
          <div className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[500px]">
            <picture className="contents">
              <source
                type="image/webp"
                srcSet="/images/photos/hero-manhattan-bridge-720.webp 720w, /images/photos/hero-manhattan-bridge-960.webp 960w, /images/photos/hero-manhattan-bridge-1280.webp 1280w, /images/photos/hero-manhattan-bridge-1920.webp 1920w"
                sizes="(min-width: 1280px) 1200px, (min-width: 1024px) calc(100vw - 80px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              />
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width="1920"
                height="970"
                fetchpriority="high"
                className="h-full w-full object-cover object-[center_70%]"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-navy-900/10" />
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-4 bg-offwhite/95 p-3 pr-5 backdrop-blur sm:bottom-8 sm:left-8">
            <div className="flex -space-x-3">
              {attorneys.map((a) => (
                <img
                  key={a.id}
                  src={a.photo.replace(/\.jpg$/, '.webp')}
                  alt=""
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-full border-2 border-offwhite object-cover object-top"
                />
              ))}
            </div>
            <div className="text-left leading-tight">
              <p className="font-display text-[18px] text-navy-900">{site.tagline}</p>
              <p className="text-[13px] text-slate">Over 40 years of experience</p>
            </div>
          </div>

          <HoursCard className="absolute -top-16 right-8 hidden w-[300px] lg:block" />
        </div>
        <HoursCard className="mt-4 lg:hidden" />
      </div>
    </section>
  )
}
