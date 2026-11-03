// Hairline layout grid from the reference designs: lines on the container edges and quarter columns,
// with small nodes where they meet the section's top edge.
export default function GridLines({ tone = 'light', quarters = true, topRule = true }) {
  const line = tone === 'dark' ? 'bg-navy-500/45' : 'bg-silver/70'
  const node = tone === 'dark' ? 'bg-navy-500' : 'bg-silver'
  const positions = [
    { left: '0%', show: '' },
    ...(quarters ? [{ left: '25%', show: 'hidden lg:block' }, { left: '75%', show: 'hidden lg:block' }] : []),
    { left: '100%', show: '' },
  ]
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {topRule && <div className={`absolute inset-x-0 top-0 h-px ${line}`} />}
      <div className="container-site relative h-full">
        <div className="relative h-full">
          {positions.map((p) => (
            <div key={p.left} className={`absolute inset-y-0 w-px ${line} ${p.show}`} style={{ left: p.left }}>
              {topRule && <span className={`absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full ${node}`} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
