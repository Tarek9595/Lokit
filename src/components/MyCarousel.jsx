import signinImg from "../assets/img/login-pics/boy-pic.png";
import signupImg from "../assets/img/login-pics/sign-up.png";
import forgetImg from "../assets/img/login-pics/forget-password.png";
import boyImg from "../assets/img/login-pics/sign-in.png";

export default function MyCarousel(props) {
  return (
    <div className="w-full  relative overflow-hidden">
      <div className="carousel w-full h-full">
        <div id="item1" className="carousel-item w-full h-full">
          <img
            src={signinImg}
            className={`w-full h-${
              props.high ? props.high : "full"
            } object-cover`}
          />
        </div>
        <div id="item2" className="carousel-item w-full h-full">
          <img
            src={signupImg}
            className={`w-full h-${
              props.high ? props.high : "full"
            } object-cover`}
          />
        </div>
        <div id="item3" className="carousel-item w-full h-full">
          <img
            src={forgetImg}
            className={`w-full h-${
              props.high ? props.high : "full"
            } object-cover`}
          />
        </div>
        <div id="item4" className="carousel-item w-full h-full">
          <img
            src={boyImg}
            className={`w-full h-${
              props.high ? props.high : "full"
            } object-cover`}
          />
        </div>
      </div>

      <div className="flex w-full justify-center gap-3 py-2 absolute bottom-8">
        <a
          href="#item1"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-400"
        ></a>
        <a
          href="#item2"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-400"
        ></a>
        <a
          href="#item3"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-400"
        ></a>
        <a
          href="#item4"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-400"
        ></a>
      </div>
    </div>
  );
}
