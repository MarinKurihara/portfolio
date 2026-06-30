"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PortfolioItem = {
  id: number
  title: string
  category: "graphic" | "web" | "ux"
  categoryLabel: string
  image: string
  description: string
  imageClassName: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Social media post design for Garage Door Intel",
    category: "graphic",
    categoryLabel: "Digital campaign",
    image: "/garage_door_intel.png",
    description: "Social media campaign creative developed for Garage Door Intel.",
    imageClassName: "object-cover",
  },
  {
    id: 2,
    title: "AtYou logo concept",
    category: "graphic",
    categoryLabel: "Brand identity",
    image: "/atyou.png",
    description: "A clean, contemporary logo concept created for AtYou.",
    imageClassName: "object-contain p-10 md:p-14",
  },
  {
    id: 3,
    title: "Garage Door Intel logo mark",
    category: "graphic",
    categoryLabel: "Brand identity",
    image: "/logo_garagegoorintel.png",
    description: "A compact logo mark designed for Garage Door Intel.",
    imageClassName: "object-contain p-12 md:p-16",
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems =
    activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section id="portfolio" className="border-t border-[#202722]/12 bg-[#f7f7f4] py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="My Work"
          description="A selection of projects demonstrating my approach to thoughtful design and reliable digital delivery."
        />
        <Tabs defaultValue="all" className="mt-14" onValueChange={setActiveTab}>
          <div className="max-w-full overflow-x-auto border-b border-[#202722]/15">
            <TabsList className="h-auto min-w-max justify-start gap-7 rounded-none bg-transparent p-0">
              {[
                ["all", "All"],
                ["web", "Web & Platforms"],
                ["graphic", "Digital Campaigns"],
                ["ux", "UX & Prototypes"],
              ].map(([value, label]) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-none border-b border-transparent px-0 py-4 text-xs uppercase tracking-[0.16em] shadow-none data-[state=active]:border-[#55705d] data-[state=active]:bg-transparent data-[state=active]:text-[#55705d] data-[state=active]:shadow-none"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value={activeTab} className="mt-10">
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article key={item.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[#202722]/12 bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`${item.imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#202722]/15 pt-5">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#55705d]">{item.categoryLabel}</p>
                      <h3 className="mt-2 font-serif text-xl font-normal leading-snug">{item.title}</h3>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedItem(item)
                        setOpen(true)
                      }}
                      className="h-auto shrink-0 rounded-none px-0 py-1 text-[#55705d] hover:bg-transparent hover:text-[#202722]"
                    >
                      <Maximize2 className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {selectedItem && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl rounded-none border-[#202722]/20 bg-[#f7f7f4] p-7 shadow-2xl">
            <DialogHeader className="border-b border-[#202722]/15 pb-5 text-left">
              <DialogTitle className="font-serif text-3xl font-normal">{selectedItem.title}</DialogTitle>
              <DialogDescription className="leading-6 text-[#59615b]">{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="relative mt-2 aspect-[4/3] bg-white">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(min-width: 768px) 720px, 90vw"
                className={selectedItem.imageClassName}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
