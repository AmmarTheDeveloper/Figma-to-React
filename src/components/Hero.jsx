import React from "react";
import background from "../assets/images/background.png";
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col justify-center">
        <div className="max-w-[778px] px-[30px]">
          <h1 className="leading-[60px] text-[40px] md:text-[56px] font-[400] text-white">
            Empowering Lives Through Innovative{" "}
            <span className="font-[600] underline decoration-2 underline-offset-4 decoration-[#7F93FF] decoration-solid">
              AI
            </span>
            Technologies.
          </h1>
          <p className="text-[16px] md:text-[22px] font-[400] text-[#C0C2CC] mt-4 leading-[30px]">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </p>
          <div className="button flex gap-[10px] mt-8">
            <button
              type="button"
              className="font-[700] text-[14px] md:text-[18px] leading-[30px] text-white bg-[#6A35FF] h-[53px] w-[240px] rounded"
            >
              Explore Our Services
            </button>
            <button
              type="button"
              className="font-[600] text-[14px] md:text-[18px] leading-[30px] text-white bg-transparent border border-[#6881FF] h-[53px] w-[240px] rounded"
            >
              Learn more
            </button>
          </div>
        </div>
        <p className="px-[30px] mt-[120px] font-[400] text-[18px] md:text-[24px] leading-[30px] bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] to-blue-500">
          From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions
          🌟✨ From Ideas to
        </p>
      </div>
    </section>
  );
};

export default Hero;
