// export default function CheckBox({ name }) {
//   return (
//     <fieldset className="fieldset bg-base-100 rounded-box w-full ">
//       <label className="label flex items-center md:w-fit p-2 gap-1.5 ">
//         <input
//           type="checkbox"
//           className="checkbox rounded-none checked:bg-darky
//              checked:border-darky
//              checked:text-white
//              shadow-none w-5 h-5 peer p-none"
//         />
//         <span className="block pt-1 text-[10px] lg:text-[12px] font-roboto text-darky font-normal uppercase peer-checked:font-semibold">
//           {name}
//         </span>
//       </label>
//     </fieldset>
//   );
// }
export default function CheckBox({ groupName, value, onChange, checked }) {
  const id = `cb-${groupName}-${value.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="flex items-center w-full md:w-fit p-1 gap-1.5 group">
      <input
        id={id}
        type="checkbox"
        name={groupName}
        value={value}
        onChange={onChange}
        checked={checked}
        className="checkbox rounded-none border-2 border-[#C4C4C4] 
                   checked:bg-darky checked:text-white checked:border-darky 
                   shadow-none w-5 h-5 peer cursor-pointer"
      />
      <label
        htmlFor={id}
        className="pt-1 text-[10px] lg:text-[12px] font-roboto text-darky 
                   font-normal uppercase peer-checked:font-bold 
                   cursor-pointer select-none group-hover:text-black transition-all"
      >
        {value}
      </label>
    </div>
  );
}
