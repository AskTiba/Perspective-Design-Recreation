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
import Tesla from "./SVG_Components/Paramount";
const svgList = [

  { Component: Microsoft, size: { width: 50 } },
  { Component: Google, size: { width: 50 } },
  { Component: Coke, size: { width: 50 } },
  { Component: Fedex, size: { width: 50 } },
  { Component: Tesla, size: { width: 50 } },
  { Component: UgandaAirlines, size: { width: 50 } },
  { Component: Duolingo, size: { width: 50 } },
  { Component: Amazon, size: { width: 50 } },

];

const Businesses = () => {
  return (
    <div className="my-10">
      <h1 className="md:text-[24px] md:leading-[31px] text-[16px] mx-10 leading-[21px] text-[#141414] text-center font-semibold">
        Used daily by more than 6,000 small and large businesses.
      </h1>
      <div className="mb-10 py-10 bg-transparent px-40 flex items-center">
        <ScalableCarousel svgItems={svgList} autoplayDelay={3000} loop={true} />
      </div>
    </div>
  );
};

export default Businesses;
