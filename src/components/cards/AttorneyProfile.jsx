import Button from '../ui/Button'
import site from '../../data/site.json'

// Full attorney profile for the About page: portrait in an offset gold frame, original bio, practice areas.
export default function AttorneyProfile({ id, index, name, title, photo, photoAlt, bio = [], practice = [], practiceNotes = {}, reverse = false }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <article id={id} className="scroll-mt-28 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className={`relative mx-auto w-full max-w-[400px] lg:col-span-5 lg:max-w-none ${reverse ? 'lg:order-2' : ''}`}>
        {/* Offset gold frame echoes the offset squares of the Faloni logo mark. */}
        <div className={`absolute -bottom-4 top-4 border-2 border-gold-500 sm:-bottom-5 ${reverse ? '-left-4 right-4 sm:-left-5' : '-right-4 left-4 sm:-right-5'}`} aria-hidden="true" />
        <div className="relative aspect-[400/541] overflow-hidden bg-navy-100">
          <picture className="contents">
            <source type="image/webp" srcSet={photo.replace(/\.jpg$/, '.webp')} />
            <img src={photo} alt={photoAlt} width="400" height="541" loading="lazy" className="h-full w-full object-cover object-top" />
          </picture>
        </div>
      </div>

      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <p className="eyebrow flex items-center gap-3 text-gold-800">
          <span className="text-navy-900/50">[{number}]</span>
          <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
          {title}
        </p>
        <h3 className="mt-4 text-[40px] leading-[1.02] text-navy-900 sm:text-[52px]">{name}</h3>
        <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-relaxed text-slate">
          {bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <h4 className="eyebrow mt-10 text-navy-900">Areas of practice</h4>
        <ul className="mt-4 grid border-t border-silver sm:grid-cols-2">
          {practice.map((p, i) => (
            <li key={p} className={`flex gap-4 border-b border-silver py-4 ${i % 2 === 0 ? 'sm:pr-6' : 'sm:border-l sm:pl-6'}`}>
              <span className="font-label text-[17px] tracking-wider text-gold-800">[{String(i + 1).padStart(2, '0')}]</span>
              <span className="text-[16px] leading-snug text-navy-900">
                {p}
                {practiceNotes[p] && <span className="mt-1 block text-[13px] text-slate">{practiceNotes[p]}</span>}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultCta.href} variant="navy" arrow>{site.consultCta.label}</Button>
        </div>
      </div>
    </article>
  )
}
