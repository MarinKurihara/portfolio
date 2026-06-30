"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const sections = ["home", "about", "services", "portfolio", "skills", "certificate", "contact"]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home"

      document.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const scroll = () => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80

      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
      window.requestAnimationFrame(() => window.requestAnimationFrame(scroll))
      return
    }

    scroll()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#202722]/15 bg-[#f7f7f4]/95 backdrop-blur-md">
      <div className="container flex h-[84px] items-center justify-between px-4 md:px-6">
        <Link
          href="#home"
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl font-normal text-[#202722]"
        >
          Marin Kurihara
        </Link>
        <nav className="hidden gap-2 lg:flex xl:gap-5" aria-label="Main navigation">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-2 py-2 pl-4 text-[0.78rem] font-medium tracking-[0.14em] transition-colors before:absolute before:left-1 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:origin-top before:scale-y-0 before:bg-[#55705d] before:transition-transform before:duration-300 ${
                activeSection === section
                  ? "text-[#55705d] before:scale-y-100"
                  : "text-[#202722] hover:text-[#55705d] hover:before:scale-y-100"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-none text-[#202722] hover:bg-[#e4e7e1] lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container border-t border-[#202722]/15 bg-[#f7f7f4] px-4 py-5 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative border-b border-[#202722]/10 px-3 py-4 pl-5 text-left text-sm font-medium tracking-[0.14em] transition-colors before:absolute before:left-1 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:scale-y-0 before:bg-[#55705d] before:transition-transform ${
                  activeSection === section
                    ? "text-[#55705d] before:scale-y-100"
                    : "text-[#202722] hover:text-[#55705d]"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
