const markets = [
  {
    name: "Ocean Beach Farmers Market",
    schedule: "Wednesdays · 4–8 PM",
    location: "4900 Newport Ave, San Diego",
    note: "Beachside evenings, sunset crowds, community energy",
  },
  {
    name: "Little Italy Mercato",
    schedule: "Saturdays · 8 AM–2 PM",
    location: "W Date St & Kettner Blvd, San Diego",
    note: "Early mornings, food lovers, bustling atmosphere",
  },
];

export default function FindUsPage() {
  return (
    <main className="bg-stone-900 px-6 py-24 text-stone-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">
          Find Us
        </h1>

        <p className="text-lg text-stone-300 mb-16 max-w-2xl">
          We pop up weekly at San Diego farmers markets. Come say hi,
          grab something fresh, and fuel your weekend.
        </p>

        <div className="space-y-16">
          {markets.map((market) => (
            <section
              key={market.name}
              className="border-b border-stone-700 pb-10"
            >
              <h2 className="text-2xl font-medium mb-2">
                {market.name}
              </h2>
              <p className="mb-1 text-stone-200">{market.schedule}</p>
              <p className="mb-2 text-stone-300">{market.location}</p>
              <p className="text-stone-400 text-sm">
                {market.note}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
