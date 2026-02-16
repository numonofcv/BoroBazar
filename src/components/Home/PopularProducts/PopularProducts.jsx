"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../Shared/ProductCard";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center justify-between w-full lg:w-auto gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[20px] font-bold text-[#212121]">Popular Products</h2>
                            <span className="text-[14px] text-gray-500 hidden sm:inline-block">Do not miss the current offers</span>
                        </div>
                        <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                            <span className="flex items-center gap-1 text-[13px] font-bold whitespace-nowrap">View All <ChevronRight size={16} /></span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[15px] font-semibold whitespace-nowrap transition-all relative pb-1 ${activeCategory === cat
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".popular-next",
                            prevEl: ".popular-prev",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                            1536: { slidesPerView: 6 },
                        }}
                        className="popular-products-slider !pb-4"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .popular-products-slider {
                    padding: 10px 2px;
                }
            `}</style>
        </section>
    );
}
