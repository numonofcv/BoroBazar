"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SectionHeader = ({ title, subtext, viewAllLink = "/shop", viewAllLabel = "View All" }) => {
    return (
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#212121] leading-tight">{title}</h2>
                {subtext && (
                    <span className="text-[13px] sm:text-[14px] text-gray-400 mt-0.5">
                        {subtext}
                    </span>
                )}
            </div>
            {viewAllLink && (
                <Link href={viewAllLink} className="text-[14px] font-semibold text-gray-500 hover:text-primary flex items-center gap-1 transition-colors">
                    {viewAllLabel} <ChevronRight size={16} />
                </Link>
            )}
        </div>
    );
};

export default SectionHeader;
