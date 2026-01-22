import imgOne from "../assets/img/shop/shop-1.png";
import imgTwo from "../assets/img/shop/shop-2.png";
import imgThree from "../assets/img/shop/shop-3.png";
import imgFour from "../assets/img/shop/shop-4.png";
import imgFive from "../assets/img/shop/shop-5.png";
import imgSix from "../assets/img/shop/shop-6.png";
import imgSeven from "../assets/img/shop/shop-7.png";
import imgEight from "../assets/img/shop/shop-8.png";
import imgNine from "../assets/img/shop/shop-9.png";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Pagination from "./Pagination";

export default function SearchShoping() {
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

  const products2 = [
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

  return (
    <div className="grow flex flex-col gap-8 p-5 md:p-10 lg:p-16">
      <div className="w-full max-w-300 mx-auto">
        <label className="input input-bordered flex items-center gap-3 w-full h-12 rounded-xl border-[#9797973D]">
          <IoSearchOutline className="text-gray-400 text-[18px]" />
          <input type="text" className="grow" placeholder="Search clothes..." />
        </label>
      </div>

      <div className="w-full bg-[#4444440A] rounded-xl p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
          {products.map((el, index) => (
            <div
              key={index}
              className="w-full max-w-95 bg-white rounded-[20px] p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-full  relative bg-[#F9F9F9] rounded-xl flex justify-center items-center overflow-hidden">
                <img
                  src={el.img}
                  alt={el.catName}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 px-1">
                <div className="flex flex-col 2xl:flex-row justify-between items-start gap-2">
                  <div className="flex flex-col gap-1 order-1">
                    <h1 className="text-darky font-semibold font-montserrat text-[12px] xl:text-[18px] leading-tight truncate w-30 xl:w-40 ">
                      {el.catName}
                    </h1>
                    <p className="text-gray-400 text-sm">{el.brand}</p>
                  </div>
                  <div className="flex text-darky text-[14px] pt-1 order-2">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                  </div>
                </div>

                <div className="flex justify-between 2xl:items-center flex-col 2xl:flex-row">
                  <span className="text-darky font-bold text-[22px]">
                    ${el.price}
                  </span>
                  {el.soldOut && (
                    <span className="text-red-500 text-[10px] font-bold uppercase tracking-tight  px-2 py-1 rounded">
                      Almost Sold Out
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination />
    </div>
  );
}
