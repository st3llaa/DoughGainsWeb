export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Protein Treats That Fuel Your Training
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          High-protein baked goods made with clean ingredients. 
          Find us at Ocean Beach & Little Italy farmers markets.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/menu"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            View Menu
          </a>
          <a
            href="/markets"
            className="border border-black px-6 py-3 rounded-lg"
          >
            Find Us
          </a>
        </div>
      </section>
    </main>
  );
}
