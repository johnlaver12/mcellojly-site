import Navbar from "../components/navbar";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function Articles() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*");

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16">
      <Navbar />

      <section className="py-12">
        <h1 className="text-5xl font-bold mb-4">
          Urban Exploration Articles
        </h1>

        <p className="text-neutral-400 mb-10">
          Documented explorations, field reports, and archived discoveries.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 text-sm uppercase text-neutral-400">
          <Link
            href="/articles"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            All
          </Link>

          <Link
            href="/articles/featured"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            Featured
          </Link>

          <Link
            href="/articles/stations"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            Stations
          </Link>

          <Link
            href="/articles/tracks"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            Tracks
          </Link>

          <Link
            href="/articles/layups"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            Layups
          </Link>

          <Link
            href="/articles/infrastructure"
            className="border border-neutral-700 px-4 py-2 hover:border-white transition-all"
          >
            Infrastructure
          </Link>
        </div>

        {/* Featured Article */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Featured Article
          </p>

          <div className="h-[450px] bg-neutral-900 border border-neutral-800 mb-6 flex items-center justify-center text-neutral-600">
            Featured Article Image
          </div>

          <h2 className="text-4xl font-bold mb-3">
            THE FORGOTTEN HOSPITAL
          </h2>

          <p className="text-neutral-500 mb-4">
            Brooklyn, NY • June 22, 2026 • ACTIVE
          </p>

          <p className="text-neutral-400 max-w-3xl">
            A silent relic hidden between city blocks. Rusted equipment,
            abandoned hallways, and decades of untouched history.
          </p>
        </section>

        {/* Article Grid */}
        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">
            Recent Articles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles?.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.category}/${article.slug}`}
                className="block border border-neutral-800 p-4 hover:border-white hover:scale-[1.01] transition-all duration-200"
              >
                <div className="h-48 bg-neutral-900 mb-4 rounded flex items-center justify-center text-neutral-600">
                  Image Coming Soon
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-500">
                  {article.location}
                </p>

                <p className="text-xs uppercase tracking-wide text-neutral-600 mt-3">
                  {article.category}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}