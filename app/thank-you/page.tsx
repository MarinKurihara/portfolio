import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | Marin Kurihara",
  description: "Thank you for contacting Marin Kurihara.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f2f3f0] text-[#202722]">
      <div className="grid min-h-screen lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative min-h-[34svh] lg:min-h-screen">
          <Image
            src="/hero-ocean.png"
            alt="A calm ocean beneath soft overcast clouds"
            fill
            priority
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="object-cover object-[center_42%] lg:object-[center_58%]"
          />
          <div className="absolute inset-0 bg-[#1f2924]/15" aria-hidden="true" />
        </div>

        <div className="flex min-h-[66svh] flex-col justify-between px-6 py-8 sm:px-10 lg:min-h-screen lg:px-20 lg:py-12">
          <Link href="/" className="font-serif text-xl font-normal">
            Marin Kurihara
          </Link>

          <div className="max-w-xl py-16">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#55705d]">Message sent</p>
            <h1 className="mt-6 font-serif text-5xl font-normal leading-tight sm:text-6xl">Thank you.</h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#59615b]">
              Your message has been received. I appreciate you getting in touch and will respond as soon as I can.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-9 rounded-none bg-[#202722] px-8 text-white shadow-none transition-colors hover:bg-[#55705d]"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-[#59615b]">Design · Development · Digital</p>
        </div>
      </div>
    </main>
  )
}
