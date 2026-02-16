"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import ProductCard from "../Shared/ProductCard";

const allProducts = [
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
    },
    {
        id: 7,
        title: "White Sandwich Bread – Freshly Baked",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct1.png",
        category: "Breads & Bakery"
    },
    {
        id: 8,
        title: "Premium Whole Wheat Brown Bread",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 5,
        image: "/BreaksfastProducts/breaksfastProduct2.png",
        category: "Breads & Bakery"
    },
    {
        id: 9,
        title: "Kellogg's Corn Flakes Energy Plus",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct3.png",
        category: "Breakfast & Dairy"
    },
    {
        id: 10,
        title: "Chocolate Chocos Fills – Kids Special",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct4.png",
        category: "Breakfast & Dairy"
    },
    {
        id: 11,
        title: "Healthy Fruit & Nut Muesli Pack",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct5.png",
        category: "Breakfast & Dairy"
    },
    {
        id: 12,
        title: "Saffola Masala Oats – Classic Savory",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/BreaksfastProducts/breaksfastProduct6.png",
        category: "Breakfast & Dairy"
    },
    {
        id: 13,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/LastProducts/lastProduct1.png",
        category: "Beverages"
    },
    {
        id: 14,
        title: "Rising Crust Pizza Supreme – 31.5 oz",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/LastProducts/lastProduct2.png",
        category: "Frozen Foods"
    },
    {
        id: 15,
        title: "Simply Orange Juice – 52 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/LastProducts/lastProduct3.png",
        category: "Beverages"
    },
];

export default function ProductGrid({ selectedCategory, maxPrice = 1000 }) {
    const [sortBy, setSortBy] = useState("Name A to Z");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortDropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredProducts = allProducts.filter(p => {
        const price = parseFloat(p.price.replace('$', ''));
        const matchesCategory = !selectedCategory || selectedCategory === "All" || p.category === selectedCategory;
        const matchesPrice = price <= maxPrice;

        return matchesCategory && matchesPrice;
    });

    const sortOptions = [
        "Name A to Z",
        "Price: Low to High",
        "Price: High to Low",
        "Rating: High to Low"
    ];

    return (
        <div className="flex-grow flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-[15px] text-gray-600 font-medium">
                    Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
                    {selectedCategory && selectedCategory !== "All" && <span className="text-gray-500 font-normal ml-1">in <span className="text-primary font-semibold">{selectedCategory}</span></span>}
                </p>
                <div className="flex items-center gap-3 relative" ref={sortDropdownRef}>
                    <span className="text-[14px] text-gray-500 font-medium whitespace-nowrap">Sort by:</span>

                    <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-[14px] text-gray-700 font-medium hover:border-primary transition-colors min-w-[180px] justify-between"
                    >
                        {sortBy}
                        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                    </button>


                    {isSortOpen && (
                        <div className="absolute top-full right-0 mt-2 w-[200px] bg-white border border-gray-100 rounded-lg shadow-xl z-30 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                            {sortOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        setSortBy(option);
                                        setIsSortOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-[14px] flex items-center justify-between transition-colors ${sortBy === option
                                        ? "bg-primary/5 text-primary font-medium"
                                        : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {option}
                                    {sortBy === option && <Check size={16} />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[992px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {filteredProducts.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                        <button
                            onClick={() => window.location.href = '/shop'}
                            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all cursor-pointer"
                        >
                            View All Products
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-12 mt-auto flex items-center justify-center gap-2 pt-4">
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    «
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    ‹
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded bg-primary text-white font-bold transition-shadow shadow-md shadow-primary/20 cursor-pointer">
                    1
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    2
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    3
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    ›
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    »
                </button>
            </div>
        </div>
    );
}
