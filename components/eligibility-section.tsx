"use client"

import { GraduationCap, BookOpen, Palette, Check, Users, Code, Laptop } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const eligibleCategories = [
  {
    icon: GraduationCap,
    title: "Engineering",
    description: "All branches welcome",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#8B5CF6]",
  },
  {
    icon: BookOpen,
    title: "Postgraduate",
    description: "Masters & PhD scholars",
    color: "#2563EB",
    gradient: "from-[#2563EB] to-[#3B82F6]",
  },
  {
    icon: Code,
    title: "Undergraduate",
    description: "Bachelor's students",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
  {
    icon: Palette,
    title: "All Disciplines",
    description: "Arts, Commerce & More",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#34D399]",
  },
]

const requirements = [
  { icon: GraduationCap, text: "Valid student ID from any recognized institution" },
  { icon: Users, text: "Team of 1-4 members" },
  { icon: Code, text: "Passion for building innovative solutions" },
  { icon: BookOpen, text: "Basic programming knowledge recommended" },
  { icon: Laptop, text: "Access to laptop and internet connection" },
]

export function EligibilitySection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#EC4899]/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-[#EC4899] font-medium mb-6">
            Open For All
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Who Can </span>
            <span className="gradient-text">Participate?</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Open to students from all backgrounds and disciplines
          </p>
        </div>

        {/* Eligibility Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {eligibleCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card glass-card-hover p-8 rounded-3xl text-center group relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${category.color}15, transparent 70%)`,
                }}
              />
              
              <div className="relative">
                <div
                  className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${category.gradient}`}
                  style={{
                    boxShadow: `0 0 40px ${category.color}40`,
                  }}
                >
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-[#94A3B8]">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className={`glass-premium p-10 md:p-14 rounded-3xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            What You <span className="gradient-text">Need</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl glass-card glass-card-hover group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <req.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <span className="text-[#E2E8F0] font-medium">{req.text}</span>
                <div className="ml-auto flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
