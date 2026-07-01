import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Award, GraduationCap } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"

type Certificate = {
  title: string
  description: string
  icon: LucideIcon
  image: string
}

const certificates: Certificate[] = [
  {
    title: "Internship - IEF",
    description: "Web Development & Data Integration. Built a payment system integrated with Stripe and PayPal APIs.",
    image: "/IEF_Internship_Certificate.png",
    icon: Award,
  },
  {
    title: "Academic Internship Certificate",
    description: "Academic internship completion certificate from pirkx.",
    image: "/AcademicInternship.jpg",
    icon: Award,
  },
  {
    title: "Diploma UX Certificate",
    description: "Diploma certificate in UX design.",
    image: "/UXcertificate.png",
    icon: GraduationCap,
  },
]

export function Certificates() {
  return (
    <section id="certificate" className="border-t border-[#202722]/12 bg-[#f7f7f4] py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Certificates"
          description="Selected credentials reflecting practical experience across development, design, and digital delivery."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => {
            const Icon = certificate.icon

            return (
              <article key={certificate.title}>
                <div className="relative aspect-[4/3] overflow-hidden border border-[#202722]/12 bg-white">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 border-t border-[#202722]/15 pt-5">
                  <Icon className="h-5 w-5 text-[#55705d]" strokeWidth={1.4} />
                  <h3 className="mt-4 font-serif text-xl font-normal">{certificate.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#59615b]">{certificate.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
