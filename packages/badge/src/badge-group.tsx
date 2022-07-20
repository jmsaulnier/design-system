import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useBadgeGroupClass } from "./styles";

interface IBadgeGroupProps extends DefaultProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light" | "medium";
  children?: React.ReactNode;
}

export interface BadgeGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IBadgeGroupProps {}

export const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  (props, ref) => {
    const {
      color = "primary",
      variant = "dark",
      size = "md",
      className,
      children,
      ...rest
    } = props;

    const classes = useBadgeGroupClass({ variant, size });

    return (
      <div
        ref={ref}
        role="group"
        data-color={color}
        className={cx(classes, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  BadgeGroup.displayName = "BadgeGroup";
}
