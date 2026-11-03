import SmartLink from '../ui/SmartLink'
import SectionHeading from '../ui/SectionHeading'
import ArrowBox from '../ui/ArrowBox'
import Reveal from '../ui/Reveal'
import PracticeCard from '../cards/PracticeCard'
import home from '../../data/home.json'
import site from '../../data/site.json'
import practiceAreas from '../../data/practiceAreas.json'
import navigation from '../../data/navigation.json'

const { practice } = home
const featured = new Set(practiceAreas.map((p) => p.href))
const others = navigation.practiceAreas.filter((a) => !featured.has(a.href))

export default function PracticeSection() {
  return (
    <section className="bg-navy-950 px-0 py-4 sm:px-4 lg:px-6 lg:py-6">
      {/* Navy gradient panel stands in for the reference's single gradient "moment". */}
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_100%_100%,rgba(57,80,130,0.45),transparent_55%),linear-gradient(135deg,var(--color-navy-700),var(--color-navy-900)_55%,var(--color-navy-950))] py-20 lg:py-28">
        <div className="container-site relative">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading eyebrow={practice.eyebrow} lead={practice.titleLead} accent={practice.titleAccent} tone="dark" className="lg:col-span-7" />
            <p className="text-[17px] leading-relaxed text-navy-100/85 lg:col-span-5">
              {practice.intro}{' '}
              <a href={site.phones.tollFree.href} className="whitespace-nowrap font-medium text-gold-500 hover:underline">
                {site.phones.tollFree.display}
              </a>
              .
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, i) => (
              <Reveal as="li" key={area.href} delay={(i % 4) * 80}>
                <PracticeCard index={i} {...area} />
              </Reveal>
            ))}
            <Reveal as="li" delay={240}>
              <SmartLink
                href={practice.viewAll.href}
                className="group flex h-full min-h-[300px] flex-col justify-between bg-gold-500 p-6 text-navy-900 transition-transform duration-300 hover:-translate-y-1 lg:p-7"
              >
                <div>
                  <span className="eyebrow">Also practicing</span>
                  <ul className="mt-4 space-y-1 text-[15px]">
                    {others.map((o) => <li key={o.href}>{o.label}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-display text-[34px] leading-[1.05]">{practice.viewAll.label}</p>
                  <ArrowBox tone="gold" className="mt-6" />
                </div>
              </SmartLink>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  )
}
