import React from "react";

export default function MyInput(props) {
  const childrenArray = React.Children.toArray(props.children);
  const count = childrenArray.length;
  console.log(count);

  return (
    <div
      className={`flex flex-col gap-2 relative ${
        props.paWidth ? props.paWidth : ""
      }`}
    >
      <label className="label capitalize font-medium text-darky text-[18px]">
        {props.name}
      </label>

      <input
        type={props.type}
        className={`input placeholder:capitalize ${props.width} caret-transparent pl-12 text-[18px]`}
      />

      {count === 1 && (
        <div className="absolute text-darky text-[19px] bottom-2.5 left-2.5 flex justify-between">
          {childrenArray[0]}
        </div>
      )}

      {count > 1 && (
        <>
          <div className="absolute text-darky text-[19px] bottom-2.5 left-2.5 flex justify-between">
            {childrenArray[0]}
          </div>
          <div className="absolute text-darky text-[19px] bottom-2.5 right-2.5 flex justify-between">
            {childrenArray[1]}
          </div>
        </>
      )}
    </div>
  );
}
