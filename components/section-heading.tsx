type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  inverted?: boolean
}

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-t border-current/20 pt-6 md:grid-cols-[0.65fr_1.35fr] md:items-end md:gap-12">
      <p
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
          inverted ? "text-white/55" : "text-[#55705d]"
        }`}
      >
        {eyebrow}
      </p>
      <div>
        <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight md:text-5xl">{title}</h2>
        <p className={`mt-5 max-w-2xl leading-7 ${inverted ? "text-white/62" : "text-[#59615b]"}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
