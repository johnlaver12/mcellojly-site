import Navbar from "./components/navbar";
import { supabase } from "../lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // Featured article
  const { data: featured, error: featuredError } = await supabase
    .from("articles")
    .select("*")
    .eq("featured", true)
    .single();

  console.log("FEATURED:", featured);
  console.log("FEATURED ERROR:", featuredError);

  // Latest articles
  const { data: latest, error: latestError } = await supabase
    .from("articles")
    .select("*")
    .order("id", { ascending: false })
    .limit(6);

  console.log("LATEST:", latest);
  console.log("LATEST ERROR:", latestError);

  // Category counts
  const { count: stations, error: stationsError } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true })
    .eq("category", "stations");

  console.log("STATIONS COUNT:", stations);
  console.log("STATIONS ERROR:", stationsError);

  const { count: tracks, error: tracksError } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true })
    .eq("category", "tracks");

  console.log("TRACKS COUNT:", tracks);
  console.log("TRACKS ERROR:", tracksError);

  const { count: layups, error: layupsError } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true })
    .eq("category", "layups");

  console.log("LAYUPS COUNT:", layups);
  console.log("LAYUPS ERROR:", layupsError);

  const { count: infrastructure, error: infrastructureError } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true })
    .eq("category", "infrastructure");

  console.log("INFRASTRUCTURE COUNT:", infrastructure);
  console.log("INFRASTRUCTURE ERROR:", infrastructureError);

  return (
    <main className="min-h-screen bg-black text-neutral-100 px-8 md:px-16">
      <Navbar />

      {/* Featured + Sidebar */}
      <section className="max-w-7xl mx-auto py-12 grid lg:grid-cols-3 gap-10">

        {/* Featured */}
        <div className="lg:col-span-2">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Featured Entry
          </p>

          <Link href={`/articles/${featured.category}/${featured.slug}`}>
            <Image
              src={featured.hero_image}
              alt={featured.title}
              width={1600}
              height={900}
              priority
              className="w-full h-[550px] object-cover rounded-lg mb-8 hover:opacity-90 transition duration-300"
            />
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            {featured.title}
          </h1>

          <p className="text-neutral-500 mb-6">
            {featured.location} • {featured.date_explored}
          </p>

          <p className="text-neutral-400 text-lg leading-8 max-w-3xl mb-8">
            {featured.preview}
          </p>

          <Link
            href={`/articles/${featured.category}/${featured.slug}`}
            className="inline-block border border-neutral-700 px-6 py-3 hover:border-white transition"
          >
            Read Article →
          </Link>

        </div>

        {/* Archive Sidebar */}
        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Browse Archive
          </p>

          <div className="space-y-4">

            <Link
              href="/articles/stations"
              className="block border border-neutral-800 p-5 hover:border-white transition"
            >
              <div className="text-5xl font-bold mb-2">
                {String(stations ?? 0).padStart(2, "0")}
              </div>

              <p className="uppercase tracking-[0.2em] text-neutral-500">
                Stations
              </p>
            </Link>

            <Link
              href="/articles/tracks"
              className="block border border-neutral-800 p-5 hover:border-white transition"
            >
              <div className="text-5xl font-bold mb-2">
                {String(tracks ?? 0).padStart(2, "0")}
              </div>

              <p className="uppercase tracking-[0.2em] text-neutral-500">
                Tracks
              </p>
            </Link>

            <Link
              href="/articles/layups"
              className="block border border-neutral-800 p-5 hover:border-white transition"
            >
              <div className="text-5xl font-bold mb-2">
                {String(layups ?? 0).padStart(2, "0")}
              </div>

              <p className="uppercase tracking-[0.2em] text-neutral-500">
                Layups
              </p>
            </Link>

            <Link
              href="/articles/infrastructure"
              className="block border border-neutral-800 p-5 hover:border-white transition"
            >
              <div className="text-5xl font-bold mb-2">
                {String(infrastructure ?? 0).padStart(2, "0")}
              </div>

              <p className="uppercase tracking-[0.2em] text-neutral-500">
                Infrastructure
              </p>
            </Link>

            <Link
              href="/articles"
              className="block border border-neutral-800 p-5 text-center hover:border-white transition"
            >
              View Entire Archive →
            </Link>

          </div>

        </div>

      </section>

      {/* Latest Explorations */}
      <section className="max-w-7xl mx-auto border-t border-neutral-800 py-16">

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">
          Latest Explorations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {latest?.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.category}/${article.slug}`}
              className="border border-neutral-800 p-4 hover:border-white transition"
            >
              <Image
                src={article.hero_image}
                alt={article.title}
                width={800}
                height={500}
                className="w-full h-56 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                {article.title}
              </h3>

              <p className="text-sm text-neutral-500">
                {article.location}
              </p>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}