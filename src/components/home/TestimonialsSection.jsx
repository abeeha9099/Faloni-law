import GridLines from '../ui/GridLines'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import TestimonialSlider from '../TestimonialSlider'
import home from '../../data/home.json'
import testimonials from '../../data/testimonials.json'

const { testimonials: copy } = home

export default function TestimonialsSection() {
  return (
    <section className="relative bg-navy-900 py-20 lg:py-32">
      <GridLines tone="dark" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading eyebrow={copy.eyebrow} lead={copy.titleLead} accent={copy.titleAccent} tone="dark" />
        </Reveal>
        <Reveal delay={120} className="mt-14 lg:mt-20">
          <TestimonialSlider items={testimonials} />
        </Reveal>
      </div>
    </section>
  )
}
