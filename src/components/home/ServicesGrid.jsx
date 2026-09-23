import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Eyebrow from '../Eyebrow.jsx'
import Button from '../Button.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import { services } from '../../data/content.js'

export default function ServicesGrid() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="container-px py-20 md:py-28 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <Reveal direction="right" className="max-w-lg">
            <Eyebrow light>Our Services</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-balance leading-tight">
              Comprehensive Staffing Solutions
            </h2>
            <p className="mt-4 text-white/55 leading-relaxed">
              From hiring to long-term talent management, we offer flexible and customized staffing solutions for
              your business needs.
            </p>
            <div className="mt-7">
              <Button to="/services">Explore All Services</Button>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="hidden md:block">
            <p className="font-display italic text-2xl text-white/25 leading-tight text-right">
              Flexible
              <br />
              Reliable
              <br />
              <span className="relative text-gold-400 not-italic font-semibold">
                Scalable
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path d="M0 4 Q 50 -2 100 4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
          {services.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="group h-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-colors duration-300">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold-500 text-navy-950 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </span>
                <h3 className="text-white font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-gold-400 text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
