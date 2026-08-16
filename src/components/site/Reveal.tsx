import type { CSSProperties, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type Origin = "top" | "bottom" | "left" | "right"

interface RevealProps {
  children: ReactNode
  /** ScrollReveal-style delay in ms */
  delay?: number
  /** Translation distance in px */
  distance?: number
  origin?: Origin
  className?: string
  style?: CSSProperties
}

const OFFSET: Record<Origin, (distance: number) => { x?: number; y?: number }> = {
  top: (d) => ({ y: -d }),
  bottom: (d) => ({ y: d }),
  left: (d) => ({ x: -d }),
  right: (d) => ({ x: d }),
}

const EASE = [0.5, 0, 0, 1] as const

/**
 * Recreates ScrollReveal's default behavior used by Simplefolio:
 * 30px travel, 1000ms duration, cubic-bezier(0.5, 0, 0, 1) easing,
 * triggered once when the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 30,
  origin = "bottom",
  className,
  style,
}: RevealProps) {
  const reduce = useReducedMotion()
  const offset = OFFSET[origin](distance)

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, x: offset.x ?? 0, y: offset.y ?? 0 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
