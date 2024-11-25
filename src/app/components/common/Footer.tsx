import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/flogo.png";
import Link from "next/link";
import FaceBook from "@/assets/icons/Facebook.png";
import Twitter from "@/assets/icons/Twitter.png";
import Linkedin from "@/assets/icons/Linkedin.png";
import { Nunito_Sans } from 'next/font/google';
const nunitoSans = Nunito_Sans({
    weight: ['400', '600', '700'], // Specify weights you need
    subsets: ['latin'],
  });

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <div>
        <div className="bg-black py-5 lg:py-12 px-4 lg:px-[80px]">
          <div className="inline-block lg:flex justify-between">
            <div className="w-full lg:w-[30%]">
              <Image
                className="w-[97px] h-[24px] lg:w-[197px] lg:h-[49px]"
                src={Logo}
                alt="logo"
                width={197}
                height={49}
              />
              <p className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF] mt-3">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.{" "}
              </p>
            </div>
            <div className="w-full lg:w-[45%]">
              <h1 className="text-[19px] lg:text-[23px] leading-[29px] font-bold text-[#F4F8FF]">
                Sign Up For Our Newsletter!
              </h1>
              <p className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF] mt-2">
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <div className="pt-5">
                <input
                  type="text"
                  className="w-[70%] py-2 bg-[#F4F8FF] px-3 outline-none rounded-l-lg"
                  placeholder="Your email address"
                />
                <button className="bg-[#7E53D4] w-[30%] text-[16px]px-5 py-2 text-white rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-10 inline-block lg:flex justify-between">
            <div className="space-y-2 mt-2">
              <Link
                href={"/"}
                className="text-[16px] leading-5 text-[#F4F8FF] block cursor-pointer"
              >
                support@we5ive.com
              </Link>
              <Link
                href={"/"}
                className="text-[16px] leading-5 text-[#F4F8FF] font-bold cursor-pointer block"
              >
                Contact us
              </Link>
            </div>
            <div className="space-y-2 mt-2">
              <Link
                href={"/about-us"}
                className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF] block cursor-pointer"
              >
               About Us
              </Link>
              <Link
                href={"/"}
                className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF]  cursor-pointer block"
              >
                Contact Us
              </Link>
            </div>
            <div className="space-y-2 mt-2">
              <Link
                href={"/"}
                className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF] block cursor-pointer"
              >
                Privacy policy
              </Link>
              <Link
                href={"/"}
                className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF]  cursor-pointer block"
              >
                Terms & Condition
              </Link>
            </div>
            <div className="space-y-2 mt-2">
              <p
                
                className="text-[13px] lg:text-[16px] leading-5 text-[#F4F8FF] block font-bold"
              >
                Social Link
              </p>
              <div className="flex items-center gap-6">
                <Image
                className="cursor-pointer w-[24px] h-[24px]"
                  src={FaceBook}
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <Image
                className="cursor-pointer w-[24px] h-[24px]"
                  src={Twitter}
                  alt="twitter"
                  width={24}
                  height={24}
                />
                <Image
                className="cursor-pointer w-[24px] h-[24px]"
                  src={Linkedin}
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[58px] bg-[#7E53D4] flex items-center justify-center">
            <p className={`text-center text-[16px] leading-5 text-white ${nunitoSans.className}`}>© {currentYear} | We5ive</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
