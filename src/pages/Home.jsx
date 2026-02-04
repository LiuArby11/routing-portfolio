import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profilePic from '../assets/profile.jpg'

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-slate-950">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      
      <div className="relative z-10 flex flex-col items-center text-center">
        
        
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-44 h-44 rounded-full border-2 border-white/20 shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">Available for Projects</span>
        </div>

        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-white">Liu-Arby</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            P. Garcia
          </span>
        </h1>

        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          An <span className="text-white font-medium">IT Student from AMA</span> passionate about 
          building high-performance web applications and sleek user experiences.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="group relative px-8 py-3 font-bold text-white transition-all duration-300"
          >
            <div className="absolute inset-0 bg-indigo-600 rounded-xl transition-all group-hover:bg-indigo-500 group-hover:scale-105"></div>
            <span className="relative flex items-center gap-2">
              View My Work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 font-bold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 flex gap-8 text-gray-500 text-sm font-medium tracking-widest uppercase"
      >
        <motion.a 
          href="https://github.com/LiuArby11" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -3, color: "#fff" }}
          className="transition-colors cursor-pointer"
        >
          GitHub
        </motion.a>

        <motion.a 
          href="https://linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -3, color: "#fff" }}
          className="transition-colors cursor-pointer"
        >
          LinkedIn
        </motion.a>

        <motion.a 
          href="https://www.facebook.com/liuarby.garcia" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -3, color: "#fff" }}
          className="transition-colors cursor-pointer"
        >
          Facebook
        </motion.a>
      </motion.div>

    </section>
  )
}