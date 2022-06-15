import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import { LandingProps } from "./types";
import MainLayout from "../../layouts/main";
import Heading from "../../shared/heading/Heading";
import css from "./styles.module.css";
import Label from "../../shared/label/Label";
import { ArrowRightIcon } from "../../shared/icons";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MediaQueries } from "../../helpers/styles";

const MAP_LABEL_PADDING = {
  mobile: css.labelMobile,
  tablet: css.labelTablet,
  laptop: css.labelLaptop,
  desktop: css.labelDesktop,
};

const MAP_DESCRIPTION_STYLE = {
  mobile: css.descriptionMobile,
  tablet: css.descriptionTablet,
  laptop: css.descriptionLaptop,
  desktop: css.descriptionDesktop,
};

const MAP_SUGGESTION_STYLE = {
  mobile: css.suggestionMobile,
  tablet: css.suggestionTablet,
  laptop: css.suggestionLaptop,
  desktop: css.suggestionDesktop,
};

const getLabelPadding = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_LABEL_PADDING["mobile"];
  if (isTablet && !isLaptop) return MAP_LABEL_PADDING["tablet"];
  if (isLaptop && !isDesktop) return MAP_LABEL_PADDING["laptop"];
  if (isDesktop) return MAP_LABEL_PADDING["desktop"];
};

const getDescriptionStyle = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_DESCRIPTION_STYLE["mobile"];
  if (isTablet && !isLaptop) return MAP_DESCRIPTION_STYLE["tablet"];
  if (isLaptop && !isDesktop) return MAP_DESCRIPTION_STYLE["laptop"];
  if (isDesktop) return MAP_DESCRIPTION_STYLE["desktop"];
};

const getSuggestionStyle = (
  isMobile: boolean,
  isTablet: boolean,
  isLaptop: boolean,
  isDesktop: boolean
) => {
  if (isMobile && !isTablet) return MAP_SUGGESTION_STYLE["mobile"];
  if (isTablet && !isLaptop) return MAP_SUGGESTION_STYLE["tablet"];
  if (isLaptop && !isDesktop) return MAP_SUGGESTION_STYLE["laptop"];
  if (isDesktop) return MAP_SUGGESTION_STYLE["desktop"];
};

const Landing = (_props: LandingProps) => {
  const minSize = useMediaQuery(MediaQueries.NONE);
  const mobile = useMediaQuery(MediaQueries.XS);
  const isTablet = useMediaQuery(MediaQueries.SM);
  const isLaptop = useMediaQuery(MediaQueries.MD);
  const isDesktop = useMediaQuery(MediaQueries.LG);
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
            }}
            color="dark"
            variant="text-sm"
          >
            <Label type="children" variant="text-xs">
              {"WE'RE HIRING"}
            </Label>
            <span style={{ paddingLeft: "10px" }}>Visit our careers page</span>
            <ArrowRightIcon width={mobile ? 25 : 20} height={10} />
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
            color="#FFFFFF"
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
            color="#818CF8"
          >
            ship web apps
          </Heading>
        </div>
        <div className={descriptionClass}>
          <Heading variant="text-base" color="#D1D5DB">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </Heading>
        </div>
        <form
          className={isTablet ? css.form : css.mobileForm}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("HERE", e);
          }}
        >
          <div className={isTablet ? css.input : undefined}>
            <Input
              size={isLaptop ? "lg" : isTablet ? "md" : "xl"}
              placeholder="Enter your email"
              value="Some random text"
            />
          </div>
          <div className={isTablet ? undefined : css.buttonSpacingMobile}>
            <Button
              title="Start free trial"
              size={isTablet ? "md" : "xl"}
              variant="filled"
              type="submit"
            />
          </div>
        </form>
        <div className={suggestionClass}>
          <Heading variant="text-sm" color="#D1D5DB">
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{" "}
            <Heading
              style={{ fontWeight: 400 }}
              variant="text-sm"
              color="#FFFFFF"
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
