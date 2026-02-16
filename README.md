# Borobazar - Online Grocery & Food Store

## 🚀 Overview
Borobazar is a modern, responsive e-commerce application built with **Next.js 16** and **Tailwind CSS**. It provides a seamless shopping experience for groceries and food products, featuring a clean UI, dynamic product filtering, and an optimized mobile interface.

## 🛠 Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Slider:** [Swiper.js](https://swiperjs.com/)

## ✨ Key Features

### 📱 Responsive Design
- Fully optimized for mobile, tablet, and desktop screens.
- **Mobile Navigation:** Smooth side-drawer menu with expandable categories.
- **Touch-Friendly Sliders:** Horizontal scrolling for categories and products on mobile.

### 🏠 Homepage
- **Hero Slider:** Interactive banner with autoplay, custom responsive backgrounds, and mobile-optimized text overlays.
- **Top Categories:** Horizontal scrollable list on mobile, grid layout on desktop.
- **Popular Products:** Tab-based product showcase with edge-to-edge mobile scrolling.

### 🛍 Product Listing
- **Advanced Filtering:** Filter products by **Category**, **Price Range**, and **Star Rating**.
- **Sorting:** Sort options (e.g., Name A-Z).
- **Dynamic Grid:** Responsive product grid adjusting columns based on screen size.
- **Pagination:** Clean, centered pagination controls.

### 🛒 Shopping Functionality
- **Cart Management:** Add items to cart, view summaries.
- **Wishlist:** Save favorite items for later.
- **Product Details:** Dedicated pages for full product information.

### 🔧 Technical Highlights
- **Dynamic Metadata:** Automatically updates browser tab titles based on the current route and category (e.g., "Shopping Cart - Borobazar", "Offers - Borobazar").
- **Hydration Mismatch Fixes:** Deterministic rendering for server/client consistency.
- **Performance:** Optimized image loading with `next/image`.
- **Clean Codebase:** Production-ready code structure with comments removed.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router (Layouts, Routing)
│   ├── [[...slug]]/     # Dynamic catch-all route for pages
│   ├── globals.css      # Global styles and Tailwind directives
│   └── layout.js        # Root layout definition
├── components/          # Reusable UI Components
│   ├── Auth/            # Login, Register forms
│   ├── Cart/            # Cart page components
│   ├── Footer/          # Site footer
│   ├── Header/          # Navbar, Search, Mobile Menu
│   ├── Home/            # Homepage sections (HeroSlider, TopCategories, PopularProducts)
│   ├── ProductListing/  # Sidebar, ProductGrid
│   ├── Shared/          # ProductCard, Buttons
│   └── ...
├── pages/               # Page implementations (Logic extracted from app directory)
│   ├── HomePage.jsx
│   ├── ProductListingPage.jsx
│   └── ...
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/numonofcv/BoroBazar.git
    cd BoroBazar
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🤝 Contribution
Feel free to fork this project and submit pull requests. Any contributions to improve the UI or functionality are welcome!

---
---

# Borobazar - Onlayn Oziq-ovqat Do'koni (O'zbekcha)

## 🚀 Umumiy Ma'lumot
Borobazar - bu **Next.js 16** va **Tailwind CSS** yordamida yaratilgan zamonaviy, responsiv elektron tijorat ilovasi. U oziq-ovqat mahsulotlari uchun qulay xarid qilish tajribasini, toza foydalanuvchi interfeysi (UI), dinamik mahsulot filtrlash va optimallashtirilgan mobil interfeysni taqdim etadi.

