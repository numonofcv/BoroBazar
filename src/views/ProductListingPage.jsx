"use client";

import { useSearchParams } from "next/navigation";
import ProductListing from "../components/ProductListing/ProductListing";

export default function ProductListingPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return (
        <main>
            <ProductListing initialCategory={category} />
        </main>
    );
}
