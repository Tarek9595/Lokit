import LargeNav from "./LargeNav";
import Logo from "../../UI/Logo";
import SmallNav from "./SmallNav";

export default function MainHeader() {
  return (
    <header className="w-full flex justify-center items-center relative shadow-sm z-5000">
      <div className="container flex justify-between items-center px-6.25 py-4 md:px-12.5 md:py-8">
        <Logo textColor="text-darky" />
        <LargeNav />
        <SmallNav />
      </div>
    </header>
  );
}
