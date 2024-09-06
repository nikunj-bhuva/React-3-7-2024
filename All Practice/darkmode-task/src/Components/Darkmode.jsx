import { useState } from "react";
import styles from "../Components/Darkmode.module.css";
import Card from "./Card";

console.log(styles);

const Darkmode = () => {
  let [modeValue, setModeValue] = useState("light");

  const handlerDarkMode = () => {
    if (modeValue === "light") {
      setModeValue("dark");
      console.log(modeValue);
    } else {
      setModeValue("light");
      console.log(modeValue);
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          modeValue === "light" ? styles.headerbgwhite : styles.headerbgdark
        }`}
      >
        <div className="container">
          <a
            className={`navbar-brand ${
              modeValue === "light"
                ? styles.textdarkcolor
                : styles.textwhitecolor
            }`}
            href="#"
          >
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active  ${
                    modeValue === "light"
                      ? styles.textdarkcolor
                      : styles.textwhitecolor
                  }`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    modeValue === "light"
                      ? styles.textdarkcolor
                      : styles.textwhitecolor
                  }`}
                  href="#"
                >
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    modeValue === "light"
                      ? styles.textdarkcolor
                      : styles.textwhitecolor
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link disabled ${
                    modeValue === "light"
                      ? styles.textdarkcolor
                      : styles.textwhitecolor
                  }`}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <button
              className={`btn ${
                modeValue === "light"
                  ? styles.btnWhiteColor
                  : styles.btnDarkColor
              }`}
              type="submit"
              onClick={handlerDarkMode}
            >
              {modeValue}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-brightness-high ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="d-flex gap-5 flex-wrap">
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
          <Card
            color={`${styles.cardbtncolor}`}
            textColor={`${styles.textdarkcolor}`}
            backgroundColor={`${styles.headerbgdark}`}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default Darkmode;
