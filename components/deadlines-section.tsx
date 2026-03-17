"use client"

import { Calendar, Clock, AlertTriangle, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const deadlines = [
  {
    title: "Registration Closes",
    date: "01 April 2026",
    time: "11:59 PM IST",
    icon: Calendar,
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
    urgent: true,
    description: "Last chance to register your team",
  },
  {
    title: "Grand Finale",
    date: "12 April 2026",
    time: "11:00 AM IST",
    icon: Zap,
    color: "#10B981",
    gradient: "from-[#10B981] to-[#34D399]",
    urgent: false,
    description: "Final presentations at IIT Delhi",
  },
]

export function DeadlinesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background pulse effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 via-transparent to-[#EC4899]/5" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-premium p-8 md:p-12 rounded-3xl relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl opacity-50">
            <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#EC4899] animate-pulse" style={{ filter: "blur(8px)" }} />
          </div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-[#EC4899]/20">
                <AlertTriangle className="w-6 h-6 text-[#EC4899]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Important <span className="gradient-text">Deadlines</span>
              </h2>
            </div>

            {/* Deadlines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {deadlines.map((deadline, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] group ${
                    deadline.urgent
                      ? "bg-gradient-to-br from-[#EC4899]/10 to-[#7C3AED]/10 border-2 border-[#EC4899]/30 hover:border-[#EC4899]/50"
                      : "glass-card border border-white/10 hover:border-[#10B981]/30"
                  }`}
                >
                  {deadline.urgent && (
                    <span className="absolute -top-3 left-4 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white uppercase tracking-wider animate-pulse">
                      Register Now!
                    </span>
                  )}

                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${deadline.gradient}`}
                      style={{
                        boxShadow: `0 0 30px ${deadline.color}40`,
                      }}
                    >
                      <deadline.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#94A3B8] mb-1">{deadline.title}</p>
                      <p className="text-3xl font-bold text-white mb-1">{deadline.date}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[#94A3B8]" />
                        <span className="text-[#94A3B8]">{deadline.time}</span>
                      </div>
                      <p className="text-sm text-[#94A3B8] mt-2">{deadline.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] hover:from-[#DB2777] hover:to-[#6D28D9] text-white rounded-xl px-8 py-6 font-semibold text-lg glow-pink btn-shimmer group"
              >
                <a href="https://forms.gle/nNuA4GM5tf2JSUW89" target="_blank" rel="noopener noreferrer">
                  Secure Your Spot Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
