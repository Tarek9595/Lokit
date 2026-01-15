export default function Button(props) {
  let mainStyle =
    "font-medium text-[18px] rounded-[10px] flex justify-center items-center font-montserrat p-3 cursor-pointer border border-darky";
  return (
    <button
      className={`${mainStyle} ${props.width} ${props.bgColor} ${props.color}`}
      type={props.type}
    >
      {props.name}
    </button>
  );
}
