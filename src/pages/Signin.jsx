import Lang from "../components/UI/Lang";
import Logo from "../components/UI/Logo";
import MyForm from "../components/UI/MyForm";
import Button from "../components/UI/Button";
import MyInput from "../components/UI/MyInput";
import MyCarousel from "../components/Layout/MyCarousel";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login Success:", values);
    navigate("/");
    setSubmitting(false);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
  });

  return (
    <div className="w-full h-dvh flex items-center lg:px-16 px-2 flex-col">
      {/* Lang Section */}
      <div className="container w-full py-8 ">
        <Lang width="w-25" />
      </div>
      <div className=" container w-full rounded-r-[30px] flex border border-[#9797973D]">
        {/* Carousel Section */}
        <div className="w-1/2 h-dvh lg:block hidden">
          <MyCarousel high="[780px]" />
        </div>
        {/* Sign In Section */}
        <div className="grow flex justify-center items-center py-15 px-12.5">
          <div className="w-full h-dvh flex flex-col gap-4">
            {/* Logo Section */}
            <div className="flex flex-col gap-8">
              <Logo />
              <h1 className="font-normal text-[30px]">Sign In To Lokit</h1>
            </div>
            {/* External Sign In  */}
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
            {/* Sign In Form */}
            <MyForm
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <>
                  {/* Sign In Data Need */}
                  <MyInput name="email" type="email" width="w-full">
                    <IoMdMail />
                  </MyInput>
                  <MyInput name="password" type="password" width="w-full">
                    <MdLock />
                  </MyInput>
                  {/* Forget Password Page Button */}
                  <div className="w-full flex justify-end">
                    <Link to="/forget">Forget Password?</Link>
                  </div>
                  <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5">
                    {/* Sign In Submit Button */}
                    <div className="lg:w-[48%]">
                      <Button
                        type="submit"
                        width="w-full"
                        bgColor="bg-darky"
                        color="text-white"
                        name="Sign In"
                        isLoading={isSubmitting}
                        disabled={isSubmitting || !isValid || !dirty}
                      />
                    </div>
                    {/* Sign Up Page Button */}
                    <Link to="/signup" className="lg:w-[48%]">
                      <Button width="w-full" name="Sign Up" />
                    </Link>
                  </div>
                </>
              )}
            </MyForm>
          </div>
        </div>
      </div>
    </div>
  );
}
