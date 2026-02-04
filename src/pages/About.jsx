import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 
import profilePic from '../assets/profile.jpg'

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-slate-950">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl object-cover shadow-2xl border border-white/20 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        
        <div className="lg:w-1/2 space-y-6 text-left">
          
          <div className="overflow-hidden">
            <motion.h4 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2"
            >
               Introduction
            </motion.h4>

            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-4"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I am an <span className="text-white font-semibold">IT student at AMA</span> with a passion for 
              building interactive and user-friendly web experiences. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            
            <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ delay: 1.1 }}
              >
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Institution</p>
                <p className="text-white font-medium text-sm">AMA University</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ delay: 1.3 }}
              >
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Current Focus</p>
                <p className="text-white font-medium text-sm">Fullstack Development</p>
              </motion.div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="flex gap-4 items-center"
          >
            <Link to="/skills">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all flex items-center gap-2"
              >
                View Experience <span>→</span>
              </motion.button>
            </Link>
            <span className="text-gray-500 text-sm italic hidden sm:inline">Check out my tech stack...</span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}