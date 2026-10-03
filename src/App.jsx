import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Contact, Footer, Journey, Projects, Skills } from './components/Sections'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      {/* Animated gradient blobs behind the glass */}
      <div className="bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <span className="grain" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
