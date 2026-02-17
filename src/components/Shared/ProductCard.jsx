"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw" }) => {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const isWishlisted = isInWishlist(product.id);

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        // Optional: Show a success toast or animation
    };

    return (
        <div className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 h-full flex flex-col hover:shadow-md transition-shadow group/card relative">
            {/* Wishlist Heart Icon - Shows on Hover */}
            <button
                onClick={handleWishlistToggle}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-all z-10 border border-gray-200 opacity-0 group-hover/card:opacity-100 cursor-pointer"
            >
                <Heart
                    size={16}
                    className={`transition-colors ${isWishlisted
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600 hover:text-red-500"
                        }`}
                />
            </button>

            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md flex items-center justify-center p-10 sm:p-2">
                <div className="relative w-full h-full">
                    <Image
                        src={product.image.startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${product.image}`}
                        alt={product.title}
                        fill
                        sizes={imageSizes}
                        className="object-contain transform group-hover/card:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            <Link href={`/product?id=${product.id}`}>
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-[#212121] line-clamp-2 min-h-[36px] sm:min-h-[44px] mb-2 sm:mb-3 hover:text-primary transition-colors cursor-pointer">
                    {product.title}
                </h3>
            </Link>

            <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={12}
                        className={i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                    />
                ))}
            </div>

            <div className="mt-auto">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 sm:mb-4">
                    <span className="text-[16px] sm:text-[18px] font-bold text-red-600">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-[12px] sm:text-[14px] text-gray-400 line-through">${product.oldPrice}</span>
                    )}
                </div>

                <button
                    onClick={handleAddToCart}
                    className="w-full py-2 sm:py-2.5 rounded-md border-2 border-[#02B290]/10 bg-white text-primary font-bold text-[12px] sm:text-[14px] hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
