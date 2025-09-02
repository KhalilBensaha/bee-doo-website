"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions about our honey or want to place a custom order? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="bg-input border-border focus:ring-ring focus:border-ring transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="bg-input border-border focus:ring-ring focus:border-ring transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-border focus:ring-ring focus:border-ring transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="bg-input border-border focus:ring-ring focus:border-ring transition-all duration-300"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email Us</h3>
                      <p className="text-muted-foreground">hello@beedoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">123 Honey Lane, Sweet Valley, CA 90210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
