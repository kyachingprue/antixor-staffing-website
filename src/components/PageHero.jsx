import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-navy-700/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 mb-5">
              <span className="h-[3px] w-6 rounded-full bg-gold-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white text-balance max-w-3xl mx-auto">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-white/60 max-w-xl mx-auto text-[15px] md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/45">
            <Link to="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/75">{crumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
