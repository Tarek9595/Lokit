import img from "../../../assets/img/about.png";

export default function About() {
  return (
    <section className="bg-darky text-white flex justify-center items-center py-20">
      <div className="container px-6 md:px-12.5 flex flex-col gap-12.5">
        <div className="w-full pb-5 text-center font-cormorant border-b border-[#ffffff33] relative">
          <h1 className="lg:text-[56px] md:text-5xl text-2xl tracking-wide">
            About Lokit
          </h1>
          <div className="absolute -bottom-2 right-0 w-fit flex gap-1.5 items-center bg-darky px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p className="font-montserrat text-sm lg:text-[18px] leading-relaxed opacity-80">
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
            <div className="text-[16px] font-poppins w-48 h-12 flex justify-center items-center border-2 border-white cursor-pointer hover:bg-white hover:text-darky transition-all">
              Contact Us
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img
              src={img}
              alt="Fashion Model"
              className="w-full max-w-137.5 ml-auto h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
