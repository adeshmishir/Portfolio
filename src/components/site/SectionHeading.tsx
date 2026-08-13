import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  sub?: string
  center?: boolean
}

export function SectionHeading({ eyebrow, title, sub, center }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6 md:mb-8", center && "text-center")}>
      <Reveal>
        <p
          className={cn(
            "mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary",
            center && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-primary" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-muted-foreground">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
