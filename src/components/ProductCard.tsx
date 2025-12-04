import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden image-hover-zoom">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 font-medium">
            NEW DROP
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 font-medium">
            DRIP PICK
          </span>
        )}
        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button className="flex-1 bg-red-600 text-white py-2 text-xs font-semibold hover:bg-red-700 transition-colors">
              Quick Add
            </button>
            <button className="bg-white text-black p-2 hover:bg-gray-100 transition-colors" aria-label="Add to wishlist">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {product.category}
        </p>
        <p className="text-sm font-medium mt-1 truncate text-white">{product.name}</p>
        <p className="text-sm font-semibold mt-1 text-red-500">${product.price}</p>
      </div>
    </Link>
  );
}
