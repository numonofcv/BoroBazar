"use client";

import React, { useState } from "react";
import { Filter, X } from "lucide-react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

export default function ProductListing({ initialCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [maxPrice, setMaxPrice] = useState(1000);

    React.useEffect(() => {
        if (initialCategory) {
            setSelectedCategory(initialCategory);
        } else {
            setSelectedCategory("All");
        }
    }, [initialCategory]);



    return (
        <div className="bg-white py-6 lg:py-10 min-h-screen flex flex-col">
            <div className="container flex-grow flex flex-col">
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center shadow-md shadow-primary/20"
                    >
                        {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
                        {isFilterOpen ? "Close Filters" : "Filter Products"}
                    </button>

                    {isFilterOpen && (
                        <div className="mt-4 p-5 bg-white border border-gray-100 rounded-xl shadow-lg ring-1 ring-black/5 animate-in slide-in-from-top-4 fade-in duration-300">
                            <Sidebar
                                selectedCategory={selectedCategory}
                                onCategoryChange={setSelectedCategory}
                                maxPrice={maxPrice}
                                onPriceChange={setMaxPrice}
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-10 flex-grow">
                    <div className="hidden lg:block w-[280px] flex-shrink-0">
                        <Sidebar
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            maxPrice={maxPrice}
                            onPriceChange={setMaxPrice}
                        />
                    </div>

                    <div className="flex-grow flex flex-col">
                        <ProductGrid selectedCategory={selectedCategory} maxPrice={maxPrice} />
                    </div>
                </div>
            </div>
        </div>
    );
}
