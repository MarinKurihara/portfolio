"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    router.push("/thank-you")
  }

  return (
    <section id="contact" className="border-t border-[#202722]/12 bg-[#dfe4dc] py-24 md:py-32">
      <div className="container grid gap-14 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#55705d]">Contact</p>
          <h2 className="mt-6 max-w-md font-serif text-4xl font-normal leading-tight md:text-5xl">
            Let's create something thoughtful.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-[#59615b]">
            Have a project or idea in mind? Share a few details and I’ll be in touch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border-t border-[#202722]/20 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="full-name" className="text-xs uppercase tracking-[0.16em] text-[#39433c]">
                Full name
              </Label>
              <Input
                id="full-name"
                name="fullName"
                autoComplete="name"
                placeholder="Your full name"
                minLength={2}
                required
                className="h-12 rounded-none border-x-0 border-t-0 border-[#202722]/30 bg-transparent px-0 text-base shadow-none placeholder:text-[#59615b]/55 focus-visible:border-[#55705d] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.16em] text-[#39433c]">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="h-12 rounded-none border-x-0 border-t-0 border-[#202722]/30 bg-transparent px-0 text-base shadow-none placeholder:text-[#59615b]/55 focus-visible:border-[#55705d] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="mt-9 space-y-3">
            <Label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-[#39433c]">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your project or idea..."
              minLength={10}
              required
              className="min-h-[160px] resize-y rounded-none border-[#202722]/30 bg-[#f7f7f4]/50 p-4 text-base shadow-none placeholder:text-[#59615b]/55 focus-visible:border-[#55705d] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="mt-8 rounded-none bg-[#202722] px-8 text-white shadow-none transition-colors hover:bg-[#55705d]"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
