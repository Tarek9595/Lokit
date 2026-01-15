import ShopCaty from "./ShopCaty";
import ShopHead from "./ShopHead";

export default function ShopSection() {
  return (
    <section className="flex flex-col gap-12.5 p-5 md:p-10 lg:p-15 justify-center">
      <ShopHead />
      <ShopCaty />
    </section>
  );
}
