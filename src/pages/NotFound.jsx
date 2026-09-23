import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] grid place-items-center bg-navy-950"
    >
      <Helmet>
        <title>Page Not Found | Antixor Staffing</title>
      </Helmet>
      <div className="text-center container-px py-24">
        <p className="text-gold-400 font-display font-bold text-7xl md:text-8xl mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/55 max-w-sm mx-auto mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button to="/">Back to Home</Button>
      </div>
    </motion.div>
  )
}
