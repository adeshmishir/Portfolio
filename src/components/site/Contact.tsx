import { profile } from "@/lib/data"
import { Reveal } from "./Reveal"

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal delay={300} distance={0} origin="bottom">
          <h2 className="section-title">Contact</h2>
        </Reveal>

        <Reveal delay={800} origin="bottom">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Have a project, opportunity, or idea? Let's connect.
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href={`mailto:${profile.email}`}
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
