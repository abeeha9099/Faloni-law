import GridLines from '../ui/GridLines'
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
        <SectionHeading eyebrow={copy.eyebrow} lead={copy.titleLead} accent={copy.titleAccent} tone="dark" />
        <div className="mt-14 lg:mt-20">
          <TestimonialSlider items={testimonials} />
        </div>
      </div>
    </section>
  )
}
