export default function ShopHead() {
  const dots = [
    "w-3.5 h-3.5",
    "w-3 h-3",
    "w-2.5 h-2.5",
    "w-2 h-2",
    "w-1.5 h-1.5",
  ];

  return (
    <div className="w-full pb-5 text-center font-cormorant text-darky border-b-2 border-[#212a2f66] relative">
      <h1 className="lg:text-[56px] md:text-5xl text-2xl tracking-wide">
        Shop by Category
      </h1>
      <div className="absolute -bottom-2.25 left-0 flex gap-1.5 items-center  pr-4">
        {dots.map((size, index) => (
          <div key={index} className={`${size} rounded-full bg-darky`}></div>
        ))}
      </div>
    </div>
  );
}
