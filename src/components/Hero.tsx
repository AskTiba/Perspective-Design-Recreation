import React from "react";
import { Button } from "@/components/ui/button";
import Star from "./Star";
import Eagle from "./Eagle";
import Media from "./Media";

const Hero = () => {
  return (
    <div className="mx-6 text-center mt-10 text-[#141414] ">
      <p className="text-[36px] leading-[42px] font-bold">
        Double Your Business with Perspective Funnels™
      </p>
      <p className="text-[16px] leading-[26px] text-[#4f4f4f] mt-5 text-center">
        Easily create mobile-first, interactive, and personalized lead gen and
        sales funnels with market-leading conversion rates in just 30 minutes.
        No design or coding skills required.
      </p>
      <div className="sm:flex sm:justify-center sm:px-40 sm:gap-4">
        <Button variant="default" className="w-full flex-2 mt-6 py-8">
          Create free funnel in 30 min
        </Button>
        <Button variant="outline" className="w-full flex-1 my-6 py-8">
          Watch demo
        </Button>
      </div>
      <div className="flex justify-between sm:px-16 text-sm mb-5 px-6">
        <div className="flex gap-3 items-center">
          <Eagle width={24} height={24} />
          <div className="md:flex hidden">
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
          </div>
          <h3 className="">4.9 Rating</h3>
        </div>
        <div className="flex gap-1 items-center">
          <Media />
          <h3 className="">1k+</h3>
        </div>
        <div className="flex gap-3 items-center">
          <Eagle width={24} height={24} />
          <div className="hidden md:flex ">
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
            <Star fill="#4f4f4f" />
          </div>
          <h3 className="">4.8 Rating</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
