import GridLines from '../ui/GridLines'
import Reveal from '../ui/Reveal'
import home from '../../data/home.json'

const { statement } = home

export default function StatementBand() {
  return (
    <section className="relative bg-navy-900 py-20 lg:py-28" aria-label="About the firm in brief">
      {/* The stat dividers carry the inner grid here, so the quarter lines are omitted. */}
      <GridLines tone="dark" quarters={false} />
      <div className="container-site relative">
        <Reveal as="p" className="mx-auto max-w-5xl text-center font-display text-[32px] leading-[1.2] sm:text-[44px] lg:text-[56px]">
          <span className="text-white">{statement.lead}</span> <span className="text-navy-300">{statement.rest}</span>
        </Reveal>
        <Reveal as="dl" delay={100} className="mt-14 grid grid-cols-3 border-t border-navy-500/50 lg:mt-24">
          {statement.stats.map((s, i) => (
            <div key={s.label} className={`px-2 py-8 text-center sm:py-10 ${i > 0 ? 'border-l border-navy-500/50' : ''}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-label text-[56px] leading-none text-gold-500 sm:text-[80px] lg:text-[104px]">{s.value}</span>
                <span className="eyebrow mt-3 block text-[12px] text-navy-300 sm:text-[15px]">{s.label}</span>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
