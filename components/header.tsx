"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/images/bee-doo-logo.png" alt="Bee Doo Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-foreground">Bee Doo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              {t("nav.products")}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-300 hover:scale-105">
              {t("cta.shopNow")}
            </Button>
            {/* Language Switcher */}
            <select
              aria-label="Language selector"
              value={locale}
              onChange={(e) => setLocale(e.target.value as any)}
              className="px-2 py-2 rounded-md border border-border bg-background text-foreground text-sm"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {t("nav.about")}
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                {t("nav.products")}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {t("nav.contact")}
              </a>
              <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">{t("cta.shopNow")}</Button>
              <div className="pt-2">
                <select
                  aria-label="Language selector"
                  value={locale}
                  onChange={(e) => setLocale(e.target.value as any)}
                  className="w-full px-2 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
