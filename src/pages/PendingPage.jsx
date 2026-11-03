import { useLocation } from 'react-router-dom'
import Button from '../components/ui/Button'
import GridLines from '../components/ui/GridLines'

// Temporary stand-in for pages that have not been rebuilt yet, so every original URL resolves during development.
export default function PendingPage({ title }) {
  const { pathname } = useLocation()
  return (
    <section className="relative bg-navy-900 py-28 lg:py-40">
      <GridLines tone="dark" />
      <div className="container-site relative max-w-3xl text-center">
        <p className="eyebrow text-gold-500">Redesign in progress</p>
        <h1 className="mt-5 text-[44px] text-white sm:text-[64px]">{title}</h1>
        <p className="mt-6 text-[17px] text-navy-300">This page has not been rebuilt yet. Its URL is reserved.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" arrow>Back to Home</Button>
          <Button href={`https://www.falonilaw.com${pathname}`} variant="outlineLight">View current page</Button>
        </div>
      </div>
    </section>
  )
}
