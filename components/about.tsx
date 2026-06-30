const story = [
  "Originally from Japan and raised across different environments, I've always been drawn to connecting with people and creating things that genuinely help others. I particularly enjoy supporting individuals and small businesses. I like turning their ideas into something real, practical, and meaningful.",
  "My journey into web development began during the COVID period, when I started learning web design through online courses in Japan. What started as curiosity quickly turned into hands-on experience through freelance projects, where I worked closely with clients to bring their ideas to life.",
  "Currently, I am pursuing a Master of Information Technology, where I'm expanding my technical skills and learning how to apply data-driven thinking in real projects. I want to go beyond simply building websites and create solutions that are useful, measurable, and scalable.",
  "I focus on building customer-centered websites that are easy to use, visually clear, and aligned with each client's identity. From design to development, I can handle the full process. I use tools like Illustrator and Photoshop to create unique designs, and I also work on both front-end and back-end tasks, including payment system integrations and API-based features.",
  "Looking ahead, I am working on improving my data analysis skills so I can better understand user behavior and help businesses grow. My goal is to combine web development and data to create smarter and more effective digital experiences.",
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
