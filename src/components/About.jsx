// import img from "../assets/img/about.png";

// export default function About() {
//   return (
//     <section className="flex flex-col gap-12.5 bg-darky p-15 justify-center items-center text-white">
//       <div className="w-full pb-5 text-center font-cormorant  border-b border-white relative">
//         <h1 className="lg:text-[56px] md:text-5xl text-2xl tracking-wide">
//           About Lokit
//         </h1>
//         <div className="absolute -bottom-2 right-0 w-fit flex gap-1.5 items-center">
//           <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
//           <div className="w-2 h-2 rounded-full bg-white"></div>
//           <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
//           <div className="w-3 h-3 rounded-full bg-white"></div>
//           <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
//         </div>
//       </div>
//       <div className="w-full h-100 flex justify-between items-center gap-23.25">
//         <div className="flex flex-col h-81.5 w-162.5 gap-8 lg:gap-12.5">
//           <p className="font-montserrat text-xs lg:text-[16px] leading-6">
//             At Lokit, we believe fashion should be effortless, expressive, and
//             accessible to everyone.
//             <br /> Our mission is to bring you stylish, high-quality pieces that
//             blend comfort, confidence, and modern design.
//             <br /> Every collection is carefully curated to suit your lifestyle
//             — whether you're refreshing your daily wardrobe, dressing up for a
//             special moment, or exploring new trends.
//             <br /> With a strong commitment to quality, fair prices, and a
//             seamless shopping experience, Lokit is here to make looking good
//             feel easy and enjoyable.
//           </p>
//           <div className="text-[16px] font-poppins w-55 h-15 py-2 flex justify-center items-center border-2 border-white cursor-pointer">
//             Contact Us
//           </div>
//         </div>
//         <div className="hidden lg:block w-full lg:w-1/2 aspect-3/2">
//           <img
//             src={img}
//             alt="Fashion Model"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import img from "../assets/img/about.png";

export default function About() {
  return (
    <section className="bg-darky text-white flex justify-center items-center py-20">
      <div className="container px-6 md:px-12.5 flex flex-col gap-12.5">
        <div className="w-full pb-5 text-center font-cormorant border-b border-[#ffffff33] relative">
          <h1 className="lg:text-[56px] md:text-5xl text-2xl tracking-wide">
            About Lokit
          </h1>
          <div className="absolute -bottom-2 right-0 w-fit flex gap-1.5 items-center bg-darky px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p className="font-montserrat text-sm lg:text-[18px] leading-relaxed opacity-80">
              At Lokit, we believe fashion should be effortless, expressive, and
              accessible to everyone.
              <br />
              <br />
              Our mission is to bring you stylish, high-quality pieces that
              blend comfort, confidence, and modern design.
              <br />
              <br />
              Every collection is carefully curated to suit your lifestyle.
            </p>
            <div className="text-[16px] font-poppins w-48 h-12 flex justify-center items-center border-2 border-white cursor-pointer hover:bg-white hover:text-darky transition-all">
              Contact Us
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img
              src={img}
              alt="Fashion Model"
              className="w-full max-w-137.5 ml-auto h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
