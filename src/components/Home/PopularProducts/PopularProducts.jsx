"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "../../Shared/ProductCard";

const categories = [
    "Breads & Bakery",
    "Meats & Seafood",
    "Breakfasts & Dairy",
    "Fruits & Vegetables",
    "Beverages",
    "Frozen Foods"
];

const products = [
    {
        id: 1,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/juice.png",
        category: "Beverages"
    },
    {
        id: 2,
        title: "Rising Crust Pizza Supreme – 31.5 oz",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/rising.png",
        category: "Frozen Foods"
    },
    {
        id: 3,
        title: "Simply Orange Juice – 52 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/simpkeOrenge.png",
        category: "Beverages"
    },
    {
        id: 4,
        title: "California Pizza Kitchen Margherita",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/margrate.png",
        category: "Frozen Foods"
    },
    {
        id: 5,
        title: "Lay's Classic Party Size Potato Chips",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/lays.png",
        category: "Biscuits & Snacks"
    },
    {
        id: 6,
        title: "Angel Soft Toilet Paper Mega Rolls",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/megarols.png",
        category: "Grocery & Staples"
    }
];

export default function PopularProducts() {
    const [activeCategory, setActiveCategory] = useState("Breads & Bakery");

    return (
        <section className="pt-8 pb-4 bg-white mt-10">
            <div className="container">
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[20px] font-bold text-[#212121]">Popular Products</h2>
                            <span className="text-[14px] text-gray-500 hidden sm:inline-block">Do not miss the current offers</span>
                        </div>
                        <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                            <span className="flex items-center gap-1 text-[13px] font-bold whitespace-nowrap">View All <ChevronRight size={16} /></span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[15px] font-semibold whitespace-nowrap transition-all relative pb-2 ${activeCategory === cat
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                    {products.map((product) => (
                        <div key={product.id} className="h-auto">
                            <ProductCard product={product} imageSizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .popular-products-grid {
                    padding: 10px 2px;
                }
            `}</style>
        </section>
    );
}
