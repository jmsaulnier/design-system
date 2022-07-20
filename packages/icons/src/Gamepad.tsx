import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Gamepad = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='6' y1='12' x2='10' y2='12'/>
          <line  x1='8' y1='10' x2='8' y2='14'/>
          <line  x1='15' y1='13' x2='15.01' y2='13'/>
          <line  x1='18' y1='11' x2='18.01' y2='11'/>
          <rect  x='2' y='6' width='20' height='12' rx='2'/>
        </svg>
    );
  }
);