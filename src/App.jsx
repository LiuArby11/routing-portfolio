import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="App h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-gray-50">
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}
