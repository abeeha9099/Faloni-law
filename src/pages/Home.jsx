import Hero from '../components/home/Hero'
import StatementBand from '../components/home/StatementBand'
import AboutSection from '../components/home/AboutSection'
import PracticeSection from '../components/home/PracticeSection'
import AttorneysSection from '../components/home/AttorneysSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FaqSection from '../components/home/FaqSection'
import AwardsSection from '../components/home/AwardsSection'
import MarqueeBand from '../components/home/MarqueeBand'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <StatementBand />
      <AboutSection />
      <PracticeSection />
      <AttorneysSection />
      <TestimonialsSection />
      <FaqSection />
      <AwardsSection />
      <MarqueeBand />
      <ContactSection />
    </>
  )
}
