import { useEffect, useRef, type ReactNode } from "react"
import { useReducedMotion } from "framer-motion"

interface TiltProps {
  children: ReactNode
  /** Maximum rotation in degrees (vanilla-tilt data-tilt-max) */
  max?: number
  /** Maximum glare opacity (vanilla-tilt data-tilt-max-glare) */
  maxGlare?: number
  className?: string
}

/**
 * Recreates vanilla-tilt used by Simplefolio:
 * subtle rotation reacting to cursor movement inside a perspective
 * container, a soft glare that follows the pointer, and a smooth
 * return to the resting position on leave.
 */
export function Tilt({ children, max = 4, maxGlare = 0.5, className }: TiltProps) {
  const reduce = useReducedMotion()
  const elRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    const glare = glareRef.current
    if (!el || !glare || reduce) return

    let raf = 0
    let x = 0
    let y = 0
    let glareOpacity = 0
    const target = { x: 0, y: 0, glare: 0 }

    const frame = () => {
      x += (target.x - x) * 0.15
      y += (target.y - y) * 0.15
      glareOpacity += (target.glare - glareOpacity) * 0.15

      el.style.transform = `perspective(1000px) rotateX(${y.toFixed(
        3,
      )}deg) rotateY(${x.toFixed(3)}deg)`
      glare.style.opacity = glareOpacity.toFixed(3)

      if (
        Math.abs(target.x - x) > 0.01 ||
        Math.abs(target.y - y) > 0.01 ||
        Math.abs(target.glare - glareOpacity) > 0.005
      ) {
        raf = requestAnimationFrame(frame)
      } else {
        raf = 0
      }
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height

      target.x = (px - 0.5) * 2 * max
      target.y = (0.5 - py) * 2 * max

      const distance = Math.hypot(px - 0.5, py - 0.5) * 2
      target.glare = Math.max(0, 1 - distance) * maxGlare

      glare.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`)
      glare.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`)

      if (!raf) raf = requestAnimationFrame(frame)
    }

    const onLeave = () => {
      target.x = 0
      target.y = 0
      target.glare = 0
      if (!raf) raf = requestAnimationFrame(frame)
    }

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduce, max, maxGlare])

  return (
    <div ref={elRef} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
      <div ref={glareRef} className="js-tilt__glare" aria-hidden />
    </div>
  )
}
