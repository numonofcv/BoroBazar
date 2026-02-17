"use client";

import React, { useState } from "react";
import CartItems from "../components/Cart/CartItems";
import CartSummary from "../components/Cart/CartSummary";

const initialCartItems = [
    {
        id: 1,
        brand: "Fortune",
        title: "Fortune Sunlite Refined Sunflower Oil 1 L",
        price: 25.99,
        oldPrice: 38.10,
        discount: "14% OFF",
        rating: 5,
        image: "/PopularProducts/juice.png",
        quantity: 1,
    },
    {
        id: 2,
        brand: "Zandu",
        title: "Chyavanprashad With No Added Sugar 900 gm",
        price: 25.99,
        oldPrice: 38.10,
        discount: "14% OFF",
        rating: 5,
        image: "/PopularProducts/rising.png",
        quantity: 1,
    },
    {
        id: 3,
        brand: "Gemini",
        title: "Gemini Refined Sunflower Oil 1 L",
        price: 25.99,
        oldPrice: 38.10,
        discount: "14% OFF",
        rating: 5,
        image: "/PopularProducts/simpkeOrenge.png",
        quantity: 1,
    },
    {
        id: 4,
        brand: "Lay's",
        title: "Lay's American Style Cream & Onion Potato Chips 82 g",
        price: 25.99,
        oldPrice: 38.10,
        discount: "14% OFF",
        rating: 5,
        image: "/PopularProducts/lays.png",
        quantity: 1,
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="bg-[#F4F6F8] min-h-screen py-4 lg:py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <CartItems items={cartItems} removeItem={removeItem} />
                    </div>
                    <div className="lg:col-span-1">
                        <CartSummary subtotal={subtotal} />
                    </div>
                </div>
            </div>
        </div>
    );
}
