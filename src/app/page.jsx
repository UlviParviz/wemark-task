import { BannerSlider, Card, Products } from "@/common/components";
import { Navbar } from "@/common/layouts";
import { fetchData } from "@/common/utils/fetchData";
import React from "react";

const generateUniqueKey = (prefix) => {
  const randomStr = Math.random().toString(36).substr(2, 5);
  return `${prefix}-${randomStr}`;
};

export default async function Home() {
  const [offers, sliders, features] = await Promise.allSettled([
    fetchData("/special-offer"),
    fetchData("/big-sliders"),
    fetchData("/features"),
  ]);

  return (
    <div>
      <Navbar />
      <BannerSlider
        key={generateUniqueKey("slider")}
        sliders={sliders?.status === "fulfilled" ? sliders?.value : []}
      />
      <Card
        key={generateUniqueKey("features")}
        features={features?.status === "fulfilled" ? features?.value : []}
      />
      <Products
        key={generateUniqueKey("offers")}
        offers={offers?.status === "fulfilled" ? offers?.value : []}
      />
    </div>
  );
}
