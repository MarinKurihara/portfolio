"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Maximize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "graphic",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Fully responsive e-commerce website with product catalog, shopping cart, and secure checkout.",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    category: "ui",
    image: "/placeholder.svg?height=600&width=800",
    description: "User interface design for a mobile application with a focus on user experience and accessibility.",
    link: "#",
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete redesign of a corporate website to improve user experience and conversion rates.",
    link: "#",
  },
  {
    id: 5,
    title: "Product Packaging Design",
    category: "graphic",
    image: "/placeholder.svg?height=600&width=800",
    description: "Creative packaging design for a consumer product that stands out on the shelf.",
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Custom portfolio website for a photographer showcasing their work in a visually appealing way.",
    link: "#",
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems =
    activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Recent Work</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my recent projects showcasing my skills in graphic design and web development.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="ui">UI/UX Design</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(item)
                          setOpen(true)
                        }}
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Maximize2 className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {selectedItem && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl animate-scale-in">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button asChild>
                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
