"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.scrollY
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return ref
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return position
}

export function useMagneticHover(strength: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.style.transform = "translate(0, 0)"
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}

export function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(currentCount)

      if (progress >= 1) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isActive, end, duration, start])

  return { ref, count }
}
