import type { Variants } from "framer-motion"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"
import {
  CodeforcesIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "./icons"

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "LeetCode", href: profile.links.leetcode, Icon: LeetCodeIcon },
  { label: "Codeforces", href: profile.links.codeforces, Icon: CodeforcesIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
]

export function Hero() {
  const reduce = useReducedMotion()

  const container: Variants = reduce
    ? { show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
      }
  const item: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center pb-16 pt-28 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            {profile.name}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg font-medium text-muted-foreground md:text-xl"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-muted-foreground md:text-[17px] md:leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="h-11 rounded-full px-6">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-6">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-md"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-stone-900/[0.06]">
              <Badge className="absolute left-4 top-4 z-10 gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                Open to SDE internships
              </Badge>
              <img
                src={profile.portrait}
                alt="Hacker aesthetic — code on a monitor"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground/70">
              Where the code lives
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
