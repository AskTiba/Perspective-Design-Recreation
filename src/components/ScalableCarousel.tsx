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
            className="pl-1 basis-1/5 md:basis-1/3 sm:basis-1/6"
          >
            <div className="flex h-24 border rounded-md ">
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
