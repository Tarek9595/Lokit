import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import Button from "./Button";
import Lang from "./Lang";

export default function LargeNav() {
  let navLg = "lg:flex lg:items-center lg:gap-10";
  let navSm = "hidden";
  let linkStyle = "text-darky text-[16px] font-montserrat font-normal ";
  return (
    <div className={`${navLg} ${navSm}`}>
      <nav className="flex items-center gap-8">
        <Link className={linkStyle} to="/">
          Home
        </Link>
        <Link className={linkStyle} to="/search">
          Search
        </Link>
        <Link className={linkStyle} to="/wishlist">
          Wishlist
        </Link>
        <Link className={linkStyle} to="/mycart">
          My Cart
        </Link>
        <Lang width="lg:w-full">
          <FaBell className="text-darky text-[20px]" />
        </Lang>
      </nav>
      <Link to="/signin">
        <Button
          className="py-5 px-12 text-[16px] font-montserrat font-normal"
          width="w-38"
          bgColor="bg-darky"
          color="text-white"
          type="submit"
          name="Sign In"
        />
      </Link>
    </div>
  );
}
