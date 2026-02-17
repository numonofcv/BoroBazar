"use client";

import React from "react";
import Image from "next/image";
import { Star, X, ChevronDown } from "lucide-react";

export default function CartItems({ items, removeItem }) {
    return (
        <div className="bg-white rounded-lg p-4 lg:p-6 mb-6">
            <h1 className="text-[20px] lg:text-[24px] font-bold text-[#212121] mb-1">Your Cart</h1>
            <p className="text-[13px] lg:text-[14px] text-gray-500 mb-6 lg:mb-8">
                There are {items.length} products in your cart
            </p>

            <div className="space-y-4 lg:space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4 sm:gap-6 py-4 lg:py-6 border-b border-gray-100 last:border-0 relative">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                            <Image
                                src={item.image.startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.image}`}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-start gap-2">
                                <div className="min-w-0">
                                    <p className="text-[11px] sm:text-[13px] text-gray-400 font-medium mb-0.5 sm:mb-1">{item.brand}</p>
                                    <h3 className="text-[14px] sm:text-[16px] font-bold text-[#212121] leading-tight mb-1 sm:mb-2 hover:text-primary transition-colors cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <div className="flex gap-0.5 mb-2 sm:mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors p-1 flex-shrink-0"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mt-2 sm:mt-0">
                                <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-200 rounded-md bg-gray-50 cursor-pointer hover:border-gray-300 transition-colors w-fit">
                                    <span className="text-[12px] sm:text-[13px] font-medium text-gray-700">Qty:{item.quantity}</span>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </div>

                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    <span className="text-[16px] sm:text-[20px] font-bold text-red-600">${item.price}</span>
                                    <span className="text-[12px] sm:text-[14px] text-gray-400 line-through">${item.oldPrice}</span>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-primary px-1.5 py-0.5 bg-primary/10 rounded uppercase">
                                        {item.discount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
