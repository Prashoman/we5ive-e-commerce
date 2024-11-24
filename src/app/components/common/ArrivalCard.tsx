import Image from "next/image";
import React from "react";

interface TProps {
  imageUrl: string;
  title: string;
  price: string;
}

const ArrivalCard = ({ imageUrl, title, price }: TProps) => {
  return (
    <div>
      <div className="bg-[#F6F5FD] h-[260px] w-full">
        <Image
          className="w-full h-full"
          src={imageUrl}
          alt="Picture of the author"
          width={286}
          height={260}
        />
      </div>
      <div className="flex justify-between items-center py-3">
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

export default ArrivalCard;
