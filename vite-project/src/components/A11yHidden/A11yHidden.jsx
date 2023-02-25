// import { createElement as h } from "react";
import classes from "./A11yHidden.module.css";

export const A11yHidden = ({ as: ComponentName, ...restProps }) => {
  console.log(restProps);
  return <ComponentName className={classes.srOnly} {...restProps} />;
};
