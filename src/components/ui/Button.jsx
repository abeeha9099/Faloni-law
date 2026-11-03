import SmartLink from './SmartLink'
import { ArrowUpRight } from './Icons'

const variants = {
  gold: 'bg-gold-500 text-navy-900 hover:bg-gold-600',
  navy: 'bg-navy-900 text-white hover:bg-navy-700',
  outlineDark: 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  outlineLight: 'border border-white/50 text-white hover:border-white hover:bg-white hover:text-navy-900',
}

export default function Button({ href, variant = 'gold', arrow = false, icon, className = '', children, ...props }) {
  const classes = `inline-flex h-12 items-center justify-center gap-2.5 px-6 text-[15px] font-medium transition-colors duration-300 ${variants[variant]} ${className}`
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && <ArrowUpRight />}
    </>
  )
  if (href) {
    return (
      <SmartLink href={href} className={classes} {...props}>
        {content}
      </SmartLink>
    )
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
