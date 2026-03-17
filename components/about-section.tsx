"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle, Lightbulb, Rocket, Users, Zap, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const tracks = [
  {
    name: "TigerGraph Track",
    badge: "Premium Track",
    description: "Build solutions using TigerGraph MCP and related technologies for exclusive cash prizes.",
    color: "#7C3AED",
    link: "https://docs.google.com/document/d/1eyeIV8YsxLFSc8S3DH7i6uJFk5ks-DBRisx7e52CKJs/edit?usp=sharing",
    icon: Zap,
  },
  {
    name: "Hack 'N' Solve",
    badge: "Open Innovation",
    description: "Solve real-world challenges across FinTech, HealthTech, AI, Web3, and more.",
    color: "#2563EB",
    icon: Rocket,
  },
  {
    name: "Sustainability Track",
    badge: "Powered by Rotaract",
    description: "Technology-driven solutions for environmental and social impact.",
    color: "#10B981",
    icon: Lightbulb,
  },
  {
    name: "Duality Track",
    badge: "Interdisciplinary",
    description: "Encouraging innovative tech approaches across disciplines.",
    color: "#EC4899",
    icon: Users,
  },
]

const features = [
  {
    icon: Lightbulb,
    title: "Talks & Workshops",
    description: "Learn from industry experts",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Guidance from professionals",
    gradient: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    icon: Rocket,
    title: "Intense Hacking",
    description: "Build impactful solutions",
    gradient: "from-[#EC4899] to-[#7C3AED]",
  },
]

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>()
  const { ref: tracksRef, isVisible: tracksVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] animate-float-delayed" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-[#EC4899]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-[#7C3AED] font-medium mb-6">
            About The Event
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Where Innovation</span>
            <br />
            <span className="text-white">Meets Opportunity</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Brace yourselves for a wild ride through innovation, where agile minds collide,
            crazy projects come to life, and big ideas chase even bigger rewards.
          </p>
          <p className="text-lg text-[#EC4899] font-semibold mt-4 tracking-wide">#NextStopDevcation</p>
        </div>

        {/* Main Info Card */}
        <div className={`glass-premium p-8 md:p-12 rounded-3xl mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Devcation Delhi 2026
              </h3>
              <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
                The flagship hackathon organized by{" "}
                <span className="text-[#7C3AED] font-semibold">Google Developer Groups IGDTUW</span> in collaboration with{" "}
                <span className="text-[#2563EB] font-semibold">GDG IIT Delhi</span>. Through talks, workshops, mentorship, and intense hacking,
                participants will build impactful solutions and showcase them at the{" "}
                <span className="text-[#EC4899] font-semibold">Grand Finale at IIT Delhi</span>.
              </p>

              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl px-6 py-5 font-semibold group"
              >
                <a
                  href="https://chat.whatsapp.com/GSnoBtuBmpODdbRCf8MYxk?mode=hq1tcli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join WhatsApp Community
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-5 rounded-2xl glass-card glass-card-hover group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{feature.title}</p>
                    <p className="text-[#94A3B8]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tracks Section */}
        <div ref={tracksRef}>
          <h3 className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-1000 ${tracksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Competition <span className="gradient-text">Tracks</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                className={`glass-card glass-card-hover p-8 rounded-3xl group relative overflow-hidden transition-all duration-700 ${tracksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${track.color}15, transparent 60%)`,
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span
                        className="inline-block px-3 py-1.5 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider"
                        style={{
                          backgroundColor: `${track.color}20`,
                          color: track.color,
                        }}
                      >
                        {track.badge}
                      </span>
                      <h4 className="text-2xl font-bold text-white">{track.name}</h4>
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        backgroundColor: `${track.color}15`,
                        boxShadow: `0 0 30px ${track.color}30`,
                      }}
                    >
                      <track.icon className="w-7 h-7" style={{ color: track.color }} />
                    </div>
                  </div>

                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">{track.description}</p>

                  {track.link && (
                    <Button
                      asChild
                      variant="ghost"
                      className="text-[#7C3AED] hover:text-white hover:bg-[#7C3AED]/20 p-0 h-auto font-semibold group/btn"
                    >
                      <a href={track.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Learn More
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${tracksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="glass-card p-10 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-[#94A3B8] text-lg mb-8">
              Join participants from across India and showcase your skills at the grand finale.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#6D28D9] hover:to-[#DB2777] text-white rounded-xl px-10 py-6 font-semibold text-lg glow-purple btn-shimmer"
            >
              <a href="https://forms.gle/nNuA4GM5tf2JSUW89" target="_blank" rel="noopener noreferrer">
                Register Your Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
