import starHand from "../../../assets/img/icons/starhand.svg";
import medal from "../../../assets/img/icons/medal.svg";
import vector from "../../../assets/img/icons/Vector.svg";
import telecom from "../../../assets/img/icons/telecom.svg";

export default function Shipping() {
  const shippingFeatures = [
    {
      icon: starHand,
      title: "High Quality",
      desc: "Premium, long-lasting materials.",
    },
    {
      icon: medal,
      title: "Quality Checked",
      desc: "Carefully inspected products.",
    },
    {
      icon: vector,
      title: "Free Shipping",
      desc: "Order over 150 $.",
    },
    {
      icon: telecom,
      title: "24 / 7 Support",
      desc: "Always here to help.",
    },
  ];

  return (
    <section className="w-full bg-[#4444440A] py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-center justify-items-center">
          {shippingFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex gap-3.5 lg:justify-center items-center w-full group transition-all"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <div className="flex flex-col gap-1.5 font-montserrat text-darky">
                <h1 className="font-medium text-[20px] leading-tight">
                  {feature.title}
                </h1>
                <p className="font-normal text-[16px] opacity-60 leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
