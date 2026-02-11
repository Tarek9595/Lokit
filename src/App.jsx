import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import MyCart from "./pages/MyCart";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Successfully from "./pages/Successfully";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import Validate from "./pages/Validate";
import Reset from "./pages/Reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import WishlistInfo from "./components/Sections/WishlistSections/SideInfoComponents/WishlistInfo";
import OrdersInfo from "./components/Sections/WishlistSections/SideInfoComponents/OrdersInfo";
import AdressInfo from "./components/Sections/WishlistSections/SideInfoComponents/AdressInfo";
import PasswordInfo from "./components/Sections/WishlistSections/SideInfoComponents/PasswordInfo";
import AccountInfo from "./components/Sections/WishlistSections/SideInfoComponents/AccountInfo";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/wishlist" element={<Wishlist />}>
              <Route index element={<WishlistInfo />} />
              <Route path="orders" element={<OrdersInfo />} />
              <Route path="address" element={<AdressInfo />} />
              <Route path="password" element={<PasswordInfo />} />
              <Route path="account" element={<AccountInfo />} />
            </Route>
            <Route path="/mycart" element={<MyCart />}></Route>
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/success" element={<Successfully />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
