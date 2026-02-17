import { Suspense } from "react"
import { notFound } from "next/navigation"
import CartPage from "@/views/CartPage"
import ProductListingPage from "@/views/ProductListingPage"
import ProductDetailsPage from "@/views/ProductDetailsPage"
import CheckoutPage from "@/views/CheckoutPage"
import LoginPage from "@/views/LoginPage"
import RegisterPage from "@/views/RegisterPage"
import ForgotPasswordPage from "@/views/ForgotPasswordPage"
import ProfilePage from "@/views/ProfilePage"
import OrdersPage from "@/views/OrdersPage"
import WishlistPage from "@/views/WishlistPage"

export async function generateStaticParams() {
    return [
        { slug: ['cart'] },
        { slug: ['shop'] },
        { slug: ['catalog'] },
        { slug: ['product'] },
        { slug: ['checkout'] },
        { slug: ['login'] },
        { slug: ['register'] },
        { slug: ['forgot-password'] },
        { slug: ['profile'] },
        { slug: ['orders'] },
        { slug: ['wishlist'] },
    ];
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const currentSlug = slug ? slug[0] : ""

    let title = "Borobazar - Online Grocery Store"

    if (currentSlug === "cart") {
        title = "Shopping Cart - Borobazar"
    } else if (currentSlug === "shop" || currentSlug === "catalog") {
        title = "Shop - Borobazar"
    } else if (currentSlug === "product") {
        title = "Product Details - Borobazar"
    } else if (currentSlug === "checkout") {
        title = "Checkout - Borobazar"
    } else if (currentSlug === "login") {
        title = "Login - Borobazar"
    } else if (currentSlug === "register") {
        title = "Register - Borobazar"
    } else if (currentSlug === "forgot-password") {
        title = "Forgot Password - Borobazar"
    } else if (currentSlug === "profile") {
        title = "My Profile - Borobazar"
    } else if (currentSlug === "orders") {
        title = "My Orders - Borobazar"
    } else if (currentSlug === "wishlist") {
        title = "Wishlist - Borobazar"
    }

    return {
        title,
        description: "Fresh products delivered to your door."
    }
}

export default async function Page({ params }) {
    const { slug } = await params
    const currentSlug = slug ? slug[0] : ""

    if (currentSlug === "cart") {
        return <CartPage />
    }

    if (currentSlug === "shop" || currentSlug === "catalog") {
        return (
            <Suspense fallback={<div>Loading Products...</div>}>
                <ProductListingPage />
            </Suspense>
        )
    }

    if (currentSlug === "product") {
        return <ProductDetailsPage />
    }

    if (currentSlug === "checkout") {
        return <CheckoutPage />
    }

    if (currentSlug === "login") {
        return <LoginPage />
    }

    if (currentSlug === "register") {
        return <RegisterPage />
    }

    if (currentSlug === "forgot-password") {
        return <ForgotPasswordPage />
    }

    if (currentSlug === "profile") {
        return <ProfilePage />
    }

    if (currentSlug === "orders") {
        return <OrdersPage />
    }

    if (currentSlug === "wishlist") {
        return <WishlistPage />
    }

    return notFound();
}
