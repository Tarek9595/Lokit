import starHand from "../assets/img/icons/starhand.svg";
import medal from "../assets/img/icons/medal.svg";
import vector from "../assets/img/icons/Vector.svg";
import telecom from "../assets/img/icons/telecom.svg";
export default function Shipping() {
  return (
    <section className="w-full bg-[#4444440A] py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-center justify-items-center">
          <div className="flex gap-3.5 lg:justify-center items-center w-full ">
            <img src={starHand} alt="starHand" />
            <div className="flex flex-col gap-1.5 font-montserrat text-darky">
              <h1 className="font-medium text-[20px] ">High Quality</h1>
              <p className="font-normal text-[16px] opacity-60">
                Premium, long-lasting materials.
              </p>
            </div>
          </div>
          <div className="flex gap-3.5 lg:justify-center items-center w-full ">
            <img src={medal} alt="medal" />
            <div className="flex flex-col gap-1.5 font-montserrat text-darky">
              <h1 className="font-medium text-[20px] ">Quality Checked</h1>
              <p className="font-normal text-[16px] opacity-60">
                Carefully inspected products.
              </p>
            </div>
          </div>
          <div className="flex gap-3.5 lg:justify-center items-center w-full ">
            <img src={vector} alt="vector" />
            <div className="flex flex-col gap-1.5 font-montserrat text-darky">
              <h1 className="font-medium text-[20px] ">Free Shipping</h1>
              <p className="font-normal text-[16px] opacity-60">
                Order over 150 $.
              </p>
            </div>
          </div>
          <div className="flex gap-3.5 lg:justify-center items-center w-full ">
            <img src={telecom} alt="telecom" />
            <div className="flex flex-col gap-1.5 font-montserrat text-darky">
              <h1 className="font-medium text-[20px] ">24 / 7 Support</h1>
              <p className="font-normal text-[16px] opacity-60">
                Always here to help..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
