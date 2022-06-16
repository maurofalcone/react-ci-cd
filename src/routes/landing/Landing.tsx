import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import MainLayout from "../../layouts/main";
import Heading from "../../shared/heading/Heading";
import css from "./styles.module.css";
import Label from "../../shared/label/Label";
import { ArrowRightIcon } from "../../shared/icons";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import {
  getDescriptionStyle,
  getLabelPadding,
  getSuggestionStyle,
} from "./style-helpers";

const Landing = () => {
  const { minSize, betweenMinAndMobile, isTablet, isLaptop, isDesktop } =
    useMediaQuery();
  const { isMenuOpen } = useGlobalContext();
  const labelClass = getLabelPadding(minSize, isTablet, isLaptop, isDesktop);
  const descriptionClass = getDescriptionStyle(
    minSize,
    isTablet,
    isLaptop,
    isDesktop
  );
  const suggestionClass = getSuggestionStyle(
    minSize,
    isTablet,
    isLaptop,
    isDesktop
  );

  return (
    <MainLayout>
      <div className={css.wrapper}>
        <div className={labelClass}>
          <Label
            style={{
              fontFamily: "Inter Medium, sans-serif",
              ...(minSize && !betweenMinAndMobile
                ? { fontSize: "10px" }
                : { fontSize: "12px" }),
            }}
            color="dark"
            variant="text-sm"
          >
            <Label type="children" variant="text-xs">
              WE'RE HIRING
            </Label>
            <span
              style={{
                paddingLeft: "10px",
                paddingRight: "8px",
                ...(minSize && !betweenMinAndMobile
                  ? { fontSize: "10px" }
                  : { fontSize: "14px" }),
              }}
            >
              Visit our careers page
            </span>
            <ArrowRightIcon />
          </Label>
        </div>
        <div>
          <Heading
            style={{
              ...(isDesktop && {
                fontSize: "72px",
                lineHeight: "72px",
                letterSpacing: 0,
              }),
            }}
            variant={
              isTablet && !isDesktop
                ? "text-6xl"
                : isDesktop
                ? "heading"
                : "text-4xl"
            }
            color="var(--white)"
          >
            A better way to
          </Heading>
        </div>
        <div className={isTablet ? css.title : css.titleMobile}>
          <Heading
            style={{
              ...(isDesktop && {
                fontSize: "72px",
                lineHeight: "72px",
                letterSpacing: 0,
              }),
            }}
            variant={
              isTablet && !isDesktop
                ? "text-6xl"
                : isDesktop
                ? "heading"
                : "text-4xl"
            }
            color="var(--indigo-400)"
          >
            ship web apps
          </Heading>
        </div>
        <div className={descriptionClass}>
          <Heading variant="text-base" color="var(--gray-300)">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </Heading>
        </div>
        <form
          className={isTablet ? css.form : css.mobileForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={isTablet ? css.input : undefined}>
            <Input
              disabled={isMenuOpen}
              size={isLaptop ? "lg" : isTablet ? "md" : "xl"}
              placeholder="Enter your email"
              value="Some random text"
            />
          </div>
          <div className={isTablet ? undefined : css.buttonSpacingMobile}>
            <Button
              disabled={isMenuOpen}
              title="Start free trial"
              size={isTablet ? "md" : "xl"}
              variant="filled"
              type="submit"
            />
          </div>
        </form>
        <div className={suggestionClass}>
          <Heading variant="text-sm" color="var(--gray-300)">
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{" "}
            <Heading
              style={{ fontWeight: 400 }}
              variant="text-sm"
              color="var(--white)"
            >
              terms or service.
            </Heading>
          </Heading>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
