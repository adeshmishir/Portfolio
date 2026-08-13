import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 md:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Adesh Mishra · Built with React, Tailwind &amp; a lot of coffee
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
