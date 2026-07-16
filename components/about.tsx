const story = [
  "Originally from Japan and raised across different environments, I've always enjoyed connecting with people and creating solutions that genuinely help others. I especially enjoy supporting individuals and small businesses by turning their ideas into practical digital products.",
  "My journey into web development began during the COVID pandemic, when I started learning web design through online courses. That curiosity soon led to freelance projects, where I worked closely with clients to bring their ideas to life.",
  "I recently completed a Master of Information Technology, where I strengthened my skills in software development, data analysis, and AI. Today, I build user-centered websites from design to deployment, working across both front-end and back-end development, including payment integrations and API-driven features.",
  "My goal is to combine web development, data, and AI to create digital experiences that are not only visually engaging, but also measurable, scalable, and valuable for both users and businesses.",
]

export function About() {
  return (
    <section id="about" className="border-t border-[#202722]/12 bg-[#f7f7f4] py-24 md:py-32">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.7fr_1.45fr] lg:gap-20">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#55705d]">About</p>
          <h2 className="mt-6 font-serif text-4xl font-normal leading-tight md:text-5xl">About Me</h2>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[#59615b]">Marin Kurihara</p>
        </div>
        <div>
          <p className="max-w-3xl font-serif text-2xl leading-9 text-[#202722] md:text-3xl md:leading-[1.4]">
            I'm a web developer with a growing focus on data-driven and AI-enhanced solutions.
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-7 border-t border-[#202722]/15 pt-8 md:grid-cols-2">
            {story.map((paragraph) => (
              <p key={paragraph} className="text-[0.95rem] leading-7 text-[#59615b]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
