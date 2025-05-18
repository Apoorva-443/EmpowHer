"use client";
import Link from "next/link";
import { useState } from "react";

// Copy this from your main page.js
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

export default function AboutPage() {
    const [theme, setTheme] = useState("light");

    return (
        <div className={
            theme === "dark"
                ? "min-h-screen bg-[#0a1026] text-gray-100"
                : "min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 text-gray-900"
        }>
            <header className={`w-full py-6 shadow ${
                theme === "dark" ? "bg-[#1a2236]" : "bg-white"
            }`}>
                <div className="container mx-auto flex items-center justify-between px-8 md:px-12">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        EmpowHer
                    </Link>
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher theme={theme} setTheme={setTheme} />
                        <nav className="hidden md:flex gap-6">
                            <Link href="/learn" className="hover:text-pink-500 font-semibold">Learn</Link>
                            <Link href="/mentor" className="hover:text-pink-500 font-semibold">Mentor</Link>
                            <Link href="/seller" className="hover:text-pink-500 font-semibold">Sell</Link>
                            <Link href="/product" className="hover:text-pink-500 font-semibold">Buy</Link>
                            <Link href="/about" className="text-purple-600 font-bold">About</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-8 md:px-12 py-16">
                {/* Hero Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            EmpowHer
                        </h1>
                        <p className={`text-lg leading-relaxed ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}>
                            EmpowHer is a comprehensive platform dedicated to empowering women through education, entrepreneurship, and community support. We provide opportunities for learning new skills, mentorship connections, and a marketplace for women to showcase and sell their products. Our mission is to create a supportive ecosystem where women can thrive, learn, earn, and grow together through various domains including technology, agriculture, healthcare, arts, and business.
                        </p>
                    </div>
                    <div className={`aspect-square rounded-3xl overflow-hidden shadow-2xl ${
                        theme === "dark" ? "bg-[#1a2236]" : "bg-white"
                    }`}>
                        <img
                            src="/empowher_logo.png" // updated logo path
                            alt="EmpowHer Logo"
                            className="w-full h-full object-contain p-8"
                        />
                    </div>
                </section>

                {/* Developers Section */}
                <section className="text-center">
                    <h2 className={`text-3xl font-bold mb-12 ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                    }`}>
                        Our Developers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Shabarish B L",
                            "Apoorva D",
                            "Hithesh K",
                            "Nithin Kumar S N"
                        ].map((developer, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl shadow-lg ${
                                    theme === "dark" ? "bg-[#1a2236]" : "bg-white"
                                }`}
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                    <span className="text-2xl text-white font-bold">
                                        {developer.split(" ")[0][0]}
                                    </span>
                                </div>
                                <h3 className={`font-bold text-lg ${
                                    theme === "dark" ? "text-purple-400" : "text-purple-600"
                                }`}>
                                    {developer}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}