import axios from "axios";
import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let [formData, setFormData] = useState({ name: "", email: "" });
  let { name, email } = formData;
  let [errorMsg, setErrorMsg] = useState({ userName: false, userEmail: false });
  let { userName, userEmail } = errorMsg;
  let navigate = useNavigate();

  const handleUserName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleUserEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newError = { userName: !name, userEmail: !email };
    let { userName, userEmail } = newError;
    if (userName || userEmail) {
      setErrorMsg(newError);
    } else {
      const newObj = {
        name,
        email,
      };
      axios.post("http://localhost:3000/userData", newObj).then((response) => {
        console.log(response);
        navigate("/");
      });
      setErrorMsg({ ...errorMsg, userName: false, userEmail: false });
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div>
      <h1 className="text-center mt-4 mb-4 bg-dark text-white">
        -: Create User :-
      </h1>
      <form action="">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-medium"
          >
            Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your name"
            value={name}
            onChange={handleUserName}
            required
          />
          {userName && <EmptyMessage message="please enter your Name!" />}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-medium"
          >
            Email:-
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="enter your email"
            onChange={handleUserEmail}
            value={email}
            required
          />
          {userEmail && <EmptyMessage message="please enter your Email!" />}
        </div>
        <div className="text-center mt-4">
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
