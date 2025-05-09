import { generateRandomString } from "@/common/utils/generateRandomString";
import React from "react";

const ProductFilter = ({ filterData, handleFilter }) => {
  return (
    <ul className="flex justify-between px-[15px] gap-[28px] head rounded-[25px] py-3 sm:px-[26px] items-center">
      {filterData.map((data) => (
        <li
          key={`${data.id}` + generateRandomString()}
          onClick={() => handleFilter(data)}
          className="text-[10px] sm:text-[14px] opacity-50 text-jet hover:opacity-100 ease-in transition-opacity cursor-pointer font-medium font-sfpro"
        >
          {data}
        </li>
      ))}
    </ul>
  );
};

export default ProductFilter;
