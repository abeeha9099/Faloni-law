import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ContactForm from '../ContactForm'
import OfficeCard from '../cards/OfficeCard'
import { Clock } from '../ui/Icons'
import home from '../../data/home.json'
import site from '../../data/site.json'
import offices from '../../data/offices.json'

const { contact } = home

export default function ContactSection() {
  return (
    <section id="consult" className="relative scroll-mt-16 bg-offwhite pb-20 lg:pb-32">
      {/* Curved navy tab carried down from the marquee (reference image 5). */}
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-10 w-full text-navy-950 lg:h-16" aria-hidden="true">
        <path d="M0 0H1440C1330 0 1310 64 1210 64H230C130 64 110 0 0 0Z" fill="currentColor" />
      </svg>

      <div className="container-site grid gap-16 pt-14 lg:grid-cols-12 lg:gap-12 lg:pt-20">
        <Reveal className="lg:col-span-6">
          <SectionHeading eyebrow={contact.eyebrow} lead={contact.titleLead} accent={contact.titleAccent} />
          <div className="mt-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <h2 className="eyebrow flex items-center gap-3 text-gold-800">
            <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
            Our Offices
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {offices.map((o) => (
              <OfficeCard key={o.id} {...o} />
            ))}
          </div>
          <div className="mt-4 grid gap-6 bg-navy-900 p-6 text-white sm:grid-cols-2 lg:p-8">
            <div>
              <p className="flex items-center gap-2 font-display text-[24px]">
                <Clock className="h-5 w-5 text-gold-500" /> Hours of Operation
              </p>
              <dl className="mt-4 space-y-1.5 text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 sm:justify-start">
                    <dt className="w-24 text-navy-300">{h.days}</dt>
                    <dd className="whitespace-nowrap">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="space-y-3 border-t border-navy-500/60 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <a href={site.phones.main.href} className="block">
                <span className="block text-[12px] uppercase tracking-[0.12em] text-navy-300">Main</span>
                <span className="font-label text-[28px] tracking-wide hover:text-gold-500">{site.phones.main.display}</span>
              </a>
              <a href={site.phones.tollFree.href} className="block">
                <span className="block text-[12px] uppercase tracking-[0.12em] text-navy-300">Toll Free</span>
                <span className="font-label text-[28px] tracking-wide text-gold-500 hover:text-gold-600">{site.phones.tollFree.display}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
