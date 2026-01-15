// import image from "../assets/img/login-pics/sign-in.png";
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

export default function Signin() {
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
              <h1 className="font-normal text-[30px]">Sign In To Lokit</h1>
            </div>

            <div className="w-full flex justify-between ">
              <div className="w-[30%] p-5 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center cursor-pointer">
                <FcGoogle />
              </div>
              <div className="w-[30%] p-5 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center cursor-pointer">
                <BsFacebook className="text-[#1976D2]" />
              </div>
              <div className="w-[30%] p-5 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center cursor-pointer">
                <ImAppleinc />
              </div>
            </div>

            <div className="w-full flex justify-center items-center opacity-45 relative">
              <h1 className="font-light text-darky text-[16px] bg-white">
                or continue with
              </h1>
              <div className="w-full h-px bg-darky opacity-45 absolute -z-10"></div>
            </div>

            <MyForm className="w-full">
              <MyInput name="email" type="email" width="w-full">
                <IoMdMail />
              </MyInput>

              <MyInput name="password" type="password" width="w-full">
                <MdLock />
              </MyInput>

              <div className="w-full flex justify-end">
                <Link
                  to="/forget"
                  className="w-fit text-end font-light text-[16px] text-darky hover:underline "
                >
                  Forget Password?
                </Link>
              </div>

              <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5">
                <Link to="/" className="lg:w-[48%]">
                  <Button
                    width="w-full"
                    bgColor="bg-darky"
                    color="text-white"
                    name="Sign In"
                  />
                </Link>
                <Link to="/signup" className="lg:w-[48%]">
                  <Button width="w-full" name="Sign Up" />
                </Link>
              </div>
            </MyForm>
          </div>
        </div>
      </div>
    </div>
  );
}
