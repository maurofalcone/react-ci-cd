import { Button } from "../button";
import { NavbarProps } from "./types";
import { LogoIcon, MenuIcon } from "../icons";
import css from "./styles.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MediaQueries } from "../../helpers/styles";

export const Navbar = ({ options }: NavbarProps) => {
  const isDesktop = useMediaQuery(MediaQueries.SM);

  return (
    <div className={isDesktop ? css.container : css.mobileContainer}>
      <div className={css.logoContainer}>
        <LogoIcon width="33px" height="30px" />
      </div>
      {isDesktop ? (
        <>
          <div className={css.optionsContainer}>
            {options.map((op) => (
              <Button
                color="light"
                variant="text"
                size="md"
                title={op.title}
                onClick={op.onClick}
                focusable={false}
              />
            ))}
          </div>
          <div className={css.actionsContainer}>
            <Button variant="text" title="Login" color="light" size="auto" />
            <Button title="Start free trial" color="dark" />
          </div>
        </>
      ) : (
        <div className={css.menuContainer}>
          <Button color="dark" icon={<MenuIcon width="16" height="12" />} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
