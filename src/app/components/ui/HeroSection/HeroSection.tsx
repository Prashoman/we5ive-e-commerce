"use client";
import React from "react";
import ButtonSection from "../../common/ButtonSection";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray-300 h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#581FC1] text-[48px] font-bold">
          Elevate Your Everyday Style
          </h1>

          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-custom mt-3">
            Discover the Latest Trends in Sustainable Fashion
          </h2>
          <div className="flex items-center justify-center mt-7">
            <ButtonSection shadow={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
