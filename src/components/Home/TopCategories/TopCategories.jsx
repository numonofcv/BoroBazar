"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../Shared/SectionHeader";

const categories = [
    {
        id: 1,
        name: "Fruits & Vegetables",
        image: "/catecory/fruits.png",
        slug: "fruits-vegetables"
    },
    {
        id: 2,
        name: "Meats & Seafood",
        image: "/catecory/meets.png",
        slug: "meats-seafood"
    },
    {
        id: 3,
        name: "Breakfasts & Dairy",
        image: "/catecory/breakfast.png",
        slug: "breakfasts-dairy"
    },
    {
        id: 4,
        name: "Breads & Bakery",
        image: "/catecory/breads.png",
        slug: "breads-bakery"
    },
    {
        id: 5,
        name: "Beverages",
        image: "/catecory/baverages.png",
        slug: "beverages"
    },
    {
        id: 6,
        name: "Frozen Foods",
        image: "/catecory/frozen.png",
        slug: "frozen-foods"
    },
    {
        id: 7,
        name: "Biscuits & Snacks",
        image: "/catecory/biscuit.png",
        slug: "biscuits-snacks"
    },
    {
        id: 8,
        name: "Grocery & Staples",
        image: "/catecory/grocery.png",
        slug: "grocery-staples"
    },
    {
        id: 9,
        name: "Baby & Pregnancy",
        image: "/catecory/baby.png",
        slug: "baby-pregnancy"
    },
    {
        id: 10,
        name: "Healthcare",
        image: "/catecory/healthcare.png",
        slug: "healthcare"
    }
];

export default function TopCategories() {
    return (
        <section className="py-4 overflow-hidden">
            <div className="container">
                <SectionHeader
                    title="Top Categories"
                    subtext="New products with updated stocks."
                    viewAllLink="/catalog"
                />

                <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-4 pb-4 -mx-4 px-4 md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="group flex flex-col items-center min-w-[140px] md:min-w-0 flex-shrink-0"
                        >
                            <div className="w-full aspect-square bg-white border border-gray-100 rounded-[10px] p-6 flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${category.image}`}
                                        alt={category.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 10vw"
                                        className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <span className="mt-4 text-[13px] font-bold text-[#212121] text-center leading-tight group-hover:text-primary transition-colors">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
