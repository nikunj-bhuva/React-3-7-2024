import { useContext } from "react";
import logo from "../assets/jewelrylogo.png (1).png";
import DarkMode from "../Components/Darkmode.jsx";
import ModeValue from "../context/ModeContext.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  let { modeValue } = useContext(ModeValue);

  return (
    <nav
      className={`navbar ${
        modeValue ? "navbar-dark" : "navbar-light"
      } navbar-expand-lg shadow-lg`}
    >
      <div
        className="container-fluid d-flex justify-content-around"
        style={{ height: "70px" }}
      >
        <div className="logo" style={{ height: "70px" }}>
          <a className="navbar-brand" href="#">
            <img
              className={`nav-logo-khakhi align-content-center`}
              src={logo}
            />
          </a>
        </div>
        <div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse mt-2"
          id="navbarSupportedContent"
        >
          <div>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 align-content-center ps-5 pe-5"
              role="button"
            >
              <li className="nav-link ps-5 pe-3">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-item-khakhi" : "nav-iem-no-active"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-link pe-3">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-item-khakhi" : "nav-iem-no-active"
                  }
                  to="/todoapp"
                >
                  Todo
                </NavLink>
              </li>
              <li className="nav-link pe-3">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-item-khakhi" : "nav-iem-no-active"
                  }
                  to="/todoappdata"
                >
                  TodoApp Data
                </NavLink>
              </li>
              <li className="nav-link pe-3">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-item-khakhi" : "nav-iem-no-active"
                  }
                  to="/todousers"
                >
                  TodoUsers
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <form
              className="d-flex px-5 align-content-center"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn ${
                  modeValue ? "search-btn-dark" : "search-btn-khaki"
                } fw-medium`}
                type="submit"
              >
                Search
              </button>
              <DarkMode />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
