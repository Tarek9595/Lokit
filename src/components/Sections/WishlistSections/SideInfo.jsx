import { Outlet } from "react-router-dom";
import { useActiveInfo } from "../../../Store";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();

  return (
    <div className=" grow p-3 flex flex-col gap-14">
      <h1 className="tracking-wide font-semibold text-[16px]">
        {activeInfo?.name || "Wishlist"}
      </h1>
      <div className="flex flex-col gap-16 h-dvh overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
