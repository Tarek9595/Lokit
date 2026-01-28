export default function Logo(props) {
  return (
    <div
      className={`font-volkhov ${props.textColor} font-normal ${
        props.width ? props.width : "text-[40px]"
      }`}
    >
      Lokit
    </div>
  );
}
