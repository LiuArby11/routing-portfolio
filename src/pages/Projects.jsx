import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Product-Dashboard',
    desc: 'A comprehensive management system for products and inventory.',
    type: 'Homework 1',
    link: 'https://github.com/LiuArby11/Product-Dashboard.git',
  },
  {
    title: 'calendar-liugarcia',
    desc: 'Dynamic calendar application for event tracking and scheduling.',
    type: 'Task 9',
    link: 'https://github.com/LiuArby11/calendar-liugarcia.git',
  },
  {
    title: 'blogger-liu',
    desc: 'A minimalist blogging platform built with modern web standards.',
    type: 'Task 7',
    link: 'https://github.com/LiuArby11/blogger-liu.git',
  },
  {
    title: 'Unsplash-Gallery',
    desc: 'Image search engine utilizing the Unsplash API for high-quality visuals.',
    type: 'Exam 1 Finals',
    link: 'https://github.com/LiuArby11/Unsplash-Gallery.git',
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
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
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
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl overflow-hidden transition-all hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                  {p.type}
                </span>
                
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.desc}</p>

              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                <span>View Repository</span>
                <span>→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-24 relative z-10"
      >
        <a 
          href="https://github.com/LiuArby11" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <p className="text-gray-500 text-sm font-medium group-hover:text-indigo-400 transition-colors">Want to see more?</p>
          
          <div className="relative">
            
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition duration-500 animate-pulse"></div>
            
            <div className="relative flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-md transition-all">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span className="text-white font-bold tracking-wide">Visit @LiuArby11</span>
            </div>
          </div>
        </a>
      </motion.div>

    </section>
  );
}