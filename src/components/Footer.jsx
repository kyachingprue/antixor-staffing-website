import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { PiBriefcaseFill } from 'react-icons/pi'
import { MapPin, Phone, Mail } from 'lucide-react'
import Button from './Button.jsx'
import logo from "../assets/antixor.png"

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Job Seekers', to: '/job-seekers' },
  { label: 'Employers', to: '/employers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  'Permanent Staffing',
  'Temporary Staffing',
  'Executive Search',
  'IT & Tech Recruitment',
  'Healthcare Staffing',
  'Industrial Staffing',
  'Remote Hiring',
  'HR Consulting',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-px py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} className='w-6 md:w-12' alt="Antixor Staffing website logo" />
            <span className="leading-tight">
              <span className="block font-display font-bold text-lg text-white">Antixor</span>
              <span className="block text-[11px] font-medium tracking-[0.2em] text-white/50 uppercase -mt-0.5">
                Staffing
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Connecting talent with opportunity. Building a stronger tomorrow for businesses and job seekers alike.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid place-items-center h-9 w-9 rounded-full border border-white/15 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-5">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <span>123 Business Avenue, New York, NY 10001</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <span>info@antixorstaffing.com</span>
            </li>
          </ul>
          <div className="mt-6">
            <Button to="/contact" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; {new Date().getFullYear()} Antixor Staffing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-gold-400">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-400">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
