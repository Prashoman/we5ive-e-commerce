"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Deals", href: "/deals" },
  { name: "What's New", href: "/whats-new" },
];

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const pathName = usePathname();
  
  console.log({isNavbarOpen});
  

  return (
    <>
      <div className="bg-[#F5F3FF] px-4 lg:px-[80px] py-[18px] z-40 top-0 left-0 sticky shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-block lg:hidden">
              <RiBarChartHorizontalLine onClick={() => setIsNavbarOpen(prev => !prev)} className="text-[#646464] w-6 h-6 cursor-pointer" />
            </div>
            <Image
              className="w-[96px] h-[24px] lg:w-[161.14px] lg:h-[40px]"
              src={Logo}
              alt="logo"
              width={161.14}
              height={40}
            />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`cursor-pointer text-[16px] font-semibold leading-5  ${
                  pathName == link.href ? "text-[#581FC1]" : "text-[#646464]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:inline-block">
              <input
                type="text"
                className="border py-[6px] outline-none text-black text-[16px] rounded-full ps-[30px] pe-2 w-[242px]"
                placeholder="Search"
              />
              <span className="absolute left-[10px]  top-[33%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[16px] h-[16px] text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </div>
            <span className="inline-block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[24px] text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <div className="flex items-center gap-3">
              <span className="relative">
                <TbShoppingBag className="text-black cursor-pointer w-7 h-7" />
                <span className="absolute -top-[5px] -right-[6px] bg-black text-white text-[10px] rounded-full px-1">
                  0
                </span>
              </span>
              <span>
                <FaRegUser className="text-black cursor-pointer w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {isNavbarOpen && (
        <motion.div
          className=" bg-[#7E53D4] fixed w-[60%] z-50 left-0 top-16 py-5 inline-block lg:hidden"
          
          initial={{ x: "-100%" }} // Start off-screen to the right
          animate={{ x: "0%" }} // Slide in from the right
          exit={{ x: "-100%" }} // Slide back out to the right when closing
          transition={{
            duration: 0.5, // Duration for both entry and exit
            ease: "easeInOut",
          }}
        >
          <div className="px-4 py-7 relative">
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`cursor-pointer text-[16px] font-semibold leading-5  ${
                    pathName == link.href ? "text-[#581FC1]" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <HiOutlineX
              onClick={() => setIsNavbarOpen(false)}
              className="w-6 h-6 text-white cursor-pointer absolute top-2 right-2"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
