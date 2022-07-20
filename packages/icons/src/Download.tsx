import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Download = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <path  d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'/>
          <polyline  points='7 10 12 15 17 10'/>
          <line  x1='12' y1='15' x2='12' y2='3'/>
        </svg>
    );
  }
);