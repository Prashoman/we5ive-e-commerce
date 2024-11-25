import React, { useState } from "react";
import ReviewRatingSection from "../../common/ReviewRatingSection/ReviewRatingSection";
import DetailsSection from "../../common/DetailsSection/DetailsSection";
import DiscussionSection from "../../common/DiscussionSection/DiscussionSection";

import RatingSection from "../RatingSection/RatingSection";

const DetailsNavbar = () => {
  const [activeNav, setActiveNav] = useState<number>(2);
  return (
    <div className=" bg-[#F4F8FF] pb-2">
      <div className="w-full">
        <div className="w-full flex items-center gap-9">
          <h1
            onClick={() => setActiveNav(1)}
            className={`text-[19px] leading-6 font-semibold cursor-pointer  ${
              activeNav === 1 ? "text-[#7E53D4]" : "text-[#747474]"
            }`}
          >
            Details
          </h1>
          <h1
            onClick={() => setActiveNav(2)}
            className={`text-[19px] leading-6 font-semibold cursor-pointer  ${
              activeNav === 2 ? "text-[#7E53D4]" : "text-[#747474]"
            }`}
          >
            Review & Rating
          </h1>
          <h1
            onClick={() => setActiveNav(3)}
            className={`text-[19px] leading-6 font-semibold cursor-pointer  ${
              activeNav === 3 ? "text-[#7E53D4]" : "text-[#747474]"
            }`}
          >
            Discussion
          </h1>
        </div>

        <div>
          {activeNav === 1 && <DetailsSection />}
          {activeNav === 2 && (
            <div className="flex flex-col-reverse lg:flex-row gap-3">
              <div className="w-full lg:w-[65%]">
                <ReviewRatingSection />
              </div>
              <div className="w-full lg:w-[35%]">
                <RatingSection />
              </div>
            </div>
          )}
          {activeNav === 3 && <DiscussionSection />}
        </div>
      </div>
    </div>
  );
};

export default DetailsNavbar;
