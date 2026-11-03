// Eyebrow + two-part headline. The accent word is gold on navy, and sits on a gold mark on light backgrounds.
export default function SectionHeading({ eyebrow, lead, accent, tone = 'light', align = 'left', as: Tag = 'h2', size = 'md', className = '' }) {
  const dark = tone === 'dark'
  const sizes = {
    md: 'text-[40px] sm:text-5xl lg:text-[64px]',
    lg: 'text-[48px] sm:text-[72px] lg:text-[104px]',
  }
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${dark ? 'text-gold-500' : 'text-gold-800'}`}>
          <span className="h-2 w-2 bg-gold-500" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className={`${sizes[size]} ${dark ? 'text-white' : 'text-navy-900'}`}>
        {lead}{' '}
        {accent && <span className={dark ? 'text-gold-500' : 'accent-mark'}>{accent}</span>}
      </Tag>
    </div>
  )
}
