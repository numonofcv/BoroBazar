"use client";

import React from "react";
import Image from "next/image";

const orderItems = [
    {
        id: 1,
        title: "Fortune Sunlite Refi...",
        qty: 1,
        price: 99,
        image: "/PopularProducts/juice.png"
    },
    {
        id: 2,
        title: "Fortune Sunlite Refi...",
        qty: 1,
        price: 99,
        image: "/PopularProducts/rising.png"
    },
    {
        id: 3,
        title: "Fortune Sunlite Refi...",
        qty: 1,
        price: 99,
        image: "/PopularProducts/lays.png"
    },
    {
        id: 4,
        title: "Fortune Sunlite Refi...",
        qty: 1,
        price: 99,
        image: "/PopularProducts/megarols.png"
    }
];

export default function CheckoutOrderSummary() {
    return (
        <div className="bg-white rounded-lg border border-gray-100 p-6 sticky top-24">
            <h2 className="text-[20px] font-bold text-[#212121] mb-6">Your Order</h2>

            <div className="flex justify-between border-b border-gray-100 pb-3 mb-4 text-[14px] font-bold text-gray-500 uppercase tracking-tight">
                <span>Product</span>
                <span>Subtotal</span>
            </div>

            <div className="space-y-4 mb-8">
                {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 border border-gray-100 rounded-md overflow-hidden bg-gray-50 flex-shrink-0">
                                <Image src={item.image} alt={item.title} width={64} height={64} className="object-contain p-1" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-[14px] font-bold text-[#212121] truncate">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 mt-1">Qty : {item.qty}</p>
                            </div>
                        </div>
                        <span className="font-bold text-[#212121]">${item.price}</span>
                    </div>
                ))}
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-md hover:bg-[#029a7c] transition-colors text-[16px] uppercase tracking-wide cursor-pointer shadow-lg shadow-primary/20">
                Checkout
            </button>
        </div>
    );
}
