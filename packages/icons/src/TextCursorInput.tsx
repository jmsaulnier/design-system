import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TextCursorInput = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5.3 4h.9C7.7 4 9 5.3 9 6.7m0 0v10.5c0 1.6-1.1 2.7-2.7 2.7h-1M9 6.7v10.6a2.6 2.6 0 002.7 2.7h1M9 6.7C9 5.2 10.2 4 11.8 4h.9'/>
          <path  d='M13.1 7.9h6.8c1.1 0 2.1 1 2.1 2.1v4c0 1.1-.9 2.1-2.1 2.1h-6.8'/>
          <path  d='M4.8 16.1h-.7C3 16.1 2 15.1 2 14v-4c0-1.1 1-2.1 2.1-2.1h.7'/>
        </svg>
    );
  }
);