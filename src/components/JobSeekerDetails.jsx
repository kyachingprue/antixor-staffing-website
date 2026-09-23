import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Users,
  Building2,
  DollarSign,
  Send,
} from 'lucide-react'

import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import { jobs } from '../data/content.js'

export default function JobSeekerDetails() {
  const { id } = useParams()

  const job = useMemo(
    () => jobs.find((item) => String(item.id) === String(id)),
    [id]
  )

  // Job not found
  if (!job) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[70vh] flex items-center justify-center px-6"
      >
        <div className="text-center max-w-md">
          <div className="mx-auto grid place-items-center h-16 w-16 rounded-2xl bg-navy-950/5 text-navy-950">
            <BriefcaseBusiness size={28} />
          </div>

          <h1 className="font-display font-bold text-3xl text-navy-950 mt-6">
            Job Not Found
          </h1>

          <p className="text-slate mt-3">
            The job you are looking for may have been removed or
            the link may be incorrect.
          </p>

          <Button to="/job-seekers" className="mt-6">
            Browse All Jobs
          </Button>
        </div>
      </motion.div>
    )
  }

  const {
    icon: Icon,
    title,
    company,
    location,
    type,
    workMode,
    category,
    salary,
    experience,
    education,
    vacancies,
    postedAt,
    deadline,
    description,
    requirements,
    skills,
  } = job

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>
          {title} | {company} | Antixor Staffing
        </title>

        <meta
          name="description"
          content={description}
        />
      </Helmet>

      {/* Header */}
      <section className="bg-navy-950 text-white">
        <div className="container-px py-12 md:py-16">
          <Reveal>
            <Link
              to="/job-seekers"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Jobs
            </Link>

            <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center h-16 w-16 rounded-2xl bg-white/10 text-gold-400 shrink-0">
                    <Icon size={28} />
                  </span>

                  <div>
                    <p className="text-gold-400 text-sm font-medium">
                      {category}
                    </p>

                    <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">
                      {title}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <Building2 size={16} />
                    {company}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {location}
                  </span>

                  <span className="flex items-center gap-2">
                    <BriefcaseBusiness size={16} />
                    {type}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {workMode}
                  </span>
                </div>
              </div>

              <Button
                to="/contact"
                size="lg"
                icon={false}
                className="w-full lg:w-auto"
              >
                <Send size={17} />
                Apply for This Job
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-px py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_350px] gap-10">
          {/* Left */}
          <div className="space-y-10">
            {/* Description */}
            <Reveal>
              <div>
                <Eyebrow>Job Overview</Eyebrow>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-950 mt-2">
                  About This Position
                </h2>

                <p className="text-slate leading-7 mt-5">
                  {description}
                </p>
              </div>
            </Reveal>

            {/* Requirements */}
            <Reveal delay={0.05}>
              <div>
                <Eyebrow>What You&rsquo;ll Need</Eyebrow>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-950 mt-2">
                  Requirements
                </h2>

                <div className="space-y-4 mt-6">
                  {requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-gold-500 shrink-0 mt-0.5"
                      />

                      <p className="text-slate leading-6">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Skills */}
            <Reveal delay={0.1}>
              <div>
                <Eyebrow>Core Skills</Eyebrow>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-950 mt-2">
                  Skills & Expertise
                </h2>

                <div className="flex flex-wrap gap-3 mt-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-navy-950/5 text-navy-950 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.15}>
              <div>
                <Eyebrow>Education</Eyebrow>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-950 mt-2">
                  Education Requirements
                </h2>

                <div className="flex items-start gap-4 mt-6 p-5 rounded-2xl bg-cream">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-navy-950 text-gold-400 shrink-0">
                    <GraduationCap size={20} />
                  </span>

                  <div>
                    <h3 className="font-display font-semibold text-navy-950">
                      Minimum Education
                    </h3>

                    <p className="text-slate text-sm mt-1">
                      {education}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <Reveal direction="left">
              <div className="bg-white rounded-2xl border border-navy-950/8 shadow-lg overflow-hidden">
                <div className="bg-navy-950 text-white p-6">
                  <h2 className="font-display text-xl font-bold">
                    Job Summary
                  </h2>

                  <p className="text-white/60 text-sm mt-1">
                    Position details
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  <SummaryItem
                    icon={DollarSign}
                    label="Salary"
                    value={salary}
                  />

                  <SummaryItem
                    icon={BriefcaseBusiness}
                    label="Experience"
                    value={experience}
                  />

                  <SummaryItem
                    icon={Clock3}
                    label="Job Type"
                    value={type}
                  />

                  <SummaryItem
                    icon={MapPin}
                    label="Work Location"
                    value={workMode}
                  />

                  <SummaryItem
                    icon={Users}
                    label="Vacancies"
                    value={`${vacancies} position${vacancies > 1 ? 's' : ''}`}
                  />

                  <SummaryItem
                    icon={CalendarDays}
                    label="Posted"
                    value={postedAt}
                  />

                  <SummaryItem
                    icon={CalendarDays}
                    label="Application Deadline"
                    value={deadline}
                  />

                  <div className="pt-2">
                    <Button
                      to="/contact"
                      size="lg"
                      className="w-full"
                      icon={false}
                    >
                      <Send size={17} />
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream">
        <div className="container-px py-16 md:py-20">
          <Reveal>
            <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-center text-white">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
                Ready to Apply?
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Take the Next Step in Your Career
              </h2>

              <p className="text-white/65 max-w-2xl mx-auto mt-4">
                Submit your application and our recruitment team
                will review your profile for this opportunity.
              </p>

              <Button
                to="/contact"
                size="lg"
                className="mt-7"
                icon={false}
              >
                <Send size={17} />
                Apply for {title}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.main>
  )
}

function SummaryItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center h-10 w-10 rounded-xl bg-navy-950/5 text-navy-950 shrink-0">
        <Icon size={18} />
      </span>

      <div className="min-w-0">
        <p className="text-xs text-slate uppercase tracking-wide">
          {label}
        </p>

        <p className="text-sm font-semibold text-navy-950 mt-1 break-words">
          {value}
        </p>
      </div>
    </div>
  )
}
