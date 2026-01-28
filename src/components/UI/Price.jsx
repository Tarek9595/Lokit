import { useState } from "react";

export default function Price() {
  const [value, setValue] = useState(2500);
  const max = 5000;

  const percent = (value / max) * 100;

  return (
    <div className="price-wrapper">
      <div className="price-values flex justify-between font-roboto text-[14px] font-medium">
        <span>0 EGP</span>
        <span>{value} EGP</span>
      </div>

      <input
        type="range"
        min="0"
        max={max}
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="price-slider"
        style={{
          background: `linear-gradient(
            to right,
            #000 ${percent}%,
            #cfcfcf ${percent}%
          )`,
        }}
      />
    </div>
  );
}
