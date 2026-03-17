"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useCountUp, useMagneticHover } from "@/hooks/use-scroll-reveal"

const words = ["Speed", "Skill", "Code", "Innovation"]

function TypewriterText() {
  const [currentWord, setCurrentWord] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWord]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(word.substring(0, text.length + 1))
          if (text === word) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(word.substring(0, text.length - 1))
          if (text === "") {
            setIsDeleting(false)
            setCurrentWord((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentWord])

  const colors = ["#7C3AED", "#2563EB", "#EC4899", "#10B981"]

  return (
    <span className="inline-block min-w-[200px]">
      <span style={{ color: colors[currentWord] }} className="font-bold">
        {text}
      </span>
      <span className="animate-pulse text-[#7C3AED]">|</span>
    </span>
  )
}

function CountUpStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, count } = useCountUp(value, 2500)

  return (
    <div ref={ref} className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl group">
      <div className="relative">
        <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
          {suffix === "₹" ? `₹${count.toLocaleString()}` : count.toLocaleString()}{suffix !== "₹" && suffix}
        </div>
        <div className="absolute -inset-2 bg-gradient-to-r from-[#7C3AED]/20 to-[#EC4899]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="text-sm text-[#94A3B8] mt-2 font-medium tracking-wide uppercase">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const magneticRef = useMagneticHover(0.2)
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-[#020617]" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[150px] animate-morph" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[180px] animate-morph animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EC4899]/10 rounded-full blur-[120px] animate-float" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Badge */}
        <div
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-premium mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EC4899]" />
          </span>
          <span className="text-sm text-[#E2E8F0] font-medium tracking-wide">
            Registration Open
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-sm text-[#94A3B8]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Grand Finale at IIT Delhi
          </span>
        </div>

        {/* Main Heading with enhanced typography */}
        <h1
          className={`transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight">
            Devcation
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mt-2 tracking-tight text-glow-purple">
            Hack N Solve
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2563EB] mt-4 tracking-tight">
            2026
          </span>
        </h1>

        {/* Animated Tagline */}
        <div
          className={`mt-10 text-xl sm:text-2xl md:text-3xl text-[#94A3B8] font-light transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white/70">Where </span>
          <TypewriterText />
          <span className="text-white/70"> Converge</span>
        </div>

        {/* CTA Buttons with magnetic effect */}
        <div
          ref={magneticRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="relative bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#EC4899] hover:from-[#6D28D9] hover:via-[#7C3AED] hover:to-[#DB2777] text-white text-lg px-10 py-7 rounded-2xl glow-purple btn-shimmer group overflow-hidden border-0"
          >
            <a href="https://forms.gle/nNuA4GM5tf2JSUW89" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center font-semibold">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#7C3AED]/30 hover:border-[#7C3AED] bg-transparent hover:bg-[#7C3AED]/10 text-white text-lg px-10 py-7 rounded-2xl transition-all duration-300 backdrop-blur-sm"
          >
            <a href="#about" className="font-semibold">
              Explore Details
            </a>
          </Button>
        </div>

        {/* Stats with count-up animation */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-20 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CountUpStat value={150000} label="Prize Pool" suffix="₹" />
          <CountUpStat value={4} label="Team Size" suffix=" Max" />
          <CountUpStat value={500} label="Participants" suffix="+" />
          <CountUpStat value={12} label="April Grand Finale" suffix="th" />
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <a
        ref={scrollIndicatorRef}
        href="#info"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8] hover:text-white transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="relative">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <div className="absolute inset-0 animate-ping opacity-30">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </a>
    </section>
  )
}
