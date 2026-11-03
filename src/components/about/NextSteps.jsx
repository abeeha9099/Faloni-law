import SmartLink from '../ui/SmartLink'
import ArrowBox from '../ui/ArrowBox'
import about from '../../data/about.json'

// Two large link tiles leading to Practice Areas and Contact Us.
export default function NextSteps() {
  return (
    <section className="bg-navy-950 px-0 pt-4 sm:px-4 lg:px-6 lg:pt-6" aria-label="Next steps">
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
        {about.next.map((n) => {
          const gold = n.tone === 'gold'
          return (
            <SmartLink
              key={n.href}
              href={n.href}
              className={`group flex min-h-[260px] flex-col justify-between p-8 transition-transform duration-300 hover:-translate-y-1 lg:min-h-[340px] lg:p-12 ${
                gold ? 'bg-gold-500 text-navy-900' : 'bg-navy-800 text-white'
              }`}
            >
              <span className={`eyebrow ${gold ? '' : 'text-gold-500'}`}>{n.eyebrow}</span>
              <span className="flex items-end justify-between gap-6">
                <span className="font-display text-[48px] leading-[0.95] sm:text-[64px] lg:text-[88px]">{n.title}</span>
                <ArrowBox tone={gold ? 'gold' : 'dark'} className="h-14 w-14" />
              </span>
            </SmartLink>
          )
        })}
      </div>
    </section>
  )
}
