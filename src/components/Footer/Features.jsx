"use client";

import React from "react";
import { Truck, RotateCcw, ShieldCheck, Gift, Headphones } from "lucide-react";

const featureList = [
    {
        icon: <Truck size={32} strokeWidth={1.5} />,
        title: "Free Shipping",
        description: "For all Orders Over $100"
    },
    {
        icon: <RotateCcw size={32} strokeWidth={1.5} />,
        title: "30 Days Returns",
        description: "For an Exchange Product"
    },
    {
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: "Secured Payment",
        description: "Payment Cards Accepted"
    },
    {
        icon: <Gift size={32} strokeWidth={1.5} />,
        title: "Special Gifts",
        description: "Our First Product Order"
    },
    {
        icon: <Headphones size={32} strokeWidth={1.5} />,
        title: "Support 24/7",
        description: "Contact us Anytime"
    }
];

export default function Features() {
    return (
        <section className="py-12 bg-[#FAFAFA]  border-b border-[#E5E7EB]">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {featureList.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="text-gray-700 group-hover:text-primary mb-5 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-[17px] font-bold text-[#212121] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-gray-500 font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
