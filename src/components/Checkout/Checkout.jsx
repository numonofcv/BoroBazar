"use client";

import React from "react";
import AddressSelector from "./AddressSelector";
import CheckoutOrderSummary from "./CheckoutOrderSummary";

export default function Checkout() {
    return (
        <div className="bg-[#F9FAFB] py-14">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-grow">
                        <AddressSelector />
                    </div>
                    <div className="w-full lg:w-[400px] flex-shrink-0">
                        <CheckoutOrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}
