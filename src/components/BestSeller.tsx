import Image from "next/image";
import Link from "next/link";
import { bestSellers } from "@/data/products";

export default function BestSeller() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            BEST SELLERS
          </h2>
          <Link href="/products" className="text-sm font-bold hover:underline">
            VIEW ALL →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {bestSellers.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="relative aspect-3/4 bg-gray-100 overflow-hidden image-hover-zoom">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="font-medium truncate">{product.name}</p>
                <p className="font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
