"use client";
import React, { useState } from "react";
import ProductFilter from "./product-filter";
import ProductList from "./product-list";

export const Products = ({ offers }) => {
  const [filteredProducts, setFilteredProducts] = useState(offers[0]);

  const handleFilter = (filteredData) => {
    setFilteredProducts(offers.find((offer) => offer.title === filteredData));
  };

  return (
    <>
      <div className=" features-section-container py-[40px]  sm:py-[95px]  ">
        <div className=" flex flex-col gap-[30px] sm:flex-row justify-between  features-top-container">
          <div className="flex flex-col ">
            <p className="suggest text-red-500 text-[14px] font-sfpro ">
              Özəl təkliflər
            </p>
            <h2 className="text-[24px] font-bold">
              Payız gəldi, şərtlər indi daha da sadələşdi!
            </h2>
          </div>
          <div className="filter flex items-end ">
            <ProductFilter
              filterData={offers.map((offer) => offer.title)}
              handleFilter={handleFilter}
            />
          </div>
        </div>

        <div className="product-container py-[70px]">
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </>
  );
};
