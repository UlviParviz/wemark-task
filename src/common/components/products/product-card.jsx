"use client";
import Image from "next/image";
import React from "react";
import { BasketIcon } from "./basket-icon";
import { calculateDiscountedPrice } from "@/common/utils/calculateDiscountedPrice";

const ProductCard = ({
  image,
  slug,
  reviewCount,
  discount,
  perMonth,
  name,
  rate,
  price,
}) => {
  return (
    <>
      <div className="relative rounded-[10px] md:rounded-[24px] head cursor-pointer">
        <div className=" h-[120px]  w-[80%] sm:h-[218px] flex justify-center mx-auto">
          <div className="relative z-[100] h-full w-[100%] rounded-[21px] top-[-25px] md:top-[-39px] ">
            <Image
              src={image}
              layout="fill"
              alt={slug}
              className="rounded-[19px] "
            />
            <span className="font-bold font-sfpro absolute left-[13px] top-[13px]  bg-[#ea2427] flex items-center justify-center text-white text-[8px] md:text-[10px] px-[12px] rounded-[10px] h-[20px] w-[33px] md:h-[30px] md:w-[51px]">
              -{discount}%
            </span>
            <div className="absolute  right-[13px] top-[13px] bg-white flex justify-center items-center  h-[25px] sm:h-[30px] px-[12px] rounded-[20px] shadow-scale">
              <div className="relative md:h-[18px] md:w-[18px] w-[11px] h-[11px]">
                <Image alt="scale" src={"/icons/scale.svg"} layout="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="  text-start mt-[-1px] px-[11px] sm:px-[20px] ">
          <div className="md:flex gap-[13px] hidden">
            <div className="flex items-center justify-center">
              <Image
                alt="star"
                src={"/icons/star.svg"}
                height={15}
                width={15}
              />
              <span className="  text-[10px] ml-[1px] font-sfpro font-normal">
                {rate}
              </span>
            </div>
            <div className="flex">
              <Image
                alt="star"
                src={"/icons/comment.svg"}
                height={15}
                width={15}
                className="invertsvg"
              />
              <span className=" text-[10px] ml-[1px] font-sfpro font-normal">
                {reviewCount}
              </span>
            </div>
          </div>
          <div>
            <h3 className=" md:text-[14px] text-[12px] font-sfpro font-normal mt-1 h-[35px] md:h-[40px] max-w-[100%] overflow-hidden ">
              {name}
            </h3>
          </div>
          <div className="flex gap-4 my-[16px] sm:my-[21px]">
            <div className="flex flex-col">
              <span className=" line-through text-[10px] md:text-[14px]  font-sfpro font-medium opacity-50">
                {price}₼
              </span>
              <span className=" text-[12px] md:text-[20px]  font-bold  font-sfpro">
                {calculateDiscountedPrice(price, discount)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="  text-[10px] md:text-[14px] font-sfpro font-medium opacity-50">
                {perMonth?.month} Month
              </span>
              <span className="text-[12px] md:text-[20px]  font-sfpro font-bold">
                {perMonth?.price}₼
              </span>
            </div>
          </div>
          <div className="flex justify-between  items-center pb-[14px] sm:pb-[20px] gap-[8px]">
            <button className="flex cursor-pointer items-center justify-center product-card  bg-[#e0e0e0] rounded-[12px] h-[35px] w-[70%] pl-1 sm:h-[45px] flex-1 hover:bg-red-500 transition duration-300 group">
              <div className="w-[21%] flex justify-end items-center">
                <BasketIcon className="!w-[20px] !h-[20px] transition duration-300 group-hover:text-white" />
              </div>
              <p className="w-[79%] font-sfpro font-medium flex-1 text-sm sm:text-md transition duration-300 group-hover:text-white">
                <span className="hidden md:inline">Səbətə əlavə et</span>
                <span className="inline md:hidden text-[12px]">Səbətə at</span>
              </p>
            </button>
            <div className="group w-[35px] sm:w-[45px] h-[35px] sm:h-[45px] product-card hover:bg-red-500 transition duration-300 bg-[#e0e0e0] flex justify-center items-center rounded-[12px]">
              <Image
                alt="like"
                src={"/icons/like.svg"}
                height={20}
                width={20}
                className="invertsvg transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
