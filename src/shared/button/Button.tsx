import { ButtonProps } from "./types";
import css from "./styles.module.css";
import {
  MAP_BUTTON_COMPOSED_VARIANT,
  MAP_BUTTON_SIZE,
  MAP_FOCUSABLE_VARIANT,
  MAP_ICON_VARIANT,
} from "./style-helpers";

export const Button = ({
  title,
  variant = "filled",
  size = "auto",
  color = "default",
  icon,
  focusable = true,
  ...rest
}: ButtonProps) => {
  const focusStyle = focusable ? "active" : "inactive";
  return icon ? (
    <button className={`${css.icon} ${MAP_ICON_VARIANT[color]}`} {...rest}>
      {icon}
    </button>
  ) : (
    <button
      {...rest}
      className={`${MAP_BUTTON_SIZE[size]} ${
        MAP_BUTTON_COMPOSED_VARIANT[`${color}-${variant}`]
      } ${MAP_FOCUSABLE_VARIANT[focusStyle]}`}
    >
      {<span>{title}</span>}
    </button>
  );
};

export default Button;
