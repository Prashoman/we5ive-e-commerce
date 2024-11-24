"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./collection.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ButtonSection from "../../common/ButtonSection";

const CollectionSection = () => {
  return (
    <>
      <div className="bg-[#F5F3FF] px-[80px] w-full">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full "
        >
          <SwiperSlide className="pb-12">
            <div className="w-full flex items-center justify-between">
              <div className="w-[46%]">
                <Image
                  className="w-full"
                  src="https://i.ibb.co.com/D8P9nKC/man-1.png"
                  width={1000}
                  height={1000}
                  alt="Collection"
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-[48px] text-left font-semibold text-black">
                  MEN COLLECTION
                </h1>
                <div className="mt-3 ">
                  <ButtonSection shadow={false} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-12">
            <div className="w-full flex items-center justify-between">
              <div className="w-[46%]">
                <Image
                  className="w-full"
                  src="https://i.ibb.co.com/D8P9nKC/man-1.png"
                  width={1000}
                  height={1000}
                  alt="Collection"
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-[48px] text-left font-semibold text-black">
                  MEN COLLECTION
                </h1>
                <div className="mt-3 ">
                  <ButtonSection shadow={false} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-12">
            <div className="w-full flex items-center justify-between">
              <div className="w-[46%]">
                <Image
                  className="w-full"
                  src="https://i.ibb.co.com/D8P9nKC/man-1.png"
                  width={1000}
                  height={1000}
                  alt="Collection"
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-[48px] text-left  font-semibold text-black">
                WOMEN COLLECTION
                </h1>
                <div className="mt-3 ">
                  <ButtonSection shadow={false} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CollectionSection;
