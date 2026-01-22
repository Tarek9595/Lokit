import leftImg from "../assets/img/home-pics/home-left.png";
import rightImg from "../assets/img/home-pics/home-right.png";
import topImg from "../assets/img/home-pics/home-top.png";
import bottomImg from "../assets/img/home-pics/home-bottom.png";
import saleImg from "../assets/img/home-pics/sale.png";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white px-10 py-20 flex items-center justify-center">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
        <div className="lg:flex justify-center hidden">
          <img
            src={leftImg}
            alt="Left Collection"
            className="w-full max-w-87.5 aspect-3/4 object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-12">
          <img
            src={topImg}
            alt="Top Collection"
            className="w-full lg:max-w-75 aspect-video object-cover rounded-t-[10px]"
          />

          <img
            src={saleImg}
            alt="Top Collection"
            className="w-full lg:max-w-75 aspect-video object-cover rounded-t-[10px]"
          />

          <img
            src={bottomImg}
            alt="Bottom Collection"
            className="w-full lg:max-w-87.5 aspect-video object-cover rounded-[20px]"
          />
        </div>

        <div className="lg:flex justify-center hidden">
          <img
            src={rightImg}
            alt="Right Collection"
            className="w-full max-w-[320px] aspect-2/3 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
