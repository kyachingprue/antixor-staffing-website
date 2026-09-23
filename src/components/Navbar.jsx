import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { PiBriefcaseFill } from 'react-icons/pi'
import Button from './Button.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Job Seekers', to: '/job-seekers' },
  { label: 'Employers', to: '/employers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()

  /* ------------------------------------------
     Detect navbar scroll state
  ------------------------------------------ */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* ------------------------------------------
     Close mobile menu when route changes
  ------------------------------------------ */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  /* ------------------------------------------
     Lock background scrolling
  ------------------------------------------ */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  /* ------------------------------------------
     Close menu with Escape key
  ------------------------------------------ */
  useEffect(() => {
    if (!open) return

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}
      <header
        className={`
          sticky top-0 z-[100]
          transition-all duration-300
          ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(10,22,55,0.15)]'
              : 'bg-white'
          }
        `}
      >
        <nav className="container-px flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-navy-900 text-gold-400">
              <PiBriefcaseFill size={20} />
            </span>

            <span className="leading-tight">
              <span className="block font-display font-bold text-lg text-navy-950 tracking-tight">
                Antixor
              </span>

              <span className="block text-[11px] font-medium tracking-[0.2em] text-slate uppercase -mt-0.5">
                Staffing
              </span>
            </span>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `
                    px-4 py-2
                    rounded-full
                    text-[15px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? 'text-navy-950 bg-navy-950/5'
                        : 'text-ink/70 hover:text-navy-950 hover:bg-navy-950/5'
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/contact" size="sm">
              Get Started
            </Button>
          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
            className="
              lg:hidden
              relative
              z-[130]
              grid
              place-items-center
              h-11
              w-11
              rounded-full
              border
              border-navy-950/10
              bg-white
              text-navy-950
              active:scale-95
              transition-transform
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7
                }}
                transition={{
                  duration: 0.2
                }}
                className="grid place-items-center"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* ==================================================
          FULL SCREEN MOBILE NAVIGATION
      ================================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[120]
              lg:hidden
              bg-navy-950
            "
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.25
            }}
          >
            {/* ------------------------------------------
                Background decorative glow
            ------------------------------------------ */}
            <div
              className="
                pointer-events-none
                absolute
                -top-32
                -right-32
                h-80
                w-80
                rounded-full
                bg-gold-400/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-96
                w-96
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            {/* ------------------------------------------
                Full screen panel
            ------------------------------------------ */}
            <motion.div
              className="
                relative
                h-full
                w-full
                flex
                flex-col
                overflow-y-auto
                overscroll-contain
                px-6
                sm:px-10
                pt-6
                pb-8
              "
              initial={{
                x: '100%'
              }}
              animate={{
                x: '0%'
              }}
              exit={{
                x: '100%'
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* ==========================================
                  Mobile Menu Header
              ========================================== */}
              <div className="flex items-center justify-between shrink-0">
                {/* Logo */}
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 text-gold-400 border border-white/10">
                    <PiBriefcaseFill size={20} />
                  </span>

                  <span className="leading-tight">
                    <span className="block font-display font-bold text-lg text-white tracking-tight">
                      Antixor
                    </span>

                    <span className="block text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase">
                      Staffing
                    </span>
                  </span>
                </Link>

                {/* Close */}
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="
                    grid
                    place-items-center
                    h-11
                    w-11
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    text-white
                    hover:bg-white/10
                    hover:text-gold-400
                    active:scale-95
                    transition-all
                    duration-200
                  "
                >
                  <X size={22} />
                </button>
              </div>

              {/* ==========================================
                  Navigation
              ========================================== */}
              <div className="flex-1 flex flex-col justify-center py-10">
                <div className="mb-5">
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400/80">
                    Navigation
                  </p>
                </div>

                <nav>
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{
                          opacity: 0,
                          x: 45
                        }}
                        animate={{
                          opacity: 1,
                          x: 0
                        }}
                        transition={{
                          delay: 0.08 + index * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === '/'}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `
                            group
                            flex
                            items-center
                            justify-between
                            py-2.5
                            sm:py-3
                            border-b
                            border-white/5
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? 'text-gold-400'
                                : 'text-white/85 hover:text-gold-300'
                            }
                            `
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className="
                                  font-display
                                  font-semibold
                                  text-2xl
                                  sm:text-3xl
                                  tracking-tight
                                "
                              >
                                {link.label}
                              </span>

                              <ArrowUpRight
                                size={20}
                                className={`
                                  transition-all
                                  duration-200
                                  ${
                                    isActive
                                      ? 'opacity-100 translate-x-0'
                                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                                  }
                                `}
                              />
                            </>
                          )}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* ==========================================
                  Bottom CTA
              ========================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="shrink-0"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <p className="text-white/55 text-sm mb-3">
                    Ready for your next opportunity?
                  </p>

                  <Button to="/contact" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </motion.div>

              {/* Small footer */}
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.3
                }}
                className="text-center text-[11px] text-white/30 mt-5 shrink-0"
              >
                Antixor Staffing
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
