import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import Button from "../../UI/Button";
import Lang from "../../UI/Lang";

export default function LargeNav() {
  let navLg = "lg:flex lg:items-center lg:gap-10";
  let navSm = "hidden";

  return (
    <div className={`${navLg} ${navSm}`}>
      <nav className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[16px] font-montserrat font-normal pb-0.5 transition-all ${
              isActive
                ? "text-darky border-b-2 border-darky font-semibold"
                : "text-gray-500 hover:text-darky"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `text-[16px] font-montserrat font-normal pb-0.5 transition-all ${
              isActive
                ? "text-darky border-b-2 border-darky font-semibold"
                : "text-gray-500 hover:text-darky"
            }`
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `text-[16px] font-montserrat font-normal pb-0.5 transition-all ${
              isActive
                ? "text-darky border-b-2 border-darky font-semibold"
                : "text-gray-500 hover:text-darky"
            }`
          }
        >
          Wishlist
        </NavLink>
        <NavLink
          to="/mycart"
          className={({ isActive }) =>
            `text-[16px] font-montserrat font-normal pb-0.5 transition-all ${
              isActive
                ? "text-darky border-b-2 border-darky font-semibold"
                : "text-gray-500 hover:text-darky"
            }`
          }
        >
          My Cart
        </NavLink>
        <Lang width="lg:w-full">
          <FaBell className="text-darky text-[20px]" />
        </Lang>
      </nav>
      <NavLink to="/signin">
        <Button
          className="py-5 px-12 text-[16px] font-montserrat font-normal"
          width="w-38"
          bgColor="bg-darky"
          color="text-white"
          type="submit"
          name="Sign In"
        />
      </NavLink>
    </div>
  );
}
