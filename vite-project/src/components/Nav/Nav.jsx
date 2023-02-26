import classes from "./Nav.module.css";
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
  list: [],
  as: "h2",
};

Nav.propType = {};
