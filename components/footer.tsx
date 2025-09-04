"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/bee-doo-logo.png"
                alt="Bee Doo Logo"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-xl font-bold">Bee Doo</span>
            </div>
    <p className="text-background/80 text-sm text-pretty">{t("footer.brandDescription")}</p>
          </div>

          {/* Quick Links */}
          <div>
    <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
      {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
      {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/80 hover:text-background transition-colors">
      {t("nav.products")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
      {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
    <h3 className="font-semibold mb-4">{t("footer.ourHoney")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
      {t("products.names.antibiotic")}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
      {t("products.names.wildflower")}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
      {t("products.names.acacia")}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
      {t("products.names.manuka")}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
    <h3 className="font-semibold mb-4">{t("footer.newsletter.stayUpdated")}</h3>
    <p className="text-background/80 text-sm mb-4 text-pretty">{t("footer.newsletter.description")}</p>
            <div className="flex">
              <input
                type="email"
        placeholder={t("footer.newsletter.placeholderEmail")}
                className="flex-1 px-3 py-2 text-sm bg-background/10 border border-background/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-r-md hover:bg-secondary transition-colors">
        {t("footer.newsletter.subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">© 2024 Bee Doo. All rights reserved.</p>
          <p className="text-background/80 text-sm flex items-center">
    {t("footer.bottom.madeWithLove")} <Heart className="h-4 w-4 mx-1 text-red-400" /> {t("footer.bottom.forHoneyLovers")}
          </p>
        </div>
      </div>
    </footer>
  )
}
