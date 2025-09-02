"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"

export function ProductsSection() {
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

  const products = [
    {
      id: 1,
      name: "Natural Antibiotic Honey",
      description: "Premium natural honey with antibiotic properties, perfect for health and wellness.",
      price: "$24.99",
      image: "/images/honey-jar.png",
      badge: "Best Seller",
      rating: 5,
    },
    {
      id: 2,
      name: "Raw Wildflower Honey",
      description: "Unprocessed honey from wildflowers, rich in natural enzymes and nutrients.",
      price: "$19.99",
      image: "/wildflower-honey-jar.png",
      badge: "New",
      rating: 5,
    },
    {
      id: 3,
      name: "Organic Acacia Honey",
      description: "Light, delicate honey with a mild flavor, perfect for tea and baking.",
      price: "$22.99",
      image: "/acacia-honey-jar.png",
      badge: "Organic",
      rating: 4,
    },
    {
      id: 4,
      name: "Manuka Honey Premium",
      description: "Rare Manuka honey with exceptional health benefits and unique taste.",
      price: "$49.99",
      image: "/manuka-honey-jar.png",
      badge: "Premium",
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Premium Honey Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our carefully curated selection of natural honey varieties, each with its own unique flavor
              profile and health benefits.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "text-primary fill-current" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold text-card-foreground mb-2 text-balance">{product.name}</h3>

                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-300 hover:scale-105 group"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
