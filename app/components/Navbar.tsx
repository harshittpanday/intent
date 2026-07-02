"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="text-2xl font-black tracking-wide"
      >
        INTENT
      </Link>

      <div className="flex gap-3">
        <Link
          href="/login"
          className="rounded-xl border border-slate-700 px-5 py-2 hover:bg-slate-800 transition"
        >
          Sign In
        </Link>

        <Link
          href="/signup"
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}