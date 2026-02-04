import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Reviews from './pages/Reviews'
import ReviewDetails from './pages/ReviewDetails' 
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion' // Required for Page Transitions
import CustomCursor from './components/CustomCursor'


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> {/* Ito ang magic: aantayin matapos ang exit animation bago pumasok ang bago */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
  <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <div className="bg-slate-950 min-h-screen">
        <Navbar />
        <div className="pt-16"> 
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>

    
  )
}