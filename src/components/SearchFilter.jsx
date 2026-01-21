import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

export default function SearchFilter({ filterName, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse bg-base-100">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="collapse-title pb-1 pr-1 flex items-center">
        <span className="block font-oswald font-normal text-2xl tracking-wide capitalize grow cursor-pointer">
          {filterName}
        </span>
        <div className="relative w-6 h-6">
          <CgMathPlus
            className={`absolute inset-0 text-darky text-xl transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
    `}
          />

          <CgMathMinus
            className={`absolute inset-0 text-darky text-xl transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
    `}
          />
        </div>
      </div>
      <div className="collapse-content text-sm pt-1">
        <div>{children}</div>
      </div>
    </div>
  );
}
