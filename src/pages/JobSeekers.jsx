import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  Search,
  MapPin,
  Clock3,
  GraduationCap,
  FileCheck2,
  Users2
} from 'lucide-react'

import PageHero from '../components/PageHero.jsx'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import { jobs, img, testimonials } from '../data/content.js'

const benefits = [
  {
    icon: FileCheck2,
    title: 'Free, Always',
    desc: 'Our placement service costs candidates nothing, ever.'
  },
  {
    icon: GraduationCap,
    title: 'Career Coaching',
    desc: 'Resume feedback and interview prep from our recruiters.'
  },
  {
    icon: Users2,
    title: 'Real Relationships',
    desc: 'A dedicated recruiter who knows your goals, not just your resume.'
  }
]

export default function JobSeekers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')

  const filteredJobs = jobs.filter(job => {
    const search = searchTerm.toLowerCase().trim()
    const locationSearch = location.toLowerCase().trim()

    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.category.toLowerCase().includes(search) ||
      job.skills.some(skill => skill.toLowerCase().includes(search))

    const matchesLocation =
      !locationSearch ||
      job.location.toLowerCase().includes(locationSearch) ||
      job.workMode.toLowerCase().includes(locationSearch)

    return matchesSearch && matchesLocation
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>Job Seekers | Antixor Staffing</title>
        <meta
          name="description"
          content="Browse open roles and let Antixor Staffing match you with employers who value your skills."
        />
      </Helmet>

      <PageHero
        eyebrow="For Job Seekers"
        title="Your Next Opportunity Starts Here"
        subtitle="Browse open roles across industries and let our recruiters match you with employers who value your skills."
        crumb="Job Seekers"
      />

      {/* Search */}
      <section className="container-px py-16 md:py-20">
        <Reveal>
          <div className="bg-white rounded-2xl border border-navy-950/8 shadow-lg p-4 md:p-5 flex flex-col md:flex-row gap-3 -mt-24 md:-mt-28 relative z-10">
            <div className="flex-1 flex items-center gap-3 bg-cream rounded-xl px-4 py-3">
              <Search size={18} className="text-slate shrink-0" />

              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Job title, keyword or company"
                className="bg-transparent outline-none text-sm w-full placeholder:text-slate/70"
              />
            </div>

            <div className="flex-1 flex items-center gap-3 bg-cream rounded-xl px-4 py-3">
              <MapPin size={18} className="text-slate shrink-0" />

              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="City, state or remote"
                className="bg-transparent outline-none text-sm w-full placeholder:text-slate/70"
              />
            </div>

            <Button type="button" size="md" className="md:w-auto w-full">
              Search Jobs
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Jobs */}
      <section className="container-px pb-20 md:pb-28 overflow-x-clip">
        <Reveal className="max-w-xl mb-10">
          <Eyebrow>Open Positions</Eyebrow>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance">
            Featured Opportunities
          </h2>

          <p className="text-slate mt-3 text-sm">
            {filteredJobs.length} open position
            {filteredJobs.length !== 1 ? 's' : ''} available
          </p>
        </Reveal>

        {filteredJobs.length > 0 ? (
          <StaggerGroup className="grid md:grid-cols-2 gap-4" stagger={0.06}>
            {filteredJobs.map(
              ({ id, icon: Icon, title, company, location, type }) => (
                <StaggerItem key={id}>
                  <div
                    className="
                group
                flex flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                bg-white
                rounded-2xl
                p-4
                sm:p-5
                border border-navy-950/5
                hover:border-gold-400/60
                hover:shadow-lg
                transition-all duration-300
                min-w-0
              "
                  >
                    {/* Job information */}
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0 w-full">
                      {/* Icon */}
                      <span
                        className="
                    grid place-items-center
                    h-11 w-11
                    sm:h-12 sm:w-12
                    rounded-xl
                    bg-navy-950/5
                    text-navy-900
                    shrink-0
                  "
                      >
                        <Icon size={20} />
                      </span>

                      {/* Job details */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="
                      font-display
                      font-semibold
                      text-navy-950
                      text-sm sm:text-base
                      leading-snug
                      truncate
                    "
                        >
                          {title}
                        </h3>

                        <p
                          className="
                      text-xs
                      text-slate
                      mt-0.5
                      truncate
                    "
                        >
                          {company}
                        </p>

                        {/* Location + Type */}
                        <div
                          className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-1
                      mt-1
                      text-xs
                      text-slate
                    "
                        >
                          <span className="flex items-center gap-1 min-w-0">
                            <MapPin size={13} className="shrink-0" />

                            <span className="truncate">{location}</span>
                          </span>

                          <span className="flex items-center gap-1 shrink-0">
                            <Clock3 size={13} />
                            {type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <Button
                      to={`/job-seekers/${id}`}
                      size="sm"
                      icon={false}
                      className="
                  w-full
                  sm:w-auto
                  shrink-0
                "
                    >
                      Apply Now
                    </Button>
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerGroup>
        ) : (
          <Reveal>
            <div className="text-center py-16 px-5 bg-white rounded-2xl border border-navy-950/5">
              <Search size={40} className="mx-auto text-slate/40" />

              <h3 className="font-display font-semibold text-navy-950 mt-4">
                No jobs found
              </h3>

              <p className="text-slate text-sm mt-2">
                Try another job title, company, location or keyword.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* Benefits */}
      <section className="bg-cream">
        <div className="container-px py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right">
            <div className="rounded-[1.5rem] overflow-hidden shadow-xl">
              <img
                src={img.jobSeekers}
                alt="Job seeker preparing for interview"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <Eyebrow>Why Job Seekers Choose Us</Eyebrow>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 leading-tight text-balance mb-8">
              We&rsquo;re in Your Corner, Start to Offer Letter
            </h2>

            <div className="space-y-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-navy-950 text-gold-400 shrink-0">
                    <Icon size={18} />
                  </span>

                  <div>
                    <h3 className="font-display font-semibold text-navy-950">
                      {title}
                    </h3>

                    <p className="text-slate text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button to="/contact" className="mt-8">
              Submit Your Resume
            </Button>
          </Reveal>
        </div>
      </section>

      <Testimonials
        items={[testimonials[1], testimonials[0], testimonials[3]]}
      />
    </motion.div>
  )
}
