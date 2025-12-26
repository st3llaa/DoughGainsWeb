const menuItems = [
  {
    name: "Protein Bagel",
    description: "Greek yogurt based. Soft, chewy, and satisfying.",
    protein: 18,
    calories: 210,
  },
  {
    name: "Protein Pancakes",
    description: "Fluffy, lightly sweetened, made fresh on site.",
    protein: 22,
    calories: 240,
  },
  {
    name: "Protein Brownie",
    description: "Rich chocolate flavor with no refined sugar.",
    protein: 16,
    calories: 190,
  },
  {
    name: "Black Bean Brownie",
    description: "Rich chocolate flavor with no refined sugar.",
    protein: 16,
    calories: 190,
  },
  {
    name: "Sweet Potato Brownie",
    description: "Rich chocolate flavor with no refined sugar.",
    protein: 16,
    calories: 190,
  },
];

export default function MenuPage() {
  return (
    <main className="bg-stone-100 px-6 py-24 text-stone-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">Menu</h1>

        <p className="text-lg text-stone-700 mb-16 max-w-2xl">
          Thoughtfully made, high-protein baked goods designed to fuel training,
          recovery, and everyday movement.
        </p>

        <div className="space-y-14">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col md:flex-row md:justify-between border-b border-stone-300 pb-8"
            >
              <div className="max-w-xl">
                <h2 className="text-2xl font-medium mb-2">{item.name}</h2>
                <p className="text-stone-600">{item.description}</p>
              </div>

              <div className="mt-4 md:mt-0 text-sm text-stone-700">
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
