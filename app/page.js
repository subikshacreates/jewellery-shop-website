export default function Home() {
  const products = [
  { id: 1, name: "Gold Ring", category: "Rings", price: 1200, image: "/ring.jpg" },
  { id: 2, name: "Necklace", category: "Necklaces", price: 2500, image: "/necklace.jpg" },
  { id: 3, name: "Earrings", category: "Earrings", price: 800, image: "/earring.jpg" },
];
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-500">Jewellery</h1>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Premium Anti-Tarnish Jewellery
        </h2>
        <p className="text-gray-400 mb-6">
          Elegant designs that last longer and shine brighter.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded text-lg">
          Explore Collection
        </button>
      </section>
      <div className="flex gap-4 justify-center mb-8">
  {["All", "Rings", "Necklaces", "Earrings"].map((cat) => (
    <button
      key={cat}
      className="border border-yellow-500 px-4 py-2 rounded text-yellow-500"
    >
      {cat}
    </button>
  ))}
</div>

    </main>
  );
}