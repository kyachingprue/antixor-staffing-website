import Reveal from '../Reveal.jsx'
import Eyebrow from '../Eyebrow.jsx'
import Button from '../Button.jsx'
import { img } from '../../data/content.js'

export default function CtaBanner() {
  return (
    <section className="container-px py-20 md:py-28">
      <Reveal>
        <div className="relative rounded-[2rem] overflow-hidden">
          <img src={img.cta} alt="Business handshake" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
          <div className="relative px-8 py-14 md:px-16 md:py-20 max-w-xl">
            <Eyebrow light>Partner With Us Today</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-balance leading-tight">
              Let&rsquo;s Build a Stronger Workforce Together
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Whether you&rsquo;re a job seeker looking for your next opportunity or a business searching for top
              talent, Antixor Staffing is here to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/employers">For Employers</Button>
              <Button to="/job-seekers" variant="outline">
                For Job Seekers
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
