import { Outlet, Link } from "react-router-dom";

function Layout2() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>
    </>
  );
}

export default Layout2;
