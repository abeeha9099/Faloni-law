import SmartLink from '../ui/SmartLink'
import ArrowBox from '../ui/ArrowBox'

export default function AttorneyCard({ name, title, photo, photoAlt, practice, href }) {
  return (
    <article className="group flex flex-col border border-silver/80 bg-white">
      <div className="relative aspect-[400/541] overflow-hidden bg-navy-100">
        <picture className="contents">
          <source type="image/webp" srcSet={photo.replace(/\.jpg$/, '.webp')} />
          <img
            src={photo}
            alt={photoAlt}
            width="400"
            height="541"
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </picture>
        <span className="absolute left-0 top-0 bg-navy-900 px-4 py-2 font-label text-[16px] tracking-[0.12em] text-gold-500">{title}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="text-[28px] leading-tight text-navy-900">{name}</h3>
        <p className="eyebrow mt-5 text-gold-800">Areas of practice</p>
        <ul className="mt-3 flex-1 space-y-2 text-[15px] text-slate">
          {practice.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-gold-500" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
        <SmartLink href={href} className="mt-6 flex items-center justify-between border-t border-silver pt-5 text-[14px] font-medium text-navy-900">
          <span>View Profile<span className="sr-only">: {name}</span></span>
          <ArrowBox />
        </SmartLink>
      </div>
    </article>
  )
}
