import Button from '../ui/Button'
import GridLines from '../ui/GridLines'
import SectionHeading from '../ui/SectionHeading'
import AttorneyCard from '../cards/AttorneyCard'
import home from '../../data/home.json'
import site from '../../data/site.json'
import attorneys from '../../data/attorneys.json'

const { attorneys: copy } = home

export default function AttorneysSection() {
  return (
    <section className="relative bg-navy-50 py-20 lg:py-32">
      <GridLines tone="light" />
      <div className="container-site relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:pr-6">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={copy.eyebrow} lead={copy.titleLead} accent={copy.titleAccent} />
            <Button href={site.consultCta.href} variant="navy" arrow className="mt-10">
              {site.consultCta.label}
            </Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {attorneys.map((a) => (
            <AttorneyCard key={a.id} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
