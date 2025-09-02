import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";
import dataBiz from "../assets/images/client-databiz.svg";
import phile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return (
    <section className="flex md:flex-row flex-col-reverse items-center md:items-end justify-between w-full md:w-10/12 ml-auto mr-auto md:h-[30rem]">
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-7xl font-bold text-gray-950 mb-5">
          Make <br className="hidden md:block" /> remote work
        </h3>
        <p className="w-80 md:w-96 text-sm text-gray-500 font-medium mb-7 md:mb-10 ml-auto mr-auto md:ml-0 md:mr-0">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-gray-950 text-gray-50 px-5 py-3 text-sm font-medium rounded-lg mb-7 md:mb-16 hover:cursor-pointer hover:bg-white hover:border-2 hover:border-gray-950 hover:text-black">
          Learn more
        </button>
        <div className="flex gap-6 md:gap-4 justify-start items-center md:mb-0 mb-6">
          <img src={dataBiz} alt="" className="w-16 md:w-32" />
          <img src={phile} alt="" className="w-16 md:w-32" />
          <img src={meet} alt="" className="w-16 md:w-32" />
          <img src={maker} alt="" className="w-16 md:w-32" />
        </div>
      </div>

      <img
        src={width > 768 ? heroDesktop : heroMobile}
        alt=""
        className="w-full md:w-[22rem] md:mb-0 mb-8"
      />
    </section>
  );
};

export default Hero;
