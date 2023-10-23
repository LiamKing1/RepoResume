import { Link } from "react-router-dom";
import styleClass from "./Nav.module.css";

function Nav() {
  return (
    <header className={styleClass.header}>
      <div> Liam King - Full-Stack Software Engineer </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Portfolio"> Portfolio </Link>
          </li>
          <li>
            <Link to="/Resume"> Resume </Link>
          </li>
          <li>
            <Link to="/AboutMe"> AboutMe </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
