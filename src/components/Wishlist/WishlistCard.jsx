"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, X, ShoppingCart } from "lucide-react";

export default function WishlistCard({ item, onRemove, onAddToCart }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all relative">
            {/* Remove Button */}
            <button
                onClick={() => onRemove(item.id)}
                className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 hover:text-red-500 transition-all z-10 border border-gray-200 cursor-pointer"
            >
                <X size={12} />
            </button>

            {/* Image Section */}
            <Link href="/product" className="block">
                <div className="relative aspect-square bg-gray-50 p-6">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.image}`}
                        alt={item.name}
                        fill
                        className="object-contain hover:scale-105 transition-transform"
                    />

                    {/* Out of Stock Overlay */}
                    {!item.inStock && (
                        <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
                            <span className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded text-xs font-medium">
                                Out of Stock
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Content Section */}
            <div className="p-4">
                {/* Product Name */}
                <Link href="/product">
                    <h3 className="font-normal text-sm text-gray-800 mb-3 line-clamp-2 hover:text-primary transition-colors min-h-[40px]">
                        {item.name}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={
                                i < Math.floor(item.rating)
                                    ? "fill-orange-400 text-orange-400"
                                    : "fill-gray-200 text-gray-200"
                            }
                        />
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-800">${item.price}</span>
                    {item.originalPrice > item.price && (
                        <span className="text-xs text-gray-400 line-through">
                            ${item.originalPrice}
                        </span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => onAddToCart(item)}
                    disabled={!item.inStock}
                    className={`w-full py-2.5 rounded-md font-medium transition-all flex items-center justify-center gap-2 text-sm ${item.inStock
                        ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
        </div>
    );
}