## 🛠 Texnologiyalar
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Kutubxonasi:** [React 19](https://react.dev/)
- **Stil:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Ikonkalar:** [Lucide React](https://lucide.dev/)
- **Slayder:** [Swiper.js](https://swiperjs.com/)

## ✨ Asosiy Xususiyatlar

### 📱 Responsiv Dizayn
- Mobil, planshet va kompyuter ekranlari uchun to'liq optimallashtirilgan.
- **Mobil Navigatsiya:** Kategoriyalarni kengaytirish imkoniyati bilan silliq yon menyu (drawer).
- **Qulay Slayderlar:** Mobil qurilmalarda kategoriyalar va mahsulotlar uchun gorizontal surish (scroll) imkoniyati.

### 🏠 Bosh Sahifa
- **Hero Slayder:** Avtomatik o'ynash, moslashuvchan fon rasmlari va mobil uchun matn qatlami (overlay) bilan interaktiv banner.
- **Top Kategoriyalar:** Mobilda gorizontal suriladigan ro'yxat, kompyuterda setka (grid) ko'rinishi.
- **Mashhur Mahsulotlar:** Tablarga asoslangan mahsulotlar ko'rgazmasi, mobilda chekkagacha surish imkoniyati bilan.

### 🛍 Mahsulotlar Ro'yxati
- **Kengaytirilgan Filtrlash:** Mahsulotlarni **Kategoriya**, **Narx Oralig'i** va **Reyting** bo'yicha saralash.
- **Saralash:** Tartiblash opsiyalari (masalan, Nomi A-Z).
- **Dinamik Setka:** Ekran o'lchamiga qarab ustunlar sonini o'zgartiradigan responsiv mahsulotlar jadvali.
- **Sahifalash (Pagination):** Toza va markazlashtirilgan sahifalash tugmalari.

### 🛒 Xarid qilish Imkoniyatlari
- **Savatni Boshqarish:** Mahsulotlarni savatga qo'shish, xulosa ko'rish.
- **Sevimlilar:** Mahsulotlarni keyinchalik ko'rish uchun saqlash.
- **Mahsulot Tafsilotlari:** To'liq ma'lumot uchun alohida mahsulot sahifalari.

### 🔧 Texnik Yechimlar
- **Dinamik Metadata:** Joriy yo'nalish va kategoriyaga qarab brauzer tabidagi nomni avtomatik yangilash (masalan, "Shopping Cart - Borobazar", "Offers - Borobazar").
- **Hydration Mismatch Fixes:** Server va klient o'rtasidagi nomutanosiblikni bartaraf etish (tasodifiy raqamlar o'rniga aniq mantiq).
- **Ishlash Tezligi:** `next/image` yordamida rasmlarni optimallashtirilgan yuklash.
- **Toza Kod Bazasi:** Ishlab chiqarishga tayyor (production-ready) kod tuzilmasi, ortiqcha izohlar olib tashlangan.

## 📂 Loyiha Tuzilmasi

```
src/
├── app/                 # Next.js App Router (Layoutlar, Routing)
│   ├── [[...slug]]/     # Dinamik sahifalar uchun yo'nalish
│   ├── globals.css      # Global stillar va Tailwind sozlamalari
│   └── layout.js        # Bosh layout
├── components/          # Qayta ishlatiladigan UI komponentlar
│   ├── Auth/            # Kirish, Ro'yxatdan o'tish shakllari
│   ├── Cart/            # Savat sahifasi komponentlari
│   ├── Footer/          # Sayt futer qismi
│   ├── Header/          # Navbar, Qidiruv, Mobil Menyu
│   ├── Home/            # Bosh sahifa qismlari (HeroSlider, TopCategories va h.k.)
│   ├── ProductListing/  # Saydbar, ProductGrid
│   ├── Shared/          # ProductCard, Tugmalar
│   └── ...
├── pages/               # Sahifa mantiqlari (app papkasidan import qilinadi)
│   ├── HomePage.jsx
│   ├── ProductListingPage.jsx
│   └── ...
```

## 🚀 Boshlash (O'rnatish)

1.  **Repozitoriyni klonlash:**
    ```bash
    git clone https://github.com/your-username/borobazar.git
    cd borobazar
    ```

2.  **Kutubxonalarni o'rnatish:**
    ```bash
    npm install
    # yoki
    yarn install
    ```

3.  **Dasturni ishga tushirish:**
    ```bash
    npm run dev
    ```

4.  **Brauzerda ochish:**
    Ilovani ko'rish uchun [http://localhost:3000](http://localhost:3000) manziliga o'ting.

---
*Built with ❤️ for the Modern Web.*