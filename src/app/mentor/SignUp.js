"use client";
import { useState } from "react";


export default function SignUp({ onSignIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    expertise: ""
  });

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        className="rounded px-3 py-2 border border-gray-300"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        className="rounded px-3 py-2 border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        className="rounded px-3 py-2 border border-gray-300"
      />
      <input
        type="text"
        placeholder="Area of Expertise"
        value={formData.expertise}
        onChange={e => setFormData({ ...formData, expertise: e.target.value })}
        className="rounded px-3 py-2 border border-gray-300"
      />
      <button
        className="bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700"
      >
        Sign Up
      </button>
      <div className="text-center text-sm">
        <span className="text-gray-600">Already have an account? </span>
        <button
          className="text-purple-600 font-semibold hover:text-purple-700"
          onClick={onSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}