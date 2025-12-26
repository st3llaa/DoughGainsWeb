"use client";

export default function HeroBanner() {
  return (
    <section className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Fuel Your Gains the Tasty Way</h1>
        <p className="text-lg mb-6">High-protein, macro-friendly baked goods for your active lifestyle.</p>
        <a href="#menu" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
          View Menu
        </a>
      </div>
    </section>
  );
}
