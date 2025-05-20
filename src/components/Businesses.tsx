"use client";

import React from "react";
import ScalableCarousel from "./ScalableCarousel";
import Star from "./Star";
import Eagle from "./Eagle";
import Media from "./Media";

const svgList = [
  { Component: Star, size: { width: 24, height: 48 } },
  { Component: Eagle, size: { width: 48, height: 48 } },
  { Component: Media, size: { width: 48, height: 48 } }, // uses default sizing
];

const Businesses = () => {
  return (
    <div className="my-10">
      <h1 className="md:text-[24px] md:leading-[31px] text-[16px] mx-10 leading-[21px] text-[#141414] text-center font-semibold">
        Used daily by more than 6,000 small and large businesses.
      </h1>
      <div className="my-6 border flex items-center">
        <ScalableCarousel svgItems={svgList} autoplayDelay={3000} loop={true} />
      </div>
    </div>
  );
};

export default Businesses;
