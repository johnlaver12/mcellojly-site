import Navbar from "../../components/navbar";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .eq("category", category)
    .order("id", { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16">
      <Navbar />

      <section className="py-12">
        <h1 className="text-5xl font-bold mb-3 capitalize">
          {category.replace("-", " ")}
        </h1>

        <p className="text-neutral-400 mb-10">
          {articles?.length || 0} article{articles?.length === 1 ? "" : "s"} found
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.category}/${article.slug}`}
              className="border border-neutral-800 p-4 hover:border-neutral-500 transition-all"
            >
              <div className="h-48 bg-neutral-900 mb-4"></div>

              <h2 className="text-xl font-semibold mb-2">
                {article.title}
              </h2>

              <p className="text-sm text-neutral-500">
                {article.location}
              </p>

              <p className="text-xs uppercase text-neutral-600 mt-3">
                {article.status}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}