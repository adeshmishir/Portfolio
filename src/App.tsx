import { Hero } from "@/components/site/Hero"
import { About } from "@/components/site/About"
import { Experience } from "@/components/site/Experience"
import { Projects } from "@/components/site/Projects"
import { Achievements } from "@/components/site/Achievements"
import { Contact } from "@/components/site/Contact"
import { Footer } from "@/components/site/Footer"

function App() {
  return (
    <>
      <div id="top" aria-hidden />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
