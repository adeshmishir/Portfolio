import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"
import {
  CodeChefIcon,
  CodeforcesIcon,
  GithubIcon,
  InstagramIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "./icons"

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "LeetCode", href: profile.links.leetcode, Icon: LeetCodeIcon },
  { label: "Codeforces", href: profile.links.codeforces, Icon: CodeforcesIcon },
  { label: "CodeChef", href: profile.links.codechef, Icon: CodeChefIcon },
  { label: "Instagram", href: profile.links.instagram, Icon: InstagramIcon },
]

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's build something together."
          sub="Open to SDE internships and new-grad roles. Reach out — I usually respond quickly."
          center
        />

        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-lg shadow-stone-900/[0.05] md:p-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="h-11 rounded-full px-6">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> Email me
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" /> Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Phone className="size-3.5 text-primary" /> {profile.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5 text-primary" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-3.5 text-primary" /> {profile.email}
                <ArrowRight className="size-3" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-md"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
