// import { useState } from "react";
// import { CgMathMinus, CgMathPlus } from "react-icons/cg";

// export default function SearchFilter({ filterName, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className={`collapse ${isOpen ? "collapse-open" : "collapse-close"}collapse w-[95%] md:w-[80%] lg:w-full`}
//     >
//       <input
//         type="checkbox"
//         checked={isOpen}
//         onChange={() => setIsOpen(!isOpen)}
//       />
//       <div className="collapse-title pb-1 pr-1 flex justify-between ">
//         <span className="block font-oswald font-normal text-xs md:text-2xl tracking-wide capitalize grow cursor-pointer">
//           {filterName}
//         </span>
//         <div className="relative w-6 h-6">
//           <CgMathPlus
//             className={`absolute inset-0 text-darky text-xs lg:text-xl transition-all duration-300 ease-in-out
//       ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
//     `}
//           />

//           <CgMathMinus
//             className={`absolute inset-0 text-darky text-xs lg:text-xl transition-all duration-300 ease-in-out
//       ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
//     `}
//           />
//         </div>
//       </div>
//       <div className="collapse-content text-sm pt-1">
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

export default function SearchFilter({ filterName, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`collapse ${isOpen ? "collapse-open" : "collapse-close"} w-[95%] md:w-[80%] lg:w-full`}
    >
      <div
        className="collapse-title p-0 min-h-fit flex justify-between items-center cursor-pointer mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-oswald font-normal text-lg lg:text-xl tracking-wide capitalize text-darky">
          {filterName}
        </span>
        <div className="relative w-5 h-5 flex items-center justify-center">
          <CgMathPlus
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            } text-lg`}
          />
          <CgMathMinus
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            } text-lg`}
          />
        </div>
      </div>

      <div className="collapse-content p-0">
        <div className="flex flex-col gap-1 pb-4">{children}</div>
      </div>
    </div>
  );
}
