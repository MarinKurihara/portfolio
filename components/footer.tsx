import Link from "next/link"
import { ArrowUp, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { label: "Twitter", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
]

export function Footer() {
  return (
    <footer className="bg-[#202722] py-12 text-white md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 border-t border-white/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link href="#home" className="font-serif text-3xl font-normal">
              Marin Kurihara
            </Link>
            <p className="mt-4 text-sm text-white/55">Design · Development · Digital</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <Link
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Marin Kurihara. All rights reserved.</p>
          <Link href="#home" className="inline-flex items-center gap-2 uppercase tracking-[0.16em] hover:text-white">
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
