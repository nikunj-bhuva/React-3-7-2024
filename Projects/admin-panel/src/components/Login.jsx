import { useState, useEffect } from "react";
import styles from "../components/Login.module.css";
import EmptyMessage from "./EmptyMessage";
import { useNavigate } from "react-router";
import LengthErrorMessage from "./LengthErrorMessage";
import axios from "axios";
import { Link } from "react-router";

const Login = () => {
  // debugger;
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  let { email, password } = loginData;

  const [users, setUsers] = useState([]);

  const [error, setError] = useState({ userEmail: false, userPassword: false });

  let { userEmail, userPassword } = error;

  const [lengthMsg, setLengthMsg] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // debugger;
    axios("http://localhost:3000/users").then((response) => {
      let { data } = response;
      setUsers(data);
    });
  }, []);

  // function to handle login button //

  const handleLogin = () => {
    // debugger;
    if (email === "" || password === "") {
      setError({ userEmail: !email, userPassword: !password });
    } else if (password.length < 8) {
      setLengthMsg(true);
      setError({ userEmail: false, userPassword: false });
    } else {
      let isExists = users.find((user) => {
        debugger;
        return user.email === email.toLowerCase() && user.password === password;
      });

      if (isExists) {
        if (isExists.role === "user") {
          navigate("/home");
          alert("Welcome back! User login successful.");
        } else if (isExists.role === "admin") {
          console.log("admin");
        }
      } else {
        alert("Invalid email or password. Please try again.");
        alert("Don't have an account? Sign up now!");
      }
      setLengthMsg(false);
      setLoginData({ email: "", password: "" });
    }
  };

  return (
    <section className="vh-100">
      <div className={`container-fluid ${styles["h-custom"]}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div
                className={`${styles.divider} d-flex align-items-center my-4"`}
              >
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div data-mdb-input-init="" className="form-outline mb-4">
                <label className="form-label fw-medium" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                {userEmail && (
                  <EmptyMessage message="please enter your Email!" />
                )}
              </div>
              <div data-mdb-input-init="" className="form-outline mb-3">
                <label className="form-label fw-medium" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete=""
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                {userPassword && (
                  <EmptyMessage message="please enter your Password!" />
                )}
                {lengthMsg && (
                  <LengthErrorMessage message="minimum 8 characters must be Included!" />
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
