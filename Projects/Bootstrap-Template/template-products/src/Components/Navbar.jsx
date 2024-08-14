import logo from "../assets/logonav.png.png";
import styles from "../Components/Navbar.module.css";

const Navbar = ({ allCategory, men, women, electronic, jewelery }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.customNavbar}`}
      style={{ backgroundColor: "#0d6efd" }}
    >
      <div className="container">
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className={`navbar-nav ${styles.navbarNav} gap-3`}>
            <li className="nav-item">
              <button
                className={`btn btn-primary ${styles.customBtn}`}
                onClick={() => allCategory()}
              >
                All Category
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-primary ${styles.customBtn}`}
                onClick={() => men()}
              >
                Men
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-primary ${styles.customBtn}`}
                onClick={() => women()}
              >
                Women
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-primary ${styles.customBtn}`}
                onClick={() => electronic()}
              >
                Electronics
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-primary ${styles.customBtn}`}
                onClick={() => jewelery()}
              >
                Jewellery
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
