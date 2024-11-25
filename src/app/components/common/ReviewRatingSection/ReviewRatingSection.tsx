import { Rating,Star } from '@smastrom/react-rating';
import Image from 'next/image';
import React from 'react';

const ReviewRatingSection = () => {
    return (
        <>
        <div className="py-4">
          <div>
            <select className="w-[30%] lg:w-[15%] py-1 ps-2 pe-4 border border-[#7E53D4] rounded outline-none font-semibold text-[16px]">
              <option value="1">Newest</option>
            </select>
          </div>
          <div>
            <div className="pt-5">
              <div className="flex gap-4">
                <div>
                  <Image
                    src="https://i.ibb.co.com/m6b46h2/Frame-97.png"
                    alt="Rectangle 2"
                    className="rounded-full w-[40px] h-[40px]"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-[16px] leading-5 font-semibold text-black">
                      Cameron Williamvvvson
                    </h1>
                    <span className="text-[13px] leading-4 text-[#656565]">
                      3 days
                    </span>
                  </div>
                  <Rating className="max-w-[100px]" itemStyles={{
                    itemShapes: Star, 
                    activeFillColor: "#FFCF11", 
                    inactiveFillColor: "#D3D3D3", 
                  }} value={4} readOnly />
                </div>
              </div>

              <h1 className="text-[16px] font-bold py-3">Very Nice!! </h1>
              <div className="flex items-center gap-2 pb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </span>
                <span className="text-[13px]">10</span>
              </div>
            </div>
            <hr className="border-dashed border-[#CECECE] w-full pb-2" />

            <div className="pt-5">
              <div className="flex gap-4">
                <div>
                  <Image
                    src="https://i.ibb.co.com/m6b46h2/Frame-97.png"
                    alt="Rectangle 2"
                    className="rounded-full w-[40px] h-[40px]"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-[16px] leading-5 font-semibold text-black">
                      Cameron Williamvvvson
                    </h1>
                    <span className="text-[13px] leading-4 text-[#656565]">
                      3 days
                    </span>
                  </div>
                  <Rating itemStyles={{
                    itemShapes: Star, 
                    activeFillColor: "#FFCF11", 
                    inactiveFillColor: "#D3D3D3", 
                  }}  className="max-w-[100px]" value={4} readOnly />
                </div>
              </div>

              <h1 className="text-[16px] font-bold py-3">Very Nice!! </h1>
              <div className="flex items-center gap-2 pb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </span>
                <span className="text-[13px]">10</span>
              </div>
            </div>
          </div>
        </div>
            
        </>
    );
};

export default ReviewRatingSection;