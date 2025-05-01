import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";
import { FaLayerGroup } from "react-icons/fa";
import "./../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="images/logo.png" alt="Logo" className="navbar-logo" />

        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="nav-link">
              <AiOutlineHome className="icon" />
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/sprookjes" className="nav-link">
              <BiBookOpen className="icon" />
              Sprookjes
            </NavLink>
          </li>
          <li>
            <NavLink to="/makingof" className="nav-link">
              <FiPenTool className="icon" />
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
              <FaLayerGroup className="icon" />
              Parallax
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
