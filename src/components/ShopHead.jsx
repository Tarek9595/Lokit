export default function ShopHead() {
  return (
    <div className="w-full pb-5 text-center font-cormorant text-darky border-b-2 border-[#212a2f66] relative">
      <h1 className="lg:text-[56px] md:text-5xl text-2xl">Shop by Category</h1>
      <div className="absolute -bottom-2 left-0 w-fit flex gap-1.5 items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-darky"></div>
        <div className="w-3 h-3 rounded-full bg-darky"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-darky"></div>
        <div className="w-2 h-2 rounded-full bg-darky"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-darky"></div>
      </div>
    </div>
  );
}
