import { MAP_HEADING_VARIANT } from "./style-helpers";
import { HeadingProps } from "./types";

export const Heading = ({
  color = "var(--white)",
  variant,
  children,
  style,
  ...rest
}: HeadingProps) => (
  <span
    style={{ color, ...style }}
    className={MAP_HEADING_VARIANT[variant]}
    {...rest}
  >
    {children}
  </span>
);

export default Heading;
