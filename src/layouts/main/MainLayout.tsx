import css from "./styles.module.css";
import BackgroundImage from "../../assets/images/Background.png";
import { Navbar } from "../../shared/navbar";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getMappedPadding, getMappedWrapper } from "./style-helpers";

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
