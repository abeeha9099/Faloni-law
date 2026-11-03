import { useId, useState } from 'react'
import { Plus } from './ui/Icons'

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="border-b border-silver">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <div key={item.question} className="border-t border-silver">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-start gap-5 py-7 text-left"
              >
                <span className="mt-1 w-10 shrink-0 font-label text-[18px] tracking-wider text-gold-800" aria-hidden="true">[{String(i + 1).padStart(2, '0')}]</span>
                <span className="flex-1 font-display text-[22px] leading-snug text-navy-900 sm:text-[26px]">{item.question}</span>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300 ${
                    isOpen ? 'border-gold-500 bg-gold-500 text-navy-900' : 'border-navy-900/25 text-navy-900 group-hover:border-navy-900'
                  }`}
                  aria-hidden="true"
                >
                  <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus />
                  </span>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pb-8 pl-[60px] pr-4 text-[16px] leading-relaxed text-slate sm:pr-16">
                  {item.answer.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
