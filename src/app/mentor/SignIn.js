"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn({ onSignUp, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication logic here
    router.push("/mentor");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Mentor Sign In
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          New mentor?{" "}
          <Link href="/mentor/SignUp" className="text-pink-600 hover:text-pink-700 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}