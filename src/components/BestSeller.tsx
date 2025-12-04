"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bestSellers } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export default function BestSeller() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Products stagger animation
      if (productsRef.current) {
        gsap.fromTo(
          productsRef.current.querySelectorAll(":scope > a"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white">
            DRIP PICKS
          </h2>
          <Link href="/products" className="text-xs md:text-sm font-bold text-red-500 hover:text-white transition-colors">
            VIEW ALL →
          </Link>
        </div>

        {/* Products Grid */}
        <div ref={productsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group active:scale-[0.98] transition-transform"
            >
              <div className="relative aspect-3/4 bg-neutral-900 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="font-medium text-sm md:text-base truncate text-white">{product.name}</p>
                <p className="font-bold text-sm md:text-base text-red-500">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
