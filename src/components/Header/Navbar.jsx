"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { fetchCategories } from "../../services/api";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                // Map API categories to a simpler format
                const formattedCats = data.map(cat => ({
                    name: cat.name,
                    slug: cat.slug
                }));
                setCategories(formattedCats);
            } catch (error) {
                console.error("Failed to load categories:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadCategories();

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Split categories: first 8 in the bar, rest in dropdown
    const visibleCategories = categories.slice(0, 9);
    const hiddenCategories = categories.slice(9);

    return (
        <div className="hidden lg:block relative z-40 bg-white border-b border-gray-50">
            <div className="container">
                <nav className="flex items-center no-scrollbar">
                    {/* Home Link */}
                    <Link
                        href="/"
                        className="group relative px-4 py-4 text-[15px] font-bold text-secondary/90 hover:text-primary transition-all duration-300 whitespace-nowrap"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Dynamic Categories */}
                    {isLoading ? (
                        <div className="flex gap-6 px-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-4 w-20 bg-gray-100 animate-pulse rounded" />
                            ))}
                        </div>
                    ) : (
                        visibleCategories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/shop?category=${cat.slug}`}
                                className="group relative px-4 py-4 text-[15px] font-bold text-secondary/80 hover:text-primary transition-all duration-300 whitespace-nowrap capitalize"
                            >
                                {cat.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))
                    )}

                    {/* More Dropdown */}
                    {!isLoading && hiddenCategories.length > 0 && (
                        <div className="relative ml-auto" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`group flex items-center gap-1.5 px-5 py-4 text-[15px] font-bold whitespace-nowrap cursor-pointer transition-all duration-300 rounded-t-lg ${isOpen ? 'text-primary bg-primary/5' : 'text-secondary/80 hover:text-primary'}`}
                            >
                                More
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute right-0 mt-[1px] w-[300px] bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300 ring-1 ring-black/5">
                                    {/* Arrow Indicator */}
                                    <div className="absolute -top-1.5 right-10 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45 z-0"></div>

                                    <div className="relative z-10 max-h-[320px] overflow-y-auto no-scrollbar px-2">
                                        <div className="grid grid-cols-1 gap-0.5">
                                            {hiddenCategories.map((cat) => (
                                                <Link
                                                    key={cat.slug}
                                                    href={`/shop?category=${cat.slug}`}
                                                    className="group flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] font-semibold text-gray-600 hover:text-primary hover:bg-primary/5 transition-all capitalize"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <span>{cat.name}</span>
                                                    <ChevronDown size={14} className="opacity-0 -rotate-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-gray-50 px-6">
                                        <Link
                                            href="/shop"
                                            className="text-[13px] font-bold text-primary hover:underline flex items-center justify-center gap-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Barcha maxsulotlar →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

