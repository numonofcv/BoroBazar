"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";

const ProductCard = ({ product, imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw" }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="bg-white border border-gray-100 rounded-lg p-4 h-full flex flex-col hover:shadow-md transition-shadow group/card relative">
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

            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${product.image}`}
                    alt={product.title}
                    fill
                    sizes={imageSizes}
                    className="object-contain transform group-hover/card:scale-105 transition-transform duration-300"
                />
            </div>

            <Link href="/product">
                <h3 className="text-[15px] font-semibold text-[#212121] line-clamp-2 min-h-[44px] mb-3 hover:text-primary transition-colors cursor-pointer">
                    {product.title}
                </h3>
            </Link>

            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                    />
                ))}
            </div>

            <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[18px] font-bold text-red-600">{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-[14px] text-gray-400 line-through">{product.oldPrice}</span>
                    )}
                </div>

                <button className="w-full py-2.5 rounded-md border-2 border-[#02B290]/10 bg-white text-primary font-bold text-[14px] hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
