import { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import { stats } from '../../data/content.js'

export default function StatsStrip() {
  return (
    <section className="container-px pb-20 md:pb-28">
      <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" stagger={0.1}>
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="text-center md:text-left border-t-2 border-gold-500 pt-5">
              <p className="text-3xl md:text-4xl font-display font-bold text-navy-950">{s.value}</p>
              <p className="text-slate text-sm mt-1">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
