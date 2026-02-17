"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus, Heart } from "lucide-react";
import ProductCard from "../Shared/ProductCard";
import SectionHeader from "../Shared/SectionHeader";
import { fetchProductById, fetchProductsByCategory } from "../../services/api";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export default function ProductDetails({ productId }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const isWishlisted = product ? isInWishlist(product.id) : false;

    useEffect(() => {
        const loadProductData = async () => {
            if (!productId) return;
            setIsLoading(true);
            const data = await fetchProductById(productId);
            if (data) {
                setProduct(data);
                const related = await fetchProductsByCategory(data.category, 6);
                setRelatedProducts(related.filter(p => p.id != data.id));
            }
            setIsLoading(false);
        };
        loadProductData();
        window.scrollTo(0, 0);
    }, [productId]);

    const handleWishlistToggle = () => {
        if (product) toggleWishlist(product);
    };

    const handleAddToCart = () => {
        if (product) addToCart(product, quantity);
    };

    if (isLoading) {
        return (
            <div className="bg-white py-10 min-h-screen">
                <div className="container animate-pulse">
                    <div className="h-4 w-48 bg-gray-100 rounded mb-8"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5 aspect-square bg-gray-50 rounded-xl"></div>
                        <div className="lg:col-span-7 space-y-6">
                            <div className="h-10 w-3/4 bg-gray-100 rounded"></div>
                            <div className="h-6 w-1/4 bg-gray-50 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div className="bg-white py-10">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-8">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="capitalize">{product.category.replace(/-/g, ' ')}</Link>
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
                                priority
                            />
                            {product.discount && (
                                <div className="absolute top-4 left-4 bg-primary text-white text-[12px] font-bold px-3 py-1 rounded-full">
                                    {product.discount}
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4">
                            {product.images?.slice(0, 4).map((img, i) => (
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
                                <span className="text-[13px] text-gray-400 ml-1">Review ({product.reviews?.length || 0})</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[32px] font-bold text-red-600">${product.price}</span>
                            {product.oldPrice && (
                                <span className="text-[20px] text-gray-400 line-through">${product.oldPrice}</span>
                            )}
                            <div className="text-[13px] text-gray-500 ml-4 font-medium">
                                Available in Stock: <span className="text-primary font-bold">{product.stock} Items</span>
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

                            <button
                                onClick={handleAddToCart}
                                className="bg-primary text-white font-bold py-4 px-12 rounded-md hover:bg-[#029a7c] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
                            >
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
                <div className="mb-16 border-t border-gray-100 max-w-4xl min-h-[275px]">
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
                            Reviews ({product.reviews?.length || 0})
                        </button>
                    </div>

                    <div className="text-[15px] text-gray-500 leading-relaxed">
                        {activeTab === "description" ? (
                            <div className="space-y-4">
                                <p>{product.description}</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {product.reviews?.length > 0 ? (
                                    product.reviews.map((review, i) => (
                                        <div key={i} className="border-b border-gray-100 pb-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="flex text-orange-400">
                                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                                </div>
                                                <span className="font-bold text-gray-800 text-sm">{review.reviewerName}</span>
                                            </div>
                                            <p className="text-gray-600">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div>No reviews yet. Be the first to review this product!</div>
                                )}
                            </div>
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
