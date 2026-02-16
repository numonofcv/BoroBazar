"use client";

import React from "react";
import ProductCard from "../../Shared/ProductCard";
import SectionHeader from "../../Shared/SectionHeader";

const featuredProducts = [
    {
        id: 1,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct1.png",
    },
    {
        id: 2,
        title: "Rising Crust Pizza Supreme – 31.5 oz",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct2.png",
    },
    {
        id: 3,
        title: "Simply Orange Juice – 52 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct3.png",
    },
    {
        id: 4,
        title: "California Pizza Kitchen Margherita",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct4.png",
    },
    {
        id: 5,
        title: "Lay's Classic Party Size Potato Chips",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct5.png",
    },
    {
        id: 6,
        title: "Angel Soft Toilet Paper Mega Rolls",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/FuturedProducts/futuredProduct6.png",
    }
];

export default function FeaturedProducts() {
    return (
        <section className="py-8 bg-white">
            <div className="container">
                <SectionHeader title="Featured Products" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
