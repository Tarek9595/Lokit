import { MdLanguage } from "react-icons/md";

import { useState } from "react";

export default function Lang(props) {
  const [lang, SetLang] = useState("En");
  const [openLang, SetOpenLang] = useState(false);
  let langStyle = `absolute bg-lightGray text-darky flex lg:items-center items-between z-50 cursor-pointer rounded lg:top-[120%] lg:-right-2 lg:flex-col lg:bottom-auto bottom-0 lg:right-auto right-13 lg:border-none border border-gray-300 ${props.width}`;

  return (
    <div className="text-darky text-[16px] font-montserrat font-normal flex relative cursor-pointer justify-between px-6 py-2 lg:p-0 lg:gap-4 lg:w-fit w-full">
      <div
        className="flex items-center gap-1.5"
        onClick={() => {
          SetOpenLang(!openLang);
        }}
      >
        <MdLanguage className="text-[19px]" />
        <span>{lang}</span>
      </div>
      <div className={openLang ? langStyle : "hidden"}>
        <span
          className="border-b border-darkyLight hover:bg-gray-200 w-full px-7 py-3 rounded"
          onClick={() => {
            SetOpenLang(!openLang);
            SetLang("En");
          }}
        >
          En
        </span>
        <span
          className="hover:bg-gray-200 w-full px-7 py-3 rounded"
          onClick={() => {
            SetOpenLang(!openLang);
            SetLang("Ar");
          }}
        >
          Ar
        </span>
      </div>
      {props.children}
    </div>
  );
}
