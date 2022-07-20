import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type variantOptions = {
  [key: string]: string;
};

type sizeOptions = {
  [key: string]: string | number;
};

export const useBadgeClass = createMemoClass((props) => {
  const variantClasses: variantOptions = {
    solid: "badge-solid",
    outline: "badge-outline",
    light: "badge-light",
    white: "badge-white",
  };

  const sizes: sizeOptions = {
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg",
  };

  return cx(
    "badge",
    variantClasses[props.variant],
    props.hasShadow && "badge-shadow",
    sizes[props.size]
  );
});

export const useBadgeGroupClass = createMemoClass((props) => {
  const variantClasses: variantOptions = {
    dark: "badge-group-dark",
    light: "badge-group-light",
  };

  const sizes: sizeOptions = {
    sm: "badge-group-sm",
    md: "badge-group-md",
    lg: "badge-group-lg",
  };

  return cx("badge-group", variantClasses[props.variant], sizes[props.size]);
});
