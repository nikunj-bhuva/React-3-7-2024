import { FaUser, FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import { useEffect, useState } from "react";
import EmptyMessage from "./EmptyMessage";
import LengthErrorMessage from "./LengthErrorMessage";
import ConfirmPasswordMsg from "./ConfirmPasswordMsg";
import axios from "axios";
import { useNavigate } from "react-router";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import SpecialCharcterMsg from "./SpecialCharcterMsg";

const SignUp = () => {
  const [data, setData] = useState([]);

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  let { name, email, password, repeatPassword } = signUpData;

  const [errorMsg, setErrorMsg] = useState({
    userName: false,
    userEmail: false,
    userPassword: false,
    userRepeatPassword: false,
  });

  let { userName, userEmail, userPassword, userRepeatPassword } = errorMsg;

  const [lengthMsg, setLengthMsg] = useState({
    password: false,
    repeatPassword: false,
  });

  let { password: lengthPassword, repeatPassword: lengthRepeatPassword } =
    lengthMsg;

  const [confirmPasswordNotEqual, setConfirmPasswordNotEqual] = useState(false);

  const [specialCharMsg, setSpecialCharMsg] = useState(false);

  const [modalMessage, setModalMessage] = useState("");

  const [modalInstance, setModalInstance] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((response) => {
        let { data } = response;
        setData(data);
      })
      .catch((error) => {
        alert("something went Wrong!");
      });

    const modalElement = document.getElementById("feedbackModal");
    if (modalElement) {
      setModalInstance(new Modal(modalElement));
    }
  }, []);

  const handleSignUp = () => {
    let specialCharRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      email === "" ||
      name === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setErrorMsg({
        userName: !name,
        userEmail: !email,
        userPassword: !password,
        userRepeatPassword: !repeatPassword,
      });
    } else if (!specialCharRegx.test(email)) {
      setSpecialCharMsg(true);
      setErrorMsg({
        userName: false,
        userEmail: false,
        userPassword: false,
        userRepeatPassword: false,
      });
      setLengthMsg({ password: false, repeatPassword: false });
    } else if (password.length < 8 || repeatPassword.length < 8) {
      setLengthMsg({
        password: password.length < 8,
        repeatPassword: repeatPassword.length < 8,
      });
      setErrorMsg({
        userName: false,
        userEmail: false,
        userPassword: false,
        userRepeatPassword: false,
      });
      setSpecialCharMsg(false);
    } else if (password !== repeatPassword) {
      setConfirmPasswordNotEqual(true);
      setLengthMsg(false);
      setSpecialCharMsg(false);
    } else {
      let exitsEmail = data.find((user) => {
        return user.email === email;
      });

      if (exitsEmail) {
        setModalMessage(
          "The email address you entered is already registered. Redirecting to login page..."
        );
        modalInstance.show();
        setTimeout(() => {
          modalInstance.hide();
          navigate("/");
        }, 3000);
        return;
      } else {
        let newUser = {
          name,
          email,
          role: "user",
          password,
        };
        axios
          .post(`http://localhost:3000/users`, newUser)
          .then((response) => {
            setModalMessage("Signup successful! Welcome aboard!");
            modalInstance.show(); 
            setTimeout(() => {
              modalInstance.hide();
              navigate("/");
            }, 2000);
          })
          .catch((error) => {
            setModalMessage("Something went wrong during signup!");
            modalInstance.show();
          });
        setSignUpData({
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
        setSpecialCharMsg(false);
        setErrorMsg({
          userName: false,
          userEmail: false,
          userPassword: false,
          userRepeatPassword: false,
        });
        setConfirmPasswordNotEqual(false);
      }
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaUser className="me-3 mt-4 text-primary fa-lg" />
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <label
                            className="form-label fw-medium"
                            htmlFor="form3Example1c"
                          >
                            Your Name :-
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={name}
                            onChange={(e) =>
                              setSignUpData({
                                ...signUpData,
                                name: e.target.value,
                              })
                            }
                          />
                          {userName && (
                            <EmptyMessage message="Name field cannot be empty!" />
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaEnvelope className="me-3 mt-4 text-success fa-lg" />
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <label
                            className="form-label fw-medium"
                            htmlFor="form3Example3c"
                          >
                            Your Email :-
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                              setSignUpData({
                                ...signUpData,
                                email: e.target.value,
                              })
                            }
                          />
                          {specialCharMsg && (
                            <SpecialCharcterMsg message="Please enter a valid email address!" />
                          )}
                          {userEmail && (
                            <EmptyMessage message="Email field cannot be empty!" />
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaLock className="me-3 mt-4 text-danger fa-lg" />
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <label
                            className="form-label fw-medium"
                            htmlFor="form3Example4c"
                          >
                            Password :-
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            autoComplete=""
                            value={password}
                            onChange={(e) =>
                              setSignUpData({
                                ...signUpData,
                                password: e.target.value,
                              })
                            }
                          />
                          {userPassword && (
                            <EmptyMessage message="Password field cannot be empty!" />
                          )}
                          {lengthPassword && (
                            <LengthErrorMessage message="Password must be at least 8 characters long!" />
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaKey className="me-3 mt-4 text-warning fa-lg" />
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <label
                            className="form-label fw-medium"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password :-
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            autoComplete=""
                            value={repeatPassword}
                            onChange={(e) =>
                              setSignUpData({
                                ...signUpData,
                                repeatPassword: e.target.value,
                              })
                            }
                          />
                          {userRepeatPassword && (
                            <EmptyMessage message="Confirm password field cannot be empty!" />
                          )}
                          {lengthRepeatPassword && (
                            <LengthErrorMessage message="Password must be at least 8 characters long!" />
                          )}
                          {confirmPasswordNotEqual && (
                            <ConfirmPasswordMsg message="Passwords do not match! Please check" />
                          )}
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-lg"
                          onClick={handleSignUp}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="feedbackModal"
        tabIndex="-1"
        aria-labelledby="feedbackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedbackModalLabel">
                Notification
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">{modalMessage}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
