"use client"

import { MapPin, Users, Trophy, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const infoCards = [
  {
    icon: Sparkles,
    label: "Event Name",
    value: "Hack 'N' Solve",
    subValue: "Devcation 2026",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#8B5CF6]",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "IIT Delhi",
    subValue: "New Delhi, India",
    color: "#2563EB",
    gradient: "from-[#2563EB] to-[#3B82F6]",
  },
  {
    icon: Users,
    label: "Team Size",
    value: "1-4 Members",
    subValue: "Solo or Squad",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
  {
    icon: Trophy,
    label: "Prize Pool",
    value: "\u20B91,50,000",
    subValue: "Cash + Swag + Goodies",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#34D399]",
  },
]

export function InfoSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="info" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/3 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-[#7C3AED] font-medium mb-6">
            At A Glance
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Event </span>
            <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </div>

        {/* Info Cards Grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`glass-card glass-card-hover p-8 rounded-3xl group relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${card.color}15, transparent 60%)`,
                }}
              />
              
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${card.gradient}`}
                  style={{
                    boxShadow: `0 0 30px ${card.color}40`,
                  }}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#94A3B8] mb-2 uppercase tracking-wider font-medium">{card.label}</p>
                <p className="text-2xl font-bold text-white mb-1">{card.value}</p>
                <p className="text-sm text-[#7C3AED]">{card.subValue}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Organizer Card */}
        <div className={`glass-premium p-10 md:p-14 rounded-3xl relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#7C3AED]/20 via-[#2563EB]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#EC4899]/15 to-transparent rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-[#EC4899] font-medium mb-4">
                Proudly Organized By
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="gradient-text">GDG On Campus IGDTUW</span>
              </h3>
              <p className="text-xl text-[#94A3B8] mb-3">
                In collaboration with{" "}
                <span className="text-[#2563EB] font-semibold">GDG IIT Delhi</span>
              </p>
              <p className="text-[#94A3B8] leading-relaxed max-w-xl">
                Google Developer Groups brings together developers from diverse backgrounds
                to connect, learn, and grow through meetups, hackathons, and workshops.
                Join our community of innovators and builders!
              </p>
            </div>

            {/* GDG Logo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl glass-card flex items-center justify-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] p-[2px] animate-spin-slow" style={{ animationDuration: "8s" }}>
                    <div className="w-full h-full rounded-3xl bg-[#0F172A]" />
                  </div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded-full bg-[#4285F4] shadow-lg" style={{ boxShadow: "0 0 15px #4285F4" }} />
                    <div className="w-5 h-5 rounded-full bg-[#EA4335] shadow-lg" style={{ boxShadow: "0 0 15px #EA4335" }} />
                    <div className="w-5 h-5 rounded-full bg-[#FBBC04] shadow-lg" style={{ boxShadow: "0 0 15px #FBBC04" }} />
                    <div className="w-5 h-5 rounded-full bg-[#34A853] shadow-lg" style={{ boxShadow: "0 0 15px #34A853" }} />
                  </div>
                  <span className="text-2xl font-bold text-white block">GDG</span>
                  <p className="text-sm text-[#94A3B8]">On Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
