import css from "./styles.module.css";

export const MAP_LABEL_PADDING = {
  mobile: css.labelMobile,
  tablet: css.labelTablet,
  laptop: css.labelLaptop,
  desktop: css.labelDesktop,
};

export const MAP_DESCRIPTION_STYLE = {
  mobile: css.descriptionMobile,
  tablet: css.descriptionTablet,
  laptop: css.descriptionLaptop,
  desktop: css.descriptionDesktop,
};

export const MAP_SUGGESTION_STYLE = {
  mobile: css.suggestionMobile,
  tablet: css.suggestionTablet,
  laptop: css.suggestionLaptop,
  desktop: css.suggestionDesktop,
};

export const getLabelPadding = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LABEL_PADDING["mobile"];
  if (isTablet && !isLaptop) return MAP_LABEL_PADDING["tablet"];
  if (isLaptop && !isDesktop) return MAP_LABEL_PADDING["laptop"];
  if (isDesktop) return MAP_LABEL_PADDING["desktop"];
};

export const getDescriptionStyle = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_DESCRIPTION_STYLE["mobile"];
  if (isTablet && !isLaptop) return MAP_DESCRIPTION_STYLE["tablet"];
  if (isLaptop && !isDesktop) return MAP_DESCRIPTION_STYLE["laptop"];
  if (isDesktop) return MAP_DESCRIPTION_STYLE["desktop"];
};

export const getSuggestionStyle = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_SUGGESTION_STYLE["mobile"];
  if (isTablet && !isLaptop) return MAP_SUGGESTION_STYLE["tablet"];
  if (isLaptop && !isDesktop) return MAP_SUGGESTION_STYLE["laptop"];
  if (isDesktop) return MAP_SUGGESTION_STYLE["desktop"];
};
