import { Link } from 'react-router-dom'
import { liveUrlFor } from '../../routes'

const isExternal = (href) => /^(https?:|tel:|mailto:)/.test(href)

// Router <Link> for rebuilt pages, plain <a> for external, tel: and mailto: links.
// Links to an #anchor are plain <a> so the browser scrolls to the target every time, even on repeat clicks.
// Links to pages not rebuilt in this preview open the current falonilaw.com page in a new tab, and say so.
export default function SmartLink({ href, children, ...props }) {
  const live = liveUrlFor(href)
  if (live) {
    return (
      <a href={live} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <span className="sr-only"> (opens the current falonilaw.com site in a new tab)</span>
      </a>
    )
  }
  if (href.includes('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  if (isExternal(href)) {
    const newTab = href.startsWith('http')
    return (
      <a href={href} {...(newTab && { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}
