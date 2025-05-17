import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LandingHero } from "@/components/landing-hero"
import { UserJourneyCards } from "@/components/user-journey-cards"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                EmpowHer
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="text-sm font-medium transition-colors hover:text-primary">
              Learn
            </Link>
            <Link href="/mentor" className="text-sm font-medium transition-colors hover:text-primary">
              Mentor
            </Link>
            <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
              Sell
            </Link>
            <Link href="/buy" className="text-sm font-medium transition-colors hover:text-primary">
              Buy
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <LandingHero />
        <UserJourneyCards />
        <Features />
      </main>
      <Footer />
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          EmpowHer - Empowering Women Through Technology
        </h1>
        <p className="text-center text-lg mb-8">
          A digital platform designed to empower women in rural India and globally, 
          focusing on skill development, economic opportunities, and personal growth.
        </p>
      </section>
    </div>
  )
}
