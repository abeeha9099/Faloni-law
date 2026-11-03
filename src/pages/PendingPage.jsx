import { useLocation } from 'react-router-dom'
import Button from '../components/ui/Button'
import GridLines from '../components/ui/GridLines'
import { Phone } from '../components/ui/Icons'
import site from '../data/site.json'

// Shown for original URLs whose redesigned page is not built yet. It says so plainly and offers the live page.
export default function PendingPage({ title }) {
  const { pathname } = useLocation()
  return (
    <section className="relative bg-navy-900 py-28 lg:py-40">
      <GridLines tone="dark" />
      <div className="container-site relative max-w-3xl text-center">
        <p className="eyebrow text-gold-500">Not part of this preview yet</p>
        <h1 className="mt-5 text-[44px] text-white sm:text-[64px]">{title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-navy-100/85">
          This is a design preview of the Faloni Law Group website. The redesigned version of this page has not been built
          yet, but the current page is available on falonilaw.com.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`https://www.falonilaw.com${pathname}`} arrow>
            View this page on falonilaw.com
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
          <Button href="/" variant="outlineLight">Back to the preview homepage</Button>
        </div>
        <p className="mt-10 text-[15px] text-navy-300">
          Prefer to talk to someone?{' '}
          <a href={site.phones.main.href} className="inline-flex items-center gap-2 font-medium text-white underline decoration-gold-500 underline-offset-4">
            <Phone className="h-4 w-4 text-gold-500" />
            {site.phones.main.display}
          </a>
        </p>
      </div>
    </section>
  )
}
