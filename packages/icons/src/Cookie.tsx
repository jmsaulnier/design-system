import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Cookie = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5'/>
          <path  d='M8.5 8.5v.01'/>
          <path  d='M16 15.5v.01'/>
          <path  d='M12 12v.01'/>
          <path  d='M11 17v.01'/>
          <path  d='M7 14v.01'/>
        </svg>
    );
  }
);