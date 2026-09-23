import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import CtaBanner from '../components/home/CtaBanner.jsx'
import { services, processSteps } from '../data/content.js'

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Helmet>
        <title>Our Services | Antixor Staffing</title>
        <meta name="description" content="Explore Antixor Staffing's full range of staffing solutions - permanent, temporary, executive search, IT, healthcare, industrial and remote hiring." />
      </Helmet>

      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Staffing Solutions for Every Need"
        subtitle="From hiring to long-term talent management, we offer flexible and customized staffing solutions built around your business."
        crumb="Services"
      />

      <section className="container-px py-20 md:py-28">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {services.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="group h-full bg-white rounded-2xl p-7 border border-navy-950/5 hover:border-gold-400/60 hover:shadow-xl transition-all duration-300">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-navy-950 text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                  <Icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-xl text-navy-950 mb-3">{title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-5">{desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-navy-900 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Request This Service <ArrowRight size={14} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-navy-950">
        <div className="container-px py-20 md:py-28">
          <Reveal className="max-w-xl mb-14">
            <Eyebrow light>How It Works</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight text-balance">
              A Straightforward Path to the Right Hire
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
              <StaggerItem key={title}>
                <div className="h-full bg-white/[0.04] border border-white/10 rounded-2xl p-7">
                  <span className="text-sm font-display font-bold text-gold-400 mb-3 block">Step 0{i + 1}</span>
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold-500 text-navy-950 mb-5">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </motion.div>
  )
}
