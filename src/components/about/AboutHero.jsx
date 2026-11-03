import Breadcrumbs from '../ui/Breadcrumbs'
import Button from '../ui/Button'
import GridLines from '../ui/GridLines'
import about from '../../data/about.json'
import home from '../../data/home.json'
import attorneys from '../../data/attorneys.json'

const { hero } = about
const founder = attorneys[0]

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-offwhite pb-20 pt-10 lg:pb-28 lg:pt-14">
      <GridLines tone="light" topRule={false} />
      <div className="container-site relative">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About us' }]} />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-gold-800">
              <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[clamp(64px,8.4vw,128px)] leading-[0.95] text-navy-900 lg:whitespace-nowrap">
              {hero.titleLead} <span className="accent-mark">{hero.titleAccent}</span>
            </h1>
            <p className="mt-10 max-w-xl font-display text-[24px] leading-snug text-navy-900 sm:text-[28px]">{hero.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/practice-areas/" variant="navy" arrow>Practice Areas</Button>
              <Button href="/contact-us/" variant="outlineDark" arrow>Contact Us</Button>
            </div>
          </div>

          {/* Navy fact panel: the same verified figures used on the homepage. */}
          <aside className="relative bg-navy-900 text-white lg:col-span-5" aria-label={hero.panelLabel}>
            <span className="absolute -right-3 -top-3 h-16 w-16 bg-gold-500" aria-hidden="true" />
            <div className="relative bg-navy-900 p-7 sm:p-9">
              <p className="eyebrow text-gold-500">{hero.panelLabel}</p>
              <dl className="mt-6 divide-y divide-navy-500/50 border-y border-navy-500/50">
                {home.statement.stats.map((s) => (
                  <div key={s.label} className="flex items-end justify-between gap-6 py-5">
                    <dt className="eyebrow text-[14px] text-navy-300">{s.label}</dt>
                    <dd className="font-label text-[64px] leading-[0.85] text-gold-500 sm:text-[76px]">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-center gap-4">
                <img src={founder.photo} alt="" className="h-14 w-14 rounded-full border-2 border-navy-700 object-cover object-top" />
                <p className="text-[15px] leading-snug text-navy-100">{hero.panelNote}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
