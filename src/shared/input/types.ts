import { ComponentProps } from "react";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  size?: "xl" | "lg" | "md" | "auto";
}
