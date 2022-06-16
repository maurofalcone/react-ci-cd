import { LabelProps } from "./types";
import { Heading } from "../heading";
import { MAP_BACKGROUND_COLOR, MAP_TYPE } from "./style-helpers";

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
