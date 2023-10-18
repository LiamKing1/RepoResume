import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div></div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Portfolio </Link>
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
