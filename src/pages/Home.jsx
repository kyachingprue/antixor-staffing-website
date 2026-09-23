import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import Hero from '../components/home/Hero.jsx'
import AboutSnippet from '../components/home/AboutSnippet.jsx'
import ServicesGrid from '../components/home/ServicesGrid.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import Opportunities from '../components/home/Opportunities.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CtaBanner from '../components/home/CtaBanner.jsx'
import StatsStrip from '../components/home/StatsStrip.jsx'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Helmet>
        <title>Antixor Staffing | Right People. Right Skills. Greater Success.</title>
        <meta
          name="description"
          content="Antixor Staffing connects talented professionals with forward-thinking companies across technology, healthcare, industrial and executive roles."
        />
      </Helmet>
      <Hero />
      <AboutSnippet />
      <ServicesGrid />
      <WhyChooseUs />
      <Opportunities />
      <Testimonials />
      <CtaBanner />
      <StatsStrip />
    </motion.div>
  )
}
