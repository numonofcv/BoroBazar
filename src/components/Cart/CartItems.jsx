"use client";

import React from "react";
import Image from "next/image";
import { Star, X, ChevronDown } from "lucide-react";

export default function CartItems({ items, removeItem }) {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            <h1 className="text-[24px] font-bold text-[#212121] mb-1">Your Cart</h1>
            <p className="text-[14px] text-gray-500 mb-8">
                There are {items.length} products in your cart
            </p>

            <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0 relative group">
                        <div className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.image}`}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[13px] text-gray-400 font-medium mb-1">{item.brand}</p>
                                    <h3 className="text-[16px] font-bold text-[#212121] leading-tight mb-2 hover:text-primary transition-colors cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <div className="flex gap-0.5 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 cursor-pointer hover:border-gray-300 transition-colors">
                                    <span className="text-[13px] font-medium text-gray-700">Qty:{item.quantity}</span>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-[20px] font-bold text-red-600">${item.price}</span>
                                    <span className="text-[14px] text-gray-400 line-through">${item.oldPrice}</span>
                                    <span className="text-[12px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">
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
