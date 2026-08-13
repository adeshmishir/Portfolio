import { Badge } from "@/components/ui/badge"
import { skills } from "@/lib/data"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading eyebrow="04 · Skills" title="Tools & technologies." />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/[0.05]">
                <h3 className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                  {group.category}
                  <span className="h-px flex-1 bg-border" aria-hidden />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-3.5 py-1 font-mono text-xs font-normal text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
