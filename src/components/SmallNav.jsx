import Button from "./Button";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import Lang from "./Lang";
import { FaBell } from "react-icons/fa";

export default function SmallNav() {
  let menuStyle =
    "absolute top-full right-14 bg-lightGray flex flex-col items-center py-6 shadow-xl z-50 min-w-62.5";
  let linkStyle = "text-darky text-[16px] font-montserrat font-normal";

  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className="lg:hidden w-fit grow flex justify-end">
      <AiOutlineBars
        className="text-5xl cursor-pointer"
        onClick={() => {
          setisMenuOpen(!isMenuOpen);
        }}
      />

      <div className={`${menuStyle} + ${isMenuOpen ? "" : "hidden"}`}>
        <nav className="flex lg:gap-8 gap-4 flex-col w-full items-center">
          <Link
            className={`${linkStyle} w-full border-b border-darkyLight px-6 py-2`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${linkStyle} w-full border-b border-darkyLight px-6 py-2`}
            to="/search"
          >
            Search
          </Link>
          <Link
            className={`${linkStyle} w-full border-b border-darkyLight px-6 py-2`}
            to="/wishlist"
          >
            Wishlist
          </Link>
          <Link
            className={`${linkStyle}  border-b border-darkyLight px-6 py-2 w-full`}
            to="/mycart"
          >
            My Cart
          </Link>
          <Lang width="lg:w-full">
            <FaBell className="text-darky text-[20px]" />
          </Lang>
        </nav>
        <Link to="/signin" className="w-[90%] mt-8">
          <Button
            className="py-5 px-12 text-[16px] font-montserrat font-normal 
              "
            width="w-full"
            bgColor="bg-darky"
            color="text-white"
            type="submit"
            name="Sign In"
          />
        </Link>
      </div>
    </div>
  );
}
