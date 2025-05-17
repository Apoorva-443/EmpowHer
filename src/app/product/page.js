"use client";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <span className="text-5xl mb-4">🛒</span>
        <h1 className="text-3xl font-bold mb-4 text-pink-600">Buy</h1>
        <p className="mb-6 text-gray-700 text-center">
          Discover and shop products and services from women-owned businesses in our marketplace.
        </p>
        <Link href="/">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-400 text-white font-semibold shadow hover:scale-105 transition cursor-pointer">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
