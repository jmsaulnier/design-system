import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Mountain = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M8 3l4 8 5-5 5 15H2L8 3z'/>
        </svg>
    );
  }
);