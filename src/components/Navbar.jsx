import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const sections = ['home', 'about', 'skills', 'projects', 'reviews', 'contact']
  const [active, setActive] = useState('home')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 } // 60% ng section visible bago maging active
    )

    sections.forEach(sec => {
      const el = document.getElementById(sec)
      if (el) {
        sectionRefs.current[sec] = el
        observer.observe(el)
      }
    })

    return () => {
      sections.forEach(sec => {
        const el = sectionRefs.current[sec]
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActive(section)
    }
  }

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 fixed w-full z-50 flex justify-between items-center shadow-lg">
      <button
        onClick={() => scrollToSection('home')}
        className="font-bold text-xl tracking-wider hover:text-yellow-300 transition-colors duration-300"
      >
        Liu Garcia
      </button>
      <div className="space-x-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`transition-colors duration-300 font-medium ${
              active === section
                ? 'text-yellow-300 cursor-default'
                : 'hover:text-yellow-300'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}
