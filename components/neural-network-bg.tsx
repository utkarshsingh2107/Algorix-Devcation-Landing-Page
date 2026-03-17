"use client"

import { useEffect, useRef, useCallback } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  color: string
  pulsePhase: number
  pulseSpeed: number
  layer: number
}

interface Connection {
  from: number
  to: number
  strength: number
  pulseOffset: number
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const timeRef = useRef(0)

  const colors = {
    purple: { r: 124, g: 58, b: 237 },
    blue: { r: 37, g: 99, b: 235 },
    pink: { r: 236, g: 72, b: 153 },
  }

  const colorKeys = Object.keys(colors) as (keyof typeof colors)[]

  const initNodes = useCallback((width: number, height: number) => {
    const density = Math.max(width, height) < 768 ? 25000 : 18000
    const nodeCount = Math.floor((width * height) / density)
    const nodes: Node[] = []
    const connections: Connection[] = []

    // Create nodes in layers for depth effect
    for (let i = 0; i < nodeCount; i++) {
      const layer = Math.floor(Math.random() * 3) // 0, 1, 2 layers
      const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]
      const baseRadius = layer === 0 ? 1 + Math.random() : layer === 1 ? 1.5 + Math.random() * 1.5 : 2 + Math.random() * 2

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (0.3 + layer * 0.1),
        vy: (Math.random() - 0.5) * (0.3 + layer * 0.1),
        radius: baseRadius,
        baseRadius,
        color: colorKey,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        layer,
      })
    }

    // Pre-calculate some persistent connections for the network feel
    const connectionDistance = 180
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x
        const dy = nodes[j].y - nodes[i].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < connectionDistance && Math.random() > 0.7) {
          connections.push({
            from: i,
            to: j,
            strength: 1 - dist / connectionDistance,
            pulseOffset: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    nodesRef.current = nodes
    connectionsRef.current = connections
  }, [])

  const drawNetwork = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear with slight trail effect for smoother motion
    ctx.fillStyle = "rgba(2, 6, 23, 0.15)"
    ctx.fillRect(0, 0, width, height)

    const nodes = nodesRef.current
    const connections = connectionsRef.current
    const mouse = mouseRef.current
    const time = timeRef.current
    const connectionDistance = 160
    const mouseDistance = 250

    // Draw background glow orbs
    const glowOrbs = [
      { x: width * 0.2, y: height * 0.3, color: colors.purple, size: 300 },
      { x: width * 0.8, y: height * 0.6, color: colors.blue, size: 350 },
      { x: width * 0.5, y: height * 0.8, color: colors.pink, size: 250 },
    ]

    glowOrbs.forEach((orb, i) => {
      const pulseSize = orb.size + Math.sin(time * 0.001 + i) * 50
      const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, pulseSize)
      gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.05)`)
      gradient.addColorStop(0.5, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.02)`)
      gradient.addColorStop(1, "transparent")
      ctx.beginPath()
      ctx.arc(orb.x, orb.y, pulseSize, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    })

    // Update and draw by layer for depth
    for (let layer = 0; layer < 3; layer++) {
      const layerOpacity = 0.3 + layer * 0.25

      nodes.forEach((node, i) => {
        if (node.layer !== layer) return

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Soft bounce off walls with damping
        if (node.x < 0 || node.x > width) {
          node.vx *= -0.8
          node.x = Math.max(0, Math.min(width, node.x))
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -0.8
          node.y = Math.max(0, Math.min(height, node.y))
        }

        // Gentle drift
        node.vx += (Math.random() - 0.5) * 0.01
        node.vy += (Math.random() - 0.5) * 0.01

        // Limit velocity
        const maxVel = 0.8 + node.layer * 0.2
        const vel = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (vel > maxVel) {
          node.vx = (node.vx / vel) * maxVel
          node.vy = (node.vy / vel) * maxVel
        }

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - node.x
          const dy = mouse.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseDistance && dist > 0) {
            const force = ((mouseDistance - dist) / mouseDistance) * 0.04
            node.vx += (dx / dist) * force
            node.vy += (dy / dist) * force
          }
        }

        // Pulse effect
        node.pulsePhase += node.pulseSpeed
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 1
        node.radius = node.baseRadius * pulse
      })

      // Draw connections for this layer
      nodes.forEach((node, i) => {
        if (node.layer !== layer) return

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          if (Math.abs(other.layer - node.layer) > 1) continue

          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * layerOpacity * 0.4
            const color = colors[node.color as keyof typeof colors]
            
            // Animated gradient line
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y)
            const pulsePos = (Math.sin(time * 0.002 + i * 0.1) + 1) / 2
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`)
            gradient.addColorStop(pulsePos, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`)
            gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`)

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5 + layer * 0.3
            ctx.stroke()
          }
        }
      })

      // Draw nodes for this layer
      nodes.forEach((node) => {
        if (node.layer !== layer) return

        const color = colors[node.color as keyof typeof colors]

        // Outer glow
        const glowSize = node.radius * 6
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        )
        glowGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity * 0.6})`)
        glowGradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity * 0.2})`)
        glowGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity})`
        ctx.fill()

        // Inner bright spot
        ctx.beginPath()
        ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${layerOpacity * 0.5})`
        ctx.fill()
      })
    }

    // Draw mouse interaction effect
    if (mouse.active) {
      const mouseGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, mouseDistance
      )
      mouseGradient.addColorStop(0, "rgba(236, 72, 153, 0.1)")
      mouseGradient.addColorStop(0.5, "rgba(124, 58, 237, 0.05)")
      mouseGradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, mouseDistance, 0, Math.PI * 2)
      ctx.fillStyle = mouseGradient
      ctx.fill()

      // Draw lines from mouse to nearby nodes
      nodes.forEach((node) => {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseDistance * 0.6) {
          const opacity = (1 - dist / (mouseDistance * 0.6)) * 0.5
          const color = colors[node.color as keyof typeof colors]

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    }

    timeRef.current += 16
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes(canvas.width, canvas.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, active: false }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleMouseLeave)

    const animate = () => {
      drawNetwork(ctx, canvas.width, canvas.height)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initNodes, drawNetwork])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "#020617" }}
      />
      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-transparent" />
    </>
  )
}
