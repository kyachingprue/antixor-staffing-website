export default function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold mb-4 ${
        light ? 'text-gold-400' : 'text-navy-700'
      }`}
    >
      <span className={`h-[3px] w-6 rounded-full ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />
      {children}
    </span>
  )
}
