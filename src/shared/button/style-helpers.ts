import css from "./styles.module.css";

export const MAP_BUTTON_SIZE = {
  xl: css.extraLarge,
  lg: css.large,
  md: css.medium,
  auto: css.auto,
};

export const MAP_BUTTON_COMPOSED_VARIANT = {
  "dark-filled": css.darkFilled,
  "light-filled": css.lightFilled,
  "default-filled": css.defaultFilled,
  "dark-text": css.darkText,
  "light-text": css.lightText,
  "default-text": css.defaultText,
};

export const MAP_ICON_VARIANT = {
  light: css.iconLight,
  dark: css.iconDark,
  default: css.iconDark,
};

export const MAP_FOCUSABLE_VARIANT = {
  active: css.focusActive,
  inactive: css.focusInactive,
};
