export default function CheckBox({ name }) {
  return (
    <fieldset className="fieldset bg-base-100 rounded-box w-full ">
      <label className="label flex items-center w-fit p-2 gap-1.5 ">
        <input
          type="checkbox"
          className="checkbox rounded-none checked:bg-darky
             checked:border-darky
             checked:text-white
             shadow-none w-5 h-5 peer p-none"
        />
        <span className="block pt-1 text-[12px] font-roboto text-darky font-normal uppercase peer-checked:font-semibold">
          {name}
        </span>
      </label>
    </fieldset>
  );
}
