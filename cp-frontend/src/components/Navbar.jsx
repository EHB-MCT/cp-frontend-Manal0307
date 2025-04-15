import { Link } from "react-router-dom";
import "./../app.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sprookjes">Sprookjes</Link>
        </li>
        <li>
          <Link to="/makingof">Makingof</Link>
        </li>
        <li>
          <Link to="/parallax" target="_blank" rel="noopener noreferrer">
            Parallax
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
