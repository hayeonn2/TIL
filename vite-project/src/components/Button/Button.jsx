import classes from "./Button.module.css";
import { getColor } from "@/theme/utils";

export function Button({
  mode,
  secondary: isSecondary,
  disabled,
  ...restProps
}) {
  //let isPrimary = mode.includes("primary");

  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: !isSecondary
          ? getColor("primary/500")
          : getColor("primary/50"),
        color: !isSecondary ? getColor("white") : getColor("primary/400"),
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: "primary",
  secondary: false,
  disabled: false,
};
