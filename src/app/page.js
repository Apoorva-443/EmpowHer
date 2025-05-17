"use client";

import Link from "next/link";
import { useState } from "react";

// Example doodle SVGs (add more as needed)
const Doodles = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <img src="/doodles/empower1.svg" className="absolute top-10 left-0 w-64 opacity-30" alt="" />
    <img src="/doodles/empower2.svg" className="absolute bottom-0 right-10 w-56 opacity-30" alt="" />
    <img src="/doodles/empower3.svg" className="absolute top-1/2 left-1/2 w-40 opacity-20" alt="" />
    <img src="/doodles/empower4.svg" className="absolute bottom-32 left-32 w-40 opacity-20" alt="" />
    <img src="/doodles/empower5.svg" className="absolute top-40 right-40 w-44 opacity-20" alt="" />
    <img src="/doodles/empower6.svg" className="absolute bottom-1/3 right-1/4 w-32 opacity-10" alt="" />
  </div>
);

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      aria-label="Toggle Theme"
      className="rounded-full p-2 bg-gradient-to-tr from-yellow-400 to-pink-500 shadow-lg text-white"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "dark" ? "bg-[#0a1026] text-white" : "bg-white text-gray-900"}>
      <Doodles />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              EMPOWHER
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="hover:text-pink-400 font-semibold">Details</Link>
            <Link href="#" className="hover:text-pink-400 font-semibold">About</Link>
            <Link href="#" className="hover:text-pink-400 font-semibold">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded-full shadow-lg">
              <span className="bg-white text-pink-600 rounded-full w-7 h-7 flex items-center justify-center font-bold">E</span>
              <span className="font-semibold hidden sm:block">Profile</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="py-24 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Empowering Women in Business
          </h1>
          <p
            className={`text-lg md:text-2xl mb-10 max-w-2xl mx-auto ${
              theme === "dark" ? "text-white/80" : "text-black"
            }`}
          >
            Connect, learn, and grow with a community dedicated to supporting women entrepreneurs and professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* 3D Cards */}
            {[
              {
                title: "Learn",
                desc: "Courses, workshops and resources designed to help you grow professionally.",
                color: "from-blue-500 to-purple-500",
                icon: "🎓",
                href: "/learn",
                buttonText: "Start Learning ->"
              },
              {
                title: "Be a Mentor",
                desc: "Share your expertise and guide others on their professional journey.",
                color: "from-pink-500 to-purple-400",
                icon: "🤝",
                href: "/mentor",
                buttonText: "Start Mentoring ->"
              },
              {
                title: "Buy",
                desc: "Discover products and services from women-owned businesses.",
                color: "from-pink-500 to-red-400",
                icon: "🛒",
                href: "/product",
                buttonText: "Start Buying ->"
              },
              {
                title: "Sell",
                desc: "Showcase your products and services to a supportive community.",
                color: "from-yellow-400 to-orange-500",
                icon: "🛍️",
                href: "/seller",
                buttonText: "Start Selling ->"
              }
            ].map((card, i) => (
              <div
                key={card.title}
                className={`rounded-3xl shadow-2xl p-12 min-h-[320px] flex flex-col items-center justify-center bg-gradient-to-br ${card.color} transform hover:scale-105 transition-transform duration-300 relative`}
                style={{ boxShadow: "0 10px 40px 0 rgba(0,0,0,0.25)" }}
              >
                <span className="text-4xl mb-4 drop-shadow-lg">{card.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className={`mb-4 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>{card.desc}</p>
                <Link href={card.href} className="px-6 py-2 rounded-full bg-white/90 text-gray-900 font-semibold shadow hover:bg-white mb-2">
                  {card.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Tech Entrepreneur",
                quote: "EMPOWHER provided me with the resources and connections I needed to scale my startup.",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Michelle Lee",
                role: "Marketing Director",
                quote: "The mentorship program completely transformed my approach to leadership and career growth.",
                img: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                name: "Jessica Williams",
                role: "Small Business Owner",
                quote: "My online store sales increased by 200% after joining the EMPOWHER marketplace.",
                img: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((story) => (
              <div key={story.name} className="bg-white/10 rounded-2xl p-6 flex-1 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <img src={story.img} alt={story.name} className="w-10 h-10 rounded-full border-2 border-pink-400" />
                  <div>
                    <div className="font-bold">{story.name}</div>
                    <div className="text-xs text-pink-200">{story.role}</div>
                  </div>
                </div>
                <p className={`italic ${theme === "dark" ? "text-white/80" : "text-gray-900"}`}>"{story.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community */}
        <section className="py-16 text-center">

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-16 shadow-2xl">


            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Join Our Community?
            </h2>
            <p className={`mb-6 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>
              Connect with like-minded women, access exclusive resources, and take your career to the next level.
            </p>
            <Link href="#" className="px-8 py-3 rounded-full bg-white text-pink-600 font-bold shadow-lg hover:bg-pink-100 transition">
              Sign Up Now
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-10 text-center text-white/60 relative z-10">
        <p>© 2024 EmpowHer. All rights reserved.</p>
        <div className="absolute right-6 bottom-6">
          
          
                  </div>
      </footer>
    </div>
  );
}
