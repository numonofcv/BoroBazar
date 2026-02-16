"use client";

import React from "react";
import Link from "next/link";

export default function CartSummary({ subtotal }) {
    return (
        <div className="bg-white rounded-lg p-6 sticky top-24">
            <h2 className="text-[20px] font-bold text-[#212121] mb-6">Cart Totals</h2>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[15px]">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-bold text-red-600">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-bold text-[#212121]">Free</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                    <span className="text-gray-600">Estimate for</span>
                    <span className="font-bold text-[#212121]">India</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[18px]">
                    <span className="font-bold text-[#212121]">Total</span>
                    <span className="font-bold text-red-600">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
            </div>

            <Link href="/checkout">
                <button className="w-full bg-primary text-white font-bold py-4 rounded-md hover:bg-[#029a7c] transition-colors text-[16px] uppercase tracking-wide cursor-pointer shadow-lg shadow-primary/20">
                    Next
                </button>
            </Link>
        </div>
    );
}
