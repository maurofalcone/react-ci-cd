import { HeadingProps } from "../heading";
import { ComponentProps } from "react";

export interface LabelProps extends ComponentProps<"span"> {
  variant?: HeadingProps["variant"];
  color?: "dark" | "default" | "light";
  type?: "wrapper" | "children";
}
