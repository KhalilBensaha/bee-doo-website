"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Award } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Story & Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              At Bee Doo, we believe in the power of nature's sweetest gift. Our journey began with a passion for pure,
              natural honey and a commitment to sustainable beekeeping practices.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Made with Love</h3>
                <p className="text-muted-foreground text-pretty">
                  Every jar is crafted with care and attention to detail, ensuring the highest quality honey reaches
                  your table.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">100% Natural</h3>
                <p className="text-muted-foreground text-pretty">
                  Our honey is completely natural with no additives, preservatives, or artificial ingredients.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Premium Quality</h3>
                <p className="text-muted-foreground text-pretty">
                  Award-winning honey that meets the highest standards of purity and taste excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Story Text */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Founded by passionate beekeepers, Bee Doo represents generations of expertise in honey production. We work
              closely with local bee colonies, ensuring sustainable practices that protect both the environment and the
              precious bees that make our honey possible. Each jar tells a story of dedication, purity, and the natural
              sweetness that only comes from the finest honey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
