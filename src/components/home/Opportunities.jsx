import { MapPin, Clock3 } from 'lucide-react'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal.jsx'
import Eyebrow from '../Eyebrow.jsx'
import Button from '../Button.jsx'
import { jobs, img } from '../../data/content.js'

export default function Opportunities() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="container-px py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal direction="right">
            <Eyebrow>Latest Opportunities</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-balance leading-tight">
              Latest Your Opportunities
            </h2>
            <p className="mt-3 text-slate max-w-md">
              Discover exciting job opportunities with top employers across
              various industries and take the next step in your career.
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <Button to="/job-seekers" variant="outlineNavy" icon={true}>
              View All Jobs
            </Button>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <StaggerGroup className="space-y-4" stagger={0.08}>
            {jobs.slice(0, 4).map(({ icon: Icon, title, location, type }) => (
              <StaggerItem key={title}>
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
        "
                >
                  {/* Job information */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 w-full">
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

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                font-display
                font-semibold
                text-navy-950
                text-sm sm:text-base
                truncate
              "
                      >
                        {title}
                      </h3>

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

                  {/* Apply button */}
                  <Button
                    to="/job-seekers"
                    size="sm"
                    icon={false}
                    className="w-full sm:w-auto shrink-0"
                  >
                    Apply Now
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal
            direction="left"
            delay={0.2}
            className="relative w-full h-[300px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden"
          >
            <img
              src={img.opportunities}
              alt="Professional ready for her next opportunity"
              className="absolute inset-0 block w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
              <h3 className="text-white font-display font-bold text-xl sm:text-2xl leading-tight text-balance">
                Your Next Opportunity Awaits
              </h3>

              <Button
                to="/job-seekers"
                size="sm"
                className="mt-4 sm:mt-5 w-fit"
              >
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
