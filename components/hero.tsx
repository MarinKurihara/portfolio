import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/39557660_8715283.jpg-4TC8REs2IA9H6ATWNlFYjb4roTHkDE.jpeg"
          alt="Gradient Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-800">
                Graphic Designer & Web Developer
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Transforming ideas into stunning visuals and functional websites. Let's create something amazing
                together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/50 hover:bg-white/70">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-scale-in animate-delay-300">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white/50 w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-pulse-slow">
              <Image src="/profile_image.jpeg" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
