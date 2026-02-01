// import cstOne from "../../../assets/img/cst-review/cst-1.png";
// import cstTwo from "../../../assets/img/cst-review/cst-2.png";
// import { FaStar } from "react-icons/fa6";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// export default function Customers() {
//   return (
//     <div className="w-full flex justify-center items-center">
//       <div className="container py-15 flex flex-col justify-center items-center lg:gap-10 gap-20 ">
//         <h1 className="text-darky font-cormorant text-center text-3xl lg:text-[56px] tracking-wide">
//           What our customers are saying Us?
//         </h1>
//         <div className="w-full h-100 px-10 relative mb-20">
//           <div className="bg-white lg:absolute lg:w-216.25 lg:py-17.5 p-8 lg:px-12.5 flex flex-col lg:flex-row items-center gap-6 justify-between rounded-[10px] shadow-2xl lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
//             <div className="w-35 lg:w-65.75 h-35 lg:h-65.75 relative ">
//               <div className="lg:w-60 w-30 h-30 lg:h-60  bg-[#D9D9D9] absolute bottom-0"></div>
//               <div className="lg:w-60 w-30 h-30 lg:h-60  absolute right-0">
//                 <img src={cstOne} alt="cstOne" className="object-contain" />
//               </div>
//             </div>
//             <div className="w-full lg:w-105 flex flex-col gap-6">
//               <div className="flex flex-col gap-4.5 ">
//                 <p className="font-Montserrat font-normal text-[16px] lg:w-[85%] leading-7">
//                   "Great quality and fast delivery loved my order Absolutely
//                   loved my purchase ! Definitely shopping from lokit again !"
//                 </p>
//                 <div className="text-[#FCA120] test-[20px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//               </div>
//               <h1 className="text-[32px] text-darky font-medium font-Volkhov">
//                 Ahmed Ali
//               </h1>
//             </div>
//           </div>

//           <div className="bg-white absolute w-161.5 py-13 px-9.25 hidden lg:flex justify-between gap-10 rounded-[10px] shadow-2xl z-0 top-1/2 -translate-y-1/2">
//             <div className="w-49.75 h-49.75 relative">
//               <div className="w-40 h-45 bg-[#D9D9D9] absolute bottom-0"></div>
//               <div className="w-40 h-45 absolute right-0 ">
//                 <img src={cstTwo} alt="cstOne" className="object-contain" />
//               </div>
//             </div>
//             <div className="w-105 flex flex-col gap-6">
//               <div className="flex flex-col gap-4.5  ">
//                 <p className="font-Montserrat font-normal text-[16px] w-full leading-7">
//                   "Great quality and fast delivery loved my order Absolutely
//                   loved my purchase ! Definitely shopping from lokit again !"
//                 </p>
//                 <div className="text-[#FCA120] test-[16px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//               </div>
//               <h1 className="text-[24px] text-darky font-medium font-Volkhov">
//                 Sally Zain
//               </h1>
//             </div>
//           </div>

//           <div className="bg-white absolute w-161.5 py-13 px-9.25 hidden lg:flex justify-between gap-10 rounded-[10px] shadow-2xl z-0 top-1/2 right-10 -translate-y-1/2">
//             <div className="w-49.75 h-49.75 relative">
//               <div className="w-40 h-45 bg-[#D9D9D9] absolute bottom-0"></div>
//               <div className="w-40 h-45 absolute right-0">
//                 <img src={cstTwo} alt="cstOne" className="object-contain" />
//               </div>
//             </div>
//             <div className="w-105 flex flex-col gap-6">
//               <div className="flex flex-col gap-4.5  ">
//                 <p className="font-Montserrat font-normal text-[16px] w-full leading-7">
//                   "Great quality and fast delivery loved my order Absolutely
//                   loved my purchase ! Definitely shopping from lokit again !"
//                 </p>
//                 <div className="text-[#FCA120] test-[16px] flex gap-2 pb-6 border-b border-[#212A2F5E] w-[50%]">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//               </div>
//               <h1 className="text-[24px] text-darky font-medium font-Volkhov">
//                 Sally Zain
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="w-full flex justify-center items-center gap-5">
//           <div className="w-12.5 h-12.5 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer group text-darky text-[16px] flex justify-center items-center ">
//             <IoIosArrowBack className="opacity-50 group-hover:opacity-100" />
//           </div>
//           <div className="w-12.5 h-12.5 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer group text-darky text-[16px] flex justify-center items-center ">
//             <IoIosArrowForward className="opacity-50 group-hover:opacity-100" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import cstOne from "../../../assets/img/cst-review/cst-1.png";
import cstTwo from "../../../assets/img/cst-review/cst-2.png";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Customers() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Ali",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 2,
      name: "Sally Zain",
      img: cstTwo,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 3,
      name: "Sayed Hassan",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 4,
      name: "Mona Hassan",
      img: cstTwo,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 5,
      name: "Omar Ali",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-darky font-cormorant text-center text-4xl lg:text-[56px] mb-16 tracking-wide">
          What our customers are saying Us?
        </h1>

        <div className="w-full relative">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0, // لغينا الميل خالص عشان الكروت تبقى مستوية
              stretch: 0, // خليناها صفر عشان التداخل يبقى طبيعي بناءً على العرض
              depth: 150, // عمق بسيط عشان الكروت اللي ورا تصغر شوية
              modifier: 2.5, // رفعنا الموديفاير عشان نوزع الكروت الجانبية بعيد عن المركز
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            className="mySwiper !py-14"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="!w-[80vw] lg:!w-[50vw]">
                {/* 50vw تعني نصف عرض الشاشة بالضبط في الـ Desktop */}
                {({ isActive }) => (
                  <div
                    className={`bg-white flex flex-col items-center gap-6 p-8 lg:p-12 rounded-[20px] shadow-2xl transition-all duration-500 border border-gray-100
                    ${isActive ? "opacity-100 scale-100" : "opacity-60 scale-75 blur-[0.5px]"}`}
                  >
                    {/* صورة العميل بالفريم الرمادي */}
                    <div className="relative w-32 h-32 lg:w-48 lg:h-48 shrink-0">
                      <div className="absolute -bottom-2 -left-2 w-full h-full bg-[#D9D9D9] z-0 rounded-lg"></div>
                      <img
                        src={rev.img}
                        alt={rev.name}
                        className="relative z-10 w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* المحتوى النصي */}
                    <div className="flex flex-col gap-4 text-center">
                      <div className="flex justify-center gap-1 text-[#FCA120] text-xl">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="font-montserrat text-sm lg:text-[18px] text-gray-600 leading-relaxed italic px-4">
                        "{rev.text}"
                      </p>
                      <div className="w-24 h-[2px] bg-[#FCA120] mx-auto my-2"></div>
                      <h2 className="text-2xl lg:text-[32px] text-darky font-medium font-Volkhov">
                        {rev.name}
                      </h2>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التحكم */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button className="prev-btn w-14 h-14 rounded-full border border-gray-200 flex justify-center items-center cursor-pointer hover:bg-darky hover:text-white transition-all shadow-md bg-white">
              <IoIosArrowBack size={24} />
            </button>
            <button className="next-btn w-14 h-14 rounded-full border border-gray-200 flex justify-center items-center cursor-pointer hover:bg-darky hover:text-white transition-all shadow-md bg-white">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
