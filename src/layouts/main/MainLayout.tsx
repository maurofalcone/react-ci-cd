import css from "./styles.module.css";
import BackgroundImage from "../../assets/images/Background.png";
import { Navbar } from "../../shared/navbar";
import useMediaQuery from "../../hooks/useMediaQuery";

const MAP_LAYOUT_PADDING = {
  tablet: css.paddingTablet,
  desktop: css.paddingDesktop,
  mobile: css.paddingMobile,
  laptop: css.paddingLaptop,
};

const MAP_LAYOUT_WRAPPER = {
  tablet: css.tabletWrapper,
  desktop: css.desktopWrapper,
  mobile: css.mobileWrapper,
  laptop: css.laptopWrapper,
};

const getMappedPadding = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LAYOUT_PADDING["mobile"];
  if (isTablet && !isLaptop) return MAP_LAYOUT_PADDING["tablet"];
  if (isLaptop && !isDesktop) return MAP_LAYOUT_PADDING["laptop"];
  return MAP_LAYOUT_PADDING["desktop"];
};

const getMappedWrapper = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LAYOUT_WRAPPER["mobile"];
  if (isTablet && !isLaptop) return MAP_LAYOUT_WRAPPER["tablet"];
  if (isLaptop && !isDesktop) return MAP_LAYOUT_WRAPPER["laptop"];
  if (isDesktop) return MAP_LAYOUT_WRAPPER["desktop"];
};

const MainLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { minSize, isTablet, isLaptop, isDesktop } = useMediaQuery();
  const paddingClass = getMappedPadding(minSize, isTablet, isLaptop, isDesktop);
  const wrapperClass = getMappedWrapper(minSize, isTablet, isLaptop, isDesktop);

  return (
    <div className={`${css.container} ${paddingClass}`}>
      <div>
        <Navbar
          options={[
            { title: "Product", onClick: () => console.log("1") },
            { title: "Features", onClick: () => console.log("2") },
            { title: "Marketplace", onClick: () => console.log("3") },
            { title: "Company", onClick: () => console.log("4") },
          ]}
        />
      </div>
      <div className={wrapperClass}>
        <div className={isDesktop ? css.childrenWrapper : wrapperClass}>
          {children}
        </div>
        <div
          className={
            isTablet && !isDesktop
              ? css.tabletBackground
              : isDesktop
              ? css.background
              : css.mobileBackground
          }
        >
          <img
            style={{
              width: isTablet ? "625px" : "100%",
              ...(isTablet && { height: "625px" }),
            }}
            src={BackgroundImage}
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
