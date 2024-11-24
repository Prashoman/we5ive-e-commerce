"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Deals", href: "/deals" },
  { name: "What's New", href: "/whats-new" },
];

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <div className="bg-[#F5F3FF] px-[80px] py-[18px] top-0 left-0 sticky shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <Image
              className="w-[161.14px] h-[40px]"
              src={Logo}
              alt="logo"
              width={161.14}
              height={40}
            />
          </div>
          <div className="flex items-center gap-8">
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
            <div className="relative">
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
    </>
  );
};

export default NavBar;
