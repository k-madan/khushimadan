import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        About Me
      </NavLink>

      <NavLink
        to="/designs"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Interface Designs
      </NavLink>

      <NavLink
        to="/graphics"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Graphic Designs
      </NavLink>

      <NavLink
        to="/resume"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Resume
      </NavLink>

    </nav>
  );
}

export default Navbar;