import Navbar from "../../../components/navbar";
import { supabase } from "../../../../lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  // Fetch article
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("category", category)
    .eq("slug", slug)
    .single();

  if (!article) {
    notFound();
  }

  // Fetch gallery images
  const { data: images, error: imageError } = await supabase
  .from("article_images")
  .select("*")
  .eq("article_id", article.id)
  .order("display_order");

  console.log("ARTICLE ID:", article.id);
  console.log("IMAGES:", images);
  console.log("IMAGE ERROR:", imageError);

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16">
      <Navbar />

      <article className="max-w-4xl mx-auto py-12">

        {/* Category */}
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
          {article.category}
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          {article.title}
        </h1>

        {/* Metadata */}
        <p className="text-neutral-500 mb-8">
          {article.location} • {article.date_explored}
        </p>

        {/* Hero Image */}
        <Image
          src={article.hero_image}
          alt={article.title}
          width={1400}
          height={800}
          className="w-full h-[500px] object-cover rounded-lg mb-10"
        />

        {/* Preview */}
        <p className="text-xl italic text-neutral-400 mb-8">
          {article.preview}
        </p>

        {/* Article Body */}
        <div className="border-l-2 border-neutral-700 pl-6 whitespace-pre-wrap text-lg leading-8 text-neutral-300">
          {article.body}
        </div>

        {/* Gallery */}
        {images && images.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">
              Photo Gallery
            </h2>

            <div className="space-y-16">
              {images.map((image) => (
                <div key={image.id}>
                  <Image
                    src={`https://ddkaeakoimtrlccigheo.supabase.co/storage/v1/object/public/article-images/${image.storage_path}`}
                    alt={image.caption || "Gallery image"}
                    width={1200}
                    height={800}
                    className="w-full rounded-lg object-cover hover:scale-[1.02] transition-transform duration-200"
                  />

                  {image.caption && (
                    <p className="text-sm text-neutral-500 italic mt-3">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </article>
    </main>
  );
}