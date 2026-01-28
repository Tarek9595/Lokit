import React from "react";
import { useField } from "formik";

export default function MyInput({ children, label, paWidth, width, ...props }) {
  const [field, meta] = useField(props);
  const childrenArray = React.Children.toArray(children);
  const count = childrenArray.length;

  return (
    <div className={`flex flex-col gap-2 ${props.paWidth || ""}`}>
      <label className="label capitalize font-medium text-darky text-[18px]">
        {props.label || props.name}
      </label>

      <div className="relative w-full flex items-center">
        <input
          {...field}
          {...props}
          className={`input placeholder:capitalize ${props.width} pl-12 pr-10 text-[18px] h-[55px] w-full
            ${meta.touched && meta.error ? "border-red-500" : "border-[#212A2F29]"}`}
        />

        {count >= 1 && (
          <div className="absolute left-4 flex items-center justify-center text-darky text-[20px] pointer-events-none">
            {childrenArray[0]}
          </div>
        )}

        {count > 1 && (
          <div className="absolute right-4 flex items-center justify-center text-darky text-[20px] cursor-pointer">
            {childrenArray[1]}
          </div>
        )}
      </div>

      <div className="h-5">
        {meta.touched && meta.error && (
          <span className="text-red-500 text-sm block">{meta.error}</span>
        )}
      </div>
    </div>
  );
}
