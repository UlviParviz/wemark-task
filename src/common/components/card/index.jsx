import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ features }) => {
  //   const features = [
  //     {
  //       title: "Fast Delivery",
  //       description: "We ensure quick and safe delivery to your doorstep.",
  //       icon: "/icons/delivery.svg",
  //       image_redirect_url: "/services/delivery",
  //     },
  //     {
  //       title: "Secure Payment",
  //       description: "All transactions are encrypted and protected.",
  //       icon: "/icons/delivery.svg",
  //       image_redirect_url: "/services/payment",
  //     },
  //     {
  //       title: "24/7 Support",
  //       description: "Our support team is available all the time.",
  //       icon: "/icons/delivery.svg",
  //       image_redirect_url: "/services/support",
  //     },
  //     {
  //       title: "Best Quality",
  //       description: "We guarantee the top quality of our products.",
  //       icon: "/icons/delivery.svg",
  //       image_redirect_url: "/services/quality",
  //     },
  //   ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[30px] justify-center mt-[30px]">
      {features.map((info, index) => (
        <div
          key={index + info.title}
          className="head flex justify-center rounded-[20px]"
        >
          <Link
            href={info.image_redirect_url || ""}
            className="flex flex-col p-[11px] md:p-[20px] rounded-[16px] w-full pb-[15px] md:pb-[28px] h-auto"
          >
            <div className="bg-[#e1e1e1] card w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-[8px] md:rounded-[12px] flex justify-center items-center mb-[10px] md:mb-[20px]">
              <div className="relative w-[16px] md:w-[24px] h-[16px] md:h-[24px]">
                <Image
                  src={info.icon}
                  alt={info.title}
                  fill
                  className="invertsvg object-contain"
                />
              </div>
            </div>

            <h2 className="text-[14px] md:text-[24px] font-bold ">
              {info.title}
            </h2>
            <p className="text-[12px] md:text-[16px] text-start  opacity-60 font-normal">
              {info.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
