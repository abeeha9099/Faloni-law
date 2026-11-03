import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import FaqAccordion from '../FaqAccordion'
import { Phone } from '../ui/Icons'
import home from '../../data/home.json'
import site from '../../data/site.json'
import faqs from '../../data/faqs.json'

const { faq } = home

export default function FaqSection() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.join(' ') },
    })),
  }
  return (
    <section className="bg-offwhite py-20 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={faq.eyebrow} lead={faq.titleLead} accent={faq.titleAccent} />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={site.consultCta.href} arrow>{site.consultCta.label}</Button>
              <Button href={site.phones.tollFree.href} variant="outlineDark" icon={<Phone />}>{site.phones.tollFree.display}</Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <FaqAccordion items={faqs} />
        </div>
      </div>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </section>
  )
}
