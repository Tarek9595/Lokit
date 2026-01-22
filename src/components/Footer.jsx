import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-darky flex items-center justify-center">
      <div className={` text-white text-8xl lg:py-11 lg:px-18 p-7 container`}>
        <div className="flex justify-between border-b border-[#ffffff1a] pb-8.75 items-center">
          <Logo className="text-white" />
          <div className="hidden lg:flex gap-10 ">
            <Link
              to="/"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              Search
            </Link>
            <Link
              to="/wishlist"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              Wishlist
            </Link>
            <Link
              to="/mycart"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              My cart
            </Link>
            <Link
              to="/signin"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="font-normal font-montserrat text-[16px] opacity-50 hover:opacity-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <p className="pt-5 text-[12px] font-normal font-montserrat opacity-70">
          Copyright © Lokit 2025 . All Rights Reseved.
        </p>
      </div>
    </div>
  );
}
