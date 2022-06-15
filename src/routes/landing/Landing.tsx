import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import { LandingProps } from "./types";
import MainLayout from "../../layouts/main";
import Heading from "../../shared/heading/Heading";
import css from "./styles.module.css";
import Label from "../../shared/label/Label";
import { ArrowRightIcon } from "../../shared/icons";

const Landing = (_props: LandingProps) => (
  <MainLayout>
    <div className={css.label}>
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
        <ArrowRightIcon width={25} />
      </Label>
    </div>
    <div>
      <Heading variant="text-4xl" color="#FFFFFF">
        A better way to
      </Heading>
    </div>
    <div className={css.verticalSpacing}>
      <Heading variant="text-4xl" color="#818CF8">
        ship web apps
      </Heading>
    </div>
    <div className={css.suggestion}>
      <Heading variant="text-base" color="#D1D5DB">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </Heading>
    </div>
    <form
      className={css.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("HERE", e);
      }}
    >
      <div className={css.verticalSpacing}>
        <Input
          size="auto"
          placeholder="Enter your email"
          value="Some random text"
        />
      </div>
      <div className={css.verticalSpacing}>
        <Button
          title="Start free trial"
          size="xl"
          variant="filled"
          type="submit"
        />
      </div>
    </form>
    <div className={css.suggestion}>
      <Heading variant="text-sm" color="#D1D5DB">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <Heading style={{ fontWeight: 400 }} variant="text-sm" color="#FFFFFF">
          terms or service.
        </Heading>
      </Heading>
    </div>
  </MainLayout>
);

export default Landing;
