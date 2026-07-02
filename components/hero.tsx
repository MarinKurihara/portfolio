import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-116px)] overflow-hidden bg-[#f2f3f0] text-[#202722]"
    >
      <div className="container relative grid min-h-[calc(100svh-116px)] grid-cols-1 gap-8 px-4 py-5 md:px-6 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.55fr)] lg:gap-16 lg:py-8">
        <div className="hero-image-reveal relative min-h-[240px] overflow-hidden lg:min-h-0">
          <Image
            src="/hero-ocean.png"
            alt="A calm ocean beneath soft overcast clouds"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover object-[center_42%] lg:object-[center_58%]"
          />
          <div className="absolute inset-0 bg-[#1f2924]/10" aria-hidden="true" />
          <p className="absolute bottom-5 left-5 max-w-[15rem] text-xs leading-5 text-white/90 md:bottom-7 md:left-7">
            Thoughtful systems. Clear experiences. Work made to last.
          </p>
        </div>

        <div className="relative flex min-h-[320px] flex-col border-b border-[#202722]/15 pb-24 lg:min-h-0 lg:justify-center lg:border-b-0 lg:pb-40">
          <div className="relative z-10 max-w-2xl lg:ml-auto lg:mr-[8%]">
            <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#55705d]">
              Design · Development · Digital
            </p>
            <h1 className="hero-heading-reveal max-w-xl font-serif text-4xl font-normal leading-[1.12] sm:text-5xl lg:text-6xl">
              Designing thoughtful digital experiences.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#4d5650] md:text-lg md:leading-8">
              Combining considered design, clean code, and practical AI to create work that feels clear and useful.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 rounded-none border-[#202722]/55 bg-transparent px-7 text-[#202722] shadow-none transition-colors hover:border-[#55705d] hover:bg-[#55705d] hover:text-white"
            >
              <Link href="#portfolio">
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div
            className="font-signature hero-signature-reveal pointer-events-none absolute bottom-1 right-0 z-0 select-none text-7xl leading-none text-[#171c18] sm:text-8xl md:text-[8rem] lg:bottom-3 lg:text-[10rem]"
            aria-hidden="true"
          >
            Marin
          </div>
        </div>
      </div>
    </section>
  )
}
