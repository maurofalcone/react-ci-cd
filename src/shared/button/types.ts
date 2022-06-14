export interface ButtonProps {
  title?: string;
  size: "xl" | "lg" | "md" | "auto";
  variant: "text" | "filled";
  color?: "dark" | "light" | "default";
  icon?: JSX.Element;
  focusable?: boolean;
}
