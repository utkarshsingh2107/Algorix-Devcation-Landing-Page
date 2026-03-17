"use client"

import { Trophy, Medal, Award, Sparkles, Star, Gift } from "lucide-react"
import { useScrollReveal, useCountUp } from "@/hooks/use-scroll-reveal"

const prizes = [
  {
    position: "2nd",
    title: "Runner-up",
    amount: 50000,
    icon: Medal,
    color: "#94A3B8",
    gradient: "from-[#94A3B8] to-[#64748B]",
    glowColor: "rgba(148, 163, 184, 0.3)",
  },
  {
    position: "1st",
    title: "Winner",
    amount: 75000,
    icon: Trophy,
    color: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    glowColor: "rgba(245, 158, 11, 0.4)",
    isWinner: true,
  },
  {
    position: "3rd",
    title: "Special Mentions",
    amount: 25000,
    icon: Award,
    color: "#CD7F32",
    gradient: "from-[#CD7F32] to-[#8B4513]",
    glowColor: "rgba(205, 127, 50, 0.3)",
  },
]

const perks = [
  { icon: Gift, text: "Exclusive Swag Kits" },
  { icon: Star, text: "Certificates for All" },
  { icon: Sparkles, text: "Networking Events" },
]

function PrizeCard({ prize, delay }: { prize: typeof prizes[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: countRef, count } = useCountUp(prize.amount, 2000)

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`glass-card p-8 md:p-10 rounded-3xl text-center transition-all duration-500 hover:scale-105 relative overflow-hidden ${
          prize.isWinner ? "md:scale-110 md:hover:scale-115" : ""
        }`}
        style={{
          boxShadow: `0 0 60px ${prize.glowColor}`,
        }}
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at top, ${prize.color}, transparent 70%)`,
          }}
        />

        {/* Winner badge */}
        {prize.isWinner && (
          <>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="px-6 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Grand Prize
              </span>
            </div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F59E0B]/30 to-[#EF4444]/30 blur-xl -z-10 animate-pulse" />
          </>
        )}

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${prize.gradient} transform hover:scale-110 hover:rotate-6 transition-all duration-300 ${prize.isWinner ? "glow-gold" : ""}`}
        >
          <prize.icon className="w-10 h-10 text-white" />
        </div>

        {/* Position */}
        <div
          className="text-6xl md:text-7xl font-bold mb-2"
          style={{ color: prize.color }}
        >
          {prize.position}
        </div>

        {/* Title */}
        <p className="text-lg text-[#94A3B8] mb-4 font-medium">{prize.title}</p>

        {/* Amount with count-up */}
        <div ref={countRef}>
          <span
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}
          >
            {"\u20B9"}{count.toLocaleString()}
          </span>
        </div>

        {/* Decorative stars for winner */}
        {prize.isWinner && (
          <>
            <Star className="absolute top-8 left-6 w-4 h-4 text-[#F59E0B] animate-pulse" />
            <Star className="absolute top-12 right-8 w-3 h-3 text-[#F59E0B] animate-pulse delay-100" />
            <Star className="absolute bottom-16 left-8 w-3 h-3 text-[#F59E0B] animate-pulse delay-200" />
          </>
        )}
      </div>
    </div>
  )
}

export function PrizesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="prizes" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[200px] animate-float" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#F59E0B] rounded-full animate-float opacity-50" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#7C3AED] rounded-full animate-float-delayed opacity-50" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#EC4899] rounded-full animate-float opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-premium mb-6">
            <Trophy className="w-5 h-5 text-[#F59E0B]" />
            <span className="text-sm font-medium text-[#E2E8F0]">Total Prize Pool</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-lg font-bold gradient-text">{"\u20B9"}1,50,000</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Win Big, </span>
            <span className="gradient-text">Dream Bigger</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Showcase your innovation and compete for exciting prizes
          </p>
        </div>

        {/* Prizes Grid - Podium Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end max-w-5xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <PrizeCard key={prize.position} prize={prize} delay={index * 200} />
          ))}
        </div>

        {/* Additional Perks */}
        <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:bg-white/5 transition-colors"
            >
              <perk.icon className="w-5 h-5 text-[#7C3AED]" />
              <span className="text-[#E2E8F0] font-medium">{perk.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
