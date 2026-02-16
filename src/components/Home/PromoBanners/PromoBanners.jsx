"use client";

import React from "react";
import Link from "next/link";

const banners = [
    {
        id: 1,
        subTitle: "Only This Week",
        title: "We provide you the best quality products",
        description: "A family place for grocery",
        image: "/PromoProducts/juice.png",
        bgColor: "bg-[#F3F1ED]",
        bgPos: "right -30px center",
        bgSize: "62% auto"
    },
    {
        id: 2,
        subTitle: "Only This Week",
        title: "We make your grocery shopping more exciting",
        description: "Shine the morning...",
        image: "/PromoProducts/popcorn.png",
        bgColor: "bg-[#F3F1ED]",
        bgPos: "right -40px center",
        bgSize: "80% auto"
    },
    {
        id: 3,
        subTitle: "Only This Week",
        title: "The one supermarket that saves your money",
        description: "Breakfast made better",
        image: "/PromoProducts/fruits.png",
        bgColor: "bg-[#F3F1ED]",
        bgPos: "right -80px center",
        bgSize: "80% auto"
    }
];

export default function PromoBanners() {
    return (
        <section className="pt-2 pb-10 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className={`${banner.bgColor} rounded-[10px] py-2 lg:py-8 px-2 lg:px-4 relative overflow-hidden min-h-[200px] flex flex-col justify-center group cursor-pointer transition-all duration-300 hover:shadow-xl`}
                        >
                            {/* Background Image Layer */}
                            <div
                                className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: banner.bgPos,
                                    backgroundSize: banner.bgSize
                                }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/[0.04] group-hover:bg-black/[0.08] transition-all duration-300 pointer-events-none z-[1]" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[2]">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
                            </div>

                            <div className="max-w-[70%] z-10 relative">
                                <span className="text-[13px] font-bold text-[#E6613A]">
                                    {banner.subTitle}
                                </span>
                                <h3 className="text-[24px] font-extrabold text-[#212121] mt-3 leading-[1.2] tracking-tight">
                                    {banner.title}
                                </h3>
                                <p className="text-[14px] text-gray-400 mt-2 font-medium">
                                    {banner.description}
                                </p>
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center gap-2 bg-white text-[#212121] font-bold text-[14px] px-7 py-3 rounded-full mt-8 hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    Shop Now <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
