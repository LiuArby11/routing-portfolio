import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ReviewDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [review, setReview] = useState(null)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reviews')) || []
    const found = saved.find(r => r.id.toString() === id)
    setReview(found)
  }, [id])

  if (!review) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-mono">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Loading review data...
      </motion.p>
    </div>
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 bg-slate-950 overflow-hidden">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl"
      >
        
        <button 
          onClick={() => navigate(-1)}
          className="group text-gray-400 hover:text-white mb-10 flex items-center gap-2 transition-all font-medium text-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Reviews
        </button>

        <div className="flex flex-col items-center text-center">
          
          <motion.img 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={review.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
            alt="User Avatar"
            className="w-28 h-28 rounded-full bg-indigo-500/20 p-2 border-2 border-indigo-500/30 mb-6 shadow-xl shadow-indigo-500/10"
          />

          <h4 className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Detailed Feedback</h4>
          <h2 className="text-3xl font-bold text-white mb-2">{review.name}</h2>
          <p className="text-gray-500 text-xs font-mono mb-6">{review.date}</p>

          
          <div className="flex gap-1 text-yellow-400 text-2xl mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < review.rating ? "opacity-100" : "opacity-20"}>
                ★
              </span>
            ))}
          </div>

          
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-6xl text-white/10 font-serif leading-none">“</span>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic relative z-10">
              {review.comment}
            </p>
            <span className="absolute -bottom-10 -right-4 text-6xl text-white/10 font-serif leading-none">”</span>
          </div>
        </div>

        
        <div className="mt-16 pt-6 border-t border-white/5 flex justify-center">
          <div className="px-4 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            Verified Submission
          </div>
        </div>
      </motion.div>
    </section>
  )
}