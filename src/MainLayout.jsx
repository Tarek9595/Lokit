import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import MainHeader from "./components/Layout/Header/MainHeader";

export default function MainLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}
