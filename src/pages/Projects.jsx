import { motion } from 'framer-motion';

const projects = [
  {
    title: 'react-youtube',
    desc: 'A comprehensive management system for products and inventory.',
    type: 'youtube-project',
    link: 'https://github.com/LiuArby11/youtube-react-liugarcia',
    vercel: 'https://react-tailwind-liu-rg8p.vercel.app/', 
  },
  {
    title: 'Unsplash-Gallery',
    desc: 'Image search engine utilizing the Unsplash API for high-quality visuals.',
    type: 'Exam 1 Finals',
    link: 'https://github.com/LiuArby11/Unsplash-Gallery.git',
    vercel: 'https://unsplash-gallery-1v6u.vercel.app/',
  },
  {
    title: 'blogger-liu',
    desc: 'A minimalist blogging platform built with modern web standards.',
    type: 'Task 7',
    link: 'https://github.com/LiuArby11/blogger-liu.git',
    vercel: '', 
  },
  {
    title: 'calendar-liugarcia',
    desc: 'Dynamic calendar application for event tracking and scheduling.',
    type: 'Task 9',
    link: 'https://github.com/LiuArby11/calendar-liugarcia.git',
    vercel: '', 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col items-center py-24 px-6 overflow-hidden bg-slate-950">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h4 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-2">My Creative Works</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
        </h2>
      </motion.div>

      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl z-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden transition-all hover:border-indigo-500/50"
          >
            
            <div className="relative h-52 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
              {p.vercel ? (
                <img 
                  src={`https://api.microlink.io/?url=${encodeURIComponent(p.vercel)}&screenshot=true&embed=screenshot.url`}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/0f172a/4f46e5?text=Preview+Loading...'; }}
                />
              ) : (
                <div className="flex flex-col items-center gap-3 opacity-30">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Repository Only</span>
                </div>
              )}
              <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>

            
            <div className="p-6 relative z-10">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20">
                {p.type}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{p.desc}</p>

              <div className="flex gap-3 mt-auto">
                {p.vercel ? (
                  <a 
                    href={p.vercel} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center text-white bg-indigo-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
                  >
                    Live Demo 
                  </a>
                ) : null}
                
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex-1 text-center px-6 py-2.5 rounded-xl font-bold text-sm transition-all border ${
                    p.vercel 
                    ? 'border-white/10 text-gray-300 hover:bg-white/5' 
                    : 'bg-white text-black hover:bg-indigo-500 hover:text-white border-transparent'
                  }`}
                >
                  {p.vercel ? 'Source Code' : 'View on GitHub '}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 relative z-10"
      >
        <a href="https://github.com/LiuArby11" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4 text-gray-500 hover:text-indigo-400 transition-all">
          <p className="text-sm font-medium">Explore More on GitHub</p>
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md group-hover:bg-white/10 group-hover:border-indigo-500/50 transition-all">
            <span className="text-white font-bold tracking-wide">Visit @LiuArby11</span>
          </div>
        </a>
      </motion.div>

    </section>
  );
}