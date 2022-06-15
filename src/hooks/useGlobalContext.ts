import { createContext, useContext } from "react";

export type GlobalContent = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  isMenuOpen: false,
  setMenuOpen: (_data) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
