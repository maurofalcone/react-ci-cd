import { InputProps } from "./types";
import { useState } from "react";
import { MAP_SIZE } from "./style-helpers";

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
