"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className="h-10 w-10 rounded-none border-[#f7f7f4]/30 bg-[#55705d] text-white shadow-none transition-colors hover:bg-[#202722] hover:text-white"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}
