import { useState } from "react";
import { products } from "../data";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

import {} from "react-icons/io";

export default function ShopCaty() {
  const [likedItems, setLikedItems] = useState({});

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [...new Set(products.map((p) => p.category))];
  console.log(categories);

  const filteredProducts =
    activeCategory === "All"
      ? products // لو "الكل" رجع المصفوفة الأصلية كلها
      : products.filter((product) => product.category === activeCategory); // لو قسم معين فلتر عليه

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="flex flex-col gap-12.5">
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-8 py-4 rounded-[10px] text-lg transition-all duration-300 cursor-pointer ${
              activeCategory === "All"
                ? "bg-[#212A2F] text-white shadow-2xl -translate-y-1"
                : "bg-[#F0F1F2] text-[#8A8A8A] hover:bg-gray-200"
            }`}
          >
            All Products
          </button>
        </div>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
              px-8 py-4 rounded-[10px] text-lg transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "bg-[#212A2F] text-white shadow-2xl -translate-y-1" // Active Style (Lifted)
                  : "bg-[#F0F1F2] text-[#8A8A8A] hover:bg-gray-200" // Inactive Style
              }
            `}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="w-full bg-[#4444440A] py-10">
        <div className="container h-[160dvh] overflow-auto mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 place-items-center">
          {filteredProducts.map((el, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-87.5 bg-white rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full h-75 relative bg-[#F9F9F9] rounded-lg overflow-hidden">
                  <img
                    src={el.img}
                    alt={el.catName}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="w-8 h-8 rounded-full bg-white flex justify-center items-center absolute top-2 right-2 shadow-md cursor-pointer"
                    onClick={() => toggleLike(index)}
                  >
                    {likedItems[index] ? (
                      <IoMdHeart className="text-darky text-[20px]" />
                    ) : (
                      <IoIosHeartEmpty className="text-darky text-[20px]" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-darky font-semibold font-montserrat text-[18px] leading-tight">
                        {el.catName}
                      </h1>
                      <p className="text-gray-400 text-sm">{el.brand}</p>
                    </div>
                    <div className="flex text-darky text-sm">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-darky font-bold text-[22px]">
                      ${el.price}
                    </span>
                    {el.soldOut ? (
                      <span className="text-red-500 text-[11px] font-medium uppercase tracking-tighter">
                        Almost Sold Out
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
