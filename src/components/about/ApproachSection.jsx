import GridLines from '../ui/GridLines'
import SectionHeading from '../ui/SectionHeading'
import SmartLink from '../ui/SmartLink'
import about from '../../data/about.json'

const { approach } = about

// Original About copy, split into its two themes. Inline links match the links on the original page.
export default function ApproachSection() {
  return (
    <section className="relative bg-navy-50 py-20 lg:py-32">
      <GridLines tone="light" />
      <div className="container-site relative">
        <SectionHeading eyebrow={approach.eyebrow} lead={approach.titleLead} accent={approach.titleAccent} />
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {approach.items.map((item, i) => (
            <article key={item.title} className="relative overflow-hidden border border-silver/80 bg-white p-7 sm:p-10">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gold-500" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-8 -right-2 select-none font-label text-[160px] leading-none text-navy-50" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="eyebrow relative text-gold-800">
                [{String(i + 1).padStart(2, '0')}] {item.label}
              </p>
              <h3 className="relative mt-4 text-[34px] leading-[1.05] text-navy-900 sm:text-[42px]">{item.title}</h3>
              <p className="relative mt-6 text-[17px] leading-[1.75] text-slate">
                {item.parts.map((part) =>
                  part.href ? (
                    <SmartLink key={part.text} href={part.href} className="font-medium text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-navy-900">
                      {part.text}
                    </SmartLink>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
