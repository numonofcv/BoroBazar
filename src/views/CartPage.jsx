"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import CartItems from "../components/Cart/CartItems";
import CartSummary from "../components/Cart/CartSummary";



import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cartItems, removeFromCart, cartTotal } = useCart();

    return (
        <div className="bg-[#F4F6F8] min-h-screen py-4 lg:py-10">
            <div className="container">
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <CartItems items={cartItems} removeItem={removeFromCart} />
                        </div>
                        <div className="lg:col-span-1">
                            <CartSummary subtotal={cartTotal} />
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg p-12 text-center border border-gray-100">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <X className="text-gray-300" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sizning savatchangiz bo'sh</h2>
                        <p className="text-gray-500 mb-8">Hozircha savatchangizda hech qanday mahsulot yo'q.</p>
                        <Link href="/shop" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all">
                            Xarid qilishni boshlash
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
