import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-slate-950 overflow-hidden">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs">Get In Touch</h4>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's work <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Together.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Email</p>
              <p className="text-white text-sm truncate">garcia.liuarby@email.com</p>
            </div>

            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Location</p>
              <p className="text-white text-sm">AMA University, PH</p>
            </div>

            
            <motion.a 
              href="https://github.com/LiuArby11" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] text-indigo-400 font-bold uppercase">GitHub</p>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <p className="text-white font-medium">@LiuArby11</p>
            </motion.a>

            
            <motion.a 
              href="https://www.facebook.com/liuarby.garcia" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] text-blue-400 font-bold uppercase">Facebook</p>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <p className="text-white font-medium">Liu Arby Garcia</p>
            </motion.a>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20"></div>
          
          <div className="relative bg-slate-900 border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-gray-600" />
                    <input required type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-gray-600" />
                  </div>
                  <input required type="text" placeholder="Subject" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-gray-600" />
                  <textarea required placeholder="How can I help you?" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 outline-none h-32 resize-none transition-all placeholder:text-gray-600"></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Send Message 🚀
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">Arby will get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  )
}