import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading eyebrow="02 · Experience" title="Where I've worked." />

        <div className="relative border-l border-border pl-8 md:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.1} className="relative pb-14 last:pb-0">
              <span
                className="absolute -left-[41px] top-1.5 flex size-2.5 items-center justify-center md:-left-[49px]"
                aria-hidden
              >
                <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-muted-foreground/70">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 font-medium text-primary">{job.org}</p>

              <ul className="mt-4 grid gap-2.5 text-[15px] text-muted-foreground">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span className="md:leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="rounded-full font-mono text-[11px] font-normal text-muted-foreground"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
