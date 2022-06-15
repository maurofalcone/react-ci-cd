import { InputProps } from "./types";
import css from "./styles.module.css";
import { useState } from "react";

const MAP_SIZE = {
  lg: css.lg,
  xl: css.xl,
  md: css.md,
  auto: css.auto,
};

const Input = ({ size = "auto", ...rest }: InputProps) => {
  const [value, setValue] = useState("");

  return (
    <input
      {...rest}
      className={MAP_SIZE[size]}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
