import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Square textured sweater",
    price: 34,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
    category: "Sweaters",
    isNew: true,
  },
  {
    id: 2,
    name: "Combination bomber jacket",
    price: 29,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    category: "Jackets",
    isNew: true,
  },
  {
    id: 3,
    name: "Wool blend jacket",
    price: 41,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
    category: "Jackets",
    isNew: true,
  },
  {
    id: 4,
    name: "Suede jacket",
    price: 63,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
    category: "Jackets",
    isNew: true,
  },
  {
    id: 5,
    name: "Belle blue pants",
    price: 99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop",
    category: "Pants",
    isNew: true,
  },
  {
    id: 6,
    name: "Classic denim jacket",
    price: 78,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop",
    category: "Jackets",
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Varsity bomber jacket",
    price: 89,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    category: "Jackets",
    isBestSeller: true,
  },
  {
    id: 8,
    name: "Casual green shirt",
    price: 45,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop",
    category: "Shirts",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Premium cotton tee",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
    category: "T-Shirts",
    isBestSeller: true,
  },
  {
    id: 10,
    name: "Slim fit chinos",
    price: 55,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
    category: "Pants",
    isBestSeller: true,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Street Style",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    itemCount: 120,
  },
  {
    id: 2,
    name: "Art Of Beat",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=800&fit=crop",
    itemCount: 85,
  },
  {
    id: 3,
    name: "Urban Style",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    itemCount: 95,
  },
  {
    id: 4,
    name: "Classic Elegant",
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=800&fit=crop",
    itemCount: 110,
  },
];

export const newArrivals = products.filter(p => p.isNew);
export const bestSellers = products.filter(p => p.isBestSeller);
