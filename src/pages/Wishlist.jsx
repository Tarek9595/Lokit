import TopSection from "../components/UI/TopSection";
import SideLinks from "../components/Sections/WishlistSections/SideLinks";
import SideInfo from "../components/Sections/WishlistSections/SideInfo";

export default function Wishlist() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow flex flex-col items-center">
        <TopSection name="Wishlist" />
        <div className="container p-20 flex gap-20 justify-center font-inter">
          <SideLinks />
          <SideInfo />
        </div>
      </main>
    </div>
  );
}
