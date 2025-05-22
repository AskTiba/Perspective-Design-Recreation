"use client";

import React from "react";
import ScalableCarousel from "./ScalableCarousel";

import Fedex from "./SVG_Components/Fedex";
import Duolingo from "./SVG_Components/Duolingo";
import Microsoft from "./SVG_Components/Microsoft";
import Google from "./SVG_Components/Google";
import Coke from "./SVG_Components/Coke";
import UgandaAirlines from "./SVG_Components/UgandaAirlines";
import Amazon from "./SVG_Components/Amazon";
import Paramount from "./SVG_Components/Paramount";
import ScalableTicker from "./ScalableTicker";

const svgList = [
  { Component: Microsoft, size: { width: 200 } },
  { Component: Google, size: { width: 200 } },
  { Component: Coke, size: { width: 200 } },
  { Component: Fedex, size: { width: 200 } },
  { Component: Paramount, size: { width: 200 } },
  { Component: UgandaAirlines, size: { width: 200 } },
  { Component: Duolingo, size: { width: 200 } },
  { Component: Amazon, size: { width: 200 } },
];

const Businesses = () => {
  return (
    <div className="my-10">
      <h1 className="md:text-[24px] md:leading-[31px] text-[16px] mx-10 leading-[21px] text-[#141414] text-center font-semibold">
        Used daily by more than 6,000 small and large businesses.
      </h1>
      <div className="mt-4 px-16">
        {/* <ScalableCarousel svgItems={svgList} autoplayDelay={3000} loop={true} /> */}
        <ScalableTicker svgItems={svgList} speed={20} />
      </div>
    </div>
  );
};

export default Businesses;
