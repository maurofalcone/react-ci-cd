import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  title?: string;
  size?: "xl" | "lg" | "md" | "auto";
  variant?: "text" | "filled";
  color?: "dark" | "light" | "default";
  icon?: JSX.Element;
  focusable?: boolean;
}
