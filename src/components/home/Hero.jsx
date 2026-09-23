import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import Button from '../Button.jsx'
import { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import { trustBadges, img } from '../../data/content.js'

export default function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute -top-32 -right-16 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-navy-700/40 blur-3xl" aria-hidden="true" />

      <div className="container-px relative grid lg:grid-cols-2 gap-12 items-center pt-14 pb-16 md:pt-20 md:pb-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 mb-6"
          >
            <span className="h-[3px] w-6 rounded-full bg-gold-400" />
            Your Trusted Staffing Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold leading-[1.08] text-balance"
          >
            <span className="block text-white">Right People.</span>
            <span className="block text-white">Right Skills.</span>
            <span className="block text-gold-400">Greater Success.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 text-white/60 max-w-md leading-relaxed"
          >
            At Antixor Staffing, we connect talented professionals with forward-thinking companies. Our mission is
            to build stronger teams and create better opportunities for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Button to="/job-seekers" size="lg">
              Find Your Next Hire
            </Button>
            <button type="button" className="flex items-center gap-3 text-white font-semibold group">
              <span className="grid place-items-center h-12 w-12 rounded-full border border-white/25 group-hover:bg-white/10 transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Our Story
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-500/20 to-transparent -z-10" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={img.hero}
              alt="Confident staffing professional holding a tablet"
              className="w-full h-[420px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-1 md:-left-6 bottom-8 h-24 w-24 md:h-28 md:w-28 rounded-full bg-gold-500 text-navy-950 grid place-items-center text-center p-3 shadow-xl"
          >
            <span className="text-xs md:text-sm font-display font-bold leading-tight">
              Better Talent Brighter Future
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-8">
          <StaggerGroup className="flex flex-wrap items-center justify-between gap-6" stagger={0.08}>
            {trustBadges.map(({ icon: Icon, label }) => (
              <StaggerItem key={label} className="flex items-center gap-3 text-white/75">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-white/5 text-gold-400 shrink-0">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium whitespace-nowrap">{label}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
