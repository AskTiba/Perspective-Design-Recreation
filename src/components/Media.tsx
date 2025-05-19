import * as React from "react"
import { SVGProps } from "react"
const media = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-circle-play-icon lucide-circle-play"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m10 8 6 4-6 4V8z" />
  </svg>
)
export default media
