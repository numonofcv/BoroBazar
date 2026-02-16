"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const navLinks = [
    "Home",
    "Fruits & Vegetables",
    "Meats & Seafood",
    "Breakfast & Dairy",
    "Breads & Bakery",
    "Beverages",
    "Frozen Foods",
    "Biscuits & Snacks",
    "Grocery & Staples"
];

export const dropdownLinks = [
    "Dietary Needs",
    "Offers",
    "New Arrivals",
    "Best Sellers"
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="hidden lg:block relative z-40">
            <div className="container">
                <nav className="flex items-center gap-5 py-3 no-scrollbar">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/shop?category=${encodeURIComponent(item)}`}
                            className="text-[17px] font-[600] text-gray-800 hover:text-primary transition-colors whitespace-nowrap"
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="relative ml-auto" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-1 text-[16px] font-[600] text-gray-800 hover:text-primary whitespace-nowrap cursor-pointer transition-colors"
                        >
                            More <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>


                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                                {dropdownLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href={`/shop?category=${encodeURIComponent(item)}`}
                                        className="block px-4 py-2 text-[15px] font-[600] text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

