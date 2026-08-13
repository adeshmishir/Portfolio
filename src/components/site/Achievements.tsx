import { motion, useReducedMotion } from "framer-motion"
import { achievements, profile, stats } from "@/lib/data"
import { Counter } from "./Counter"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"
import { CodeChefIcon, CodeforcesIcon, LeetCodeIcon, ShieldCheckIcon, TrophyIcon } from "./icons"

const achievementIcons = [TrophyIcon, ShieldCheckIcon, CodeforcesIcon]

const cpLinks = [
  { label: "Codeforces", href: profile.links.codeforces, Icon: CodeforcesIcon, brand: "text-sky-500" },
  { label: "LeetCode", href: profile.links.leetcode, Icon: LeetCodeIcon, brand: "text-amber-500" },
  { label: "CodeChef", href: profile.links.codechef, Icon: CodeChefIcon, brand: "text-amber-700" },
]

export function Achievements() {
  const reduce = useReducedMotion()

  return (
    <section id="achievements">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <SectionHeading
          eyebrow="05 · Achievements"
          title="Competitive programming & honors."
        />

        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduce ? undefined : { y: -3 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/[0.05] md:p-6"
            >
              <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground/70">
                {stat.label}
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-10 grid gap-4">
          {achievements.map((ach, i) => {
            const Icon = achievementIcons[i] ?? TrophyIcon
            return (
              <Reveal key={ach.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md md:p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{ach.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{ach.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {cpLinks.map(({ label, href, Icon, brand }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              >
                <Icon className={`size-4 ${brand}`} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
