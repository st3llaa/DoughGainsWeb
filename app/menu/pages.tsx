const products = [
  {
    name: "Protein Bagel",
    protein: "18g",
    calories: "210",
    description: "Greek yogurt based, soft and chewy"
  },
  {
    name: "Protein Pancakes",
    protein: "22g",
    calories: "240",
    description: "Made fresh with topping station"
  },
  {
    name: "Protein Brownies",
    protein: "16g",
    calories: "190",
    description: "Rich chocolate, no refined sugar"
  }
];

export default function Menu() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Menu & Macros</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-4">
              {item.description}
            </p>
            <p>Protein: <strong>{item.protein}</strong></p>
            <p>Calories: <strong>{item.calories}</strong></p>
          </div>
        ))}
      </div>
    </main>
  );
}
