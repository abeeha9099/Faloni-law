import SmartLink from '../ui/SmartLink'
import ArrowBox from '../ui/ArrowBox'

export default function PracticeCard({ index, title, href, icon, summary, topics = [] }) {
  return (
    <SmartLink
      href={href}
      className="group flex h-full flex-col bg-offwhite p-6 transition-transform duration-300 hover:-translate-y-1 lg:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center bg-navy-900">
          <img src={icon} alt="" width="32" height="32" loading="lazy" decoding="async" className="h-8 w-8" />
        </span>
        <span className="font-label text-[18px] tracking-wider text-slate">[{String(index + 1).padStart(2, '0')}]</span>
      </div>
      <h3 className="mt-8 text-[26px] leading-[1.1] text-navy-900">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">{summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${title} topics`}>
        {topics.map((t) => (
          <li key={t} className="border border-silver px-2 py-0.5 text-[12px] text-navy-700">{t}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-silver pt-5">
        <span className="text-[14px] font-medium text-navy-900">Read More</span>
        <ArrowBox />
      </div>
    </SmartLink>
  )
}
