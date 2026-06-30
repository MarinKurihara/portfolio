import { Code, Link, MousePointerClick, Network } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    title: "Web & Platform Development",
    description: "Developing scalable and user-friendly websites tailored to your business needs, from concept to launch.",
    icon: Code,
  },
  {
    title: "Payment & API Integration",
    description: "Helping businesses implement secure and reliable payment systems and API integrations.",
    icon: Link,
  },
  {
    title: "User Experience & Design",
    description: "Designing intuitive and visually engaging digital experiences that align with your brand and goals.",
    icon: MousePointerClick,
  },
  {
    title: "Data & AI Foundations",
    description: "Analysing user behaviour and suggesting improvements to performance and conversions, with a growing interest in AI-driven insights.",
    icon: Network,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#202722] py-24 text-white md:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          description="Thoughtful digital work shaped around clear goals, reliable delivery, and the people who will use it."
          inverted
        />
        <div className="mt-16 grid border-t border-white/15 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className={`border-b border-white/15 py-9 md:p-10 ${index % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="flex items-center justify-between text-white/50">
                  <Icon className="h-6 w-6" strokeWidth={1.4} />
                  <span className="font-serif text-sm">0{index + 1}</span>
                </div>
                <h3 className="mt-12 max-w-sm font-serif text-2xl font-normal leading-snug">{service.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
