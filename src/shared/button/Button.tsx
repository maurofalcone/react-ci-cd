import { ButtonProps } from "./types";
import css from "./styles.module.css";

const MAP_BUTTON_SIZE = {
  xl: css.extraLarge,
  lg: css.large,
  md: css.medium,
  auto: css.auto,
};

const MAP_BUTTON_COMPOSED_VARIANT = {
  "dark-filled": css.darkFilled,
  "light-filled": css.lightFilled,
  "default-filled": css.defaultFilled,
  "dark-text": css.darkText,
  "light-text": css.lightText,
  "default-text": css.defaultText,
};

const MAP_FOCUSABLE_VARIANT = {
  active: css.focusActive,
  inactive: css.focusInactive,
};

const Button = ({
  title,
  variant = "filled",
  size = "xl",
  color = "default",
  icon,
  focusable = true,
}: ButtonProps) => {
  const focusStyle = focusable ? "active" : "inactive";
  return (
    <button
      className={`${MAP_BUTTON_SIZE[size]} ${
        MAP_BUTTON_COMPOSED_VARIANT[`${color}-${variant}`]
      } ${MAP_FOCUSABLE_VARIANT[focusStyle]}`}
    >
      {<span>{title}</span>}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
