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
          heroTextRef.current.querySelectorAll("h1, p, a"),
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
    <section ref={heroRef} className="relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Left - Big Hero Image */}
          <div className="col-span-2 lg:col-span-7 relative">
            <div
              ref={heroImageRef}
              className="relative aspect-[3/4] md:aspect-4/5 lg:aspect-3/4 overflow-hidden bg-neutral-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&h=1200&fit=crop"
                alt="Streetwear Fashion"
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Overlay Text */}
              <div ref={heroTextRef} className="absolute bottom-0 left-0 right-0 p-4 md:p-10">
                <p className="text-red-500 text-xs md:text-sm font-bold tracking-widest mb-2">DRIP SEASON</p>
                <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
                  DARK
                  <br />
                  <span className="text-red-500">MODE</span>
                </h1>
                <Link
                  href="/products"
                  className="inline-block mt-4 md:mt-6 bg-white text-black px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-black tracking-wider hover:bg-red-500 hover:text-white transition-all active:scale-95"
                >
                  SHOP THE DROP
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Product Grid */}
          <div ref={productsRef} className="col-span-2 lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
            {/* Product 1 */}
            <Link href="/product/1" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop"
                  alt="Vamp Hoodie"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base text-white">Vamp Hoodie</p>
                <p className="font-bold text-sm md:text-base text-red-500">$120</p>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/2" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop"
                  alt="Dark Cargo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base text-white">Dark Cargo</p>
                <p className="font-bold text-sm md:text-base text-red-500">$89</p>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/product/4" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
                  alt="Leather Jacket"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base text-white">Leather Jacket</p>
                <p className="font-bold text-sm md:text-base text-red-500">$299</p>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/product/3" className="group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop"
                  alt="Oversized Tee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base text-white">Oversized Tee</p>
                <p className="font-bold text-sm md:text-base text-red-500">$65</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
