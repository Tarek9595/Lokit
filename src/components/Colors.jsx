export default function Colors() {
  const colors = [
    "#292A2D",
    "#F3ECE2",
    "#24426A",
    "#18574A",
    "#666689",
    "#C2BEB6",
    "#AAABA7",
    "#971E34",
    "#CBA13E",
    "#73513C",
    "#DAB1B1",
    "#2B9FA7",
  ];

  return (
    <div className="grid grid-cols-7 gap-1">
      {colors.map((color) => (
        <label key={color} className="cursor-pointer">
          <input type="radio" name="size" className="hidden peer" />
          <div
            className={`
          btn btn-outline  w-[85%] h-6
          border-2
          border-transparent     
          peer-checked:border-black
          rounded-none
          hover:bg-transparent
          p-1
        `}
          >
            <div
              className="w-[95%] h-[95%]"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </label>
      ))}
    </div>
  );
}
