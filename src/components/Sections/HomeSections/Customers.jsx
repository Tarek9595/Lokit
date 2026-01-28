import cstOne from "../../../assets/img/cst-review/cst-1.png";
import cstTwo from "../../../assets/img/cst-review/cst-2.png";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Customers() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container py-15 flex flex-col justify-center items-center lg:gap-10 gap-20 ">
        <h1 className="text-darky font-cormorant text-center text-3xl lg:text-[56px] tracking-wide">
          What our customers are saying Us?
        </h1>
        <div className="w-full h-100 px-10 relative mb-20">
          <div className="bg-white lg:absolute lg:w-216.25 lg:py-17.5 p-8 lg:px-12.5 flex flex-col lg:flex-row items-center gap-6 justify-between rounded-[10px] shadow-2xl lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="w-35 lg:w-65.75 h-35 lg:h-65.75 relative ">
              <div className="lg:w-60 w-30 h-30 lg:h-60  bg-[#D9D9D9] absolute bottom-0"></div>
              <div className="lg:w-60 w-30 h-30 lg:h-60  absolute right-0">
                <img src={cstOne} alt="cstOne" className="object-contain" />
              </div>
            </div>
            <div className="w-full lg:w-105 flex flex-col gap-6">
              <div className="flex flex-col gap-4.5 ">
                <p className="font-Montserrat font-normal text-[16px] lg:w-[85%] leading-7">
                  "Great quality and fast delivery loved my order Absolutely
                  loved my purchase ! Definitely shopping from lokit again !"
                </p>
                <div className="text-[#FCA120] test-[20px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <h1 className="text-[32px] text-darky font-medium font-Volkhov">
                Ahmed Ali
              </h1>
            </div>
          </div>

          <div className="bg-white absolute w-161.5 py-13 px-9.25 hidden lg:flex justify-between gap-10 rounded-[10px] shadow-2xl z-0 top-1/2 -translate-y-1/2">
            <div className="w-49.75 h-49.75 relative">
              <div className="w-40 h-45 bg-[#D9D9D9] absolute bottom-0"></div>
              <div className="w-40 h-45 absolute right-0 ">
                <img src={cstTwo} alt="cstOne" className="object-contain" />
              </div>
            </div>
            <div className="w-105 flex flex-col gap-6">
              <div className="flex flex-col gap-4.5  ">
                <p className="font-Montserrat font-normal text-[16px] w-full leading-7">
                  "Great quality and fast delivery loved my order Absolutely
                  loved my purchase ! Definitely shopping from lokit again !"
                </p>
                <div className="text-[#FCA120] test-[16px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <h1 className="text-[24px] text-darky font-medium font-Volkhov">
                Sally Zain
              </h1>
            </div>
          </div>

          <div className="bg-white absolute w-161.5 py-13 px-9.25 hidden lg:flex justify-between gap-10 rounded-[10px] shadow-2xl z-0 top-1/2 right-10 -translate-y-1/2">
            <div className="w-49.75 h-49.75 relative">
              <div className="w-40 h-45 bg-[#D9D9D9] absolute bottom-0"></div>
              <div className="w-40 h-45 absolute right-0">
                <img src={cstTwo} alt="cstOne" className="object-contain" />
              </div>
            </div>
            <div className="w-105 flex flex-col gap-6">
              <div className="flex flex-col gap-4.5  ">
                <p className="font-Montserrat font-normal text-[16px] w-full leading-7">
                  "Great quality and fast delivery loved my order Absolutely
                  loved my purchase ! Definitely shopping from lokit again !"
                </p>
                <div className="text-[#FCA120] test-[16px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <h1 className="text-[24px] text-darky font-medium font-Volkhov">
                Sally Zain
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5">
          <div className="w-12.5 h-12.5 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer group text-darky text-[16px] flex justify-center items-center ">
            <IoIosArrowBack className="opacity-50 group-hover:opacity-100" />
          </div>
          <div className="w-12.5 h-12.5 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer group text-darky text-[16px] flex justify-center items-center ">
            <IoIosArrowForward className="opacity-50 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
