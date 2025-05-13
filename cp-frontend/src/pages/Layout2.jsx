import { Outlet, Link } from "react-router-dom";
import "../Parallax.css";

function Layout2() {
  return (
    <div className="layout2">
      <nav className="parallax-nav">
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout2;
