import Navbar from "../components/navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        <Navbar />

        <section className="py-12">
          About Page
        </section>

      </div>
    </main>
  );
}