import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            ALL <span className="text-red-500">DRIP</span>
          </h1>
          <p className="text-gray-500 mt-2">
            {products.length} pieces
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
            <div className="flex gap-2">
              {["All", "Hoodies", "Jackets", "Pants", "Tees"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      category === "All"
                        ? "bg-red-600 text-white"
                        : "bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="text-sm font-medium bg-transparent border-none focus:outline-none cursor-pointer text-white">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-red-600 text-red-500 font-semibold hover:bg-red-600 hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
