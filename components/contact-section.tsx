"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "dscigdtuw@gmail.com",
    href: "mailto:dscigdtuw@gmail.com",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#8B5CF6]",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 1234567890",
    href: "tel:+911234567890",
    color: "#2563EB",
    gradient: "from-[#2563EB] to-[#3B82F6]",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "IIT Delhi, New Delhi",
    href: "https://maps.google.com/?q=IIT+Delhi",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/gdscigdtuw",
    color: "#E4405F",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gdscigdtuw",
    color: "#1DA1F2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/gdscigdtuw",
    color: "#0A66C2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@gdscigdtuw",
    color: "#FF0000",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-[#7C3AED] font-medium mb-6">
            <Send className="w-4 h-4" />
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <div className={`space-y-5 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 group block"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${item.gradient}`}
                  style={{
                    boxShadow: `0 0 30px ${item.color}40`,
                  }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#94A3B8] mb-1">{item.label}</p>
                  <p className="text-xl font-semibold text-white group-hover:text-[#7C3AED] transition-colors">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}

            {/* WhatsApp CTA */}
            <div className="glass-premium p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Join Our Community
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Connect with fellow hackers, find teammates, and get instant updates!
              </p>
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl py-6 font-semibold text-lg group"
              >
                <a
                  href="https://chat.whatsapp.com/GSnoBtuBmpODdbRCf8MYxk?mode=hq1tcli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join WhatsApp Group
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${social.color}20`,
                      }}
                    >
                      <span style={{ color: social.color }}>{social.icon}</span>
                    </div>
                    <span className="text-sm text-[#94A3B8] group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map/Location Card */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Grand Finale Location
              </h3>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>
                
                {/* Location marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-fit">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center animate-bounce">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full bg-[#7C3AED]/30 animate-ping" />
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">IIT Delhi</p>
                    <p className="text-[#94A3B8]">New Delhi, India</p>
                    <a
                      href="https://maps.google.com/?q=IIT+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-[#7C3AED] hover:text-white transition-colors"
                    >
                      View on Maps
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#7C3AED]/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#7C3AED]/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#7C3AED]/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#7C3AED]/50 rounded-br-lg" />
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
