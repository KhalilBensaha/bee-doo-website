import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
        <Footer />
      </ErrorBoundary>
    </main>
  )
}
