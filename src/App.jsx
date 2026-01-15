import Home from "./pages/Home";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import MyCart from "./pages/MyCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Successfully from "./pages/Successfully";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import Validate from "./pages/Validate";
import Reset from "./pages/Reset";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/mycart" element={<MyCart />}></Route>
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
