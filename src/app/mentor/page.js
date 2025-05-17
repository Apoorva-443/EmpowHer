"use client"
import Link from "next/link"

export default function MentorPage() {
  const mentorChannels = [
    {
      id: 1,
      title: "Digital Skills for Beginners",
      description: "Learn how to use smartphones, apps, and basic internet skills.",
      author: "Priya Sharma",
      subscribers: 245,
      videos: 12,
      rating: 4.8,
      category: "Digital Literacy",
    },
    {
      id: 2,
      title: "Financial Planning for Women",
      description: "Simple strategies for saving money and planning for the future.",
      author: "Anita Desai",
      subscribers: 189,
      videos: 8,
      rating: 4.7,
      category: "Financial Skills",
    },
    {
      id: 3,
      title: "Traditional Crafts to Modern Business",
      description: "Turn your traditional craft skills into a profitable business.",
      author: "Lakshmi Patel",
      subscribers: 312,
      videos: 15,
      rating: 4.9,
      category: "Entrepreneurship",
    },
    {
      id: 4,
      title: "Organic Farming Techniques",
      description: "Learn sustainable farming methods for better yields and healthier crops.",
      author: "Meena Reddy",
      subscribers: 276,
      videos: 18,
      rating: 4.6,
      category: "Agriculture",
    },
    {
      id: 5,
      title: "Effective Communication Skills",
      description: "Develop confidence in speaking and expressing yourself clearly.",
      author: "Sunita Gupta",
      subscribers: 203,
      videos: 10,
      rating: 4.7,
      category: "Personal Development",
    },
    {
      id: 6,
      title: "Health and Wellness for Women",
      description: "Simple practices for maintaining good health and wellbeing.",
      author: "Dr. Kavita Singh",
      subscribers: 287,
      videos: 14,
      rating: 4.8,
      category: "Health",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 to-purple-100">
      <header className="w-full py-6 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            EmpowHer
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="hover:text-pink-500 font-semibold">Learn</Link>
            <Link href="/mentor" className="text-pink-600 font-bold">Mentor</Link>
            <Link href="/seller" className="hover:text-pink-500 font-semibold">Sell</Link>
            <Link href="/product" className="hover:text-pink-500 font-semibold">Buy</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Mentor Channel
          </h1>
          <p className="mx-auto max-w-xl mb-6 text-lg text-gray-700">
            Share your knowledge and create video channels to help other women develop valuable skills.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row justify-center mb-8">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow hover:scale-105 transition">
              Create Your Channel
            </button>
            <button className="px-6 py-3 rounded-full border border-pink-400 text-pink-600 font-semibold shadow hover:bg-pink-50 transition">
              Mentor Guidelines
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">Popular Mentor Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mentorChannels.map((channel) => (
              <div key={channel.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
                <span className="mb-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">
                  {channel.category}
                </span>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold">{channel.title}</span>
                  <span className="text-yellow-500 text-sm">★ {channel.rating}</span>
                </div>
                <p className="text-gray-600 mb-2">{channel.description}</p>
                <div className="text-xs text-gray-500 mb-2">Mentor: {channel.author}</div>
                <div className="flex gap-4 text-xs text-gray-500 mb-4">
                  <span>🎥 {channel.videos} videos</span>
                  <span>👥 {channel.subscribers} subscribers</span>
                </div>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition">
                  View Channel
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12 bg-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Become a Mentor</h2>
            <ul className="space-y-3 text-gray-700 mb-8 text-left max-w-lg mx-auto">
              <li>1. Complete at least 3 courses in your area of expertise</li>
              <li>2. Create a mentor profile highlighting your skills and experience</li>
              <li>3. Record and upload your first video lesson</li>
              <li>4. Engage with your community and grow your channel</li>
            </ul>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:scale-105 transition">
              Apply to Become a Mentor
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
