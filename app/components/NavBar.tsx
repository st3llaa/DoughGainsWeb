"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-stone-50 px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // put your logo in /public folder
            alt="Dough Gains Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Navigation links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/menu" className="font-medium hover:text-stone-700">
            Menu
          </Link>
          <Link href="/find-us" className="font-medium hover:text-stone-700">
            Find Us
          </Link>
          <Link href="/about" className="font-medium hover:text-stone-700">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
