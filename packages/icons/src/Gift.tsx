import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Gift = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='20 12 20 22 4 22 4 12'/>
          <rect  x='2' y='7' width='20' height='5'/>
          <line  x1='12' y1='22' x2='12' y2='7'/>
          <path  d='M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z'/>
          <path  d='M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z'/>
        </svg>
    );
  }
);