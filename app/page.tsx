import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Certificates } from "@/components/certificates"
// import { Testimonials } from "@/components/testimonials"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Certificates />
        <ContactForm />
        {/* <Testimonials /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
