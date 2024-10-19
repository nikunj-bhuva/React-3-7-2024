import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/team">
          Team
        </NavLink>
      </li>
      <li>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/profile">
          Profile
        </NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
