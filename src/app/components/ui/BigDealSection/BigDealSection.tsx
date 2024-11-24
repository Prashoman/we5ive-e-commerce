"use client";
import SectionTitle from "@/app/components/common/SectionTitle/SectionTitle";
import LeftArrow from "@/assets/images/leftarrow.png";
import RightArrow from "@/assets/images/rightarrow.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css"; // Custom CSS for pagination styling
import { Grid, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from 'swiper';
import { useRef } from "react";

import ProductCard from "../../common/ProductCard";

const BigDealSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const NewArrivalData = [
    { image: "https://i.ibb.co.com/xLF7TNr/image-3.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/16t3dQz/image-4.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/56Ln0Qr/image-5.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/hcDLRXK/image-6.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/4dSRF7v/icon-3.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/G0QWMKn/Pexels-Photo-by-Bruno-Palace.png", title: "Hoodie", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/tx15sqG/icon-2.png", title: "Jacket", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/4dSRF7v/icon-3.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/G0QWMKn/Pexels-Photo-by-Bruno-Palace.png", title: "Hoodie", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/tx15sqG/icon-2.png", title: "Jacket", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/4dSRF7v/icon-3.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/G0QWMKn/Pexels-Photo-by-Bruno-Palace.png", title: "Hoodie", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/tx15sqG/icon-2.png", title: "Jacket", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/4dSRF7v/icon-3.png", title: "Indian Sharee", price: "2,300" },
    { image: "https://i.ibb.co.com/G0QWMKn/Pexels-Photo-by-Bruno-Palace.png", title: "Hoodie", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
    { image: "https://i.ibb.co.com/tx15sqG/icon-2.png", title: "Jacket", price: "2,300" },
    { image: "https://i.ibb.co.com/tBr8kv2/icon-1.png", title: "Plazu", price: "2,300" },
  ];

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className="bg-[#F5F3FF]">
      <div className="px-4 lg:px-[80px] py-8">
        <div className="flex items-center justify-between py-3">
          <SectionTitle title="SUMMER" subTitle="Big Deal" />
          <div className="flex items-center gap-4">
            <Image className="w-[24px] h-[24px] cursor-pointer" src={LeftArrow} alt="leftArrow" width={24} height={24} onClick={handlePrev} />
            <Image className="w-[24px] h-[24px] cursor-pointer" src={RightArrow} alt="rightArrow" width={24} height={24} onClick={handleNext} />
          </div>
        </div>
        <div className=" py-3 px-2">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1} // Adjust for responsive layout if needed
            grid={{
              rows: 1,
              fill: "row" // Ensures grid fills by rows
            }}
            spaceBetween={10}
            // pagination={{ clickable: true }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            breakpoints={{
              // When the viewport is 640px or larger
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: { rows: 1, fill: "row" }
                // Ensures grid fills by rows
              },
              // When the viewport is 768px or larger
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: { rows: 1, fill: "row" }
              },
              // When the viewport is 1024px or larger
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                grid: { rows: 2, fill: "row" }
              },
            }}
          >
            {NewArrivalData.map((item, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}> {/* Ensure each slide has a height */}
                <ProductCard imageUrl={item.image} title={item.title} price={item.price} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center py-5">
            <button className="bg-[#7E53D4] text-white text-[16px] py-2 px-4 rounded-lg">See More</button>
        </div>
      </div>
    </div>
  );
};

export default BigDealSection;
