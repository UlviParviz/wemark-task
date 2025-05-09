"use client";

import Image from "next/image";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[6px] sm:gap-[20px] my-[10px]">
        <li className="relative sm:w-[50px] sm:h-[50px] w-[45px] h-[45px]">
          <Image src="/logos/be-logo.svg" layout="fill" alt="logo" />
        </li>

        <li>
          <button className="bg-[#2B2B2B] cursor-pointer rounded-[29px] sm:rounded-[25px] h-[40px] sm:h-[50px] flex items-center gap-2 hover:opacity-90 transition-opacity px-4 py-0 text-white font-bold text-md sm:text-lg font-sfpro">
            <Image
              src="/icons/catalog.svg"
              alt="catalog"
              width={18}
              height={18}
              className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]"
            />
            Kataloq
          </button>
        </li>

        <li className="relative flex-1">
          <input
            className="bg-white head text-[16px] rounded-[12px] h-[40px] sm:h-[50px] px-[16px] sm:px-[20px] dark:bg-jet w-full  placeholder:text-[16px] placeholder:opacity-50 font-sfpro font-normal"
            aria-label="Search"
            placeholder="Axtar"
            style={{ fontSize: "15px" }}
          />
          <FiSearch className="sm:w-[20px] sm:h-[20px] absolute top-1/2 right-[16px] sm:right-[20px] -translate-y-1/2 text-onyx dark:text-white-smoke" />
        </li>

        <div className="relative hidden lg:block">
          <div className="text-[#b7b7b7] flex items-center head justify-between rounded-[12px] h-[50px] px-[15px] dark:bg-jet min-w-[180px] text-[16px] dark:text-[rgba(255,255,255,0.5)] font-normal font-sfpro cursor-pointer">
            <span className="text-[#b7b7b7]">Sumqayıt şəhəri...</span>
            <RiArrowDropDownLine className="w-6 h-6 ml-2 drop text-[#b7b7b7]" />
          </div>
        </div>

        <li className="hidden lg:block">
          <ul className="flex gap-2">
            <li className="head p-1 rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
              <Image
                src="/icons/scale.svg"
                alt="scale"
                width={25}
                height={25}
                className="w-[25px] h-[25px] invertsvg"
              />
            </li>

            <li className="relative head p-1 rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
              <Image
                src="/icons/basket.svg"
                alt="basket"
                width={25}
                height={25}
                className="w-[25px] h-[25px] invertsvg"
              />
              <sup className="absolute right-[-6px] top-[-3px] bg-red-500 text-white p-1 rounded-[18px] text-[8px] px-[5px] py-[7px]">
                4+
              </sup>
            </li>

            <li className="head p-1 rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
              <Image
                src="/icons/like.svg"
                alt="like"
                width={25}
                height={25}
                className="w-[25px] h-[25px] invertsvg"
              />
            </li>

            <li className="head p-1 rounded-[12px] w-[50px] h-[50px] flex justify-center items-center">
              <Image
                src="/icons/profile.svg"
                alt="profile"
                width={25}
                height={25}
                className="w-[25px] h-[25px] invertsvg"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
