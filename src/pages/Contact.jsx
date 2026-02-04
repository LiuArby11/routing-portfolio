import bgVideo from '../assets/baackground5.mp4'

export default function Contact() {
  return (
    <section
      id="contact"
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

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
          Contact Me
        </h2>

        <div className="flex flex-col gap-3 animate-fade-in delay-200">
          <p>Email: <a  className="underline hover:text-yellow-300">Liugarcia1104@gmail.com</a></p>
          <p>Phone: <a  className="underline hover:text-yellow-300">09951167315</a></p>
          <p>
            Facebook: <a href="https://www.facebook.com/liuarby.garcia" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">Visit</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/LiuArby11" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">Visit</a>
          </p>
          
        </div>
      </div>
    </section>
  )
}
