import { useNavigate } from "react-router";
import logo from "../assets/logonav.png.png";
import styles from "../Components/Navbar.module.css";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.customNavbar}`}
      style={{ backgroundColor: "#0d6efd" }}
    >
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <div className={`${styles["nav-image"]}`}>
            <img
              src={logo}
              alt={logo}
              style={{ width: "185px", cursor: "pointer" }}
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-items">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className={`navbar-nav ${styles.navbarNav} gap-3`}>
                <li className="nav-item">
                  <button
                    className={`btn btn-primary ${styles.customBtn}`}
                  ></button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-primary ${styles.customBtn}`}
                  ></button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-primary ${styles.customBtn}`}
                  ></button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-primary ${styles.customBtn}`}
                  ></button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-primary ${styles.customBtn}`}
                  ></button>
                </li>
              </ul>
            </div>
          </div>
          <div className="logout-btn">
            <button className={`${styles.customBtn}`} onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
