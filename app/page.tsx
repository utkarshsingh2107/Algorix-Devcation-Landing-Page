import { NeuralNetworkBackground } from "@/components/neural-network-bg"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { AboutSection } from "@/components/about-section"
import { EligibilitySection } from "@/components/eligibility-section"
import { TimelineSection } from "@/components/timeline-section"
import { DeadlinesSection } from "@/components/deadlines-section"
import { PrizesSection } from "@/components/prizes-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* Animated Neural Network Background */}
      <NeuralNetworkBackground />

      {/* Noise texture overlay for premium feel */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <InfoSection />
        <AboutSection />
        <EligibilitySection />
        <TimelineSection />
        <DeadlinesSection />
        <PrizesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
