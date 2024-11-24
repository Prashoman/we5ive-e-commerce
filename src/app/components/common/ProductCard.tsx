import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";

interface TProps {
  imageUrl: string;
  title: string;
  price: string;
}

const ProductCard = ({ imageUrl, title, price }: TProps) => {
  return (
    <div className="bg-white p-2 w-full rounded-lg">
      <div className="bg-[#F6F5FD] h-[250px] w-full relative">
        <Image
          className="w-full h-full"
          src={imageUrl}
          alt="Picture of the author"
          width={286}
          height={260}
        />
        <span className="absolute bg-[#7E53D4] w-[44px] h-[60px] top-0 right-3 rounded-b-full text-[13px] text-white leading-4 px-2">
          Up to 40%
        </span>
      </div>
      <div className="py-2 flex items-center">
        <Rating className="max-w-[100px]"  value={3} readOnly />
        <span className="text-[14px]">(50)</span>
      </div>
      <div className="flex justify-between items-center pb-3">
        <h3 className="text-[16px] leading-[19px]">{title}</h3>
        <p className="text-[19px] leading-[24.7px] font-semibold">
          BDT {price}
        </p>
      </div>
      <div>
        <button className="border border-[#7E53D4] rounded-md text-[#7E53D4] w-full py-2 text-[16px] leading-5 font-semibold cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
