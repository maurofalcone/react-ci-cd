import css from "./styles.module.css";

export const MAP_LAYOUT_PADDING = {
  tablet: css.paddingTablet,
  desktop: css.paddingDesktop,
  mobile: css.paddingMobile,
  laptop: css.paddingLaptop,
};

export const MAP_LAYOUT_WRAPPER = {
  tablet: css.tabletWrapper,
  desktop: css.desktopWrapper,
  mobile: css.mobileWrapper,
  laptop: css.laptopWrapper,
};

export const getMappedPadding = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LAYOUT_PADDING["mobile"];
  if (isTablet && !isLaptop) return MAP_LAYOUT_PADDING["tablet"];
  if (isLaptop && !isDesktop) return MAP_LAYOUT_PADDING["laptop"];
  return MAP_LAYOUT_PADDING["desktop"];
};

export const getMappedWrapper = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LAYOUT_WRAPPER["mobile"];
  if (isTablet && !isLaptop) return MAP_LAYOUT_WRAPPER["tablet"];
  if (isLaptop && !isDesktop) return MAP_LAYOUT_WRAPPER["laptop"];
  if (isDesktop) return MAP_LAYOUT_WRAPPER["desktop"];
};
