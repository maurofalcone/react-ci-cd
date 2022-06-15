import { DropdownItemProps } from "./types";
import css from "./styles.module.css";
import { Heading } from "../heading";

export const DropdownItem = ({ children, ...props }: DropdownItemProps) => (
  <div className={css.container}>
    <Heading variant="text-base" color="var(--gray-900)a" {...props}>
      {children}
    </Heading>
  </div>
);

export default DropdownItem;
