import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="portaal-layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
