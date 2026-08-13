import { Badge } from "@/components/ui/badge"
import { aboutInterests, aboutStats, facts, profile } from "@/lib/data"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading eyebrow="01 · About" title="Building reliable systems, end to end." />

        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
          <div>
            <Reveal>
              <p className="mb-4 text-muted-foreground md:text-[16.5px] md:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground">
                I'm a <strong>Computer Science student at IIIT Bhopal</strong> who splits time
                between <strong>shipping full-stack products</strong>, exploring{" "}
                <strong>Gen AI systems</strong>, and solving competitive programming problems.
                Product work taught me to care about <strong>reliability and clarity</strong>; CP
                taught me to think in <strong>constraints</strong> and move fast under pressure.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mb-6 text-muted-foreground md:text-[16.5px] md:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground">
                I work with <strong>scalable systems and modern development tools</strong> —
                currently focused on <strong>distributed systems</strong> and{" "}
                <strong>backend architecture</strong>, while looking for{" "}
                <strong>SDE internship and new-grad opportunities</strong> where I can work on
                real infrastructure.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                Currently focused on
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutInterests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="rounded-full px-3 py-1 font-mono text-xs font-normal text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-border">
                {aboutStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-4 py-4 ${
                      i !== aboutStats.length - 1 ? "border-r border-border" : ""
                    }`}
                  >
                    <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`flex items-center justify-between gap-4 px-5 py-3.5 text-sm ${
                    i !== facts.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground/70">
                    {f.k}
                  </span>
                  <span className="text-right font-medium">{f.v}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground/70">
                  Status
                </span>
                <span className="text-right font-medium">
                  Open to SDE internships
                  <span className="ml-2 inline-block rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    Open
                  </span>
                </span>
              </div>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
