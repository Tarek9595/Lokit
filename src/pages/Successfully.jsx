import Lang from "../components/Lang";
import Logo from "../components/Logo";
import Checked from "../assets/CheckPadge.svg";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Successfully() {
  return (
    <div className="w-full h-dvh flex items-center px-6 md:px-16 flex-col ">
      <div className="w-full py-8 container">
        <Lang width="w-25" />
      </div>
      <div className="container rounded-r-[30px] flex flex-col justify-center items-center border border-[#9797973D] gap-15 p-5">
        <Logo width="text-[67px]" />
        <div className="w-full flex flex-col justify-center items-center gap-7">
          <div>
            <img src={Checked} />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 text-darky">
            <h1 className="text-[32px] ">successfully!</h1>
            <p className="text-lg text-center md:text-left md:text-[24px] opacity-50">
              You have successfully registered in our Lokit and start working in
              it .
            </p>
          </div>
          <Link to="/" className="w-[80%] lg:w-[20%]">
            <Button
              width="w-full"
              bgColor="bg-darky"
              color="text-white"
              name="Let's Start"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
