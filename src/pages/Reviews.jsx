import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Reviews() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5) // Default rating is 5 stars
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reviews')) || []
    setReviews(saved)
  }, [])

  const submitReview = (e) => {
    e.preventDefault()
    if(!name || !comment) return;

    const newReview = { 
      id: Date.now(), 
      name, 
      comment, 
      rating, 
      date: new Date().toLocaleDateString(),
      
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    }
    
    const updated = [newReview, ...reviews]
    setReviews(updated)
    localStorage.setItem('reviews', JSON.stringify(updated))
    setName('')
    setComment('')
    setRating(5)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 pb-12 px-6 overflow-hidden bg-slate-950">
      
      
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            User <span className="text-indigo-400">Feedback</span>
          </h2>
          <p className="text-gray-400">Hear what others say about my work or leave your own review.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl h-fit shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Write a Review</h3>
            <form onSubmit={submitReview} className="space-y-4">
              <input
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 text-white focus:border-indigo-500 outline-none transition-all"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              
              
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase font-bold ml-1">Rating</label>
                <div className="flex gap-2 bg-slate-900 p-3 rounded-xl border border-white/10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl transition-all ${rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-600 opacity-50'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 text-white focus:border-indigo-500 outline-none h-32 resize-none transition-all"
                placeholder="Tell us what you think..."
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                Submit Review
              </button>
            </form>
          </motion.div>

          
          <div className="lg:col-span-2 space-y-4 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {reviews.length === 0 ? (
                <p className="text-gray-500 text-center py-20 italic">No feedback yet. Be the first!</p>
              ) : (
                reviews.map((r) => (
                  <motion.div 
                    key={r.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center group hover:bg-white/10 transition-all"
                  >
                    
                    <img 
                      src={r.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${r.name}`} 
                      alt="avatar" 
                      className="w-16 h-16 rounded-full bg-indigo-500/20 p-1 border border-white/10"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-white text-lg">{r.name}</h4>
                          <div className="flex text-yellow-400 text-sm mb-2">
                            {[...Array(r.rating)].map((_, i) => <span key={i}>★</span>)}
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{r.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm italic line-clamp-2">"{r.comment}"</p>
                    </div>

                    <Link 
                      to={`/reviews/${r.id}`}
                      className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2 rounded-lg transition-all"
                    >
                      Read More
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}