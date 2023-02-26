// import { createElement as h } from "react";
import classes from "./A11yHidden.module.css";

export const A11yHidden = ({
  as: ComponentName,
  focusable,
  className,
  ...restProps
}) => {
  // 클래스네임 합성
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim();
  return <ComponentName className={combinedClassNames} {...restProps} />;
};

A11yHidden.defaultProps = {
  as: "span",
  className: "",
  focusable: false,
};
