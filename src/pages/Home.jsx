import About from "../components/Sections/HomeSections/About";
import Brands from "../components/Sections/HomeSections/Brands";
import Customers from "../components/Sections/HomeSections/Customers";
import HeroSection from "../components/Sections/HomeSections/HeroSection";
import Shipping from "../components/Sections/HomeSections/Shipping";
import ShopSection from "../components/Layout/ShopSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <ShopSection />
      <About />
      <Shipping />
      <Customers />
    </>
  );
}
