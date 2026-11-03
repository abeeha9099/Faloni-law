import { useState } from 'react'
import { Chevron, Star } from './ui/Icons'

const pad = (n) => String(n).padStart(2, '0')

// Splits a quote after its first sentence so the opening reads bright and the rest muted (reference image 5).
function splitQuote(text) {
  const match = text.match(/^.+?[.!?](\s|$)/)
  return match ? [match[0].trim(), text.slice(match[0].length)] : [text, '']
}

export default function TestimonialSlider({ items }) {
  const [index, setIndex] = useState(0)
  const go = (step) => setIndex((i) => (i + step + items.length) % items.length)
  const current = items[index]
  const [first, rest] = splitQuote(current.quote)

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex items-end justify-between lg:col-span-3 lg:flex-col lg:items-start">
        <p className="font-label text-[64px] leading-none tracking-wide text-white lg:text-[96px]" aria-hidden="true">
          {pad(index + 1)}
          <span className="text-navy-300"> / {pad(items.length)}</span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center border border-navy-500 text-white transition-colors hover:border-gold-500 hover:text-gold-500"
          >
            <Chevron direction="up" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center bg-gold-500 text-navy-900 transition-colors hover:bg-gold-600"
          >
            <Chevron direction="down" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <figure className="lg:col-span-9" aria-live="polite" aria-roledescription="testimonial" aria-label={`${index + 1} of ${items.length}`}>
        <span className="block font-display text-[96px] leading-[0.6] text-gold-500" aria-hidden="true">“</span>
        <blockquote key={index} className="mt-4 animate-[fadeIn_.5s_ease] font-display text-[24px] leading-[1.35] sm:text-[30px] lg:text-[36px]">
          <span className="text-white">{first}</span> <span className="text-navy-300">{rest}</span>
        </blockquote>
        <figcaption className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy-500/50 pt-6">
          <span className="flex gap-1 text-gold-500" role="img" aria-label="5 star review">
            {[0, 1, 2, 3, 4].map((s) => <Star key={s} />)}
          </span>
          <span className="font-label text-[22px] tracking-wider text-white">{current.name}</span>
          <span className="text-[14px] text-navy-300">Client Testimonial</span>
        </figcaption>
      </figure>
    </div>
  )
}
