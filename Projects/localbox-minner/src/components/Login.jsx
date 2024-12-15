import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import SpecialCharMsg from "./SpecialCharMsg";
import LengthErrorMsg from "./LengthErrorMsg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);

  const [signInData, setSignInData] = useState({ email: "", password: "" });

  let { email, password } = signInData;

  const [emptyMsg, setEmptyMsg] = useState({
    userEmail: false,
    userPassword: false,
  });

  let { userEmail, userPassword } = emptyMsg;

  const [specialCharMsg, setSpecialCharMsg] = useState(false);

  const [lengthMsg, setLengthMsg] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    let specialCharRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    e.preventDefault();
    if (!email || !password) {
      setEmptyMsg({ userEmail: !email, userPassword: !password });
      setSpecialCharMsg(false);
    } else if (!specialCharRegx.test(email)) {
      setSpecialCharMsg(true);
      setEmptyMsg({ userEmail: false, userPassword: false });
    } else if (password.length < 8) {
      setLengthMsg(true);
      setSpecialCharMsg(false);
    } else {
      let isUserExits = users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (isUserExits) {
        navigate("/products");
        alert("logged in Succesfully!");
      } else {
        alert("invalid email & Password!");
      }

      axios("http://localhost:3000/users").then((response) => {
        let { data } = response;
        setUsers(data);
      });
      setSpecialCharMsg(false);
      setLengthMsg(false);
      setEmptyMsg({ userEmail: false, userPassword: false });
      setSignInData({ email: "", password: "" });
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div data-mdb-input-init="" className="form-outline mb-4">
                <label
                  className="form-label fw-medium"
                  htmlFor="form1Example13"
                >
                  Email address :-
                </label>
                <input
                  type="email"
                  id="form1Example13"
                  value={email}
                  onChange={(e) =>
                    setSignInData({ ...signInData, email: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
                {userEmail && (
                  <EmptyMessage message="please enter your Email!" />
                )}
                {specialCharMsg && (
                  <SpecialCharMsg message="Please enter a valid email address!" />
                )}
              </div>
              <div data-mdb-input-init="" className="form-outline mb-4">
                <label
                  className="form-label fw-medium"
                  htmlFor="form1Example23"
                >
                  Password :-
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  value={password}
                  onChange={(e) =>
                    setSignInData({ ...signInData, password: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
                {userPassword && (
                  <EmptyMessage message="please enter your Password!" />
                )}
                {lengthMsg && (
                  <LengthErrorMsg message="minimum 8 characters must be Included!" />
                )}
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form1Example3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              <button
                type="submit"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-primary btn-lg btn-block"
                onClick={handleSignIn}
              >
                Sign in
              </button>
              <p className="small text-primary fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
