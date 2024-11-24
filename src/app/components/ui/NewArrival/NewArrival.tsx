import Image from "next/image";
import React from "react";
import RightArrow from "@/assets/images/rightarrow.png";
import LeftArrow from "@/assets/images/leftarrow.png";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const NewArrival = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between px-[80px] py-8">
          <SectionTitle title="NEW ARRIVAL" subTitle="New Collection" />
          <div className="flex items-center gap-4">
            <Image
              className="w-[24px] h-[24px] cursor-pointer"
              src={LeftArrow}
              alt="leftArrow"
              width={24}
              height={24}
            />
            <Image
              className="w-[24px] h-[24px] cursor-pointer"
              src={RightArrow}
              alt="rightArrow"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
