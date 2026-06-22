import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 px-8 md:px-16">
      <Navbar />

      {/* Main Section */}
      <section className="grid md:grid-cols-3 gap-10 py-12">
        {/* Featured Entry */}
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Featured Entry
          </p>

          <div className="w-full h-[500px] bg-neutral-900 border border-neutral-800 mb-6 flex items-center justify-center text-neutral-600">
            Hero Image Placeholder
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            TOMB OF THE UNNAMED
          </h2>

          <p className="text-neutral-500 mb-4">
            Brooklyn, NY • June 22, 2026
          </p>

          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            A silent relic hidden between city blocks. Rusted equipment, empty
            hallways, and years of untouched history preserved in darkness.
          </p>
        </div>

        {/* Sidebar */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Latest Updates
          </p>

          <div className="space-y-6">
            <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
              <p className="text-xs text-neutral-500 mb-1">06.22.2026</p>
              <p>Hospital Entry #04</p>
            </div>

            <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
              <p className="text-xs text-neutral-500 mb-1">06.18.2026</p>
              <p>Tunnel Log #14</p>
            </div>

            <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
              <p className="text-xs text-neutral-500 mb-1">06.12.2026</p>
              <p>Rooftop Access #08</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Entries */}
      <section className="py-12 border-t border-neutral-800">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">
          Recent Entries
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
            <div className="h-40 bg-neutral-900 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Substation 12</h3>
            <p className="text-sm text-neutral-500">June 2026</p>
          </div>

          <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
            <div className="h-40 bg-neutral-900 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Power Plant</h3>
            <p className="text-sm text-neutral-500">May 2026</p>
          </div>

          <div className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all duration-300 cursor-pointer">
            <div className="h-40 bg-neutral-900 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Factory Archive</h3>
            <p className="text-sm text-neutral-500">April 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}