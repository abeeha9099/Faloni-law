import SectionHeading from '../ui/SectionHeading'
import AttorneyProfile from '../cards/AttorneyProfile'
import about from '../../data/about.json'
import attorneys from '../../data/attorneys.json'

const { team } = about

export default function TeamSection() {
  return (
    <section id="attorneys" className="scroll-mt-24 bg-offwhite py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading eyebrow={team.eyebrow} lead={team.titleLead} accent={team.titleAccent} />
        <div className="mt-16 space-y-28 lg:mt-24 lg:space-y-36">
          {attorneys.map((a, i) => (
            <AttorneyProfile key={a.id} index={i} reverse={i % 2 === 1} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
