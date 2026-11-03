import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import SmartLink from '../ui/SmartLink'
import ArrowBox from '../ui/ArrowBox'
import about from '../../data/about.json'
import home from '../../data/home.json'

const { practice } = about

function Row({ index, label, href }) {
  const inner = (
    <>
      <span className="font-label text-[17px] tracking-wider text-gold-800">[{String(index + 1).padStart(2, '0')}]</span>
      <span className="flex-1 font-display text-[24px] leading-tight text-navy-900 sm:text-[30px]">{label}</span>
      {href && <ArrowBox />}
    </>
  )
  const base = 'flex items-center gap-5 border-b border-silver py-5 sm:gap-8 sm:py-6'
  return (
    <li>
      {href ? (
        <SmartLink href={href} className={`group ${base} transition-colors hover:bg-white sm:px-4`}>
          {inner}
        </SmartLink>
      ) : (
        <div className={`${base} sm:px-4`}>{inner}</div>
      )}
    </li>
  )
}

export default function PracticeConcentration() {
  return (
    <section className="bg-offwhite py-20 lg:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={practice.eyebrow} lead={practice.titleLead} accent={practice.titleAccent} />
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate">{practice.intro}</p>
            <div className="relative mt-12 hidden max-w-[360px] lg:block">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 border-2 border-gold-500" aria-hidden="true" />
              <img src={home.about.image} alt={home.about.imageAlt} width="617" height="748" loading="lazy" className="relative aspect-[4/3] w-full object-cover" />
            </div>
            <Button href={practice.viewAll.href} variant="navy" arrow className="mt-12">{practice.viewAll.label}</Button>
          </div>
        </div>

        <ol className="border-t border-silver lg:col-span-7">
          {practice.areas.map((a, i) => (
            <Row key={a.label} index={i} {...a} />
          ))}
        </ol>
      </div>
    </section>
  )
}
