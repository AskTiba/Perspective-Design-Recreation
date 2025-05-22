"use client";

import * as React from "react";
import { SVGProps } from "react";

interface SvgComponentWithSize {
  Component: React.FC<SVGProps<SVGSVGElement>>;
  size?: {
    width?: number;
    height?: number;
    className?: string;
  };
}

interface ScalableTickerProps {
  svgItems: SvgComponentWithSize[];
  speed?: number; // in seconds for full scroll
}

const ScalableTicker: React.FC<ScalableTickerProps> = ({
  svgItems,
  speed = 20,
}) => {
  const combinedItems = [...svgItems, ...svgItems]; // duplicate for infinite loop

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {combinedItems.map(({ Component, size }, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6 h-24 min-w-[6rem]"
          >
            <Component
              {...size}
              role="img"
              aria-label={`Icon ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Tailwind doesn't support dynamic keyframes directly, so define it manually below */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScalableTicker;
