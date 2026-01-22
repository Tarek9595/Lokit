// import { Link } from "react-router-dom";
// import Filtered from "../components/Filtered";
// import Footer from "../components/Footer";
// import MainHeader from "../components/MainHeader";
// import SearchShoping from "../components/SearchShoping";
// import { LiaAngleRightSolid } from "react-icons/lia";

// export default function Search() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <MainHeader />

//       <main className="flex flex-col items-center">
//         <div className="flex flex-col gap-3 justify-between container font-light pt-10 bg-[#EDF1F3]">
//           <h1 className="uppercase font-jost text-[60px] text-darky tracking-wider">
//             search
//           </h1>
//           <div className="flex gap-1.5 font-lato text-[#3A3A3A] text-[16px]">
//             <Link to="/">
//               <span className="hover:underline">Home</span>
//             </Link>
//             <LiaAngleRightSolid />
//             <Link to="/search">
//               <span className="hover:underline">Search</span>
//             </Link>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between container">
//           <Filtered />
//           <SearchShoping />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import Filtered from "../components/Filtered";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import SearchShoping from "../components/SearchShoping";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function Search() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="grow flex flex-col items-center">
        <div className="w-full bg-[#EDF1F3] py-12 md:py-20 lg:py-28 flex justify-center">
          <div className="container flex flex-col items-center justify-center gap-3 px-5 md:px-0">
            <h1 className="uppercase font-jost text-[40px] md:text-[60px] text-darky tracking-wider leading-none">
              search
            </h1>
            <div className="flex items-center gap-1.5 font-lato text-[#3A3A3A] text-[14px] md:text-[16px]">
              <Link to="/">
                <span className="hover:underline">Home</span>
              </Link>
              <LiaAngleRightSolid className="text-[12px]" />
              <Link to="/search">
                <span className="hover:underline font-semibold">Search</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between container gap-8 py-10 px-5 md:px-0">
          <Filtered />
          <SearchShoping />
        </div>
      </main>

      <Footer />
    </div>
  );
}
