import navigation from '../../data/navigation.json'

const items = navigation.practiceAreas.map((a) => a.label)

function Track() {
  return (
    <ul className="flex shrink-0 items-center">
      {items.map((label) => (
        <li key={label} className="flex items-center whitespace-nowrap font-label text-[30px] tracking-[0.06em] text-offwhite lg:text-[40px]">
          {label}
          <span className="mx-8 h-2.5 w-2.5 bg-gold-500 lg:mx-12" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export default function MarqueeBand() {
  return (
    <div className="group relative overflow-hidden border-t border-navy-500/40 bg-navy-950 py-6" aria-hidden="true">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  )
}
