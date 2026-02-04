import profilePic from '../assets/profile.jpg'
import bgVideo from '../assets/background1.mp4'

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen snap-start flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden"
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
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 rounded-xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 border-2 border-indigo-600 p-8 rounded-xl shadow-lg bg-white bg-opacity-90 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            About Me
          </h2>
          <p className="text-gray-700 mb-4">
            I am an IT student currently studying at AMA, passionate about building modern web applications using React and other technologies. I enjoy learning new tools and improving my skills through projects.
          </p>
          <p className="text-gray-700">
            I love turning ideas into functional, beautiful web experiences. Constantly learning and experimenting with new tech to sharpen my skills and deliver high-quality projects.
          </p>
        </div>
      </div>
    </section>
  )
}
