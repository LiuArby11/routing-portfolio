import { useEffect, useRef } from 'react'
import profilePic from '../assets/profile.jpg'
import bgVideo from '../assets/background.mp4'

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const offset = window.scrollY * 0.3 
        videoRef.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen snap-start flex flex-col items-center justify-center p-10 overflow-hidden"
    >
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      
      <img
        src={profilePic}
        alt="Profile"
        className="relative z-10 w-40 h-40 rounded-full mb-6 border-4 border-indigo-600 shadow-lg animate-bounce"
      />
      <h2 className="relative z-10 text-4xl md:text-5xl font-bold mb-2 text-white text-center drop-shadow-lg animate-fade-in">
        Liu-Arby P. Garcia
      </h2>
      <p className="relative z-10 max-w-xl mt-3 text-center text-white text-lg drop-shadow animate-fade-in delay-200">
        Aspiring developer showcasing my skills, projects, and creativity.
      </p>
      <a
        href="#projects"
        className="relative z-10 mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-300 animate-fade-in delay-300"
      >
        View Projects
      </a>
    </section>
  )
}
