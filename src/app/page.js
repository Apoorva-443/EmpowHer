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
  const [popup, setPopup] = useState(""); // "about", "contact", or ""

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
            {/* (empty or remove this nav if not needed) */}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded-full shadow-lg">
              <span className="bg-white text-pink-600 rounded-full w-7 h-7 flex items-center justify-center font-bold">E</span>
              <span className="font-semibold hidden sm:block">Profile</span>
            </div>
            {/* About and Contact buttons */}
            <Link
              href="/about"
              className="hover:text-pink-400 font-semibold focus:outline-none"
            >
              About
            </Link>
            <button
              onClick={() => setPopup("contact")}
              className="hover:text-pink-400 font-semibold focus:outline-none"
              type="button"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 max-w-xs w-full relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-400 hover:text-pink-500"
              onClick={() => setPopup("")}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            {/* {popup === "about" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-pink-600 text-center">Developers</h3>
                <ul className="space-y-2 text-center">
                  <li>Apoorva D</li>
                  <li>Shabarish B L</li>
                  <li>Hithesh K</li>
                  <li>Nithinkumar S N</li>
                </ul>
              </>
            )} */}
            {popup === "contact" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-pink-600 text-center">Contact Us</h3>
                <div className="space-y-2 text-center text-sm">
                  <div>Email: <a href="mailto:empowher@gmail.com" className="text-pink-600 underline">empowher@gmail.com</a></div>
                  <div>Phone: <a href="tel:+919999999999" className="text-pink-600 underline">+91 99999 99999</a></div>
                  <div>Instagram: <a href="https://instagram.com/empowher" target="_blank" rel="noopener" className="text-pink-600 underline">@empowher</a></div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

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
            {/* Changed button to Explore and redirect to /product */}
            <Link href="/product" className="px-8 py-3 rounded-full bg-white text-pink-600 font-bold shadow-lg hover:bg-pink-100 transition">
              -- Explore --
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#232b39] border-t border-white/10 pt-12 pb-6 mt-10 text-white/80 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-2">E</span>
              <span className="text-xl font-bold">EMPOWHER</span>
            </div>
            <p className="text-sm text-white/60">
              Empowering women to achieve their professional goals through community, resources, and opportunities.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-pink-400 transition">Home</Link>
              </li>
              <li>
                <button
                  onClick={() => setPopup("about")}
                  className="hover:text-pink-400 transition bg-transparent border-none p-0 m-0 text-left cursor-pointer font-inherit"
                  type="button"
                >
                  About Us
                </button>
              </li>
              <li>
                <Link href="/services" className="hover:text-pink-400 transition">Services</Link>
              </li>
              <li>
                <button
                  onClick={() => setPopup("contact")}
                  className="hover:text-pink-400 transition bg-transparent border-none p-0 m-0 text-left cursor-pointer font-inherit"
                  type="button"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-bold mb-2 text-white">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="/blog" className="hover:text-pink-400 transition">Blog</Link></li>
              <li><Link href="/podcast" className="hover:text-pink-400 transition">Podcast</Link></li>
              <li><Link href="/events" className="hover:text-pink-400 transition">Events</Link></li>
              <li><Link href="/faq" className="hover:text-pink-400 transition">FAQ</Link></li>
            </ul>
          </div>
          {/* Connect */}
          <div>
            <h4 className="font-bold mb-2 text-white">Connect</h4>
            <ul className="space-y-1">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-pink-400 transition">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-pink-400 transition">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com/empowher" target="_blank" rel="noopener" className="hover:text-pink-400 transition">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-pink-400 transition">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-white/10" />
        <div className="text-center text-xs text-white/40">
          © 2025 EMPOWHER. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
