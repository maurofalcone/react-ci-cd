import { ComponentProps } from "react";
import { NavbarOption } from "../navbar";

export interface DropdownMenuProps extends ComponentProps<"div"> {
  isOpen: boolean;
  options: NavbarOption[];
  onClick: () => void;
}
