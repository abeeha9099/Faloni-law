import { useEffect } from 'react'

// Sets the document title and meta description for a page, restoring the previous values on leave.
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const prev = { title: document.title, description: meta?.getAttribute('content') }
    if (title) document.title = title
    if (description && meta) meta.setAttribute('content', description)
    return () => {
      document.title = prev.title
      if (meta && prev.description) meta.setAttribute('content', prev.description)
    }
  }, [title, description])
}
