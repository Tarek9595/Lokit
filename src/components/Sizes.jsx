export default function Sizes() {
  const sizes = ["OSFA"];
  const skipNumbers = [37, 39, 41, 43, 45, 47, 49, 51];

  for (let i = 26; i <= 52; i++) {
    if (skipNumbers.includes(i)) continue;
    sizes.push(`W${i}`);
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {sizes.map((size) => (
        <label key={size} className="group cursor-pointer">
          <input type="radio" name="size" className="hidden peer" />
          <div
            className="
          btn btn-outline btn-sm w-full 
          opacity-60
          peer-checked:opacity-100
          peer-checked:border-black
          rounded-none
        "
          >
            <span className="text-[10px] group-has-[input:checked]:text-[12px]">
              {size}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
}
