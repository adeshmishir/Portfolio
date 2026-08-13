import { lazy, Suspense } from "react"
import { Navbar } from "@/components/site/Navbar"
import { Hero } from "@/components/site/Hero"
import { About } from "@/components/site/About"
import { Footer } from "@/components/site/Footer"
import { ScrollProgress } from "@/components/site/ScrollProgress"
import { SectionSkeleton } from "@/components/site/SectionSkeleton"

const Experience = lazy(() =>
  import("@/components/site/Experience").then((m) => ({ default: m.Experience })),
)
const Projects = lazy(() =>
  import("@/components/site/Projects").then((m) => ({ default: m.Projects })),
)
const Skills = lazy(() =>
  import("@/components/site/Skills").then((m) => ({ default: m.Skills })),
)
const Achievements = lazy(() =>
  import("@/components/site/Achievements").then((m) => ({ default: m.Achievements })),
)
const Contact = lazy(() =>
  import("@/components/site/Contact").then((m) => ({ default: m.Contact })),
)

function LazySection({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
}

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Achievements />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </div>
  )
}

export default App
