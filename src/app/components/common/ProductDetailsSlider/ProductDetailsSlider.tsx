

import RightArrow from "@/assets/images/rightarrow.png";
import LeftArrow from "@/assets/images/leftarrow.png";
import Image from "next/image";
import { useState, useRef } from "react";

const ProductDetailsSlider = () => {
  const [selectedImage, setSelectedImage] = useState<string>("https://i.ibb.co.com/tQqdzJY/image-9.png"); // Set the default image
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scroll container

  // Array of product images
  const productDetailsInfo = [
    { image: "https://i.ibb.co.com/tQqdzJY/image-9.png" },
    { image: "https://i.ibb.co.com/0frz667/03.png" },
    { image: "https://i.ibb.co.com/3sH6Cqc/02.png" },
    { image: "https://i.ibb.co.com/6Df9y0H/4.png" },
    { image: "https://i.ibb.co.com/FJ59zGf/01.png" },
  ];
// Find the index of the current selected image
  const currentIndex = productDetailsInfo.findIndex(
    (item) => item.image === selectedImage
  );

  // Scroll the container left by 100px
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  // Scroll the container right by 100px
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  // Set the previous image
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + productDetailsInfo.length) % productDetailsInfo.length;
    setSelectedImage(productDetailsInfo[prevIndex].image);
  };

  // Set the next image
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % productDetailsInfo.length;
    setSelectedImage(productDetailsInfo[nextIndex].image);
  };

  // Set the selected image on thumbnail click
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          className="w-[24px] h-[24px] cursor-pointer"
          src={LeftArrow}
          alt="leftArrow"
          width={24}
          height={24}
          onClick={handlePrev}
        />
      </div>
      <div className="w-full">
        <div className="w-full">
          <Image
            src={selectedImage}
            alt="e-commerce"
            className="h-[500px] w-[520px]"
            width={140}
            height={100}
          />
        </div>
        <div className="relative mt-5 px-7 hidden lg:inline-block">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#7E53D4] text-white p-2 rounded-tr-lg rounded-br-lg z-10 h-full"
          >
            &lt;
          </button>
          <div className="flex items-center gap-3 overflow-hidden" ref={scrollContainerRef}>
            <div className="flex gap-3">
              {productDetailsInfo.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt="e-commerce"
                  className={`w-[30%] h-20 border-2 transition-transform duration-300 ease-in-out ${
                    selectedImage === item.image
                      ? "border-[#7E53D4] border-4 transform scale-105"
                      : "border-gray-300 hover:scale-110 hover:bg-gray-300 cursor-pointer"
                  } rounded-lg`}
                  width={40}
                  height={40}
                  onClick={() => handleImageClick(item.image)}
                />
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#7E53D4] text-white p-2 rounded-tl-lg rounded-bl-lg z-10 h-full"
          >
            &gt;
          </button>
        </div>

      </div>
      <div>
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
  );
};

export default ProductDetailsSlider;

