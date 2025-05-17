"use client";
import Link from "next/link";

export default function SellPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col">
      <header className="w-full py-6 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            EmpowHer
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="hover:text-pink-500 font-semibold">Learn</Link>
            <Link href="/mentor" className="hover:text-pink-500 font-semibold">Mentor</Link>
            <Link href="/seller" className="text-yellow-600 font-bold">Sell</Link>
            <Link href="/product" className="hover:text-pink-500 font-semibold">Buy</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Seller Marketplace
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Showcase and sell your products or services to a supportive community of buyers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-64">
                <img src={category.icon} alt={category.name} className="w-16 h-16 mb-3 rounded-full border" />
                <h2 className="text-lg font-bold mb-1">{category.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                <button className="mt-auto px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow hover:scale-105 transition">
                  Explore Category
                </button>
              </div>
            ))}
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
                  <button className="mt-2 px-4 py-2 rounded-full border border-yellow-400 text-yellow-700 font-semibold shadow hover:bg-yellow-100 transition">
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
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow hover:scale-105 transition">
              Create Your Shop
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
