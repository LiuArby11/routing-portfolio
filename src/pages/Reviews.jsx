import { useState, useEffect } from 'react'
import bgVideo from '../assets/background4.mp4' // palitan mo ng MP4 mo

export default function Reviews() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reviews')) || []
    setReviews(saved)
  }, [])

  const submitReview = e => {
    e.preventDefault()
    const newReview = { id: Date.now(), name, comment }
    const updated = [...reviews, newReview]
    setReviews(updated)
    localStorage.setItem('reviews', JSON.stringify(updated))
    setName('')
    setComment('')
  }

  return (
    <section
      id="reviews"
      className="relative min-h-screen snap-start flex flex-col items-center justify-center p-10 overflow-hidden"
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      
      <h2 className="text-3xl font-bold mb-6 text-white relative z-10 animate-fade-in">
        Reviews
      </h2>

      <form
        onSubmit={submitReview}
        className="mb-8 w-full max-w-xl flex flex-col gap-4 relative z-10"
      >
        <input
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-600 outline-none"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-600 outline-none"
          placeholder="Your comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-300">
          Submit
        </button>
      </form>

      <ul className="w-full max-w-xl flex flex-col gap-4 relative z-10">
        {reviews.map((r, i) => (
          <li
            key={r.id}
            className={`bg-white bg-opacity-80 p-4 rounded-lg shadow hover:shadow-2xl transition-transform duration-300 animate-fade-in`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="font-semibold text-indigo-800">{r.name}</p>
            <p className="text-gray-700">{r.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
