import { useState } from "react";
import imgOne from "../assets/img/shop/shop-1.png";
import imgTwo from "../assets/img/shop/shop-2.png";
import imgThree from "../assets/img/shop/shop-3.png";
import imgFour from "../assets/img/shop/shop-4.png";
import imgFive from "../assets/img/shop/shop-5.png";
import imgSix from "../assets/img/shop/shop-6.png";
import imgSeven from "../assets/img/shop/shop-7.png";
import imgEight from "../assets/img/shop/shop-8.png";
import imgNine from "../assets/img/shop/shop-9.png";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

import {} from "react-icons/io";

export default function ShopCaty() {
  const [likedItems, setLikedItems] = useState({});

  const products = [
    {
      catName: "Nike Women’s Tracksuit",
      brand: "Nike",
      price: "95.50",
      rate: 5,
      soldOut: false,
      img: imgOne,
    },
    {
      catName: "Roller Rabbit",
      brand: "Zara",
      price: "980.00",
      rate: 4,
      soldOut: false,
      img: imgTwo,
    },
    {
      catName: "Roller Rabbit",
      brand: "Zara",
      price: "300.50",
      rate: 4,
      soldOut: false,
      img: imgThree,
    },
    {
      catName: "Roller Rabbit",
      brand: "Gucci",
      price: "30.500",
      rate: 5,
      soldOut: false,
      img: imgFour,
    },
    {
      catName: "Roller Rabbit",
      brand: "Zara",
      price: "200.00",
      rate: 5,
      soldOut: false,
      img: imgFive,
    },
    {
      catName: "Roller Rabbit",
      brand: "Nike",
      price: "100.00",
      rate: 4,
      soldOut: true,
      img: imgSix,
    },
    {
      catName: "Nike Women’s Tracksuit",
      brand: "Nike",
      price: "95.50",
      rate: 5,
      soldOut: false,
      img: imgSeven,
    },
    {
      catName: "Roller Rabbit",
      brand: "Zara",
      price: "980.00",
      rate: 4,
      soldOut: false,
      img: imgEight,
    },
    {
      catName: "Roller Rabbit",
      brand: "Zara",
      price: "300.50",
      rate: 4,
      soldOut: false,
      img: imgNine,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Unisex",
    "Kids",
    "Sports Wear",
  ];

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="flex flex-col gap-12.5">
      <div className="flex flex-wrap justify-center gap-8 mt-10">
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 place-items-center">
          {products.map((el, index) => {
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
