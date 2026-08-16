import { ChevronUp } from "lucide-react"
import { profile } from "@/lib/data"
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons"

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: profile.links.instagram, Icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top" aria-label="Back to top">
          <ChevronUp className="size-8" aria-hidden />
        </a>

        <div className="footer-contact">
          <a href={`mailto:${profile.email}`} rel="noreferrer">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} rel="noreferrer">
            {profile.phone}
          </a>
        </div>

        <div className="social-links">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              rel="noreferrer"
              href={href}
              target="_blank"
              aria-label={label}
            >
              <Icon className="size-8" />
            </a>
          ))}
        </div>

        <hr />

        <p className="footer__text">
          © {new Date().getFullYear()} — Adesh Mishra
        </p>
      </div>
    </footer>
  )
}
