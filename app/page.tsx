import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 text-center">
        {/* Hero image */}
        <Image
          src="/muffinsCityScape.jpg" // your file in public/
          alt="Protein baked goods"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl text-white animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Protein Treats That Fuel Your Training
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            High-protein baked goods made with clean ingredients.
            Find us at Ocean Beach & Little Italy farmers markets.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/menu"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-stone-200 transition"
            >
              View Menu
            </Link>
            <Link
              href="/find-us"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Find Us
            </Link>
            <Link
              href="/about"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPS ================= */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">High Protein</h3>
            <p className="text-stone-600">
              Designed to support strength, recovery, and performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Clean Ingredients</h3>
            <p className="text-stone-600">
              No refined sugars. No fillers. Just quality ingredients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Made Fresh</h3>
            <p className="text-stone-600">
              Baked fresh for local farmers markets and pop-ups.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECONDARY CTA ================= */}
      <section className="bg-stone-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Built for Lifters, Runners, and Everyday Athletes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Dough Gains delivers functional nutrition without sacrificing flavor.
        </p>

        <Link
          href="/menu"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-stone-200 transition"
        >
          Explore the Menu
        </Link>
      </section>

    </main>
  );
}
