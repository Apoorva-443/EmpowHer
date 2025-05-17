"use client";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <span className="text-5xl mb-4">🎓</span>
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Learn</h1>
        <p className="mb-6 text-gray-700 text-center">
          Access courses, workshops, and resources designed to help you grow
          professionally and personally.
        </p>
        <Link href="/">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition cursor-pointer">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
