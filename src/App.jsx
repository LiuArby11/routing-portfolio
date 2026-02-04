import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'


import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'


import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Reviews from './pages/Reviews'
import ReviewDetails from './pages/ReviewDetails' 
import Contact from './pages/Contact'


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
    <AnimatePresence mode="wait">
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
      <div className="bg-slate-950 min-h-screen selection:bg-indigo-500/30"> 
        <Navbar /> 
        <div className="pt-20"> 
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}