"use client";

import { useSearchParams } from "next/navigation";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { Suspense } from "react";

function ProductDetailsContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    return <ProductDetails productId={id} />;
}

export default function ProductDetailsPage() {
    return (
        <main>
            <Suspense fallback={<div className="py-20 text-center">Yuklanmoqda...</div>}>
                <ProductDetailsContent />
            </Suspense>
        </main>
    );
}
