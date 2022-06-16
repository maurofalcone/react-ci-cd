import { Button } from "../button";
import { NavbarProps } from "./types";
import { LogoIcon } from "../icons";
import css from "./styles.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { DropdownMenu } from "../dropdown-menu";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { getLabelPadding } from "./style-helpers";

export const Navbar = ({ options }: NavbarProps) => {
  const { minSize, isTablet, isLaptop, isDesktop } = useMediaQuery();
  const { isMenuOpen, setMenuOpen } = useGlobalContext();
  const logoClass = getLabelPadding(minSize, isTablet, isLaptop, isDesktop);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={isTablet ? css.container : css.logoContainerMobile}>
      <div className={logoClass}>
        <LogoIcon width="33px" height="30px" />
      </div>
      {isTablet ? (
        <>
          <div className={css.optionsContainer}>
            {options.map((op) => (
              <Button
                key={op.title}
                color="light"
                variant="text"
                size={isTablet ? "auto" : "md"}
                title={op.title}
                onClick={op.onClick}
                focusable={false}
              />
            ))}
          </div>
          <div className={css.actionsContainer}>
            <Button
              variant="text"
              title="Login"
              color="light"
              size="auto"
              focusable={false}
            />
            <Button title="Start free trial" color="dark" focusable={false} />
          </div>
        </>
      ) : (
        <div className={css.menuContainer}>
          <DropdownMenu
            isOpen={isMenuOpen}
            onClick={toggleMenu}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
