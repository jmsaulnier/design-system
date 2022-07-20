import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Users = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/>
          <circle  cx='9' cy='7' r='4'/>
          <path  d='M23 21v-2a4 4 0 00-3-3.87'/>
          <path  d='M16 3.13a4 4 0 010 7.75'/>
        </svg>
    );
  }
);