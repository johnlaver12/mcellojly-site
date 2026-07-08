import Navbar from "../components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <Navbar />

        <section className="py-16">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
            About
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-10">
            [Page Title]
          </h1>

          <div className="space-y-8 text-lg leading-8 text-neutral-300">

            <p>
              [Paragraph...]
            </p>

            <p>
              [Paragraph...]
            </p>

            <p>
              [Paragraph...]
            </p>

          </div>

        </section>

        <hr className="border-neutral-800" />

        <section className="py-16">

          <h2 className="text-3xl font-bold mb-8">
            Follow Along
          </h2>

          <div className="border border-neutral-800 p-6">

            <h3 className="text-xl font-semibold mb-2">
              Instagram
            </h3>

            <p className="text-neutral-400 mb-4">
              [Short description]
            </p>

            <Link
              href="#"
              className="text-white hover:text-neutral-400 transition"
            >
              @username →
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}