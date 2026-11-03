import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { Phone } from '../ui/Icons'
import home from '../../data/home.json'
import site from '../../data/site.json'

const { about } = home

export default function AboutSection() {
  return (
    <section className="bg-offwhite py-20 lg:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none">
          {/* Offset gold frame echoes the offset squares of the Faloni logo mark. */}
          <div className="absolute -bottom-4 -right-4 left-4 top-4 border-2 border-gold-500 sm:-bottom-5 sm:-right-5" aria-hidden="true" />
          <picture className="contents">
            <source type="image/webp" srcSet={about.image.replace(/\.jpg$/, '.webp')} />
            <img
              src={about.image}
              alt={about.imageAlt}
              width="617"
              height="748"
              loading="lazy"
              className="relative aspect-[617/748] w-full object-cover"
            />
          </picture>
          <div className="absolute -bottom-8 -left-4 bg-navy-900 px-7 py-6 sm:-left-8">
            <span className="block font-label text-[64px] leading-none text-gold-500">{about.badge.value}</span>
            <span className="eyebrow mt-1 block text-white">{about.badge.label}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <SectionHeading eyebrow={about.eyebrow} lead={about.titleLead} accent={about.titleAccent} />
          <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-slate">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={about.link.href} variant="navy" arrow>
              {about.link.label}
              <span className="sr-only"> about Faloni Law Group</span>
            </Button>
            <Button href={site.phones.main.href} variant="outlineDark" icon={<Phone />}>{site.phones.main.display}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
