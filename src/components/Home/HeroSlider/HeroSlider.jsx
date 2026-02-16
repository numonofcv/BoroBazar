"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderData = [
    {
        id: 1,
        badge: "Weekend Discount",
        title: "Get the best quality products at the lowest prices",
        description: "We have prepared special discounts for you on organic breakfast products.",
        price: "$21.67",
        oldPrice: "$59.99",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Home-slider.png`,
        bgColor: "bg-[#F6F2EF]"
    },
    {
        id: 2,
        badge: "Fresh & Organic",
        title: "Experience the taste of fresh organic fruits",
        description: "Direct from our organic farms to your doorstep with guaranteed freshness.",
        price: "$18.50",
        oldPrice: "$25.00",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Home-slider.png`,
        bgColor: "bg-[#F6F2EF]"
    },
    {
        id: 3,
        badge: "Nature's Best",
        title: "Healthy snacks for your active lifestyle",
        description: "Nutritious and delicious snacks made with 100% natural ingredients.",
        price: "$12.99",
        oldPrice: "$19.99",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Home-slider.png`,
        bgColor: "bg-[#F6F2EF]"
    }
];

export default function HeroSlider() {
    return (
        <section className="w-full pt-4 pb-8">
            <div className="container">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-2xl overflow-hidden group"
                >
                    {sliderData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className={`${slide.bgColor} min-h-[480px] lg:h-[514px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-20 py-12 gap-8 relative bg-no-repeat bg-bottom bg-contain lg:bg-right lg:bg-[length:50%_100%]`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >

                                <div className="absolute inset-0 bg-white/80 lg:hidden pointer-events-none z-0"></div>

                                <div className="max-w-xl text-center lg:text-left z-10 relative">
                                    <span className="inline-block px-4 lg:px-8 py-1.5 lg:py-2 rounded-l-[10px] bg-gradient-to-r from-[#BAE2B0] to-transparent text-[#2B5432] text-[12px] lg:text-sm font-bold mb-4 lg:mb-6">
                                        {slide.badge}
                                    </span>
                                    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                                        {slide.title}
                                    </h1>
                                    <p className="text-sm sm:text-lg text-gray-600 mb-6 lg:mb-10 max-w-md mx-auto lg:mx-0">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <button className="bg-[#02B289] hover:bg-[#019a76] text-white px-6 py-3 lg:px-10 lg:py-5 rounded-[8px] lg:rounded-[12px] font-bold text-sm lg:text-lg transition-all flex items-center gap-2">
                                            Shop Now <span className="text-lg lg:text-xl">→</span>
                                        </button>
                                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                            <div className="flex items-center lg:items-start gap-3">
                                                <span className="text-3xl lg:text-[44px] font-[700] text-[#E52E2E] leading-none">{slide.price}</span>
                                                <span className="text-xl lg:text-[24px] text-[#222222] line-through decoration-[#E52E2E] decoration-[2px] font-[700] leading-none mt-1 lg:mt-4">{slide.oldPrice}</span>
                                            </div>
                                            <p className="text-[12px] lg:text-sm text-gray-500 font-medium mt-2">Don't miss this limited time offer.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #d1d5db;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    width: 30px;
                    border-radius: 5px;
                    background: #059669 !important;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
}
