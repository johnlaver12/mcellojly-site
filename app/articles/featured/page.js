import Navbar from "../../components/navbar";

export default function Featured() {
  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16">
      <Navbar />
      <section className="py-12">Featured Articles</section>
    </main>
  );
}