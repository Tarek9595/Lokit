export default function Button(props) {
  let mainStyle =
    "font-medium text-[18px] rounded-[10px] flex justify-center items-center font-montserrat p-3 cursor-pointer border border-darky transition-all opacity-100";
  return (
    <button
      className={`${mainStyle} ${props.width} ${props.bgColor} ${props.color} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        props.name
      )}
    </button>
  );
}
