import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="py-8 border-b border-neutral-800">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold tracking-[0.3em]">
          MCELLO.JLY
        </h1>

        <Image
          src="/images/mcellojly.png"
          alt="MCELLO.JLY Logo"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
      </div>

      <nav className="flex gap-8 text-sm uppercase tracking-[0.2em] text-neutral-400">
        <Link href="/">Home</Link>

        <div className="relative group">
          <button className="hover:text-white">
            Articles ▼
          </button>

          <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col bg-neutral-900 border border-neutral-800 min-w-[220px] z-50 pt-2 transition-all duration-200">
            <Link href="/articles" className="px-4 py-3 hover:bg-neutral-800">
              All Articles
            </Link>
            <Link href="/articles/featured" className="px-4 py-3 hover:bg-neutral-800">
              Featured
            </Link>
            <Link href="/articles/stations" className="px-4 py-3 hover:bg-neutral-800">
              Stations
            </Link>
            <Link href="/articles/tracks" className="px-4 py-3 hover:bg-neutral-800">
              Tracks
            </Link>
            <Link href="/articles/layups" className="px-4 py-3 hover:bg-neutral-800">
              Layups
            </Link>
            <Link href="/articles/infrastructure" className="px-4 py-3 hover:bg-neutral-800">
              Infrastructure
            </Link>
          </div>
        </div>

        <Link href="/gallery">Gallery</Link>
        <Link href="/videos">Videos</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}