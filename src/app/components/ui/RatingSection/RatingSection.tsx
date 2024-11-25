import { Rating, Star } from "@smastrom/react-rating";
import React from "react";

const RatingSection = () => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center gap-9">
        <h1 className="text-[16px] text-black leading-6 font-semibold">
          Product Review
        </h1>
        <h1 className="text-[16px] text-[#7E53D4] leading-6 font-semibold">
          121 reviews
        </h1>
      </div>
      <div className="flex items-center justify-between py-3">
        <Rating
          itemStyles={{
            itemShapes: Star,
            activeFillColor: "#FFCF11",
            inactiveFillColor: "#D3D3D3",
          }}
          className="max-w-[170px]"
          value={4}
          readOnly
        />
        <span className="text-[19px] font-semibold text-black">(4.0)</span>
      </div>
      <hr className="border-dashed border-[#CECECE] w-full pb-2" />
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-[5%]">5</span>
          <div className="w-[90%]">
            <div className="w-full relative h-[10px] bg-[#DFDFDF] rounded-md overflow-hidden">
              <div className="bg-[#FFCF11] h-full w-[50%]"></div>
            </div>
          </div>
          <span className="w-[5%]">50</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-[5%]">4</span>
          <div className="w-[90%]">
            <div className="w-full relative h-[10px] bg-[#DFDFDF] rounded-md overflow-hidden">
              <div className="bg-[#FFCF11] h-full w-[20%]"></div>
            </div>
          </div>
          <span className="w-[5%]">5</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-[5%]">3</span>
          <div className="w-[90%]">
            <div className="w-full relative h-[10px] bg-[#DFDFDF] rounded-md overflow-hidden">
              <div className="bg-[#FFCF11] h-full w-[30%]"></div>
            </div>
          </div>
          <span className="w-[5%]">10</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-[5%]">2</span>
          <div className="w-[90%]">
            <div className="w-full relative h-[10px] bg-[#DFDFDF] rounded-md overflow-hidden">
              <div className="bg-[#FFCF11] h-full w-[40%]"></div>
            </div>
          </div>
          <span className="w-[5%]">30</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-[5%]">1</span>
          <div className="w-[90%]">
            <div className="w-full relative h-[10px] bg-[#DFDFDF] rounded-md overflow-hidden">
              <div className="bg-[#FFCF11] h-full w-[8%]"></div>
            </div>
          </div>
          <span className="w-[5%]">2</span>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
