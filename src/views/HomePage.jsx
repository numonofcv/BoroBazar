import HeroSlider from "../components/Home/HeroSlider/HeroSlider";
import TopCategories from "../components/Home/TopCategories/TopCategories";
import PopularProducts from "../components/Home/PopularProducts/PopularProducts";
import PromoBanners from "../components/Home/PromoBanners/PromoBanners";
import LatestProducts from "../components/Home/LatestProducts/LatestProducts";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import BreakfastProducts from "../components/Home/BreakfastProducts/BreakfastProducts";

export default function HomePage() {
    return (
        <main>
            <HeroSlider />
            <TopCategories />
            <PopularProducts />
            <PromoBanners />
            <LatestProducts />
            <FeaturedProducts />
            <BreakfastProducts />
        </main>
    );
}
