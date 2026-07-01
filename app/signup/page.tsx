"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 Account created successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-2">
          Create your account
        </h1>

        <p className="text-slate-400 mb-8">
          Join INTENT and start exploring topics.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold text-white"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
}