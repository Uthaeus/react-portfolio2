import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Layout() {
  return (
    <div className="layout-container">
        <div className="layout-column-one">
            <MainNavigation />
        </div>
        <div className="layout-column-two">
            <Outlet />
        </div>
    </div>
  );
}

export default Layout;
