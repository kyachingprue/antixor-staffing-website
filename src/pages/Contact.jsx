import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import { faqs } from '../data/content.js'

const contactCards = [
  { icon: MapPin, title: 'Visit Us', lines: ['123 Business Avenue', 'New York, NY 10001'] },
  { icon: Phone, title: 'Call Us', lines: ['+1 (555) 123-4567', 'Mon - Fri, 9am - 6pm'] },
  { icon: Mail, title: 'Email Us', lines: ['info@antixorstaffing.com', 'We reply within 24 hours'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon - Fri: 9am - 6pm', 'Sat: 10am - 2pm'] },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Helmet>
        <title>Contact Us | Antixor Staffing</title>
        <meta name="description" content="Get in touch with Antixor Staffing - reach out for hiring needs, job opportunities or general questions." />
      </Helmet>

      <PageHero
        eyebrow="Get in Touch"
        title="Let's Start the Conversation"
        subtitle="Whether you're hiring or looking for your next role, our team is ready to help."
        crumb="Contact"
      />

      <section className="container-px py-16 md:py-20">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-24 md:-mt-28 relative z-10" stagger={0.08}>
          {contactCards.map(({ icon: Icon, title, lines }) => (
            <StaggerItem key={title}>
              <div className="h-full bg-white rounded-2xl p-6 border border-navy-950/5 shadow-lg">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-navy-950 text-gold-400 mb-4">
                  <Icon size={18} />
                </span>
                <h3 className="font-display font-semibold text-navy-950 mb-1.5">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-slate text-sm leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="container-px pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <Reveal direction="right">
            <Eyebrow>Send a Message</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance mb-8">
              Tell Us How We Can Help
            </h2>

            {submitted ? (
              <div className="flex items-start gap-3 bg-cream rounded-2xl p-6 border border-navy-950/5">
                <CheckCircle2 className="text-gold-500 shrink-0 mt-0.5" size={22} />
                <div>
                  <p className="font-display font-semibold text-navy-950">Message sent</p>
                  <p className="text-slate text-sm mt-1">
                    Thanks for reaching out — a member of our team will get back to you within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-950 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full rounded-xl px-4 py-3 bg-cream border border-navy-950/10 text-sm outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-950 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-xl px-4 py-3 bg-cream border border-navy-950/10 text-sm outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-950 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl px-4 py-3 bg-cream border border-navy-950/10 text-sm outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-950 mb-2">I am a...</label>
                    <select className="w-full rounded-xl px-4 py-3 bg-cream border border-navy-950/10 text-sm outline-none focus:border-gold-500 transition-colors">
                      <option>Job Seeker</option>
                      <option>Employer</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-950 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us a bit about what you need..."
                    className="w-full rounded-xl px-4 py-3 bg-cream border border-navy-950/10 text-sm outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl overflow-hidden h-56 border border-navy-950/5 mb-8">
              <iframe
                title="Antixor Staffing location"
                className="w-full h-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=New%20York%2C%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <h3 className="font-display font-semibold text-xl text-navy-950 mb-5">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-cream rounded-xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-navy-950">
                    {f.q}
                    <span className="ml-4 text-gold-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-slate text-sm mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
