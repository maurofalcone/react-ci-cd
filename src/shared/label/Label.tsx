import { LabelProps } from "./types";
import css from "./styles.module.css";
import { Heading } from "../heading";

const MAP_BACKGROUND_COLOR = {
  default: css.default,
  dark: css.dark,
  light: css.light,
};

const MAP_TYPE = {
  wrapper: css.wrapper,
  children: css.children,
};

const Label = ({
  children,
  color = "default",
  variant = "text-base",
  type = "wrapper",
  ...rest
}: LabelProps) => (
  <Heading
    {...rest}
    variant={variant}
    className={`${MAP_BACKGROUND_COLOR[color]} ${MAP_TYPE[type]}`}
  >
    {children}
  </Heading>
);

export default Label;
