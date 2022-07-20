import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Pause = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='6' y='4' width='4' height='16'/>
          <rect  x='14' y='4' width='4' height='16'/>
        </svg>
    );
  }
);