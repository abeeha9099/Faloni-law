import SmartLink from '../ui/SmartLink'
import Button from '../ui/Button'
import navigation from '../../data/navigation.json'
import site from '../../data/site.json'

export default function MegaMenu({ id, onNavigate }) {
  return (
    <div id={id} className="absolute inset-x-0 top-full border-t border-navy-500/40 bg-navy-900 shadow-2xl shadow-navy-950/40">
      <div className="container-site grid grid-cols-12 gap-10 py-12">
        <div className="col-span-9 columns-3 gap-10">
          {navigation.practiceAreas.map((area) => (
            <div key={area.href} className="mb-8 break-inside-avoid">
              <SmartLink
                href={area.href}
                onClick={onNavigate}
                className="font-display text-[22px] leading-tight text-white transition-colors hover:text-gold-500"
              >
                {area.label}
              </SmartLink>
              {area.children && (
                <ul className="mt-3 space-y-2 border-l border-navy-500/50 pl-4">
                  {area.children.map((child) => (
                    <li key={child.href}>
                      <SmartLink href={child.href} onClick={onNavigate} className="text-[14px] text-navy-300 transition-colors hover:text-white">
                        {child.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <aside className="col-span-3 flex flex-col justify-between border border-navy-500/50 bg-navy-800 p-8">
          <div>
            <p className="eyebrow text-gold-500">Free initial consult</p>
            <p className="mt-4 font-display text-[30px] leading-tight text-white">Tell us how we can help you.</p>
          </div>
          <div className="mt-8 space-y-4">
            <a href={site.phones.tollFree.href} className="block font-label text-[34px] tracking-wide text-white hover:text-gold-500">
              {site.phones.tollFree.display}
            </a>
            <Button href="/practice-areas/" variant="outlineLight" arrow className="w-full" onClick={onNavigate}>
              All Practice Areas
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
