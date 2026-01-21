import LargeNav from "./LargeNav";
import Logo from "./Logo";
import SmallNav from "./SmallNav";

export default function MainHeader() {
  let headerStyle =
    "flex justify-between items-center px-6.25 py-4 md:px-12.5 md:py-8 relative shadow-sm z-5000";

  return (
    <header className={headerStyle}>
      <Logo textColor="text-darky" />
      <LargeNav />
      <SmallNav />
    </header>
  );
}
