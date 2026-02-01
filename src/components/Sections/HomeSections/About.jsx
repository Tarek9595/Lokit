import img from "../../../assets/img/about.png";

export default function About() {
  const dots = [
    "w-1.5 h-1.5",
    "w-2 h-2",
    "w-2.5 h-2.5",
    "w-3 h-3",
    "w-3.5 h-3.5",
  ];

  return (
    <section className="bg-darky text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12.5 flex flex-col gap-12.5">
        <div className="w-full pb-5 text-center font-cormorant border-b border-[#ffffff33] relative">
          <h1 className="lg:text-[56px] md:text-5xl text-3xl tracking-wide">
            About Lokit
          </h1>
          <div className="absolute -bottom-2 right-0 flex gap-1.5 items-center pl-4">
            {dots.map((size, index) => (
              <div
                key={index}
                className={`${size} rounded-full bg-white`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p className="font-montserrat text-base lg:text-[18px] leading-loose opacity-80 text-justify lg:text-left">
              At Lokit, we believe fashion should be effortless, expressive, and
              accessible to everyone.
              <br />
              <br />
              Our mission is to bring you stylish, high-quality pieces that
              blend comfort, confidence, and modern design.
              <br />
              <br />
              Every collection is carefully curated to suit your lifestyle.
            </p>
            <button className="text-[16px] font-poppins w-48 h-12 flex justify-center items-center border-2 border-white cursor-pointer hover:bg-white hover:text-darky transition-all duration-300 active:scale-95 uppercase tracking-wider">
              Contact Us
            </button>
          </div>

          <div className="hidden lg:flex lg:w-1/2 justify-end">
            <img
              src={img}
              alt="Our Story - Fashion Model"
              className="w-full max-w-137.5 h-auto object-cover rounded-sm shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
