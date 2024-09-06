import { useState } from "react";
import Form from "./Components/Form";
import UserInformation from "./Components/UserInformation";

const App = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    MobileNumber: "",
  });
  const { FirstName, LastName, Email, Password, MobileNumber } = formData;

  const handlerFirstInput = (e) => {
    setFormData({ ...formData, FirstName: e.target.value });
  };

  const handlerSecondInput = (e) => {
    setFormData({ ...formData, LastName: e.target.value });
  };

  const handlerThirdInput = (e) => {
    setFormData({ ...formData, Email: e.target.value });
  };

  const handlerForthInput = (e) => {
    setFormData({ ...formData, Password: e.target.value });
  };

  const handlerFifthInput = (e) => {
    setFormData({ ...formData, MobileNumber: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 bg-primary text-white rounded-5 p-2">
        Form Control
      </h1>
      <div className="main shadow-lg bg-white rounded-5 p-3">
        <Form
          firstName="First Name:"
          id="formGroupExampleInput1"
          type="text"
          value="enter your first name"
          onChange={handlerFirstInput}
        />
        <Form
          firstName="Last Name:"
          id="formGroupExampleInput2"
          type="text"
          value="enter your last name"
          onChange={handlerSecondInput}
        />
        <Form
          firstName="Email:"
          id="formGroupExampleInput3"
          type="email"
          value="enter your email"
          onChange={handlerThirdInput}
        />
        <Form
          firstName="Password:"
          id="formGroupExampleInput4"
          type="password"
          value="enter your password"
          onChange={handlerForthInput}
        />
        <Form
          firstName="Mobile Number"
          id="formGroupExampleInput5"
          type="tel"
          value="enter your mobile number"
          onChange={handlerFifthInput}
        />
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary rounded-4 mt-3 border border-1 border-primary-subtle"
          >
            Submit
          </button>
        </div>
        <UserInformation
          firstValue={FirstName}
          lastValue={LastName}
          emailValue={Email}
          passwordValue={Password}
          mobileValue={MobileNumber}
        />
      </div>
    </div>
  );
};

export default App;
