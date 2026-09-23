import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Target, Eye, Award } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import StatsStrip from '../components/home/StatsStrip.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CtaBanner from '../components/home/CtaBanner.jsx'
import { img, processSteps, testimonials } from '../data/content.js'

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To connect exceptional people with the opportunities that let them do their best work.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted staffing partner for businesses and candidates worldwide.' },
  { icon: Award, title: 'Our Promise', desc: 'Honest guidance, rigorous vetting, and a partnership that lasts beyond the placement.' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>About Us | Antixor Staffing</title>
        <meta
          name="description"
          content="Learn about Antixor Staffing's mission, values and the team helping businesses and job seekers build better careers."
        />
      </Helmet>

      <PageHero
        eyebrow="About Antixor Staffing"
        title="A Decade of Connecting People With Purpose"
        subtitle="We're a global recruitment and talent solutions company built on one idea: the right match changes everything."
        crumb="About"
      />

      <section className="container-px py-20 md:py-28 overflow-x-clip">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <Reveal direction="right" className="w-full">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="rounded-[1.5rem] overflow-hidden shadow-xl">
                <img
                  src={img.officeWide}
                  alt="Antixor Staffing office"
                  className="block w-full h-[300px] sm:h-[350px] md:h-[380px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div
                className="
            absolute
            -bottom-6
            right-3
            sm:right-4
            md:-right-10
            h-24 w-24
            sm:h-28 sm:w-28
            rounded-full
            bg-gold-500
            text-navy-950
            grid place-items-center
            text-center
            p-3
            shadow-xl
          "
              >
                <span className="font-display font-bold leading-tight">
                  <span className="block text-lg sm:text-xl">10+</span>

                  <span className="block text-[10px] sm:text-xs">
                    Years of Experience
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="left" delay={0.1} className="min-w-0">
            <Eyebrow>Our Story</Eyebrow>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance">
              Built by Recruiters Who Wanted Staffing Done Right
            </h2>

            <p className="mt-5 text-slate leading-relaxed">
              Antixor Staffing started with a simple frustration: too many
              staffing agencies treated hiring like a numbers game. We set out
              to build something different - a firm that takes the time to
              understand both sides of every match.
            </p>

            <p className="mt-4 text-slate leading-relaxed">
              Today we support companies across technology, healthcare,
              industrial and corporate sectors, and we've helped thousands of
              candidates find roles that actually fit their skills and goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-px py-20 md:py-28">
          <Reveal className="max-w-xl mb-14">
            <Eyebrow>What Drives Us</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance">
              Mission, Vision & Promise
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-6" stagger={0.1}>
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="h-full bg-white rounded-2xl p-7 border border-navy-950/5">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-navy-950 text-gold-400 mb-5">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-lg text-navy-950 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="container-px py-20 md:py-28">
        <Reveal className="max-w-xl mb-14">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance">
            Our Simple, Proven Process
          </h2>
        </Reveal>
        <StaggerGroup
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
        >
          {processSteps.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem key={title}>
              <div className="relative h-full bg-white rounded-2xl p-7 border border-navy-950/5">
                <span className="text-5xl font-display font-bold text-navy-950/5 absolute top-4 right-5">
                  0{i + 1}
                </span>
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold-500 text-navy-950 mb-5 relative">
                  <Icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-navy-950 mb-2">
                  {title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <StatsStrip />
      <Testimonials items={testimonials.slice(1, 4)} />
      <CtaBanner />
    </motion.div>
  )
}
