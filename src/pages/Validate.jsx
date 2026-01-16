import Lang from "../components/Lang";
import Logo from "../components/Logo";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import MyForm from "../components/MyForm";
import Button from "../components/Button";
import MyInput from "../components/MyInput";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import MyCarousel from "../components/MyCarousel";
import Otp from "../components/Otp";

export default function ForgetPass() {
  return (
    <div className="w-full h-dvh flex items-center lg:px-16 px-2 flex-col">
      <div className="container w-full py-8 ">
        <Lang width="w-25" />
      </div>
      <div className=" container w-full rounded-r-[30px] flex border border-[#9797973D]">
        <div className="w-1/2 h-dvh lg:block hidden">
          <MyCarousel high="[780px]" />
        </div>
        <div className="grow flex justify-center items-center py-15 px-12.5">
          <div className="w-full h-dvh flex flex-col gap-4">
            <div className="flex flex-col gap-8">
              <Logo />
              <h1 className="font-normal text-[30px]">Phone Validation</h1>
              <div className="font-normal text-[16px] flex gap-1">
                <h1 className="opacity-50">We sent you a SMS code on</h1>
                <h1 className="font-bold">Ra****@gmail.com</h1>
              </div>
            </div>

            <MyForm className="w-full" mygap="gap-15">
              <Otp
                length={6}
                onComplete={(code) => console.log("OTP:", code)}
              />

              <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5">
                <Link to="/reset" className="lg:w-[48%]">
                  <Button
                    width="w-full"
                    bgColor="bg-darky"
                    color="text-white"
                    name="Next"
                  />
                </Link>
                <Link to="/signin" className="lg:w-[48%]">
                  <Button width="w-full" name="Sign In" />
                </Link>
              </div>
            </MyForm>
          </div>
        </div>
      </div>
    </div>
  );
}
