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
import { IoSearchOutline } from "react-icons/io5";

export default function SearchShoping() {
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

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="grow flex flex-col items-center gap-8 p-5 md:p-24">
      <div className="w-full">
        <label className="input input-bordered flex items-center gap-3 w-full h-12 rounded-xl">
          <IoSearchOutline className="text-gray-400 text-[18px]" />
          <input type="text" className="grow" placeholder="Search clothes..." />
        </label>
      </div>
      <div className="flex flex-col gap-12.5">
        <div className="w-full h-dvh overflow-auto bg-[#4444440A] grid lg:grid-cols-1 xl:grid-cols-2 place-items-center gap-12.5">
          {products.map((el, index) => {
            return (
              <div
                key={index}
                className="lg:w-100 h-96.25 bg-white rounded-[10px] py-3.75 px-6.25 flex flex-col gap-3"
              >
                <div className="w-full h-61 relative">
                  <img src={el.img} alt="girl" className="object-contain" />
                  <div
                    className="w-8 h-8 rounded-full bg-white flex justify-center items-center absolute top-2 right-7 shadow-md cursor-pointer"
                    onClick={() => toggleLike(index)}
                  >
                    {likedItems[index] ? (
                      <IoMdHeart className="text-darky text-[20px]" />
                    ) : (
                      <IoIosHeartEmpty className="text-darky text-[20px]" />
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                  <div className="w-[95%] flex justify-between  ">
                    <div className="flex flex-col gap-2.5">
                      <h1 className="text-darky font-medium font-montserrat text-[20px]  w-45 truncate">
                        {el.catName}
                      </h1>
                      <p className="text-gray-400 text-sm">{el.brand}</p>
                    </div>
                    <div className="text-[16px] flex gap-1  text-darky w-fit h-fit ">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </div>
                  </div>
                  <div className="w-[95%] flex justify-between items-center font-montserrat">
                    <span className="text-darky font-medium text-[24px]">
                      ${el.price}
                    </span>
                    {el.soldOut ? (
                      <span className="text-red-600 font-normal text-[12px] tracking-wide">
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
