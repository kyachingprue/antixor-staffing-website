import { CheckCircle2 } from 'lucide-react'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import Eyebrow from '../Eyebrow.jsx'
import Button from '../Button.jsx'
import { whyChooseUs, img } from '../../data/content.js'

export default function WhyChooseUs() {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="right">
          <div className="rounded-[1.5rem] overflow-hidden shadow-xl">
            <img
              src={img.team}
              alt="Diverse team of skilled professionals"
              className="w-full h-[320px] md:h-[380px] object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <Eyebrow>Why Choose Antixor Staffing?</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-balance leading-tight">
            The Right Talent Makes All the Difference
          </h2>
          <StaggerGroup className="mt-7 space-y-4" stagger={0.1}>
            {whyChooseUs.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-ink/80">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-8">
            <Button to="/contact" variant="ghostNavy">
              Partner With Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
