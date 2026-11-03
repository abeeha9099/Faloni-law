import SmartLink from './SmartLink'

// Breadcrumb trail for inner pages. The last item is the current page and is not linked.
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-slate">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-navy-900">{item.label}</span>
              ) : (
                <SmartLink href={item.href} className="transition-colors hover:text-navy-900">{item.label}</SmartLink>
              )}
              {!last && <span className="h-1 w-1 bg-gold-500" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
