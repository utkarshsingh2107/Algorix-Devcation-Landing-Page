"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Winner, Devcation 2025",
    college: "IIT Delhi",
    rating: 5,
    quote:
      "Devcation was an incredible experience! The mentorship and networking opportunities were unmatched. Our team built something amazing in just 48 hours.",
    avatar: "PS",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#8B5CF6]",
  },
  {
    name: "Arjun Patel",
    role: "Participant, Devcation 2025",
    college: "IGDTUW",
    rating: 5,
    quote:
      "The workshops and talks were super insightful. I learned more in one weekend than I did in months of self-study. Highly recommend!",
    avatar: "AP",
    color: "#2563EB",
    gradient: "from-[#2563EB] to-[#3B82F6]",
  },
  {
    name: "Sneha Gupta",
    role: "Runner-up, Devcation 2024",
    college: "DTU",
    rating: 5,
    quote:
      "Amazing organization and support throughout the hackathon. The judges provided valuable feedback that helped us improve our project significantly.",
    avatar: "SG",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
  {
    name: "Rahul Verma",
    role: "Participant, Devcation 2024",
    college: "NSUT",
    rating: 5,
    quote:
      "Great platform to showcase innovative ideas. The collaboration with teammates from different colleges was a unique learning experience.",
    avatar: "RV",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#34D399]",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-all duration-300 ${
            i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#94A3B8]/30"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#7C3AED]/3 to-[#020617]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-[#F59E0B] font-medium mb-6">
            <Star className="w-4 h-4 fill-[#F59E0B]" />
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What Hackers </span>
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Hear from past participants about their Devcation experience
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`relative max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="glass-premium p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Large quote icon */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5" />

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                }`}
              >
                {index === activeIndex && (
                  <div className="relative">
                    {/* Quote */}
                    <p className="text-xl md:text-2xl text-[#E2E8F0] leading-relaxed mb-8 font-light italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${testimonial.gradient}`}
                        style={{
                          boxShadow: `0 0 30px ${testimonial.color}40`,
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-[#94A3B8]">{testimonial.role}</p>
                        <p className="text-sm text-[#94A3B8]/70">{testimonial.college}</p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-[#7C3AED] to-[#EC4899]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
              className={`glass-card p-5 rounded-2xl text-left transition-all duration-300 ${
                index === activeIndex
                  ? "ring-2 ring-[#7C3AED] bg-white/5"
                  : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${testimonial.gradient}`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#94A3B8]">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
            </button>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
