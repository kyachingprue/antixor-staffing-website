import Reveal from '../Reveal.jsx'
import Eyebrow from '../Eyebrow.jsx'
import Button from '../Button.jsx'
import { img } from '../../data/content.js'

export default function AboutSnippet() {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="right">
          <div className="relative max-w-md">
            <div className="rounded-[1.5rem] overflow-hidden border border-navy-950/5 shadow-xl">
              <img
                src={img.about}
                alt="Antixor Staffing recruitment team"
                className="w-full h-[340px] md:h-[380px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-1 md:-right-10 h-28 w-28 rounded-full bg-gold-500 text-navy-950 grid place-items-center text-center p-3 shadow-xl">
              <span className="font-display font-bold leading-tight">
                <span className="block text-xl">10+</span>
                <span className="block text-xs">Years of Experience</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <Eyebrow>About Antixor Staffing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-balance leading-tight">
            We&rsquo;re More Than Just a Staffing Agency
          </h2>
          <p className="mt-5 text-slate leading-relaxed max-w-lg">
            Antixor Staffing is a global recruitment and talent solutions company, dedicated to connecting
            exceptional people with incredible opportunities. We help businesses grow with the right talent and
            support job seekers in building better careers.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="ghostNavy">
              Learn More About Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
