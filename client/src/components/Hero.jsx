import React from "react";
import Search from "./Search";

const Hero = ({ hero: { title, subtitle, text, btn1, btn2 } }) => {
  return (
    <>
      <div className="flex h-auto w-auto flex-col bg-gradient-to-b from-sky-200 to-white">
        <div className="booknow-container grid items-start justify-center">
          <div className="mt-36 mb-16 grid items-center justify-items-center md:mt-28 md:mb-12">
            <h1 className="text-center text-7xl font-bold text-black drop-shadow-lg filter xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <h1 className="text-center text-7xl font-bold text-black drop-shadow-lg filter xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {subtitle}
            </h1>
            <p className="my-5 text-center text-base sm:text-sm">{text}</p>
            <div className="flex items-center justify-center gap-11 sm:w-full sm:flex-col sm:gap-3">
              <button className="button-sky">{btn1}</button>
              <button className="button-light">{btn2}</button>
            </div>
          </div>
          <div className="">
            {/* Seach input */}
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
