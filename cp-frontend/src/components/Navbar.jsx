import { NavLink } from "react-router-dom";
import "./../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />

        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sprookjes" className="nav-link">
              Sprookjes
            </NavLink>
          </li>
          <li>
            <NavLink to="/makingof" className="nav-link">
              Making Of
            </NavLink>
          </li>
          <li>
            <a
              href="/parallax"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Parallax
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
