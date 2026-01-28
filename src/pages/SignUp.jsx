import MyForm from "../components/UI/MyForm";
import MyInput from "../components/UI/MyInput";
import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
import Lang from "../components/UI/Lang";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import MyCarousel from "../components/Layout/MyCarousel";

export default function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain one uppercase")
      .matches(/[0-9]/, "Must contain one number")
      .matches(/[!@#$%^&*]/, "Must contain one special character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      navigate("/success");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full h-dvh flex items-center lg:px-16 px-2 flex-col">
      {/* Lang Section */}
      <div className="w-full py-8 ">
        <Lang width="w-25" />
      </div>
      <div className="w-full rounded-r-[30px] flex border border-[#9797973D]">
        {/* Carousel Section */}
        <div className="w-1/2 h-dvh lg:block hidden">
          <MyCarousel />
        </div>
        {/* Sign In Section */}
        <div className="grow flex justify-center items-center py-15 px-12.5 ">
          <div className="w-full h-full flex flex-col gap-4">
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
              validationSchema={signupSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <>
                  <MyInput
                    name="email"
                    type="email"
                    width="w-full"
                    placeholder="Email Address"
                  >
                    <IoMdMail />
                  </MyInput>

                  <div className="flex lg:flex-row flex-col justify-between">
                    <MyInput
                      name="firstName"
                      label="First Name"
                      type="text"
                      width="w-full"
                      paWidth="lg:w-[48%]"
                    >
                      <FaUser />
                    </MyInput>

                    <MyInput
                      name="lastName"
                      label="Last Name"
                      type="text"
                      width="w-full"
                      paWidth="lg:w-[48%]"
                    >
                      <FaUser />
                    </MyInput>
                  </div>

                  <MyInput
                    name="phone"
                    label="Phone Number"
                    type="text"
                    width="w-full"
                  >
                    <FaPhone />
                  </MyInput>

                  <MyInput
                    name="password"
                    type={show ? "text" : "password"}
                    width="w-full"
                    placeholder="Password"
                  >
                    <MdLock />
                    <div
                      className="cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <IoIosEyeOff /> : <IoIosEye />}
                    </div>
                  </MyInput>

                  <MyInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type={show ? "text" : "password"}
                    width="w-full"
                    placeholder="Confirm Password"
                  >
                    <MdLock />
                    <div
                      className="cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <IoIosEyeOff /> : <IoIosEye />}
                    </div>
                  </MyInput>

                  <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5 lg:mt-8">
                    <div className="lg:w-[48%]">
                      <Button
                        type="submit"
                        width="w-full"
                        bgColor="bg-darky"
                        color="text-white"
                        name="Sign Up"
                        isLoading={isSubmitting}
                        disabled={isSubmitting || !isValid || !dirty}
                      />
                    </div>
                    <Link to="/signin" className="lg:w-[48%]">
                      <Button width="w-full" name="Sign In" />
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
