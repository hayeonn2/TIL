// import { createElement as h } from "react";
import { forwardRef } from "react";
import classes from "./A11yHidden.module.css";

export const A11yHidden = forwardRef(function A11yHidden(
  { as: ComponentName, focusable, className, ...restProps },
  ref
) {
  // 클래스네임 합성
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim();

  return (
    <ComponentName ref={ref} className={combinedClassNames} {...restProps} />
  );
});

//A11yHidden.displayName = "A11yHidden";

A11yHidden.defaultProps = {
  as: "span",
  className: "",
  focusable: false,
};
