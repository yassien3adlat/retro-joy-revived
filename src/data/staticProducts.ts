import leatherJacket from "@/assets/products/leather-jacket.png";
import leatherJacketDetail1 from "@/assets/products/leather-jacket-detail1.png";
import leatherJacketBack from "@/assets/products/leather-jacket-back.png";
import leatherJacketDetail2 from "@/assets/products/leather-jacket-detail2.png";
import leatherJacketFront from "@/assets/products/leather-jacket-front.png";
import blackLeatherBelt from "@/assets/products/black-leather-belt.png";
import aspirePerfume from "@/assets/products/aspire-perfume.png";
import blackWideLegPants from "@/assets/products/black-wide-leg-pants.png";
import greyWideLegPants from "@/assets/products/grey-wide-leg-pants.png";

export type Category = "men" | "accessories";
export type Season = "summer" | "winter";

export interface StaticProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  images?: string[];
  category: Category;
  season: Season;
  tags: string[];
  inStock: boolean;
  isNew: boolean;
}

export const staticProducts: StaticProduct[] = [
  {
    id: "static-1",
    handle: "leather-zip-jacket",
    title: "Leather Zip Jacket",
    description: "Premium full-grain leather jacket with a clean zip-up silhouette. Minimal design with side pockets and a tailored collar for effortless sophistication.",
    price: 4500,
    currency: "EGP",
    image: leatherJacket,
    images: [leatherJacket, leatherJacketFront, leatherJacketDetail2, leatherJacketDetail1, leatherJacketBack],
    category: "men",
    season: "winter",
    tags: ["jacket", "leather", "outerwear"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-2",
    handle: "black-leather-belt",
    title: "Black Leather Belt",
    description: "Classic black leather belt with a matte gunmetal buckle. Handcrafted from genuine leather for a refined finish.",
    price: 850,
    currency: "EGP",
    image: blackLeatherBelt,
    category: "accessories",
    season: "summer",
    tags: ["belt", "leather", "accessories"],
    inStock: true,
    isNew: false,
  },
  {
    id: "static-3",
    handle: "aspire-eau-de-parfum",
    title: "Aspire Eau de Parfum — 100ml",
    description: "A signature scent by Aspire. Notes of bergamot, cedarwood, and white musk create a lasting impression of quiet confidence.",
    price: 2200,
    currency: "EGP",
    image: aspirePerfume,
    category: "accessories",
    season: "summer",
    tags: ["perfume", "fragrance", "accessories"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-4",
    handle: "black-wide-leg-pants",
    title: "Wide-Leg Pleated Pants — Black",
    description: "Tailored wide-leg pants with double pleats in deep black. A sophisticated silhouette for the modern wardrobe.",
    price: 1800,
    currency: "EGP",
    image: blackWideLegPants,
    category: "men",
    season: "winter",
    tags: ["pants", "tailored", "wide-leg"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-5",
    handle: "grey-wide-leg-pants",
    title: "Wide-Leg Pleated Pants — Grey",
    description: "Relaxed-fit wide-leg pants with double pleats in charcoal grey. Elevated everyday dressing with a vintage edge.",
    price: 1800,
    currency: "EGP",
    image: greyWideLegPants,
    category: "men",
    season: "winter",
    tags: ["pants", "tailored", "wide-leg"],
    inStock: true,
    isNew: true,
  },
];

export function getProductsByCategory(category: Category): StaticProduct[] {
  return staticProducts.filter((p) => p.category === category);
}

export function getNewProducts(): StaticProduct[] {
  return staticProducts.filter((p) => p.isNew);
}

export function getProductsBySeason(season: Season): StaticProduct[] {
  return staticProducts.filter((p) => p.season === season);
}

export function getProductByHandle(handle: string): StaticProduct | undefined {
  return staticProducts.find((p) => p.handle === handle);
}
