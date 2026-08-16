import { useEffect, useState } from "react"
import { profile } from "@/lib/data"
import { Reveal } from "./Reveal"

export function Hero() {
  const [fromLeft, setFromLeft] = useState(true)

  useEffect(() => {
    setFromLeft(window.innerWidth > 768)
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <Reveal delay={500} distance={30} origin={fromLeft ? "left" : "bottom"}>
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">{profile.name}</span>
            <br />
            {profile.headline}
          </h1>
        </Reveal>

        <Reveal delay={1000} distance={30} origin={fromLeft ? "left" : "bottom"}>
          <p className="hero-cta">
            <a
              rel="noreferrer"
              className="cta-btn cta-btn--hero"
              href="#about"
            >
              Know more
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
