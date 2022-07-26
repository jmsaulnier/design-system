import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SidebarOpen = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z'/>
          <path  d='M9 3v18'/>
          <path  d='M14 9l3 3-3 3'/>
        </svg>
    );
  }
);