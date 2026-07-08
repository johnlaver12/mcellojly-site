"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  return (
    <header className="py-6 border-b border-neutral-800">

      {/* Logo */}
      <div className="flex items-center justify-between">

        <Link href="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.1em] md:tracking-[0.3em] cursor-pointer">
            MCELLO.JLY
          </h1>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">

          <Image
            src="/images/mcellojly.png"
            alt="MCELLO.JLY Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-8 mt-6 text-sm tracking-[0.2em] text-neutral-400">

        <Link href="/" className="hover:text-white transition">
          Home
        </Link>

        <div className="relative">

          <button
            onClick={() => setArticlesOpen(!articlesOpen)}
            className="hover:text-white transition"
          >
            Articles ▼
          </button>

          {articlesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-neutral-900 border border-neutral-800 min-w-[220px] z-50">

              <Link href="/articles" className="block px-4 py-3 hover:bg-neutral-800">
                All Articles
              </Link>

              <Link href="/articles/featured" className="block px-4 py-3 hover:bg-neutral-800">
                Featured
              </Link>

              <Link href="/articles/stations" className="block px-4 py-3 hover:bg-neutral-800">
                Stations
              </Link>

              <Link href="/articles/tracks" className="block px-4 py-3 hover:bg-neutral-800">
                Tracks
              </Link>

              <Link href="/articles/layups" className="block px-4 py-3 hover:bg-neutral-800">
                Layups
              </Link>

              <Link href="/articles/infrastructure" className="block px-4 py-3 hover:bg-neutral-800">
                Infrastructure
              </Link>

            </div>
          )}

        </div>

        <Link href="/gallery" className="hover:text-white transition">
          Gallery
        </Link>

        <Link href="/videos" className="hover:text-white transition">
          Videos
        </Link>

        <Link href="/resources" className="hover:text-white transition">
          Resources
        </Link>

        <Link href="/about" className="hover:text-white transition">
          About
        </Link>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-6 border-t border-neutral-800 pt-4 flex flex-col gap-2">

          <Link
            href="/"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <button
            onClick={() => setArticlesOpen(!articlesOpen)}
            className="text-left py-2 hover:text-white"
          >
            Articles ▼
          </button>

          {articlesOpen && (
            <div className="ml-4 flex flex-col border-l border-neutral-700">

              <Link
                href="/articles"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                All Articles
              </Link>

              <Link
                href="/articles/featured"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Featured
              </Link>

              <Link
                href="/articles/stations"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Stations
              </Link>

              <Link
                href="/articles/tracks"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Tracks
              </Link>

              <Link
                href="/articles/layups"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Layups
              </Link>

              <Link
                href="/articles/infrastructure"
                className="py-2 pl-4 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Infrastructure
              </Link>

            </div>
          )}

          <Link
            href="/gallery"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/videos"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Videos
          </Link>

          <Link
            href="/resources"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>

          <Link
            href="/about"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

        </nav>
      )}

    </header>
  );
}