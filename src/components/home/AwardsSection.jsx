import GridLines from '../ui/GridLines'
import SectionHeading from '../ui/SectionHeading'
import home from '../../data/home.json'

const { awards } = home

// Only verified honors are listed here. Badge images from the current site are on hold until the firm confirms them.
export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-32">
      <GridLines tone="dark" />
      <div className="container-site relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-5">
          {/* Decorative numeral drawn as SVG so it is not treated as readable text. */}
          <svg viewBox="0 0 150 136" className="h-[96px] w-auto lg:h-[144px]" aria-hidden="true" focusable="false">
            <text x="0" y="134" fontFamily="'Bebas Neue', sans-serif" fontSize="180" fill="var(--color-navy-800)">01</text>
          </svg>
          <SectionHeading eyebrow={awards.eyebrow} lead={awards.titleLead} accent={awards.titleAccent} tone="dark" className="mt-8" />
        </div>
        <ul className="lg:col-span-7">
          {awards.items.map((a) => (
            <li key={a.name} className="relative border border-navy-500/50 bg-navy-800 p-8 lg:p-12">
              <span className="absolute right-0 top-0 h-16 w-16 border-b border-l border-navy-500/50 bg-gold-500 [clip-path:polygon(0_0,100%_0,100%_100%)]" aria-hidden="true" />
              <p className="eyebrow text-gold-500">{a.issuer}</p>
              <h3 className="mt-4 text-[38px] text-white lg:text-[48px]">{a.name}</h3>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-navy-100/85">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
