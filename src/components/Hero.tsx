"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image reveal
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Hero text animation
      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current.querySelectorAll("h1, a"),
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.4 }
        );
      }

      // Product cards stagger animation
      if (productsRef.current) {
        gsap.fromTo(
          productsRef.current.querySelectorAll(":scope > a"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.6 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Left - Big Hero Image */}
          <div className="col-span-2 lg:col-span-7 relative">
            <div
              ref={heroImageRef}
              className="relative aspect-[3/4] md:aspect-4/5 lg:aspect-3/4 overflow-hidden bg-gray-100"
            >
              <Image
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&h=1200&fit=crop"
                alt="Fashion"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Text */}
              <div ref={heroTextRef} className="absolute bottom-0 left-0 right-0 p-4 md:p-10 bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                  NEW
                  <br />
                  SEASON
                </h1>
                <Link
                  href="/products"
                  className="inline-block mt-3 md:mt-4 bg-white text-black px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold hover:bg-gray-100 transition-all active:scale-95"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Product Grid */}
          <div ref={productsRef} className="col-span-2 lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
            {/* Product 1 */}
            <Link href="/product/1" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop"
                  alt="Bomber Jacket"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base">Bomber Jacket</p>
                <p className="font-bold text-sm md:text-base">$89</p>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/2" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop"
                  alt="Denim Pants"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base">Denim Pants</p>
                <p className="font-bold text-sm md:text-base">$99</p>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/product/3" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
                  alt="Suede Jacket"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base">Suede Jacket</p>
                <p className="font-bold text-sm md:text-base">$120</p>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/product/4" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop"
                  alt="Wool Coat"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base">Wool Coat</p>
                <p className="font-bold text-sm md:text-base">$150</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
