import LargeNav from "./LargeNav";
import Logo from "./Logo";
import SmallNav from "./SmallNav";

export default function MainHeader() {
  let headerStyle =
    "flex justify-between items-center px-12.5 py-8 relative shadow-sm z-5000";

  return (
    <header className={headerStyle}>
      <Logo textColor="text-darky" />
      <LargeNav />
      <SmallNav />
    </header>
  );
}
