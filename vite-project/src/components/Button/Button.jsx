import classes from "./Button.module.css";

export function Button({ mode, ...restProps }) {
  return <button type="button" {...restProps} />;
}
