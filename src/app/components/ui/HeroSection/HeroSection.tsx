"use client";
import React from "react";
import ButtonSection from "../../common/ButtonSection";
import HeroImage from "@/assets/images/hero.png";

const HeroSection = () => {
  return (
    <div
      className="bg-gray-300 bg-center h-[500px] lg:h-[600px] flex items-center justify-center bg-cover lg:bg-center px-4 lg:px-0"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <div className="text-center">
        <h1 className="text-white text-[28px] lg:text-[48px] font-bold">
          Elevate Your Everyday Style
        </h1>
        <h2 className="text-[13px] lg:text-2xl font-bold mb-4 text-white text-shadow-custom mt-3">
          Discover the Latest Trends in Sustainable Fashion
        </h2>
        <div className="flex items-center justify-center mt-7">
          <ButtonSection shadow={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
