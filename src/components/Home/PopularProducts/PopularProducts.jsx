"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "../../Shared/ProductCard";
import { fetchProductsByCategory, fetchCategories } from "../../../services/api";

export default function PopularProducts() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([{ name: "All", slug: "All" }]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

    useEffect(() => {
        const loadCategories = async () => {
            const apiCategories = await fetchCategories();
            setCategories([{ name: "All", slug: "All" }, ...apiCategories.slice(0, 8)]);
        };
        loadCategories();
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on category change
    }, [activeCategory]);

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            const isAll = activeCategory === "All";
            // Get correct slug for API call
            const activeCatObj = categories.find(c => c.name === activeCategory);
            const slug = isAll ? "" : (activeCatObj?.slug || activeCategory.toLowerCase());

            // Fetch 100 products for "All", but only 6 for specific categories
            const limit = isAll ? 100 : 6;
            const data = await fetchProductsByCategory(slug, limit);

            setProducts(data);
            setIsLoading(false);
        };
        loadProducts();
    }, [activeCategory, categories]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="pt-8 pb-4 bg-white mt-10">
            <div className="container">
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-[18px] sm:text-[20px] font-bold text-[#212121] leading-tight">Popular Products</h2>
                            <span className="text-[13px] sm:text-[14px] text-gray-400 mt-0.5">Do not miss the current offers</span>
                        </div>
                        <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                            <span className="flex items-center gap-1 text-[13px] font-bold whitespace-nowrap">View All <ChevronRight size={16} /></span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-6 flex-wrap pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`text-[14px] sm:text-[15px] font-semibold whitespace-nowrap transition-all relative pb-2 capitalize ${activeCategory === cat.name
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse bg-gray-100 rounded-lg aspect-[2/3] w-full" />
                        ))}
                    </div>
                ) : currentProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                            {currentProducts.map((product) => (
                                <div key={product.id} className="h-auto">
                                    <ProductCard product={product} imageSizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center gap-2 pt-4">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(1)}
                                    className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    «
                                </button>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ‹
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-9 h-9 flex items-center justify-center rounded font-bold transition-all cursor-pointer ${currentPage === i + 1
                                            ? "bg-primary text-white shadow-md shadow-primary/20"
                                            : "border border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ›
                                </button>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(totalPages)}
                                    className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    »
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="py-20 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-500 text-lg font-medium">Ushbu turkumda mahsulot topilmadi.</p>
                        <p className="text-gray-400 text-sm mt-1">Tez orada yangi mahsulotlar qo'shiladi.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
