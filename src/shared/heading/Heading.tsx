import { HeadingProps } from "./types";
import css from "./styles.module.css";

const HEADING_VARIANT_MAP = {
  "text-6xl": css.bigText,
  "text-4xl": css.xxxxl,
  "text-base": css.base,
  "text-xs": css.xs,
  "text-sm": css.sm,
  heading: css.heading,
};

export const Heading = ({
  color = "var(--white)",
  variant,
  children,
  style,
  ...rest
}: HeadingProps) => (
  <span
    style={{ color, ...style }}
    className={HEADING_VARIANT_MAP[variant]}
    {...rest}
  >
    {children}
  </span>
);

export default Heading;
