import type { Project } from "@/lib/data"
import { Reveal } from "./Reveal"
import { Tilt } from "./Tilt"

function ProjectShot({ project }: { project: Project }) {
  return (
    <div
      className="project-shot"
      role="img"
      aria-label={`${project.title} interface`}
    >
      <div className="project-shot__bar">
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />
        <span className="project-shot__url">
          {project.source.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <div className="project-shot__body">
        <span className="project-shot__monogram">{project.monogram}</span>
        <span className="project-shot__name">{project.title}</span>
        <span className="project-shot__hint">Project interface</span>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  fromLeft: boolean
}

export function ProjectCard({ project, fromLeft }: ProjectCardProps) {
  const imageHref = project.demo ?? project.source

  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <Reveal delay={500} origin={fromLeft ? "left" : "bottom"}>
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{project.title}</h3>
            <div>
              <p>{project.description}</p>
            </div>
            <div className="project-wrapper__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {project.demo ? (
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href={project.demo}
              >
                See Live
              </a>
            ) : null}
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn text-color-main"
              href={project.source}
            >
              Source Code
            </a>
          </div>
        </Reveal>
      </div>

      <div className="col-lg-8 col-sm-12">
        <Reveal delay={1000} origin={fromLeft ? "right" : "bottom"}>
          <div className="project-wrapper__image">
            <a rel="noreferrer" href={imageHref} target="_blank">
              <Tilt className="thumbnail rounded js-tilt">
                <ProjectShot project={project} />
              </Tilt>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
