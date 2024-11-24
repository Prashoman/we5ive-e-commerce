"use client";
import Image from "next/image";
import RightArrow from "@/assets/images/rightarrow.png";
import LeftArrow from "@/assets/images/leftarrow.png";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ArrivalCard from "../../common/ArrivalCard";
import { useRef,  } from "react";
import type { Swiper as SwiperClass } from 'swiper';

const NewArrival = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const NewArrivalData = [
    {
      image: "https://i.ibb.co.com/4dSRF7v/icon-3.png",
      title: "Indian Sharee",
      price: "2,300",
    },
    {
      image: "https://i.ibb.co.com/G0QWMKn/Pexels-Photo-by-Bruno-Palace.png",
      title: "Hoodie",
      price: "2,300",
    },
    {
      image: "https://i.ibb.co.com/tBr8kv2/icon-1.png",
      title: "Plazu",
      price: "2,300",
    },

    {
      image: "https://i.ibb.co.com/tx15sqG/icon-2.png",
      title: "Jacket",
      price: "2,300",
    },
    {
      image: "https://i.ibb.co.com/tBr8kv2/icon-1.png",
      title: "Plazu",
      price: "2,300",
    },
  ];
  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <>
      <div className="bg-[#F5F3FF]">
        <div className="px-4 lg:px-[80px] py-8">
          <div className="flex items-center justify-between py-3">
            <SectionTitle title="FEATURED PRODUCT" subTitle="New Arrivals" />
            <div className="flex items-center gap-4">
              <Image
                className="w-[24px] h-[24px] cursor-pointer"
                src={LeftArrow}
                alt="leftArrow"
                width={24}
                height={24}
                onClick={handlePrev}
              />
              <Image
                className="w-[24px] h-[24px] cursor-pointer"
                src={RightArrow}
                alt="rightArrow"
                width={24}
                height={24}
                onClick={handleNext}
              />
            </div>
          </div>
          <div className="bg-white py-3 px-2">
            <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                // When the viewport is 640px or larger
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // When the viewport is 768px or larger
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // When the viewport is 1024px or larger
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {NewArrivalData?.map((item, index: number) => (
                <SwiperSlide key={index}>
                  <ArrivalCard
                    imageUrl={item.image}
                    title={item.title}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-center py-5">
            <button className="bg-[#7E53D4] text-white text-[16px] py-2 px-4 rounded-lg">See More</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
