import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./SectionHeading"
import { GithubIcon } from "./icons"

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Featured builds."
          sub="Selected systems I've designed and shipped — from distributed job processing to AI-powered document Q&A."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
              className={cn(
                "group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.06] md:p-7",
                projects.length > 2 && i === projects.length - 1 && "md:col-span-2",
              )}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="rounded-full p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </div>

              <p className="mb-4 text-muted-foreground">{project.description}</p>

              <ul className="mb-5 grid gap-2 text-sm text-muted-foreground">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="rounded-full border-border font-mono text-[11px] font-normal text-muted-foreground"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.demo && (
                  <Button asChild variant="outline" className="h-9 rounded-full px-4 text-xs">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="size-3.5" /> Live Demo
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="h-9 rounded-full px-4 text-xs">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-3.5" /> View on GitHub
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
