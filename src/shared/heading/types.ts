import { ComponentProps } from "react";
export interface HeadingProps extends ComponentProps<"span"> {
  variant:
    | "text-6xl"
    | "text-4xl"
    | "text-xs"
    | "text-base"
    | "text-sm"
    | "heading";
  color?: string;
}
