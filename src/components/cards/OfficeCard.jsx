import ArrowBox from '../ui/ArrowBox'

export default function OfficeCard({ label, street, cityLine, mapUrl }) {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-8 border border-silver/80 bg-white p-6 transition-colors hover:border-navy-900"
    >
      <div>
        <h3 className="eyebrow text-[17px] text-gold-800">{label}</h3>
        <address className="mt-3 text-[16px] not-italic leading-snug text-navy-900">
          {street}
          <br />
          {cityLine}
        </address>
      </div>
      <span className="flex items-center justify-between text-[14px] font-medium text-navy-900">
        Get Directions<span className="sr-only"> to {label} office (opens Google Maps)</span>
        <ArrowBox />
      </span>
    </a>
  )
}
