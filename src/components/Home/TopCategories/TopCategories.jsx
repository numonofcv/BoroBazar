"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeader from "../../Shared/SectionHeader";
import { fetchCategories } from "../../../services/api";
import {
    ShoppingBasket,
    Sparkles,
    Wind,
    Bed,
    Home,
    Coffee,
    Laptop,
    Shirt,
    Smartphone,
    Watch,
    Trophy,
    ShoppingBag,
    Baby,
    Smartphone as Mobile,
    HeartPulse,
    Bike,
    Car,
    Footprints,
    Gem,
    Glasses
} from "lucide-react";

// Using slug as keys for exact matching with API
const iconMap = {
    // Beauty & Health
    "beauty": <Sparkles />,
    "skin-care": <HeartPulse />,
    "healthcare": <HeartPulse />,

    // Fashion
    "mens-shirts": <Shirt />,
    "mens-shoes": <Footprints />,
    "mens-watches": <Watch />,
    "womens-dresses": <Shirt />,
    "womens-shoes": <Footprints />,
    "womens-watches": <Watch />,
    "womens-bags": <ShoppingBag />,
    "womens-jewellery": <Gem />,
    "tops": <Shirt />,
    "sunglasses": <Glasses />,

    // Tech
    "smartphones": <Mobile />,
    "laptops": <Laptop />,
    "tablets": <Laptop />,
    "mobile-accessories": <Smartphone />,

    // Home & Kitchen
    "groceries": <ShoppingBasket />,
    "furniture": <Bed />,
    "home-decoration": <Home />,
    "kitchen-accessories": <Coffee />,
    "fragrances": <Wind />,

    // Vehicles
    "motorcycle": <Bike />,
    "vehicle": <Car />,

    // Sports & Others
    "sports-accessories": <Trophy />,
}

export default function TopCategories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadCategories = async () => {
            const apiCats = await fetchCategories();
            // apiCats is now an array of objects: { slug, name, url }
            const topCats = apiCats.slice(0, 16).map((cat, index) => ({
                id: index,
                name: cat.name,
                slug: cat.slug,
                // Use slug for mapping
                icon: iconMap[cat.slug] || iconMap[cat.slug.split('-')[0]] || <ShoppingBasket />
            }));
            setCategories(topCats);
            setIsLoading(false);
        };
        loadCategories();
    }, []);

    return (
        <section className="py-8 bg-white overflow-hidden">
            <div className="container">
                <SectionHeader
                    title="Top Categories"
                    subtext="Select a category to view products"
                    viewAllLink="/shop"
                />

                <div className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-6 pb-6 pt-2">
                    {isLoading ? (
                        [...Array(10)].map((_, i) => (
                            <div key={i} className="min-w-[130px] aspect-square bg-gray-50 rounded-[12px] animate-pulse" />
                        ))
                    ) : (
                        categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/shop?category=${cat.slug}`}
                                className="group flex flex-col items-center min-w-[125px] sm:min-w-[145px] flex-shrink-0"
                            >
                                <div className="w-full aspect-square bg-[#F7F7F7] border border-transparent rounded-[12px] flex items-center justify-center group-hover:bg-white group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-300 text-gray-700 group-hover:text-primary">
                                    <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                                        {React.cloneElement(cat.icon, { size: 40, strokeWidth: 1.5 })}
                                    </div>
                                </div>
                                <span className="mt-4 text-[13px] sm:text-[14px] font-bold text-[#212121] text-center leading-tight group-hover:text-primary transition-colors capitalize px-2 line-clamp-1">
                                    {cat.name}
                                </span>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
