import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', level: 80, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', level: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', level: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', level: 85, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', level: 70, img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', level: 90, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Skills() {
  return (
    <section className="relative min-h-screen flex flex-col items-center py-24 px-6 overflow-hidden bg-slate-950">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h4 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-2">My Toolbox</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Proficiency</span>
        </h2>
      </motion.div>

      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10"
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-5 transition-colors hover:bg-white/10"
          >
            
            <div className="w-14 h-14 flex-shrink-0 bg-white/5 p-3 rounded-xl border border-white/5">
              <img 
                src={skill.img} 
                alt={skill.name} 
                className="w-full h-full object-contain"
              />
            </div>

            
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-base font-bold text-gray-200">{skill.name}</span>
                <span className="text-xs font-semibold text-indigo-400">{skill.level}%</span>
              </div>
              
              
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 h-full rounded-full shadow-[0_0_15px_#6366f166]"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-gray-500 text-sm font-medium tracking-tighter"
      >
        Always learning, always evolving.
      </motion.p>
    </section>
  );
}