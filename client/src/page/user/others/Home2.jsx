import CategoriesGroup from "@/components/Home/CategoriesGroup";
import ImageSlider from "@/components/Home/ImageSlider";
import LogoSlider from "@/components/Home/LogoSlider";
import NewArrivals from "@/components/Home/NewArrivals";
import OurProducts from "@/components/Home/OurProducts";
import ReviewSlider from "@/components/Home/ReviewSlider";
import BestSellers from "@/components/Others/BestSellers";
import CategorySection from "../../../components/Home/CategoryBar";
import BannerSection from "../../../components/Home/InstaBanner"
import ShopCatogories from "@/components/Others/ShopCatogories";


export default function Home2() {
  return (
    <>
    {/* <CategorySection/> */}
    <ShopCatogories />
      <ImageSlider />
      <LogoSlider />
      <NewArrivals />
      <OurProducts />
      {/* <BestSellers /> */}
      <CategoriesGroup />
      <BannerSection/>
      <ReviewSlider />
    </>
  );
}
