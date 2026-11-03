import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
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
          <Reveal className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={faq.eyebrow} lead={faq.titleLead} accent={faq.titleAccent} />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={site.consultCta.href} arrow>{site.consultCta.label}</Button>
              <Button href={site.phones.tollFree.href} variant="outlineDark" icon={<Phone />}>{site.phones.tollFree.display}</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:col-span-7">
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
      {/* Raw JSON (not a text child): React would HTML-escape text on the server, and browsers do not decode
          entities inside <script>, which made the pre-rendered page fail hydration. "<" is escaped for safety. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </section>
  )
}
