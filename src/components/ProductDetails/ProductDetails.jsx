"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, Heart } from "lucide-react";
import ProductCard from "../Shared/ProductCard";
import SectionHeader from "../Shared/SectionHeader";

const relatedProducts = [
    {
        id: 1,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/juice.png",
    },
    {
        id: 2,
        title: "Rising Crust Pizza Supreme – 31.5 oz",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/rising.png",
    },
    {
        id: 3,
        title: "Simply Orange Juice – 52 fl oz Bottle",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/simpkeOrenge.png",
    },
    {
        id: 4,
        title: "California Pizza Kitchen Margherita",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/margrate.png",
    },
    {
        id: 5,
        title: "Lay's Classic Party Size Potato Chips",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/lays.png",
    },
    {
        id: 6,
        title: "Angel Soft Toilet Paper Mega Rolls",
        price: "$25.99",
        oldPrice: "$38.10",
        rating: 4,
        image: "/PopularProducts/megarols.png",
    },
];

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlistToggle = () => {
        setIsWishlisted(!isWishlisted);
    };

    const product = {
        title: "Lay's American Style Cream & Onion Potato Chips 82 g",
        brand: "Lay's",
        price: 25.99,
        oldPrice: 38.10,
        rating: 4,
        stock: "74,853 Items",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/PopularProducts/lays.png",
        thumbnails: [
            "/PopularProducts/lays.png",
            "/PopularProducts/juice.png", // placeholders
        ]
    };

    return (
        <div className="bg-white py-10">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-8">
                    <span>Home</span>
                    <span>/</span>
                    <span>Fruits & Vegetables</span>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Left: Images */}
                    <div className="space-y-4 lg:col-span-5">
                        <div className="relative aspect-square border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain p-16"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-[12px] font-bold px-3 py-1 rounded-full">
                                10%
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {product.thumbnails.map((img, i) => (
                                <div key={i} className={`w-20 h-20 border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors ${i === 0 ? 'border-primary' : 'border-gray-200'}`}>
                                    <Image src={img} alt="thumb" width={80} height={80} className="object-contain p-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col lg:col-span-7">
                        <h1 className="text-[32px] font-bold text-[#212121] leading-tight mb-4">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-[14px] text-gray-400">Brand:</span>
                                <span className="text-[14px] font-bold text-primary">{product.brand}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className={i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"} />
                                ))}
                                <span className="text-[13px] text-gray-400 ml-1">Review (0)</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[32px] font-bold text-red-600">${product.price}</span>
                            <span className="text-[20px] text-gray-400 line-through">${product.oldPrice}</span>
                            <div className="text-[13px] text-gray-500 ml-4 font-medium">
                                Available in Stock: <span className="text-primary font-bold">{product.stock}</span>
                            </div>
                        </div>

                        <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-6 mb-10 pt-8 border-t border-gray-100">
                            <div className="flex items-center border border-gray-200 rounded-md">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="w-12 text-center font-bold text-[#212121]">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>

                            <button className="bg-primary text-white font-bold py-4 px-12 rounded-md hover:bg-[#029a7c] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer">
                                Add to Cart
                            </button>

                            <button
                                onClick={handleWishlistToggle}
                                className={`p-4 border rounded-md transition-all cursor-pointer ${isWishlisted
                                    ? "border-red-500 text-red-500 bg-red-50"
                                    : "border-gray-200 text-gray-400 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <Heart size={20} className={isWishlisted ? "fill-red-500" : ""} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-16 border-t border-gray-100 max-w-4xl min-h-[275px]
                ">
                    <div className="flex gap-8 mb-8 mt-[-1px]">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`py-4 text-[16px] font-bold transition-all border-t-2 ${activeTab === "description" ? "border-primary text-primary" : "border-transparent text-gray-400"}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`py-4 text-[16px] font-bold transition-all border-t-2 ${activeTab === "reviews" ? "border-primary text-primary" : "border-transparent text-gray-400"}`}
                        >
                            Reviews (0)
                        </button>
                    </div>

                    <div className="text-[15px] text-gray-500 leading-relaxed">
                        {activeTab === "description" ? (
                            <div className="space-y-4">
                                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        ) : (
                            <div>No reviews yet. Be the first to review this product!</div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-12">
                    <SectionHeader title="Related Products" viewAllLink="/shop" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
