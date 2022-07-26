import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Wallet = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4'/>
          <path  d='M4 6v12c0 1.1.9 2 2 2h14v-4'/>
          <path  d='M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z'/>
        </svg>
    );
  }
);