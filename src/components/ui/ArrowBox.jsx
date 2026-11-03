import { ArrowUpRight } from './Icons'

// Square outlined arrow used as the "go" affordance on cards (reference: pricing cards).
export default function ArrowBox({ tone = 'light', className = '' }) {
  const tones = {
    light: 'border-navy-900/25 text-navy-900 group-hover:border-gold-500 group-hover:bg-gold-500',
    dark: 'border-white/30 text-white group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900',
    gold: 'border-navy-900/40 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500',
  }
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300 ${tones[tone]} ${className}`}
      aria-hidden="true"
    >
      <ArrowUpRight />
    </span>
  )
}
