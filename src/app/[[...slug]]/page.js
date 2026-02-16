import HomePage from "@/pages/HomePage"
import CartPage from "@/pages/CartPage"
import ProductListingPage from "@/pages/ProductListingPage"
import ProductDetailsPage from "@/pages/ProductDetailsPage"
import CheckoutPage from "@/pages/CheckoutPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import ForgotPasswordPage from "@/pages/ForgotPasswordPage"
import ProfilePage from "@/pages/ProfilePage"
import OrdersPage from "@/pages/OrdersPage"
import WishlistPage from "@/pages/WishlistPage"

export async function generateMetadata({ params, searchParams }) {
    const { slug } = await params
    const query = await searchParams
    const currentSlug = slug ? slug[0] : ""

    let title = "Borobazar - Online Grocery Store"

    if (!currentSlug) {
        title = "Borobazar - Home"
    } else if (currentSlug === "cart") {
        title = "Shopping Cart - Borobazar"
    } else if (currentSlug === "shop" || currentSlug === "catalog") {
        if (query?.category) {
            title = `${decodeURIComponent(query.category)} - Borobazar`
        } else {
            title = "Shop - Borobazar"
        }
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
        return <ProductListingPage />
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

    return <HomePage />
}
