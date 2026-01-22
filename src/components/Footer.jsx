import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-darky flex items-center justify-center">
      <div className={` text-white text-8xl lg:py-11 lg:px-18 p-7 container`}>
        <div className="flex justify-between border-b border-[#ffffff1a] pb-8.75 items-center">
          <Logo className="text-white" />
          <div className="hidden lg:flex gap-10 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              Wishlist
            </NavLink>
            <NavLink
              to="/mycart"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              My cart
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `text-white text-[16px] font-montserrat font-normal pb-1 transition-all duration-300 ${
                  isActive
                    ? "opacity-100 border-b-2 border-white font-semibold"
                    : "opacity-50 hover:opacity-100"
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
        <p className="pt-5 text-[12px] font-normal font-montserrat opacity-70">
          Copyright © Lokit 2025 . All Rights Reseved.
        </p>
      </div>
    </div>
  );
}
