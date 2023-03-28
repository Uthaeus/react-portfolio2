import { NavLink } from "react-router-dom";


function MainNavigation() {
  return (
    <div className="navigation-container">
      <h1>Homer J. Simpson</h1>

      <div className="nav-links-wrapper">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive && "nav-link-active"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive && "nav-link-active"}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive && "nav-link-active"}
        >
          Contact
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive && "nav-link-active"}
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
}

export default MainNavigation;
