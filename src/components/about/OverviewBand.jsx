import GridLines from '../ui/GridLines'
import about from '../../data/about.json'
import offices from '../../data/offices.json'

const { overview } = about

export default function OverviewBand() {
  return (
    <section className="relative bg-navy-900 py-20 lg:py-28" aria-labelledby="overview-heading">
      <GridLines tone="dark" />
      <div className="container-site relative">
        <p className="eyebrow flex items-center gap-3 text-gold-500">
          <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
          {overview.eyebrow}
        </p>
        <h2 id="overview-heading" className="mt-6 max-w-5xl font-display text-[34px] leading-[1.15] sm:text-[48px] lg:text-[60px]">
          <span className="text-white">{overview.lead}</span> <span className="text-navy-300">{overview.rest}</span>
        </h2>

        <p className="eyebrow mt-16 text-navy-300 lg:mt-20">{overview.clienteleLabel}</p>
        <ul className="mt-5 grid grid-cols-2 border-l border-t border-navy-500/50 lg:grid-cols-4">
          {overview.clientele.map((c, i) => (
            <li key={c} className="flex min-h-[150px] flex-col justify-between border-b border-r border-navy-500/50 p-5 sm:min-h-[180px] sm:p-7">
              <span className="font-label text-[18px] tracking-wider text-gold-500">[{String(i + 1).padStart(2, '0')}]</span>
              <span className="font-display text-[24px] leading-[1.1] text-white sm:text-[30px]">{c}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl text-[17px] text-navy-100/85">{overview.offices}</p>
          <ul className="flex flex-wrap gap-2">
            {offices.map((o) => (
              <li key={o.id}>
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-navy-500/70 px-3.5 py-2 text-[13px] text-white transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  <span className="h-1.5 w-1.5 bg-gold-500" aria-hidden="true" />
                  {o.cityLine.replace(/ \d{5}$/, '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
