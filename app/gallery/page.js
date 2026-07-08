import Navbar from "../components/navbar";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

export default async function Gallery() {
  // Fetch every article
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("date_explored", { ascending: false });

  // Fetch every image (including gallery-only photos)
  const { data: allImages } = await supabase
    .from("article_images")
    .select("*")
    .order("display_order");

  // Group images by article_id
  const imageMap = {};

  allImages?.forEach((image) => {
    if (!imageMap[image.article_id]) {
      imageMap[image.article_id] = [];
    }

    imageMap[image.article_id].push(image);
  });

  // Group articles by category
  const categories = {
    stations: [],
    tracks: [],
    layups: [],
    infrastructure: [],
  };

  articles?.forEach((article) => {
    if (categories[article.category]) {
      categories[article.category].push(article);
    }
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <Navbar />

        <section className="py-12">

          <h1 className="text-5xl font-bold mb-4">
            Photo Archive
          </h1>

          <p className="text-neutral-400 mb-12 max-w-3xl">
            Browse every documented exploration through its complete photographic archive.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <aside className="lg:col-span-1">

              <div className="sticky top-8">

                <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
                  Explorations
                </h2>

                <div className="space-y-8">

                  {Object.entries(categories).map(([category, list]) => (
                    <div key={category}>

                      <h3 className="text-neutral-500 uppercase text-xs tracking-[0.25em] mb-3">
                        {category}
                      </h3>

                      <div className="space-y-2">

                        {list.length === 0 ? (
                          <p className="text-neutral-700">—</p>
                        ) : (
                          list.map((article) => (
                            <a
                              key={article.id}
                              href={`#${article.slug}`}
                              className="block hover:text-white transition"
                            >
                              {article.title}
                            </a>
                          ))
                        )}

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </aside>

            {/* Gallery */}
            <section className="lg:col-span-4 space-y-24">
              {articles?.map((article) => (
                <section
                  key={article.id}
                  id={article.slug}
                  className="scroll-mt-24"
                >
                  <h2 className="text-3xl font-bold mb-8">
                    {article.title}
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

                    {imageMap[article.id]?.length > 0 ? (

                      imageMap[article.id].map((image) => (

                        <Image
                          key={image.id}
                          src={`https://ddkaeakoimtrlccigheo.supabase.co/storage/v1/object/public/article-images/${image.storage_path.trim()}`}
                          alt={image.caption || article.title}
                          width={500}
                          height={500}
                          className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition duration-200"
                        />

                      ))

                    ) : (

                      <p className="text-neutral-600">
                        No photos yet.
                      </p>

                    )}

                  </div>

                  <hr className="border-neutral-800 mt-20" />

                </section>
              ))}

            </section>

          </div>

        </section>

      </div>

    </main>
  );
}