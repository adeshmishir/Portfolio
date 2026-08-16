import { useEffect, useState } from "react"
import { profile } from "@/lib/data"
import { Reveal } from "./Reveal"

export function About() {
  const [fromLeft, setFromLeft] = useState(true)

  useEffect(() => {
    setFromLeft(window.innerWidth > 768)
  }, [])

  return (
    <section id="about">
      <div className="container">
        <Reveal delay={300} distance={0} origin="bottom">
          <h2 className="section-title">About me</h2>
        </Reveal>

        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Reveal delay={600} origin="bottom">
              <div className="about-wrapper__image">
                <img
                  className="img-fluid rounded shadow-lg"
                  src={profile.portrait}
                  alt="Portrait of Adesh Mishra"
                />
              </div>
            </Reveal>
          </div>

          <div className="col-md-6 col-sm-12">
            <Reveal delay={1000} origin={fromLeft ? "left" : "bottom"}>
              <div className="about-wrapper__info">
                {profile.about.map((paragraph) => (
                  <p key={paragraph} className="about-wrapper__info-text">
                    {paragraph}
                  </p>
                ))}
                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={profile.resumeUrl}
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
