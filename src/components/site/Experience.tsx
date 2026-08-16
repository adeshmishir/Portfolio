import { experience } from "@/lib/data"
import { Reveal } from "./Reveal"

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal delay={300} distance={0} origin="bottom">
          <h2 className="section-title dark-blue-text">Experience & Leadership</h2>
        </Reveal>

        <div className="experience-wrapper">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={600 + i * 200} origin="bottom">
              <article className="experience-item">
                <div className="experience-item__meta">
                  <h3 className="experience-item__role">{job.role}</h3>
                  {job.companyUrl ? (
                    <a
                      className="experience-item__company"
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="experience-item__company">{job.company}</span>
                  )}
                  {job.duration ? (
                    <span className="experience-item__duration">{job.duration}</span>
                  ) : null}
                </div>
                <ul className="experience-item__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
