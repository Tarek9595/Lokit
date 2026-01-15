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
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import MyCarousel from "../components/MyCarousel";

export default function SignUp() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-dvh flex items-center lg:px-16 px-2 flex-col">
      <div className="w-full py-8 ">
        <Lang width="w-25" />
      </div>
      <div className="w-full rounded-r-[30px] flex border border-[#9797973D]">
        <div className="w-1/2 h-dvh lg:block hidden">
          <MyCarousel />
        </div>
        <div className="grow flex justify-center items-center py-15 px-12.5 ">
          <div className="w-full h-full flex flex-col gap-4">
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

              <div className="flex lg:flex-row flex-col justify-between">
                <MyInput
                  name="first name"
                  type="text"
                  width="w-full"
                  paWidth="lg:w-[48%]"
                >
                  <FaUser />
                </MyInput>

                <MyInput
                  name="first name"
                  type="text"
                  width="w-full"
                  paWidth="lg:w-[48%]"
                >
                  <FaUser />
                </MyInput>
              </div>

              <MyInput name="phone number" type="number" width="w-full">
                <FaPhone />
              </MyInput>

              <MyInput
                name="confirm password"
                type={show ? "text" : "password"}
                width="w-full"
                paWidth="lg:w-[96%]"
              >
                <MdLock />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </MyInput>
              <MyInput
                name="password"
                type={show ? "text" : "password"}
                width="w-full"
                paWidth="lg:w-[96%]"
              >
                <MdLock />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </MyInput>

              <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5 lg:mt-8">
                <Link to="/success" className="lg:w-[48%]">
                  <Button
                    width="w-full"
                    bgColor="bg-darky"
                    color="text-white"
                    name="Sign Up"
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
