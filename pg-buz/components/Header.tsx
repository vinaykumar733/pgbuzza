"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy-dark text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-premium-gold rounded flex items-center justify-center font-bold text-navy-dark">
            PB
          </div>
          <div>
            <div className="text-2xl font-bold">PG BUZ</div>
            <div className="text-xs text-gray-300">
              The Voice of India's PG Industry
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-premium-gold transition">
            Home
          </Link>
          <Link href="/news" className="hover:text-premium-gold transition">
            News
          </Link>
          <Link href="/cities" className="hover:text-premium-gold transition">
            Cities
          </Link>
          <Link href="/investments" className="hover:text-premium-gold transition">
            Investments
          </Link>
          <Link href="/investments" className="hover:text-premium-gold transition">
            Industry Discussions
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gray-700">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className="hover:text-premium-gold transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/news"
              className="hover:text-premium-gold transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/cities"
              className="hover:text-premium-gold transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link
              href="/investments"
              className="hover:text-premium-gold transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investments
            </Link>
            <Link
              href="/investments"
              className="hover:text-premium-gold transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industry Discussions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
