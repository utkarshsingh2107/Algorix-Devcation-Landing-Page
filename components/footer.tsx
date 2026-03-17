"use client"

import Link from "next/link"
import { Sparkles, Heart, ArrowUpRight, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/gdscigdtuw",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gdscigdtuw",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/gdscigdtuw",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@gdscigdtuw",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/5 to-transparent" />
      
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text tracking-tight block">
                  Devcation
                </span>
                <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
                  Hack N Solve 2026
                </span>
              </div>
            </Link>
            <p className="text-[#94A3B8] leading-relaxed mb-6 max-w-md">
              Where Speed, Skill and Code Converge. The flagship hackathon organized by GDG IGDTUW
              in collaboration with GDG IIT Delhi. Join us for an unforgettable experience of innovation and learning.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:gdsc@igdtuw.ac.in" className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#7C3AED]" />
                gdsc@igdtuw.ac.in
              </a>
              <span className="flex items-center gap-2 text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#EC4899]" />
                IIT Delhi, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Connect With Us</h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <a
              href="https://forms.gle/nNuA4GM5tf2JSUW89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold hover:from-[#6D28D9] hover:to-[#1D4ED8] transition-all duration-300 group"
            >
              Register Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#94A3B8] text-sm">
              © {currentYear} Devcation Hack N Solve. All rights reserved.
            </p>
            <p className="text-[#94A3B8] text-sm flex items-center gap-2">
              Crafted with{" "}
              <Heart className="w-4 h-4 text-[#EC4899] fill-[#EC4899] animate-pulse" />{" "}
              by{" "}
              <span className="gradient-text font-semibold">GDG IGDTUW</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
