"use client";

import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Search(props) {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            console.log("Searching for:", query);
            // Example navigation: router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch(e);
        }
    };

    return (
        <div className={`relative group ${props.className || "flex-grow max-w-3xl"}`}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for products..."
                className="w-full h-12 bg-[#F6F6F6] border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.1)] rounded-md px-4 pr-12 outline-none focus:bg-white transition-all text-[15px]"
            />
            <button
                onClick={handleSearch}
                className="absolute right-1 top-1 h-10 w-10 flex items-center justify-center text-gray-400 group-focus-within:text-emerald-500 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
                <SearchIcon size={20} />
            </button>
        </div>
    );
}
