"use client";

import * as React from "react";
import { SVGProps } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SvgComponentWithSize {
  Component: React.FC<SVGProps<SVGSVGElement>>;
  size?: {
    width?: number;
    height?: number;
    className?: string;
  };
}

interface ScalableCarouselProps {
  svgItems: SvgComponentWithSize[];
  autoplayDelay?: number;
  loop?: boolean;
}

const ScalableCarousel: React.FC<ScalableCarouselProps> = ({
  svgItems,
  autoplayDelay = 2000,
  loop = true,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
  );

  return (
    <Carousel plugins={[plugin.current]} opts={{ loop }} className="w-full">
      <CarouselContent className="">
        {svgItems.map(({ Component, size }, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/6"
          >
            <div className="p-5 flex justify-center items-center h-20 ">
              <Component
                {...size}
                role="img"
                aria-label={`Icon ${index + 1}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ScalableCarousel;
