import About from "../components/About";
import Brands from "../components/Brands";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MainHeader from "../components/MainHeader";
import Shipping from "../components/Shipping";
import ShopSection from "../components/ShopSection";

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
