import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { TrendingUp, ShieldCheck, Timer, Handshake } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import StatsStrip from '../components/home/StatsStrip.jsx'
import CtaBanner from '../components/home/CtaBanner.jsx'
import { img } from '../data/content.js'

const benefits = [
  { icon: Timer, title: 'Faster Time-to-Hire', desc: 'A pre-vetted talent pool means shorter shortlists and quicker offers.' },
  { icon: ShieldCheck, title: 'Rigorous Screening', desc: 'Every candidate is skills-tested and reference-checked before you meet them.' },
  { icon: TrendingUp, title: 'Scalable Support', desc: 'From one hire to a full team build-out, we scale with your needs.' },
  { icon: Handshake, title: 'Dedicated Partner', desc: 'One recruiter who learns your business and stays with you long-term.' },
]

export default function Employers() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Helmet>
        <title>For Employers | Antixor Staffing</title>
        <meta name="description" content="Partner with Antixor Staffing to find pre-vetted, skilled candidates faster across every role you need to fill." />
      </Helmet>

      <PageHero
        eyebrow="For Employers"
        title="Hire Faster With Talent You Can Trust"
        subtitle="Tell us what you need and we'll deliver a shortlist of pre-vetted candidates ready to interview."
        crumb="Employers"
      />

      <section className="container-px py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right">
            <div className="rounded-[1.5rem] overflow-hidden shadow-xl">
              <img src={img.employers} alt="Hiring manager reviewing candidates" className="w-full h-[380px] object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <Eyebrow>Why Partner With Antixor</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance mb-8">
              Built for Companies That Need It Done Right
            </h2>
            <StaggerGroup className="grid sm:grid-cols-2 gap-5" stagger={0.08}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="flex items-start gap-3">
                    <span className="grid place-items-center h-10 w-10 rounded-lg bg-gold-500 text-navy-950 shrink-0">
                      <Icon size={17} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-navy-950 text-sm">{title}</h3>
                      <p className="text-slate text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Button to="/contact" className="mt-8">
              Request Talent
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="container-px py-20 md:py-28">
          <Reveal className="max-w-xl mb-14 mx-auto text-center">
            <Eyebrow light>Simple Pricing</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight text-balance">
              Flexible Engagement Models
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-6" stagger={0.1}>
            {[
              { name: 'Contingency', desc: 'Pay only when we place a candidate you hire.', tag: 'Most Popular' },
              { name: 'Retained Search', desc: 'Dedicated focus for senior and executive roles.', tag: null },
              { name: 'Temp & Contract', desc: 'Flexible workforce for short-term and seasonal needs.', tag: null },
            ].map((plan) => (
              <StaggerItem key={plan.name}>
                <div className="h-full bg-white/[0.04] border border-white/10 rounded-2xl p-8 relative">
                  {plan.tag && (
                    <span className="absolute -top-3 left-8 bg-gold-500 text-navy-950 text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.tag}
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{plan.name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">{plan.desc}</p>
                  <Button to="/contact" variant="outline" size="sm">
                    Get a Quote
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <StatsStrip />
      <CtaBanner />
    </motion.div>
  )
}
