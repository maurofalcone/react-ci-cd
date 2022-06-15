import { ComponentProps } from "react";
export interface HeadingProps extends ComponentProps<"span"> {
  variant: "text-4xl" | "text-xs" | "text-base" | "text-sm";
  color?: string;
}
