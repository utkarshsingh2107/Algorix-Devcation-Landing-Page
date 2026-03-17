"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-card py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text tracking-tight">
                Devcation
              </span>
              <span className="block text-[10px] text-[#94A3B8] tracking-widest uppercase -mt-1">
                Hack N Solve
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    isActive
                      ? "text-white"
                      : "text-[#94A3B8] hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg -z-10" />
                  )}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-all duration-300 rounded-full",
                      isActive ? "w-6" : "w-0"
                    )}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="relative bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:from-[#6D28D9] hover:to-[#1D4ED8] text-white border-0 px-6 py-5 rounded-xl font-semibold btn-shimmer overflow-hidden group"
            >
              <a
                href="https://forms.gle/nNuA4GM5tf2JSUW89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Register
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg glass-card"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-5 h-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-white transition-all duration-300",
                  isMobileMenuOpen ? "top-2 rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2 h-0.5 w-5 bg-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-white transition-all duration-300",
                  isMobileMenuOpen ? "top-2 -rotate-45" : "top-3"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-out",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass-card mx-4 mt-2 rounded-2xl p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white rounded-xl py-6 font-semibold"
            >
              <a
                href="https://forms.gle/nNuA4GM5tf2JSUW89"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
