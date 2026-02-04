import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll() 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-black text-white tracking-tighter">
          Liuuuuu<span className="text-indigo-500">-Arbyyyyy</span>
        </NavLink>

        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xs font-bold uppercase tracking-widest transition-all hover:text-indigo-400 ${
                  isActive ? 'text-indigo-500' : 'text-gray-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-lg font-bold ${isActive ? 'text-indigo-500' : 'text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}