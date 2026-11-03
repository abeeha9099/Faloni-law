import { Link } from 'react-router-dom'

const isExternal = (href) => /^(https?:|tel:|mailto:)/.test(href)

// Router <Link> for internal paths, plain <a> for external, tel: and mailto: links.
export default function SmartLink({ href, children, ...props }) {
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
