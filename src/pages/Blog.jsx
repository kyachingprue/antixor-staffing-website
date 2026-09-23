import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { ArrowRight, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { blogPosts, img } from '../data/content.js'

export default function Blog() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Helmet>
        <title>Blog | Antixor Staffing</title>
        <meta name="description" content="Hiring tips, career advice and workforce trends from the Antixor Staffing team." />
      </Helmet>

      <PageHero
        eyebrow="Our Blog"
        title="Insights on Hiring, Careers & the Future of Work"
        subtitle="Practical guidance from our recruiters for both employers and job seekers."
        crumb="Blog"
      />

      <section className="container-px py-20 md:py-28">
        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-7" stagger={0.08}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-navy-950/5 hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden h-52">
                  <img
                    src={img[post.image]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate mb-3">
                    <span className="bg-gold-500/15 text-gold-600 font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays size={13} /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy-950 leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-navy-900 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="container-px pb-20 md:pb-28">
        <Reveal>
          <div className="rounded-[2rem] bg-navy-950 px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-balance max-w-lg mx-auto">
              Get Hiring Insights in Your Inbox
            </h2>
            <p className="mt-3 text-white/55 max-w-md mx-auto">
              One useful email a month. No spam, unsubscribe any time.
            </p>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full px-5 py-3 bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/40 outline-none focus:border-gold-400"
              />
              <Button type="submit" icon={false} className="sm:w-auto w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </Reveal>
      </section>
    </motion.div>
  )
}
