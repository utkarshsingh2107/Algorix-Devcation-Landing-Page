"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Clock, MapPin, CheckCircle2, Circle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const timelineStages = [
  {
    stage: 1,
    title: "Registration Opens",
    dateRange: "15 March - 01 April",
    timeRange: "12:00 AM - 11:59 PM IST",
    description:
      "Lock in your spot by completing the mandatory registration form and officially begin your journey at Devcation Delhi 2026.",
    link: "https://forms.gle/nNuA4GM5tf2JSUW89",
    linkText: "Register Now",
    color: "#7C3AED",
    status: "active",
  },
  {
    stage: 2,
    title: "Submission Round",
    dateRange: "03 - 04 April",
    timeRange: "12:00 AM - 11:59 PM IST",
    description:
      "Teams must submit their project via Google Form, including PPT, GitHub repository, and deployed demo link.",
    color: "#2563EB",
    status: "upcoming",
  },
  {
    stage: 3,
    title: "Mentorship Round",
    dateRange: "05 - 07 April",
    timeRange: "12:00 PM - 11:59 PM IST",
    description:
      "Shortlisted teams receive expert mentorship to refine their projects. This eliminatory round determines finalists.",
    color: "#EC4899",
    status: "upcoming",
  },
  {
    stage: 4,
    title: "Grand Finale",
    dateRange: "12 April 2026",
    timeRange: "11:00 AM - 06:00 PM IST",
    description:
      "The best teams pitch live at IIT Delhi. Present your project, impress the judges, and battle for top prizes!",
    location: "IIT Delhi Campus",
    color: "#10B981",
    status: "upcoming",
    highlight: true,
  },
]

function TimelineCard({
  stage,
  index,
  isLeft,
}: {
  stage: typeof timelineStages[0]
  index: number
  isLeft: boolean
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 mb-16 md:mb-24 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          {/* Outer pulse ring */}
          {stage.status === "active" && (
            <div
              className="absolute inset-0 rounded-full pulse-ring"
              style={{ backgroundColor: stage.color }}
            />
          )}
          {/* Main node */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
            style={{
              backgroundColor: stage.color,
              boxShadow: `0 0 30px ${stage.color}60`,
            }}
          >
            {stage.status === "active" ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <span className="text-lg">{stage.stage}</span>
            )}
          </div>
          {/* Connecting line glow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-24"
            style={{
              background: `linear-gradient(to bottom, ${stage.color}, transparent)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ml-20 md:ml-0 ${
          isLeft ? "md:pr-20 md:text-right" : "md:pl-20"
        } transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : isLeft
            ? "opacity-0 -translate-x-12"
            : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div
          className={`glass-card p-8 rounded-3xl relative overflow-hidden ${
            stage.highlight ? "glass-premium" : ""
          }`}
          style={{
            boxShadow: stage.highlight ? `0 0 40px ${stage.color}20` : undefined,
          }}
        >
          {/* Gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{
              background: `linear-gradient(90deg, ${stage.color}, ${stage.color}80)`,
            }}
          />

          {stage.highlight && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full bg-[#10B981]/20 text-[#10B981] mb-4">
              <MapPin className="w-4 h-4" />
              Grand Finale
            </span>
          )}

          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: stage.color }}
          >
            {stage.title}
          </h3>

          <div
            className={`flex flex-wrap gap-4 mb-5 text-sm ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
              <Calendar className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-[#E2E8F0]">{stage.dateRange}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <span className="text-[#E2E8F0]">{stage.timeRange}</span>
            </div>
            {stage.location && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
                <MapPin className="w-4 h-4 text-[#EC4899]" />
                <span className="text-[#E2E8F0]">{stage.location}</span>
              </div>
            )}
          </div>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            {stage.description}
          </p>

          {stage.link && (
            <Button
              asChild
              className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:from-[#6D28D9] hover:to-[#1D4ED8] text-white rounded-xl px-6 py-5 font-semibold group"
            >
              <a href={stage.link} target="_blank" rel="noopener noreferrer">
                {stage.linkText}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

export function TimelineSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="timeline" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/3 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-[#7C3AED] font-medium mb-6">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Event </span>
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            From registration to the grand finale at IIT Delhi
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-[#7C3AED] via-[#2563EB] via-[#EC4899] to-[#10B981] opacity-30" />
            <div className="absolute top-0 h-full w-full bg-gradient-to-b from-[#7C3AED] via-[#2563EB] to-transparent animate-pulse" />
          </div>

          {timelineStages.map((stage, index) => (
            <TimelineCard
              key={index}
              stage={stage}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
