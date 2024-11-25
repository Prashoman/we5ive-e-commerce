"use client";
import { Rating, Star } from "@smastrom/react-rating";
import React from "react";
//import DetailsSwiper from "../../common/DetailsSwiper/DetailsSwiper";
import ProductDetailsSlider from "../../common/ProductDetailsSlider/ProductDetailsSlider";
import DetailsNavbar from "../DetailsNavBar/DetailsNavbar";
import NewArrival from "../NewArrival/NewArrival";
import { TbShoppingBag } from "react-icons/tb";

const ProductDetailsSection = () => {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(0);
  const [selectColors, setSelectColors] = React.useState<number | null>(0);
  const productSize = [
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
  ];
  const handleSize = (index: number) => {
    setSelectedSize(index);
  };
  const handleColors = (index: number) => {
    setSelectColors(index);
  };
  return (
    <>
      <div className="relative">
        <div className="px-4 lg:px-[80px] bg-[#F4F8FF] py-5 lg:py-0">
          <span className="inline-block lg:hidden text-[16px] text-black">
            Feature Product /<span className="text-[#7E53D4]">New Arrival</span>{" "}
          </span>
          <div
            className="w-full inline-block lg:flex 
       justify-between gap-6 py-10 "
          >
            <div className="w-full lg:w-1/2">
              <ProductDetailsSlider />
            </div>
            <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
              <button className="bg-[#2F1C59] text-white text-[16px] leading-5 px-8 py-2 rounded">
                New Arrival
              </button>
              <h1 className="text-[19px] lg:text-[33px] font-semibold leading-[42px] py-2 lg:py-4">
                White Hoodie
              </h1>
              <div className="flex items-center gap-5">
                <div className="py-1 lg:py-2 flex items-center">
                  <Rating
                    className="max-w-[100px]"
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFCF11",
                      inactiveFillColor: "#D3D3D3",
                    }}
                    value={3}
                    readOnly
                  />
                  <span className="text-[14px]">(50)</span>
                </div>
                <span className="text-[#7E53D4] text-[16px]">121 reviews</span>
              </div>
              <h1 className="text-[23px] lg:text-[28px] leading-[36px] font-semibold py-1 lg:py-4">
                BDT 2500
              </h1>

              <hr className="border border-[#CECECE] border-1 w-full" />
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-[19px] leading-[26px] font-semibold py-3">
                    Available Size
                  </h1>
                  <div className="pt-2 pb-4">
                    {productSize.map((item, index) => (
                      <button
                        onClick={() => handleSize(index)}
                        key={index}
                        className={`bg-[#F5F3FF]  text-[16px] leading-5 p-3 py-2 rounded-lg ${
                          selectedSize === index
                            ? "border border-[#7E53D4]"
                            : ""
                        }`}
                      >
                        {item.size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:inline-block">
                  <h1 className="text-[19px] leading-[26px] font-semibold">
                    Available Color
                  </h1>
                  <div className="flex items-center gap-3 pt-4 pb-4">
                    <button
                      onClick={() => handleColors(0)}
                      className={`w-6 h-6 rounded-full bg-white ${
                        selectColors === 0 ? "border border-[#7E53D4] " : ""
                      }`}
                    ></button>
                    <span className="text-[12px]">Off White</span>
                    <button
                      onClick={() => handleColors(1)}
                      className={` w-6 h-6 rounded-full bg-black ${
                        selectColors === 0 ? "border border-[#7E53D4]" : ""
                      }`}
                    ></button>
                  </div>
                </div>
              </div>
              <hr className="border border-[#CECECE] border-1 w-full" />
              <div className="space-y-2 py-3">
                <h1 className="text-[16px] font-semibold">Quantity</h1>
                <div className="flex items-center justify-between rounded-2xl bg-[#F5F3FF] w-[35%] lg:w-[20%] gap-3 ">
                  <button className=" text-[20px] leading-5 p-3 py-2 rounded-lg">
                    -
                  </button>
                  <span className="text-[16px]">1</span>
                  <button className=" text-[20px] leading-5 p-3 py-2 rounded-lg">
                    +
                  </button>
                </div>
              </div>
              <div className="w-full inline-block lg:flex items-center justify-between py-3 space-y-2 lg:space-y-0">
                <button className="bg-[#7E53D4] py-2 px-4 w-full lg:w-[45%] rounded-lg text-white text-[16px]">
                  Buy Now
                </button>
                <button className="border border-[#7E53D4] py-2 px-4 w-full lg:w-[45%] rounded-lg text-[#7E53D4] text-[16px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <DetailsNavbar />
        </div>
        <NewArrival subTitle="Related Products" />

        <div className="bg-[#581FC1] h-[90px] w-[90px]  absolute top-[9%] right-0 rounded-l-2xl py-4 px-2 hidden lg:flex items-center justify-center ">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <TbShoppingBag className="text-white cursor-pointer w-7 h-7 " />
            </div>
            <span className="text-[13px] block text-white font-medium text-center">
              Your bag
            </span>
            <span className="text-[13px] block text-white font-medium text-center">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSection;
