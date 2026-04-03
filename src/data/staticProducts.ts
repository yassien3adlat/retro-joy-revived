import leatherJacket from "@/assets/products/leather-jacket.png";
import leatherJacketDetail1 from "@/assets/products/leather-jacket-detail1.png";
import leatherJacketBack from "@/assets/products/leather-jacket-back.png";
import leatherJacketDetail2 from "@/assets/products/leather-jacket-detail2.png";
import leatherJacketFront from "@/assets/products/leather-jacket-front.png";
import blackLeatherBelt from "@/assets/products/black-leather-belt.png";
import aspirePerfume from "@/assets/products/aspire-perfume.png";
import blackWideLegPants from "@/assets/products/black-wide-leg-pants.png";
import greyWideLegPants from "@/assets/products/grey-wide-leg-pants.png";
import brownLeatherJacket from "@/assets/products/brown-leather-jacket.png";
import brownLeatherJacketDetail from "@/assets/products/brown-leather-jacket-detail.png";
import brownLeatherJacketModel from "@/assets/products/brown-leather-jacket-model.png";
import purpleLeatherJacket from "@/assets/products/purple-leather-jacket.png";
import stripedShirt from "@/assets/products/striped-shirt.png";
import stripedShirtModel from "@/assets/products/striped-shirt-model.png";
import stripedShirtDetail from "@/assets/products/striped-shirt-detail.png";
import classicWatch from "@/assets/products/classic-watch.png";

export type Category = "men" | "accessories";
export type Season = "summer" | "winter" | "all";

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
    title: "Leather Zip Jacket — Black",
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
    handle: "brown-leather-jacket",
    title: "Leather Zip Jacket — Brown",
    description: "Rich cognac brown leather jacket with a classic zip-up design. Crafted from premium leather with a tailored fit and refined collar.",
    price: 4500,
    currency: "EGP",
    image: brownLeatherJacket,
    images: [brownLeatherJacket, brownLeatherJacketModel, brownLeatherJacketDetail],
    category: "men",
    season: "winter",
    tags: ["jacket", "leather", "outerwear"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-3",
    handle: "purple-leather-jacket",
    title: "Leather Zip Jacket — Purple",
    description: "Bold statement piece in rich purple leather. Same premium construction and tailored silhouette with a distinctive color for the confident dresser.",
    price: 4500,
    currency: "EGP",
    image: purpleLeatherJacket,
    images: [purpleLeatherJacket],
    category: "men",
    season: "winter",
    tags: ["jacket", "leather", "outerwear"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-4",
    handle: "striped-button-up-shirt",
    title: "Striped Button-Up Shirt",
    description: "Light blue and white striped shirt in premium cotton. Relaxed fit with a classic collar — perfect layered or worn open over a tee.",
    price: 1200,
    currency: "EGP",
    image: stripedShirt,
    images: [stripedShirt, stripedShirtModel, stripedShirtDetail],
    category: "men",
    season: "summer",
    tags: ["shirt", "cotton", "casual"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-5",
    handle: "black-leather-belt",
    title: "Black Leather Belt",
    description: "Classic black leather belt with a matte gunmetal buckle. Handcrafted from genuine leather for a refined finish.",
    price: 850,
    currency: "EGP",
    image: blackLeatherBelt,
    category: "accessories",
    season: "all",
    tags: ["belt", "leather", "accessories"],
    inStock: true,
    isNew: false,
  },
  {
    id: "static-6",
    handle: "aspire-eau-de-parfum",
    title: "Aspire Eau de Parfum — 100ml",
    description: "A signature scent by Aspire. Notes of bergamot, cedarwood, and white musk create a lasting impression of quiet confidence.",
    price: 2200,
    currency: "EGP",
    image: aspirePerfume,
    category: "accessories",
    season: "all",
    tags: ["perfume", "fragrance", "accessories"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-7",
    handle: "classic-leather-watch",
    title: "Classic Leather Strap Watch",
    description: "Timeless rectangular face watch with Roman numeral dial and premium black leather strap. A refined accessory for every occasion.",
    price: 3200,
    currency: "EGP",
    image: classicWatch,
    images: [classicWatch],
    category: "accessories",
    season: "all",
    tags: ["watch", "leather", "accessories"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-8",
    handle: "black-wide-leg-pants",
    title: "Wide-Leg Pleated Pants — Black",
    description: "Tailored wide-leg pants with double pleats in deep black. A sophisticated silhouette for the modern wardrobe.",
    price: 1800,
    currency: "EGP",
    image: blackWideLegPants,
    category: "men",
    season: "all",
    tags: ["pants", "tailored", "wide-leg"],
    inStock: true,
    isNew: true,
  },
  {
    id: "static-9",
    handle: "grey-wide-leg-pants",
    title: "Wide-Leg Pleated Pants — Grey",
    description: "Relaxed-fit wide-leg pants with double pleats in charcoal grey. Elevated everyday dressing with a vintage edge.",
    price: 1800,
    currency: "EGP",
    image: greyWideLegPants,
    category: "men",
    season: "all",
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
  if (season === "all") return staticProducts;
  return staticProducts.filter((p) => p.season === season || p.season === "all");
}

export function getProductByHandle(handle: string): StaticProduct | undefined {
  return staticProducts.find((p) => p.handle === handle);
}
