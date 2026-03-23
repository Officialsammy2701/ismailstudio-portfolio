'use client'

// ============================================================
// src/components/ui/SignalField.tsx
// Living signal field background for the Hero section.
// A canvas-based animation with:
//   - Concentric pulse waves radiating from center
//   - Random grid nodes that flicker cyan and fade
//   - A breathing radial glow that drifts slowly
// Respects prefers-reduced-motion.
// ============================================================

import { useEffect, useRef } from 'react'

// Grid node that can flicker
interface Node {
  x:       number
  y:       number
  alpha:   number   // current opacity
  growing: boolean  // fading in or out
  speed:   number   // flicker speed
}

// Concentric pulse ring
interface Ring {
  radius:   number
  maxRadius: number
  alpha:    number
  speed:    number
}

export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas  = canvasRef.current
    if (!canvas) return
    const ctx     = canvas.getContext('2d')
    if (!ctx) return

    // ── Canvas sizing ───────────────────────────────────────
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight

    const handleResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      initNodes()
    }
    window.addEventListener('resize', handleResize)

    // ── Grid nodes ──────────────────────────────────────────
    const GRID_SIZE  = 48    // match the CSS grid
    const FLICKER_COUNT = 6  // how many nodes flicker at once
    let nodes: Node[] = []

    const initNodes = () => {
      nodes = []
      const cols = Math.ceil(W / GRID_SIZE)
      const rows = Math.ceil(H / GRID_SIZE)

      // Pick random grid intersections to flicker
      for (let i = 0; i < FLICKER_COUNT; i++) {
        nodes.push({
          x:       Math.floor(Math.random() * cols) * GRID_SIZE,
          y:       Math.floor(Math.random() * rows) * GRID_SIZE,
          alpha:   Math.random(),
          growing: Math.random() > 0.5,
          speed:   0.003 + Math.random() * 0.006,
        })
      }
    }
    initNodes()

    // ── Pulse rings ─────────────────────────────────────────
    const rings: Ring[] = []
    let ringTimer = 0
    const RING_INTERVAL = 120  // frames between new rings

    const spawnRing = () => {
      rings.push({
        radius:    0,
        maxRadius: Math.max(W, H) * 0.7,
        alpha:     0.12,
        speed:     1.2,
      })
    }

    // ── Breathing glow ──────────────────────────────────────
    let breathe = 0

    // ── Animation loop ──────────────────────────────────────
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      breathe += 0.008
      const breatheScale = 1 + Math.sin(breathe) * 0.15

      // Breathing radial glow — drifts slightly
      const cx = W / 2 + Math.sin(breathe * 0.4) * 30
      const cy = H * 0.38 + Math.cos(breathe * 0.3) * 20
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 380 * breatheScale)
      grad.addColorStop(0,   'rgba(0, 229, 255, 0.07)')
      grad.addColorStop(0.5, 'rgba(0, 229, 255, 0.03)')
      grad.addColorStop(1,   'rgba(0, 229, 255, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      // Pulse rings from center
      ringTimer++
      if (ringTimer >= RING_INTERVAL) {
        ringTimer = 0
        spawnRing()
      }

      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i]
        ring.radius += ring.speed
        ring.alpha  -= 0.0006

        if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
          rings.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(W / 2, H / 2, ring.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 229, 255, ${ring.alpha})`
        ctx.lineWidth   = 1
        ctx.stroke()
      }

      // Flickering grid nodes
      for (const node of nodes) {
        // Update alpha
        if (node.growing) {
          node.alpha += node.speed
          if (node.alpha >= 0.7) {
            node.growing = false
            // Relocate after reaching peak
          }
        } else {
          node.alpha -= node.speed
          if (node.alpha <= 0) {
            // Respawn at new random grid position
            const cols = Math.ceil(W / GRID_SIZE)
            const rows = Math.ceil(H / GRID_SIZE)
            node.x       = Math.floor(Math.random() * cols) * GRID_SIZE
            node.y       = Math.floor(Math.random() * rows) * GRID_SIZE
            node.alpha   = 0
            node.growing = true
            node.speed   = 0.003 + Math.random() * 0.006
          }
        }

        // Draw glow dot at grid intersection
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 12
        )
        glow.addColorStop(0,   `rgba(0, 229, 255, ${node.alpha})`)
        glow.addColorStop(0.4, `rgba(0, 229, 255, ${node.alpha * 0.4})`)
        glow.addColorStop(1,   'rgba(0, 229, 255, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(node.x - 12, node.y - 12, 24, 24)

        // Tiny dot at the center
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 229, 255, ${node.alpha * 0.9})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    // Spawn first ring immediately
    spawnRing()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  )
}
