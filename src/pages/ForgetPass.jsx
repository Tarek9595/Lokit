import Lang from "../components/Lang";
import Logo from "../components/Logo";
import MyForm from "../components/MyForm";
import Button from "../components/Button";
import MyInput from "../components/MyInput";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import MyCarousel from "../components/MyCarousel";

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
              <h1 className="font-normal text-[30px]">Forget Password</h1>
            </div>

            <MyForm className="w-full" mygap="gap-15">
              <MyInput name="email" type="email" width="w-full">
                <IoMdMail />
              </MyInput>

              <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5">
                <Link to="/validate" className="lg:w-[48%]">
                  <Button
                    width="w-full"
                    bgColor="bg-darky"
                    color="text-white"
                    name="Send"
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
