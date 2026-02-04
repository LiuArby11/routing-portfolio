import bgVideo from '../assets/background3.mp4'

const projects = [
  {
    title: 'Product-Dashboard',
    desc: 'Homework 1',
    link: 'https://github.com/LiuArby11/Product-Dashboard.git',
  },
  {
    title: 'calendar-liugarcia',
    desc: 'Task 9',
    link: 'https://github.com/LiuArby11/calendar-liugarcia.git',
  },
  {
    title: 'blogger-liu',
    desc: 'Task 7',
    link: 'https://github.com/LiuArby11/blogger-liu.git',
  },
  {
    title: 'calendar-liugarcia',
    desc: 'Exam 1 Finals',
    link: 'https://github.com/LiuArby11/Unsplash-Gallery.git',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
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

      
      <h2 className="text-3xl font-bold mb-8 text-white relative z-10 animate-fade-in">
        Sample Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in block"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h3 className="font-bold text-xl mb-2 text-indigo-800">{p.title}</h3>
            <p className="text-gray-700">{p.desc.substring(0, 50)}...</p>
            <span className="text-indigo-600 mt-2 inline-block hover:underline">
              View on GitHub
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
