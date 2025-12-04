export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
}

export interface NavItem {
  label: string;
  href: string;
}
