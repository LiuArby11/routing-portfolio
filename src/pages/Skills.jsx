import bgVideo from '../assets/background2.mp4' // palitan mo ng MP4 mo

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git']

export default function Skills() {
  return (
    <section
      id="skills"
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

      
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative z-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md text-center transform transition duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-indigo-800">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
