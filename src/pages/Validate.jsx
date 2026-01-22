import Lang from "../components/Lang";
import Logo from "../components/Logo";
import MyForm from "../components/MyForm";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import MyCarousel from "../components/MyCarousel";
import Otp from "../components/Otp";

export default function ForgetPass() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center lg:px-16 px-4">
      <div className="container w-full py-6">
        <Lang width="w-24" />
      </div>

      <div className="container w-full rounded-[30px] flex border border-[#9797973D] overflow-hidden mb-10">
        <div className="w-1/2 hidden lg:block bg-gray-50">
          <MyCarousel high="full" />
        </div>

        <div className="grow flex justify-center items-center py-10 px-6 md:px-12.5">
          <div className="w-full max-w-md flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Logo />
              <div className="flex flex-col gap-2">
                <h1 className="font-normal text-2xl md:text-[30px] text-darky">
                  Phone Validation
                </h1>
                <div className="text-sm md:text-[16px] flex-col flex md:flex-row gap-3 md:gap-1">
                  <h1 className="opacity-50">We sent you a SMS code on</h1>
                  <h1 className="font-bold text-darky">ES****@gmail.com</h1>
                </div>
              </div>
            </div>

            <MyForm className="w-full" mygap="gap-12">
              <div className="flex justify-center">
                <Otp
                  length={6}
                  onComplete={(code) => console.log("OTP:", code)}
                />
              </div>

              <div className="w-full flex flex-col justify-between gap-4">
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
