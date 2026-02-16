"use client";

import React from "react";
import ProductCard from "../../Shared/ProductCard";
import SectionHeader from "../../Shared/SectionHeader";

const breakfastProducts = [
    {
        id: 1,
        title: "White Sandwich Bread – Freshly Baked",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct1.png",
    },
    {
        id: 2,
        title: "Premium Whole Wheat Brown Bread",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 5,
        image: "/BreaksfastProducts/breaksfastProduct2.png",
    },
    {
        id: 3,
        title: "Kellogg's Corn Flakes Energy Plus",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct3.png",
    },
    {
        id: 4,
        title: "Chocolate Chocos Fills – Kids Special",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct4.png",
    },
    {
        id: 5,
        title: "Healthy Fruit & Nut Muesli Pack",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct5.png",
    },
    {
        id: 6,
        title: "Saffola Masala Oats – Classic Savory",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct6.png",
    }
];

export default function BreakfastProducts() {
    return (
        <section className="py-8 bg-white">
            <div className="container">
                <SectionHeader title="Breakfast & Dairy" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                    {breakfastProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
