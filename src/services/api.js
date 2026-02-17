const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit = 20, skip = 0) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
        const data = await response.json();

        return data.products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price.toFixed(2),
            oldPrice: (product.price * (1 + (product.discountPercentage / 100))).toFixed(2),
            rating: Math.round(product.rating),
            image: product.thumbnail,
            category: product.category,
            discount: `${Math.round(product.discountPercentage)}% OFF`,
            brand: product.brand || "Brand"
        }));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductsByCategory = async (category, limit = 30) => {
    try {
        let url = category && category !== "All"
            ? `${API_URL}/category/${category}`
            : API_URL;

        // Add limit to the URL
        url += (url.includes('?') ? '&' : '?') + `limit=${limit}`;

        const response = await fetch(url);
        const data = await response.json();

        return data.products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price.toFixed(2),
            oldPrice: (product.price * (1 + (product.discountPercentage / 100))).toFixed(2),
            rating: Math.round(product.rating),
            image: product.thumbnail,
            category: product.category,
            discount: `${Math.round(product.discountPercentage)}% OFF`,
            brand: product.brand || "Brand"
        }));
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        // Return full objects (slug, name, url)
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const product = await response.json();

        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price.toFixed(2),
            oldPrice: (product.price * (1 + (product.discountPercentage / 100))).toFixed(2),
            rating: Math.round(product.rating),
            image: product.thumbnail,
            images: product.images,
            category: product.category,
            discount: `${Math.round(product.discountPercentage)}% OFF`,
            brand: product.brand || "Brand",
            stock: product.stock,
            reviews: product.reviews || [],
            weight: product.weight,
            dimensions: product.dimensions,
            warranty: product.warrantyInformation,
            shipping: product.shippingInformation,
            availability: product.availabilityStatus,
            returnPolicy: product.returnPolicy,
        };
    } catch (error) {
        console.error("Error fetching product by id:", error);
        return null;
    }
};
