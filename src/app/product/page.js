"use client";
import Link from "next/link";

export default function BuyPage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Hand-Embroidered Cotton Scarf",
      description: "Beautiful traditional embroidery on soft cotton fabric.",
      price: "₹850",
      image: "/placeholder.svg",
      seller: "Meena's Textiles",
      rating: 4.8,
      reviews: 24,
      category: "Handcrafted Textiles",
    },
    {
      id: 2,
      name: "Organic Spice Gift Box",
      description: "Set of 6 premium organic spice blends in a handcrafted wooden box.",
      price: "₹1,200",
      image: "/placeholder.svg",
      seller: "Lakshmi's Organic Spices",
      rating: 4.9,
      reviews: 36,
      category: "Organic Food Products",
    },
    {
      id: 3,
      name: "Terracotta Jewelry Set",
      description: "Handcrafted earrings and necklace made with traditional techniques.",
      price: "₹950",
      image: "/placeholder.svg",
      seller: "Anita's Artisanal Crafts",
      rating: 4.7,
      reviews: 18,
      category: "Artisanal Crafts",
    },
    {
      id: 4,
      name: "Digital Business Planner",
      description: "Comprehensive digital planner for women entrepreneurs.",
      price: "₹499",
      image: "/placeholder.svg",
      seller: "Priya's Digital Designs",
      rating: 4.9,
      reviews: 42,
      category: "Digital Products",
    },
    {
      id: 5,
      name: "Natural Skincare Set",
      description: "Handmade soaps, creams, and oils using traditional herbal recipes.",
      price: "₹1,500",
      image: "/placeholder.svg",
      seller: "Sunita's Natural Beauty",
      rating: 4.8,
      reviews: 29,
      category: "Beauty & Wellness",
    },
    {
      id: 6,
      name: "Business Coaching Session",
      description: "One-hour personalized coaching for women entrepreneurs.",
      price: "₹2,000",
      image: "/placeholder.svg",
      seller: "Kavita's Business Mentoring",
      rating: 5.0,
      reviews: 15,
      category: "Services",
    },
  ];

  const categories = [
    "Handcrafted Textiles",
    "Organic Food Products",
    "Artisanal Crafts",
    "Digital Products",
    "Services",
    "Beauty & Wellness",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col">
      <header className="w-full py-6 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            EmpowHer
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="hover:text-pink-500 font-semibold">Learn</Link>
            <Link href="/mentor" className="hover:text-pink-500 font-semibold">Mentor</Link>
            <Link href="/seller" className="hover:text-pink-500 font-semibold">Sell</Link>
            <Link href="/product" className="text-pink-600 font-bold">Buy</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Marketplace
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Browse and purchase unique products and services created by talented women entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-block px-4 py-2 rounded-full bg-white text-pink-600 border border-pink-200 text-sm font-semibold shadow hover:bg-pink-50 transition"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain mb-4 rounded-xl border"
                />
                <span className="mb-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">
                  {product.category}
                </span>
                <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-yellow-500 text-sm">★ {product.rating} ({product.reviews})</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">Seller: {product.seller}</div>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12 bg-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Why Shop With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow">
                <span className="text-3xl mb-2">💖</span>
                <h3 className="font-bold mb-1">Support Women</h3>
                <p className="text-gray-600 text-sm">
                  Every purchase directly supports a woman entrepreneur and her family.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow">
                <span className="text-3xl mb-2">🌟</span>
                <h3 className="font-bold mb-1">Quality Products</h3>
                <p className="text-gray-600 text-sm">
                  Handcrafted items and services created with skill and attention to detail.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow">
                <span className="text-3xl mb-2">🔍</span>
                <h3 className="font-bold mb-1">Discover Stories</h3>
                <p className="text-gray-600 text-sm">
                  Learn about the women behind the products and their inspiring journeys.
                </p>
              </div>
            </div>
            <Link href="/" className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:scale-105 transition">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
