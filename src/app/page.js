import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              EmpowHer
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="text-sm font-medium hover:text-pink-600">
              Learn
            </Link>
            <Link href="/mentor" className="text-sm font-medium hover:text-pink-600">
              Mentor
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-pink-600">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Empowering Women Through Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our platform designed to help women in rural communities develop skills, 
              connect with mentors, and build economic opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/learn" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-3 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 EmpowHer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
