const menuItems = [
  {
    name: "Protein Bagel",
    description: "Greek yogurt based, soft and chewy",
    protein: 18,
    calories: 210,
  },
  {
    name: "Protein Pancakes",
    description: "Fluffy pancakes with optional toppings",
    protein: 22,
    calories: 240,
  },
  {
    name: "Protein Brownie",
    description: "Rich chocolate, no refined sugar",
    protein: 16,
    calories: 190,
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Menu & Macros</h1>
        <p className="text-gray-600 mb-12">
          High-protein baked goods made fresh for training, recovery, and real life.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>

              <div className="text-sm">
                <p>
                  <strong>{item.protein}g</strong> protein
                </p>
                <p>
                  <strong>{item.calories}</strong> calories
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
