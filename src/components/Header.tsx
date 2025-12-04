"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const navItems = [
  { label: "Man", href: "/man" },
  { label: "Woman", href: "/woman" },
  { label: "Kids", href: "/kids" },
];

const rightNavItems = [
  { label: "Account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Search", href: "/search" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Header entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll("a"),
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
        );
      }
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -ml-2 active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 active:scale-95 transition-transform">
            <span className="text-[9px] md:text-[10px] text-gray-400 tracking-widest uppercase block text-left">
              Keep it !
            </span>
            <span className="text-lg md:text-2xl font-bold tracking-tight block" style={{ fontFamily: 'var(--font-logo)' }}>
              LowTwins
            </span>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/bag"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Bag ({cartCount})
            </Link>
          </nav>

          {/* Mobile Cart */}
          <Link href="/bag" className="md:hidden p-2 -mr-2 active:scale-95 transition-transform">
            <div className="relative">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-gray-700 hover:text-black py-3 active:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3">
              {rightNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-lg font-medium text-gray-700 hover:text-black py-3 active:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
