"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const addresses = [
    {
        id: 1,
        type: "Home",
        name: "RINKU VERMA",
        address: "H No 222 Street No 6 Adarsh Mohalla Delhi",
        city: "India Delhi near govt school",
        phone: "+919873798202"
    },
    {
        id: 2,
        type: "Home",
        name: "RINKU VERMA",
        address: "H No 222 Street No 6 Adarsh Mohalla Delhi",
        city: "India Delhi near govt school",
        phone: "+919873798202"
    }
];

export default function AddressSelector() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div className="bg-white rounded-lg border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[20px] font-bold text-[#212121]">Select Delivery Address</h2>
                <button className="flex items-center gap-2 text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded-md font-bold text-[14px] hover:bg-primary hover:text-white transition-all cursor-pointer">
                    <Plus size={18} /> Add New Address
                </button>
            </div>

            <div className="space-y-4">
                {addresses.map((addr) => (
                    <div
                        key={addr.id}
                        onClick={() => setSelectedId(addr.id)}
                        className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${selectedId === addr.id ? "border-primary bg-[#F4F9F8]" : "border-gray-100 bg-[#F9FBFB]"}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${selectedId === addr.id ? "border-primary" : "border-gray-300"}`}>
                                {selectedId === addr.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[14px] text-gray-500">{addr.type}</span>
                                    <button className="text-primary font-bold text-[13px] uppercase hover:underline">Edit</button>
                                </div>
                                <h3 className="font-bold text-[#212121] mb-1">{addr.name}</h3>
                                <p className="text-[14px] text-gray-600 leading-relaxed">
                                    {addr.address}<br />
                                    {addr.city}<br />
                                    {addr.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
