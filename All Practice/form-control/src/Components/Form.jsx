import { useState } from "react";
import InputField from "./InputField";
import UserData from "./UserData";
import { UserValueContext } from "./UserValueContext";

const Form = () => {
  // debugger;
  const [formData, setFormData] = useState({
    fname: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });
  const { fname, lastName, email, password, mobile } = formData;
  console.log("form data", formData);
  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
    userEmail: "",
    userPassword: "",
    userMobile: "",
  });
  const { firstName, secondName, userEmail, userPassword, userMobile } =
    userData;
  console.log("user data:", userData);
  const handlerFname = (e) => {
    setFormData({ ...formData, fname: e.target.value });
  };

  const handlerLastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };

  const handlerEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlerPassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handlerMobile = (e) => {
    setFormData({ ...formData, mobile: e.target.value });
  };

  const handlerSubmitBtn = (e) => {
    e.preventDefault();
    console.log({ ...userData });
    if (fname === "") {
      alert("please enter your Details!");
    } else {
      setUserData({
        ...userData,
        firstName: fname,
        secondName: lastName,
        userEmail: email,
        userPassword: password,
        userMobile: mobile,
      });
      setFormData({
        fname: "",
        lastName: "",
        password: "",
        email: "",
        mobile: "",
      });
    }
  };

  console.warn("________________");

  return (
    <UserValueContext.Provider
      value={{ firstName, secondName, userEmail, userPassword, userMobile }}
    >
      <form>
        <InputField
          labelValue="First Name :"
          placeHolderValue="enter your first name"
          onInput={handlerFname}
          value={fname}
        />
        <InputField
          labelValue="Last Name :"
          placeHolderValue="enter your last name"
          onInput={handlerLastName}
          value={lastName}
        />
        <InputField
          labelValue="Email :"
          placeHolderValue="enter your email"
          onInput={handlerEmail}
          value={email}
        />
        <InputField
          labelValue="Password :"
          placeHolderValue="enter your password"
          onInput={handlerPassword}
          value={password}
        />
        <InputField
          labelValue="Mobile Number :"
          placeHolderValue="enter your mobile number"
          onInput={handlerMobile}
          value={mobile}
        />
        <div className="text-center mt-4 mb-4 p-3">
          <button className="btn btn-dark" onClick={handlerSubmitBtn}>
            Submit
          </button>
        </div>
        <UserData />
      </form>
    </UserValueContext.Provider>
  );
};

export default Form;
