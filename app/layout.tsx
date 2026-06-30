import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"

const sofiaPro = localFont({
  src: "../public/font/Sofia Pro Regular.otf",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Marin Kurihara | Graphic Designer & Web Developer",
  description: "Portfolio showcasing graphic design and web development projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sofiaPro.className}>{children}</body>
    </html>
  )
}
