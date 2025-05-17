"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignUp({ onSignIn, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    expertise: ""
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add registration logic here
    router.push("/mentor");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Become a Mentor
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Area of Expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({...formData, expertise: e.target.value})}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <button className="text-pink-500 font-semibold" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}