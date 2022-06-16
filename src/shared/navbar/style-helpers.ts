import css from "./styles.module.css";

const MAP_LOGO_SIZES = {
  mobile: css.logoMobile,
  tablet: css.logoTablet,
  laptop: css.logoLaptop,
  desktop: css.logoDesktop,
};

export const getLabelPadding = (
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
