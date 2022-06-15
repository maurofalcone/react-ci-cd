import css from "./styles.module.css";
import BackgroundImage from "../../assets/images/Background.png";
import { Navbar } from "../../shared/navbar";

const MainLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <div className={css.container}>
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
    <div className={css.wrapper}>
      {children}
      <div className={css.backgroundContainer}>
        <img
          style={{ width: "100%", paddingTop: 48 }}
          src={BackgroundImage}
          alt="background"
        />
      </div>
    </div>
  </div>
);

export default MainLayout;
