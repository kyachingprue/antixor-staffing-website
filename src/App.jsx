import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import JobSeekers from './pages/JobSeekers.jsx'
import Employers from './pages/Employers.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import JobSeekerDetails from './components/JobSeekerDetails.jsx'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/job-seekers" element={<JobSeekers />} />
            <Route path="/job-seekers/:id" element={<JobSeekerDetails />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
