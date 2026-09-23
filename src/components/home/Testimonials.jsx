import { Quote } from 'lucide-react'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import Eyebrow from '../Eyebrow.jsx'
import { testimonials } from '../../data/content.js'

export default function Testimonials({ items = testimonials.slice(0, 3) }) {
  return (
    <section className="container-px py-20 md:py-28 overflow-x-clip">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <Reveal direction="right">
          <Eyebrow>Success Stories</Eyebrow>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-balance leading-tight max-w-lg">
            Trusted by Businesses, Loved by Candidates
          </h2>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <p className="text-slate max-w-sm">
            Hear from our clients and candidates about their experience with
            Antixor Staffing.
          </p>
        </Reveal>
      </div>

      <StaggerGroup
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        stagger={0.1}
      >
        {items.map(t => (
          <StaggerItem key={t.name}>
            <div className="h-full bg-cream rounded-2xl p-7 border border-navy-950/5">
              <Quote className="text-gold-500 mb-4" size={28} />

              <p className="text-ink/75 leading-relaxed text-[15px]">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-display font-semibold text-navy-950 text-sm">
                    {t.name}
                  </p>

                  <p className="text-xs text-slate truncate">{t.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
