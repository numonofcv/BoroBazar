"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Facebook, Youtube, Instagram } from "lucide-react";
import Features from "./Features";

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA]">
            <Features />

            <div className="py-16 border-b border-gray-100">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Contact Us */}
                        <div className="border-r border-[#E5E7EB] p-3">
                            <h3 className="text-[18px] font-bold text-[#212121] mb-6">Contact us</h3>
                            <div className="space-y-4 text-[14px] text-gray-500">
                                <p className="leading-relaxed">Classyshop - Mega Super Store<br />507-Union Trade Centre France</p>
                                <p>sales@yourcompany.com</p>
                                <p className="text-[22px] font-bold text-primary mt-2">(+91) 9876-543-210</p>

                                <div className="flex items-center gap-4 mt-6 p-4 rounded-lg border border-gray-100 group cursor-pointer hover:border-primary transition-colors">
                                    <div className="text-primary">
                                        <MessageSquare size={28} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#212121]">Online Chat</p>
                                        <p className="text-[13px]">Get Expert Help</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products */}
                        <div>
                            <h3 className="text-[18px] font-bold text-[#212121] mb-6">Products</h3>
                            <ul className="space-y-4 text-[14px] text-gray-500">
                                {["Prices drop", "New products", "Best sales", "Contact us", "Sitemap", "Stores"].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Company */}
                        <div>
                            <h3 className="text-[18px] font-bold text-[#212121] mb-6">Our company</h3>
                            <ul className="space-y-4 text-[14px] text-gray-500">
                                {["Delivery", "Legal Notice", "Terms and conditions of use", "About us", "Secure payment", "Login"].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-[18px] font-bold text-[#212121] mb-6">Subscribe to newsletter</h3>
                            <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">
                                Subscribe to our latest newsletter to get news about special discounts.
                            </p>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:border-primary text-[14px]"
                                />
                                <button className="w-auto px-8 py-3 bg-primary text-white font-bold rounded text-[14px] uppercase tracking-wider hover:bg-[#029a7c] transition-colors cursor-pointer border-none">
                                    Subscribe
                                </button>
                                <div className="flex items-start gap-2 mt-4 cursor-pointer">
                                    <input type="checkbox" id="terms" className="mt-1 accent-primary cursor-pointer w-4 h-4" />
                                    <label htmlFor="terms" className="text-[13px] text-gray-500 cursor-pointer">
                                        I agree to the terms and conditions and the privacy policy
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-8 bg-white border-t border-gray-50">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <Facebook size={18} />, label: "Facebook" },
                                { icon: <Youtube size={18} />, label: "Youtube" },
                                { icon: <Instagram size={18} />, label: "Instagram" },
                                { icon: <div className="font-bold text-[18px] leading-none mb-0.5">P</div>, label: "Pinterest" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-100 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-[14px] text-gray-500">
                            © 2024 - Ecommerce Template
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-12 bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-[#1a1f71] font-bold">VISA</div>
                            <div className="h-8 w-12 bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-[#eb001b] font-bold">MC</div>
                            <div className="h-8 w-12 bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-[#0070ba] font-bold italic">PayPal</div>
                            <div className="h-8 w-12 bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-[#00a6e1] font-bold">AMEX</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
