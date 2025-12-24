const markets = [
  {
    name: "Ocean Beach Farmers Market",
    day: "Wednesdays",
    time: "4:00 PM – 8:00 PM",
    location: "4900 Newport Ave, San Diego, CA",
    vibe: "Beachy, local, sunset crowd",
  },
  {
    name: "Little Italy Mercato",
    day: "Saturdays",
    time: "8:00 AM – 2:00 PM",
    location: "W Date St & Kettner Blvd, San Diego, CA",
    vibe: "Busy, foodie-focused, early mornings",
  },
];

export default function FindUsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Find Us</h1>
        <p className="text-gray-600 mb-12">
          Catch us weekly at San Diego farmers markets. Come early — we sell out.
        </p>

        <div className="space-y-8">
          {markets.map((market) => (
            <div
              key={market.name}
              className="border rounded-xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {market.name}
              </h2>
              <p className="mb-1">
                <strong>{market.day}</strong> · {market.time}
              </p>
              <p className="mb-1">{market.location}</p>
              <p className="text-sm text-gray-600">
                Vibe: {market.vibe}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
