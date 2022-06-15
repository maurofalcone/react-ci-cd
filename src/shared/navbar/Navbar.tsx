import { Button } from "../button";
import { NavbarProps } from "./types";
import { LogoIcon, MenuIcon } from "../icons";
import css from "./styles.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MediaQueries } from "../../helpers/styles";

const MAP_LOGO_SIZES = {
  mobile: css.logoMobile,
  tablet: css.logoTablet,
  laptop: css.logoLaptop,
  desktop: css.logoDesktop,
};

const getLabelPadding = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LOGO_SIZES["mobile"];
  if (isTablet && !isLaptop) return MAP_LOGO_SIZES["tablet"];
  if (isLaptop && !isDesktop) return MAP_LOGO_SIZES["laptop"];
  if (isDesktop) return MAP_LOGO_SIZES["desktop"];
};

export const Navbar = ({ options }: NavbarProps) => {
  const minSize = useMediaQuery(MediaQueries.NONE);
  const isTablet = useMediaQuery(MediaQueries.SM);
  const isLaptop = useMediaQuery(MediaQueries.MD);
  const isDesktop = useMediaQuery(MediaQueries.LG);
  const logoClass = getLabelPadding(minSize, isTablet, isLaptop, isDesktop);

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
          <Button color="dark" icon={<MenuIcon width="16" height="12" />} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
