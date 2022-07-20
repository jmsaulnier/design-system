import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Loader = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='12' y1='2' x2='12' y2='6'/>
          <line  x1='12' y1='18' x2='12' y2='22'/>
          <line  x1='4.93' y1='4.93' x2='7.76' y2='7.76'/>
          <line  x1='16.24' y1='16.24' x2='19.07' y2='19.07'/>
          <line  x1='2' y1='12' x2='6' y2='12'/>
          <line  x1='18' y1='12' x2='22' y2='12'/>
          <line  x1='4.93' y1='19.07' x2='7.76' y2='16.24'/>
          <line  x1='16.24' y1='7.76' x2='19.07' y2='4.93'/>
        </svg>
    );
  }
);