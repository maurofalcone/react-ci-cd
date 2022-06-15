import { DropdownMenuProps } from "./types";
import css from "./styles.module.css";
import { CloseIcon, LogoIcon, MenuIcon } from "../icons";
import { Button } from "../button";
import { DropdownItem } from "../dropdown-item";
import { Heading } from "../heading";

export const DropdownMenu = ({
  onClick,
  isOpen,
  options,
  ...props
}: DropdownMenuProps) => {
  return (
    <div {...props}>
      <Button
        onClick={onClick}
        color="dark"
        icon={<MenuIcon width="16" height="12" />}
      />
      <div
        onClick={onClick}
        className={
          isOpen ? css.animatedWrapperActive : css.animatedWrapperDeactive
        }
      />
      <div
        className={isOpen ? css.menuContentIn : css.menuContentOut}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={css.menuHeader}>
          <div>
            <LogoIcon width="33px" height="30px" />
          </div>
          <Button
            onClick={onClick}
            color="light"
            icon={<CloseIcon width="16px" height="12px" />}
          />
        </div>
        {options.map((op) => (
          <DropdownItem
            key={op.title}
            onClick={(e) => {
              e.stopPropagation();
              op.onClick();
            }}
          >
            {op.title}
          </DropdownItem>
        ))}
        <div className={css.marginTop}>
          <Button title="Start free trial" size="xl" />
        </div>
        <div className={css.suggestion}>
          <Heading variant="text-base" color="var(--gray-500)">
            Existing customer?{" "}
            <Heading variant="text-base" color="var(--gray-900)">
              Login
            </Heading>
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
