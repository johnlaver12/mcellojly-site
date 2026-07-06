import Navbar from "../../../components/navbar";
import { supabase } from "../../../../lib/supabase";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("category", category)
    .eq("slug", slug)
    .single();

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16">
      <Navbar />

      <article className="max-w-4xl mx-auto py-12">

        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
          {article.category}
        </p>

        <h1 className="text-5xl font-bold mb-4">
          {article.title}
        </h1>

        <p className="text-neutral-500 mb-8">
          {article.location} • {article.date_explored}
        </p>

        <div className="w-full h-[450px] bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-600 mb-10">
          Hero Image Placeholder
        </div>

        <div className="space-y-6 text-neutral-300 leading-8 text-lg">

          <p>
            {article.preview}
          </p>

          <p>
            This article is currently using placeholder content.
            Eventually this entire page will load the complete article body,
            photo gallery, maps, videos, and metadata directly from Supabase.
          </p>

        </div>

      </article>
    </main>
  );
}