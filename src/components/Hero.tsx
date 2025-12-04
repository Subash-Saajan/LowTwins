import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left - Big Hero Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/5 lg:aspect-3/4 overflow-hidden bg-gray-100 image-hover-zoom">
              <Image
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&h=1200&fit=crop"
                alt="Fashion"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none">
                  NEW
                  <br />
                  SEASON
                </h1>
                <Link
                  href="/products"
                  className="inline-block mt-4 bg-white text-black px-6 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Product Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Product 1 */}
            <Link href="/product/1" className="group">
              <div className="relative aspect-3/4 bg-gray-100 overflow-hidden image-hover-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop"
                  alt="Bomber Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="font-medium">Bomber Jacket</p>
                <p className="font-bold">$89</p>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/2" className="group">
              <div className="relative aspect-3/4 bg-gray-100 overflow-hidden image-hover-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop"
                  alt="Denim Pants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="font-medium">Denim Pants</p>
                <p className="font-bold">$99</p>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/product/3" className="group">
              <div className="relative aspect-3/4 bg-gray-100 overflow-hidden image-hover-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
                  alt="Suede Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="font-medium">Suede Jacket</p>
                <p className="font-bold">$120</p>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/product/4" className="group">
              <div className="relative aspect-3/4 bg-gray-100 overflow-hidden image-hover-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop"
                  alt="Wool Coat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="font-medium">Wool Coat</p>
                <p className="font-bold">$150</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
