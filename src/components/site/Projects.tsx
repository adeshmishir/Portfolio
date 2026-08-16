import { useEffect, useState } from "react"
import { projects } from "@/lib/data"
import { Reveal } from "./Reveal"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  const [fromLeft, setFromLeft] = useState(true)

  useEffect(() => {
    setFromLeft(window.innerWidth > 768)
  }, [])

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Reveal delay={300} distance={0} origin="bottom">
            <h2 className="section-title dark-blue-text">Projects</h2>
          </Reveal>

          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} fromLeft={fromLeft} />
          ))}
        </div>
      </div>
    </section>
  )
}
