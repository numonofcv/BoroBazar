"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../../Shared/ProductCard";
import SectionHeader from "../../Shared/SectionHeader";
import { fetchProductsByCategory } from "../../../services/api";

export default function BreakfastProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            const data = await fetchProductsByCategory("groceries");
            setProducts(data.slice(0, 6));
            setIsLoading(false);
        };
        loadProducts();
    }, []);

    return (
        <section className="py-8 bg-white">
            <div className="container">
                <SectionHeader title="Breakfast & Dairy" />
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse bg-gray-100 rounded-lg aspect-[2/3] w-full" />
                        ))}
                    </div>
                ) : products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-500 text-lg font-medium">Nonushta va sut mahsulotlari topilmadi.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
