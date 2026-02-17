"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Star, Check } from "lucide-react";
import { fetchCategories } from "../../services/api";

const ratings = [5, 4, 3, 2, 1];

export default function Sidebar({ selectedCategory, onCategoryChange, maxPrice = 1000, onPriceChange }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const apiCategories = await fetchCategories();
            setCategories(apiCategories.map((cat, index) => ({
                name: cat.name,
                slug: cat.slug,
                count: Math.floor(Math.random() * 20) + 5 // Dummy count as API doesn't provide it
            })));
        };
        loadCategories();
    }, []);
    const [openSections, setOpenSections] = useState({
        category: true,
        price: true,
        rating: true
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-8 pr-2">
            <div className="border-b border-gray-100 pb-6">
                <button
                    onClick={() => toggleSection('category')}
                    className="w-full flex items-center justify-between mb-4 group"
                >
                    <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-primary transition-colors">Shop by Category</h3>
                    {openSections.category ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
                </button>

                {openSections.category && (
                    <div className="space-y-3 animate-slideDown origin-top">
                        <label className="flex items-center gap-3 cursor-pointer group py-1">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${selectedCategory === "All" || !selectedCategory ? "border-primary bg-primary text-white" : "border-gray-300 group-hover:border-primary"}`}>
                                {(selectedCategory === "All" || !selectedCategory) && <Check size={12} strokeWidth={3} />}
                            </div>
                            <input
                                type="radio"
                                name="category"
                                className="hidden"
                                checked={selectedCategory === "All" || !selectedCategory}
                                onChange={() => onCategoryChange("All")}
                            />
                            <span className={`text-[15px] transition-colors flex-grow ${selectedCategory === "All" || !selectedCategory ? "text-primary font-medium" : "text-gray-600 group-hover:text-primary"}`}>
                                All Categories
                            </span>
                        </label>

                        {categories.map((cat) => (
                            <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group py-1">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${selectedCategory === cat.slug ? "border-primary bg-primary text-white" : "border-gray-300 group-hover:border-primary"}`}>
                                    {selectedCategory === cat.slug && <Check size={12} strokeWidth={3} />}
                                </div>
                                <input
                                    type="radio"
                                    name="category"
                                    className="hidden"
                                    checked={selectedCategory === cat.slug}
                                    onChange={() => onCategoryChange(cat.slug)}
                                />
                                <span className={`text-[15px] transition-colors flex-grow capitalize ${selectedCategory === cat.slug ? "text-primary font-medium" : "text-gray-600 group-hover:text-primary"}`}>
                                    {cat.name}
                                </span>
                                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{cat.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <div className="border-b border-gray-100 pb-6">
                <button
                    onClick={() => toggleSection('price')}
                    className="w-full flex items-center justify-between mb-4 group"
                >
                    <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-primary transition-colors">Filter By Price</h3>
                    {openSections.price ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
                </button>

                {openSections.price && (
                    <div className="px-1 animate-slideDown">
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={maxPrice}
                            onChange={(e) => onPriceChange && onPriceChange(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
                        />
                        <div className="flex items-center justify-between mt-4 text-[14px]">
                            <span className="font-medium text-gray-500">Range:</span>
                            <span className="font-bold text-primary">$0 — ${maxPrice}</span>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => toggleSection('rating')}
                    className="w-full flex items-center justify-between mb-4 group"
                >
                    <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-primary transition-colors">Filter By Rating</h3>
                    {openSections.rating ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
                </button>

                {openSections.rating && (
                    <div className="space-y-3 animate-slideDown">
                        {ratings.map((rating) => (
                            <label key={rating} className="flex items-center gap-3 cursor-pointer group py-1">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer" />
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"} transition-colors`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-400 ml-auto">{rating} Stars</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}
