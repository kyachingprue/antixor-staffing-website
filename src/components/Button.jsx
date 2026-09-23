import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap'

const variants = {
  primary:
    'bg-gold-500 text-navy-950 hover:bg-gold-400 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(246,184,0,0.6)]',
  outline:
    'border border-white/35 text-white hover:bg-white/10 hover:-translate-y-0.5',
  outlineNavy:
    'border border-navy-900/25 text-navy-900 hover:bg-navy-900/5 hover:-translate-y-0.5',
  ghostNavy: 'bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5',
  white: 'bg-white text-navy-950 hover:bg-cream hover:-translate-y-0.5'
}

const sizes = {
  sm: 'text-sm px-4 py-2.5',
  md: 'text-[15px] px-6 py-3',
  lg: 'text-base px-7 py-3.5'
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon = true,
  className = ''
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={17} strokeWidth={2.5} className="shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
