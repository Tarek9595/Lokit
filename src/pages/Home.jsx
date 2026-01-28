import About from "../components/Sections/HomeSections/About";
import Brands from "../components/Sections/HomeSections/Brands";
import Customers from "../components/Sections/HomeSections/Customers";
import HeroSection from "../components/Sections/HomeSections/HeroSection";
import Shipping from "../components/Sections/HomeSections/Shipping";
import ShopSection from "../components/Layout/ShopSection";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Layout/Header/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <HeroSection />
      <Brands />
      <ShopSection />
      <About />
      <Shipping />
      <Customers />
      <Footer />
    </>
  );
}
