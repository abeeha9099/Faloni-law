import AboutHero from '../components/about/AboutHero'
import OverviewBand from '../components/about/OverviewBand'
import PracticeConcentration from '../components/about/PracticeConcentration'
import ApproachSection from '../components/about/ApproachSection'
import TeamSection from '../components/about/TeamSection'
import NextSteps from '../components/about/NextSteps'
import ContactSection from '../components/home/ContactSection'
import usePageMeta from '../lib/usePageMeta'
import about from '../data/about.json'

export default function About() {
  usePageMeta(about.meta)
  return (
    <>
      <AboutHero />
      <OverviewBand />
      <PracticeConcentration />
      <ApproachSection />
      <TeamSection />
      <NextSteps />
      <ContactSection />
    </>
  )
}
