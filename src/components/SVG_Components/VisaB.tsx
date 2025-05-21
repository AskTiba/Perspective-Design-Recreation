import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 262.3 85",
    }}
    viewBox="0 0 262.3 85"
    {...props}
  >
    <path
      d="M170.9 0c-18.6 0-35.3 9.7-35.3 27.5 0 20.5 29.5 21.9 29.5 32.1 0 4.3-5 8.2-13.4 8.2-12 0-21-5.4-21-5.4l-3.8 18S137.2 85 151 85c20.4 0 36.4-10.1 36.4-28.3 0-21.6-29.6-23-29.6-32.5 0-3.4 4.1-7.1 12.5-7.1 9.5 0 17.3 3.9 17.3 3.9l3.8-17.4c-.1 0-8.6-3.6-20.5-3.6zM.5 1.3 0 3.9s7.8 1.4 14.9 4.3c9.1 3.3 9.7 5.2 11.3 11.1l16.7 64.3h22.4L99.6 1.3H77.3l-22.1 56-9-47.5c-.8-5.4-5-8.5-10.2-8.5H.5zm108.1 0L91.1 83.6h21.3l17.4-82.3h-21.2zm118.6 0c-5.1 0-7.8 2.7-9.8 7.5l-31.2 74.8h22.3l4.3-12.5H240l2.6 12.5h19.7L245.2 1.3h-18zm2.9 22.3 6.6 30.9H219l11.1-30.9z"
      style={{
        fill: "#1434cb",
      }}
    />
  </svg>
);
export default SvgComponent;
