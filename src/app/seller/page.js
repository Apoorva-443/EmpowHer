"use client";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductUpload from './ProductUpload';

function ThemeSwitcher({ theme, setTheme }) {
    return (
        <button
            aria-label="Toggle Theme"
            className="rounded-full p-2 bg-gradient-to-tr from-yellow-400 to-pink-500 shadow-lg text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "🌙" : "☀"}
        </button>
    );
}

export default function SellPage() {
    const [theme, setTheme] = useState("light");
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showProductUpload, setShowProductUpload] = useState(false);

    const handleSignInSuccess = () => {
        setShowSignIn(false);
    };

    const handleExploreClick = () => {
        setShowSignIn(true);
    };

    const handleReadMoreClick = () => {
        setShowSignIn(true);
    };

    const handleCreateShopClick = () => {
        setShowProductUpload(true);
    };

    const categories = [
        {
            id: 1,
            name: "Handcrafted Textiles",
            description: "Traditional and modern textile products including clothing, home decor, and accessories.",
            icon: "/placeholder.svg",
        },
        {
            id: 2,
            name: "Organic Food Products",
            description: "Homemade food items, preserves, spices, and organic produce.",
            icon: "/placeholder.svg",
        },
        {
            id: 3,
            name: "Artisanal Crafts",
            description: "Handmade pottery, jewelry, and decorative items showcasing traditional techniques.",
            icon: "/placeholder.svg",
        },
        {
            id: 4,
            name: "Digital Products",
            description: "E-books, templates, digital art, and other downloadable creations.",
            icon: "/placeholder.svg",
        },
        {
            id: 5,
            name: "Services",
            description: "Consulting, teaching, design services, and other expertise-based offerings.",
            icon: "/placeholder.svg",
        },
        {
            id: 6,
            name: "Beauty & Wellness",
            description: "Natural beauty products, herbal remedies, and wellness items.",
            icon: "/placeholder.svg",
        },
    ];

    const successStories = [
        {
            id: 1,
            name: "Meena's Textiles",
            description: "From a small home-based operation to a thriving business with international customers.",
            image: "/placeholder.svg",
            revenue: "₹45,000/month",
            products: 24,
            category: "Handcrafted Textiles",
        },
        {
            id: 2,
            name: "Lakshmi's Organic Spices",
            description: "Traditional family recipes turned into a successful spice blend business.",
            image: "/placeholder.svg",
            revenue: "₹38,000/month",
            products: 12,
            category: "Organic Food Products",
        },
        {
            id: 3,
            name: "Priya's Digital Designs",
            description: "Teaching digital skills to other women while selling beautiful digital art templates.",
            image: "/placeholder.svg",
            revenue: "₹52,000/month",
            products: 35,
            category: "Digital Products",
        },
    ];

    return (
        <div className={
            theme === "dark"
                ? "min-h-screen bg-[#0a1026] text-gray-100"
                : "min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-900"
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
                            <Link href="/seller" className="text-yellow-600 font-bold">Sell</Link>
                            <Link href="/product" className="hover:text-pink-500 font-semibold">Buy</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="py-12 px-8 md:px-12">
                    <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        Seller Marketplace
                    </h1>
                    <p className="mb-12 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                        Showcase and sell your products or services to a supportive community of buyers.
                    </p>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {categories.map((category) => (
                                <div 
                                    key={category.id} 
                                    className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-20 h-20 mb-6 rounded-full bg-yellow-50 flex items-center justify-center">
                                        <img 
                                            src={category.icon} 
                                            alt={category.name} 
                                            className="w-12 h-12 object-contain" 
                                        />
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 text-gray-800">{category.name}</h2>
                                    <p className="text-gray-600 text-center mb-6 h-24">
                                        {category.description}
                                    </p>
                                    <button 
                                        onClick={handleExploreClick}
                                        className="mt-auto w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                                    >
                                        Explore Category
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-12 bg-orange-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-600">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {successStories.map((story) => (
                                <div key={story.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                                    <img src={story.image} alt={story.name} className="w-24 h-24 object-contain mb-3 rounded-full border" />
                                    <span className="mb-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                                        {story.category}
                                    </span>
                                    <h3 className="text-lg font-bold mb-1">{story.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{story.description}</p>
                                    <div className="flex justify-center gap-4 mb-2">
                                        <div>
                                            <span className="text-sm font-bold">{story.revenue}</span>
                                            <div className="text-xs text-gray-400">Revenue</div>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold">{story.products}</span>
                                            <div className="text-xs text-gray-400">Products</div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={handleReadMoreClick}
                                        className="mt-2 px-4 py-2 rounded-full border border-yellow-400 text-yellow-700 font-semibold shadow hover:bg-yellow-100 transition"
                                    >
                                        Read Full Story
                                    </button>
                                </div>
                            ))}
                        </div>
                        <Link href="/" className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow hover:scale-105 transition">
                            Back to Home
                        </Link>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-600">Start Selling Today</h2>
                        <ul className="space-y-3 text-gray-700 mb-8 text-left max-w-lg mx-auto">
                            <li>1. Create your seller profile with your story and expertise</li>
                            <li>2. Add your products or services with photos and descriptions</li>
                            <li>3. Set your prices and shipping options</li>
                            <li>4. Connect with buyers and grow your business</li>
                        </ul>
                        <button 
                            onClick={handleCreateShopClick}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow hover:scale-105 transition"
                        >
                            Create Your Shop
                        </button>
                    </div>
                </section>
            </main>

            {/* Sign In Modal */}
            {showSignIn && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative">
                        <button
                            className="absolute top-3 right-3 text-xl text-gray-400 hover:text-yellow-500"
                            onClick={() => setShowSignIn(false)}
                        >
                            ×
                        </button>
                        <SignIn
                            onSignUp={() => {
                                setShowSignIn(false);
                                setShowSignUp(true);
                            }}
                            onClose={() => setShowSignIn(false)}
                            onSuccess={handleSignInSuccess}
                        />
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {showSignUp && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative">
                        <button
                            className="absolute top-3 right-3 text-xl text-gray-400 hover:text-yellow-500"
                            onClick={() => setShowSignUp(false)}
                        >
                            ×
                        </button>
                        <SignUp
                            onSignIn={() => {
                                setShowSignUp(false);
                                setShowSignIn(true);
                            }}
                            onClose={() => setShowSignUp(false)}
                        />
                    </div>
                </div>
            )}

            {/* Product Upload Modal */}
            {showProductUpload && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                        <button
                            className="absolute top-3 right-3 text-xl text-gray-400 hover:text-yellow-500"
                            onClick={() => setShowProductUpload(false)}
                        >
                            ×
                        </button>
                        <ProductUpload onClose={() => setShowProductUpload(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}