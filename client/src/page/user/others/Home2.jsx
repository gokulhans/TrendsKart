import CategoriesGroup from "@/components/Home/CategoriesGroup";
import ImageSlider from "@/components/Home/ImageSlider";
import LogoSlider from "@/components/Home/LogoSlider";
import NewArrivals from "@/components/Home/NewArrivals";
import OurProducts from "@/components/Home/OurProducts";
import ReviewSlider from "@/components/Home/ReviewSlider";

export default function Home2() {
  return (
    <>
      <ImageSlider />
      <LogoSlider />
      <NewArrivals />
      <OurProducts />
      <CategoriesGroup />
      <ReviewSlider />
    </>
  );
}
