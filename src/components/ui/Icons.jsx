const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square', 'aria-hidden': true }

export function ArrowUpRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Chevron({ className = 'h-3 w-3', direction = 'down' }) {
  const rotate = { down: 0, up: 180, left: 90, right: -90 }[direction]
  return (
    <svg viewBox="0 0 24 24" className={className} style={{ transform: `rotate(${rotate}deg)` }} {...base} strokeWidth={2}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function Phone({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

export function Plus({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function Menu({ className = 'h-6 w-6', open }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.75}>
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
    </svg>
  )
}

export function Star({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6L12 2Z" />
    </svg>
  )
}

export function Clock({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
