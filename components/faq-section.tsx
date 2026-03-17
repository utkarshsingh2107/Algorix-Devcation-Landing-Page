"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is an intensive event where programmers, designers, and innovators collaborate to create solutions to real-world problems within a limited timeframe. It's a great opportunity to learn, network, and showcase your skills while competing for prizes.",
    category: "General",
  },
  {
    question: "What will the prizes be?",
    answer:
      "The total prize pool is INR 1,50,000! The winner takes home INR 75,000, runner-up receives INR 50,000, and special mentions get INR 25,000. Additionally, all participants receive certificates, swag, and networking opportunities.",
    category: "Prizes",
  },
  {
    question: "Is it free to participate? What do I need?",
    answer:
      "Yes, participation is completely FREE! You just need a valid student ID, a laptop with internet access, and a team of 1-4 members. Basic programming knowledge is recommended but not mandatory - we welcome participants from all backgrounds!",
    category: "Registration",
  },
  {
    question: "Can I participate individually?",
    answer:
      "Yes! You can participate solo or form a team of up to 4 members. If you're looking for teammates, join our WhatsApp group where you can connect with other participants.",
    category: "Teams",
  },
  {
    question: "What tracks are available?",
    answer:
      "We have multiple tracks: TigerGraph Track (Premium), Hack 'N' Solve (Open Innovation), Sustainability Track (powered by Rotaract Club IGDTUW), and Duality Track for interdisciplinary approaches. Choose the one that best fits your project idea!",
    category: "Tracks",
  },
  {
    question: "What should I bring to the Grand Finale?",
    answer:
      "For the Grand Finale at IIT Delhi, bring your laptop, chargers, student ID, and any hardware if your project requires it. We'll provide food, beverages, and a great hacking environment!",
    category: "Event",
  },
  {
    question: "Will there be mentors available?",
    answer:
      "Absolutely! During the Mentorship Round, shortlisted teams will receive guidance from industry experts to refine their projects. Mentors will help with technical challenges, presentation skills, and project direction.",
    category: "Support",
  },
  {
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated based on innovation, technical implementation, scalability, presentation quality, and real-world impact. Make sure your solution addresses a genuine problem and demonstrates creative thinking!",
    category: "Judging",
  },
]

export function FAQSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="faq" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-premium mb-6">
            <HelpCircle className="w-5 h-5 text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#E2E8F0]">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Everything you need to know about Devcation Hack N Solve 2026
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`glass-card p-6 md:p-10 rounded-3xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 rounded-2xl overflow-hidden glass-card px-6 data-[state=open]:bg-white/5 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <div className="flex items-start gap-4 w-full">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 text-xs font-bold text-[#7C3AED] flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <span className="text-white font-semibold text-lg group-hover:text-[#7C3AED] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12">
                  <p className="text-[#94A3B8] leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="glass-premium p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-[#94A3B8] mb-6">
              Reach out to us directly and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  Join WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#7C3AED]/30 hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 text-white rounded-xl px-6 py-5 font-semibold group"
              >
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
