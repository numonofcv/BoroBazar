"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, User, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Search from "./Search";
import Navbar, { navLinks, dropdownLinks } from "./Navbar";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="w-full bg-white sticky top-0 z-40 shadow-sm">
            <div className="border-b border-gray-100">
                <div className="container py-3 lg:py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">

                        <div className="flex items-center gap-3 lg:gap-8 flex-shrink-0">
                            <button
                                className="lg:hidden p-1 -ml-1 text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={26} />
                            </button>

                            <Link href="/">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
                                    alt="BoroBazar"
                                    width={180}
                                    height={45}
                                    className="w-[120px] sm:w-[140px] lg:w-[180px] h-auto object-contain"
                                    priority
                                />
                            </Link>
                        </div>


                        <div className="hidden lg:block flex-1 max-w-2xl mx-auto px-4">
                            <Search className="w-full" />
                        </div>


                        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                            {!isLoggedIn ? (
                                <Link href="/login" className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-gray-700 hover:text-primary transition-colors">
                                    <User size={20} />
                                    Kirish
                                </Link>
                            ) : (
                                <Link href="/profile" className="hidden lg:block" title="My Profile">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
                                        <User size={18} />
                                    </div>
                                </Link>
                            )}

                            <div className="flex items-center gap-4 sm:gap-5">
                                <Link href="/wishlist" className="relative group">
                                    <Heart size={24} className="text-gray-700 group-hover:text-primary transition-colors" />
                                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">5</span>
                                </Link>
                                <Link href="/cart" className="relative group">
                                    <ShoppingBag size={24} className="text-gray-700 group-hover:text-primary transition-colors" />
                                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
                                </Link>
                            </div>
                        </div>


                        <div className="w-full lg:hidden mt-1">
                            <Search className="w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block border-b border-gray-50">
                <Navbar />
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />


                    <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`} alt="BoroBazar" width={130} height={35} className="object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>


                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                            <div className="space-y-1">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-all font-medium text-[15px]"
                                >
                                    Home
                                </Link>


                                <Link
                                    href="/shop"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-all font-medium text-[15px]"
                                >
                                    Product
                                </Link>


                                <div>
                                    <button
                                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-all font-medium text-[15px]"
                                    >
                                        Categories
                                        <ChevronDown size={18} className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="bg-gray-50/50 rounded-lg mx-2 mt-1 mb-2 px-2 py-2 space-y-0.5 animate-in slide-in-from-top-1">
                                            {navLinks.filter(item => item !== "Home").map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/shop?category=${encodeURIComponent(item)}`}
                                                    className="block px-3 py-2.5 rounded-md text-gray-600 hover:text-primary hover:bg-white transition-all text-sm"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {isLoggedIn ? (
                                    <Link
                                        href="/profile"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-all font-medium text-[15px]"
                                    >
                                        My Profile
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-all font-medium text-[15px]"
                                    >
                                        Kirish
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all text-sm font-medium"
                >
                    {isLoggedIn ? "Logout (Test)" : "Login (Test)"}
                </button>
            </div>
        </header>
    );
}
