import { arrayOf, string, oneOf, exact, shape } from "prop-types";
import classes from "./Nav.module.scss";
import { A11yHidden } from "@/components";

export function Nav({ as, headline, list, ...restProps }) {
  <nav>
    <A11yHidden as={as}>{headline}</A11yHidden>

    <ul>
      {list.map((item) => {
        <li key={item.id}>
          <a href={item.to}>{item.text}</a>
        </li>;
      })}
    </ul>
  </nav>;
}

Nav.defaultProps = {
  //list: [],
  as: "h2",
};

Nav.propType = {
  list: arrayOf(
    exact({
      id: string,
      to: string,
      text: string,
    })
  ).isRequired,
  headline: string.isRequired,
  as: oneOf(["h2", "h3", "h4", "h5", "h6"]),
};
