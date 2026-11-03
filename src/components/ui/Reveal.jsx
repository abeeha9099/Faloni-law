import { useEffect, useRef, useState } from 'react'

// One observer shared by every Reveal. Its first report for an element says whether it starts off screen; only
// those elements are hidden, then shown when they scroll in. Nothing is measured by hand, so there are no forced
// layouts, and content rendered without JavaScript (or for reduced-motion visitors) is never hidden.
const callbacks = new WeakMap()
let observer

function observe(el, onChange) {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) callbacks.get(entry.target)?.(entry.isIntersecting)
    })
  }
  callbacks.set(el, onChange)
  observer.observe(el)
  return () => {
    callbacks.delete(el)
    observer.unobserve(el)
  }
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let first = true
    const stop = observe(el, (visible) => {
      if (first) {
        first = false
        if (!visible) setPending(true)
        else stop()
        return
      }
      if (visible) {
        setPending(false)
        stop()
      }
    })
    return stop
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${pending ? 'reveal-pending' : ''} ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
