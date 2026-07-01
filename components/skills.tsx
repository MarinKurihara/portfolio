import { Brush, Check, Code2, Layers3 } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    title: "Development Skills",
    description: "Frontend and platform skills focused on responsive, maintainable, production-ready websites.",
    icon: Code2,
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "WordPress", "Git/GitHub"],
  },
  {
    title: "Design Skills",
    description: "Visual design tools and creative workflows used for brand, campaign, and interface work.",
    icon: Brush,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Figma"],
  },
  {
    title: "Additional Skills",
    description: "Supporting capabilities that strengthen strategy, usability, and digital performance.",
    icon: Layers3,
    skills: ["Responsive Design", "UI/UX Design", "SEO Optimization", "Brand Strategy"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-[#e6e9e3] py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My Expertise"
          description="A focused mix of design, development, and supporting skills used to carry projects from idea to delivery."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-0">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <article
                key={group.title}
                className={`border-t border-[#202722]/20 pt-7 xl:border-t-0 xl:px-9 xl:pt-0 ${
                  index > 0 ? "xl:border-l" : "xl:pl-0"
                }`}
              >
                <Icon className="h-6 w-6 text-[#55705d]" strokeWidth={1.4} />
                <h3 className="mt-8 font-serif text-2xl font-normal">{group.title}</h3>
                <p className="mt-4 min-h-[4rem] text-sm leading-6 text-[#59615b]">{group.description}</p>
                <ul className="mt-8 border-t border-[#202722]/15">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between border-b border-[#202722]/12 py-3.5 text-sm"
                    >
                      <span>{skill}</span>
                      <Check className="h-4 w-4 text-[#55705d]" strokeWidth={1.5} />
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
