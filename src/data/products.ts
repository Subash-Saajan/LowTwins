import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Vamp Black Hoodie",
    price: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: 2,
    name: "Dark Cargo Pants",
    price: 89,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop",
    category: "Pants",
    isNew: true,
  },
  {
    id: 3,
    name: "Oversized Black Tee",
    price: 65,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop",
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 4,
    name: "Leather Biker Jacket",
    price: 299,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
    category: "Jackets",
    isNew: true,
  },
  {
    id: 5,
    name: "Distressed Jeans",
    price: 145,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
    category: "Pants",
    isNew: true,
  },
  {
    id: 6,
    name: "Drip Chain Tee",
    price: 85,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop",
    category: "T-Shirts",
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Slatt Bomber",
    price: 189,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    category: "Jackets",
    isBestSeller: true,
  },
  {
    id: 8,
    name: "Skeleton Hoodie",
    price: 135,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&h=600&fit=crop",
    category: "Hoodies",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "WLR Graphic Tee",
    price: 75,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
    category: "T-Shirts",
    isBestSeller: true,
  },
  {
    id: 10,
    name: "Black Tech Pants",
    price: 110,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
    category: "Pants",
    isBestSeller: true,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    itemCount: 45,
  },
  {
    id: 2,
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    itemCount: 32,
  },
  {
    id: 3,
    name: "Pants",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
    itemCount: 28,
  },
  {
    id: 4,
    name: "Tees",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
    itemCount: 56,
  },
];

export const newArrivals = products.filter(p => p.isNew);
export const bestSellers = products.filter(p => p.isBestSeller);
