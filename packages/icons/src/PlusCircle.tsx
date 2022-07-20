import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PlusCircle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='12' y1='8' x2='12' y2='16'/>
          <line  x1='8' y1='12' x2='16' y2='12'/>
        </svg>
    );
  }
);