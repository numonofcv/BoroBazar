"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import WishlistCard from "../components/Wishlist/WishlistCard";

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "100 Percent Apple Juice – 64 fl oz Bottle",
            brand: "100%",
            image: "/FuturedProducts/futuredProduct1.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 4,
            reviews: 128,
            inStock: true
        },
        {
            id: 2,
            name: "Rising Crust Pizza Supreme – 31.5 oz",
            brand: "Rising Crust",
            image: "/PopularProducts/lays.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 3,
            reviews: 256,
            inStock: true
        },
        {
            id: 3,
            name: "Simply Orange Juice – 52 fl oz Bottle",
            brand: "Simply",
            image: "/LastProducts/lastProduct3.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 3,
            reviews: 89,
            inStock: true
        },
        {
            id: 4,
            name: "California Pizza Kitchen Margherita",
            brand: "California",
            image: "/BreaksfastProducts/breaksfastProduct2.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 4,
            reviews: 145,
            inStock: true
        },
        {
            id: 5,
            name: "Lay's Classic Party Size Potato Chips",
            brand: "Lay's",
            image: "/PopularProducts/lays.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 4,
            reviews: 320,
            inStock: true
        },
        {
            id: 6,
            name: "Angel Soft Toilet Paper Mega Rolls",
            brand: "Angel Soft",
            image: "/LastProducts/lastProduct1.png",
            price: 25.99,
            originalPrice: 30.10,
            discount: 0,
            rating: 4,
            reviews: 180,
            inStock: true
        }
    ]);

    const handleRemoveItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const handleAddToCart = (item) => {
        alert(`${item.name} added to cart!`);
    };

    const handleAddAllToCart = () => {
        const inStockItems = wishlistItems.filter(item => item.inStock);
        if (inStockItems.length > 0) {
            alert(`${inStockItems.length} items added to cart!`);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-12">
            <div className="container max-w-6xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">My Wishlist</h1>
                            <p className="text-sm text-gray-500">
                                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
                            </p>
                        </div>
                        {wishlistItems.length > 0 && (
                            <button
                                onClick={handleAddAllToCart}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm"
                            >
                                <ShoppingCart size={18} />
                                Add All to Cart
                            </button>
                        )}
                    </div>
                </div>

                {/* Wishlist Items */}
                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {wishlistItems.map((item) => (
                            <WishlistCard
                                key={item.id}
                                item={item}
                                onRemove={handleRemoveItem}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Heart size={48} className="text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h3>
                        <p className="text-gray-500 mb-6">
                            Start adding items you love to your wishlist!
                        </p>
                        <Link
                            href="/shop"
                            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}

                {/* Continue Shopping */}
                {wishlistItems.length > 0 && (
                    <div className="mt-8 text-center">
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
                        >
                            ← Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
