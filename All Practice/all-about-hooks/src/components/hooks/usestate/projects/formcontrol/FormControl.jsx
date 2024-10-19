import { useState } from "react";
import UserData from "./UserData";
import InputField from "./InputField";

const FormControl = () => {
  // form fields initial values //

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    dateOfBirth: "",
  });

  // users data initial values //

  const [userData, setUserData] = useState({ ...form });

  // destructuring form fields //

  const { firstName, lastName, email, mobileNumber, password, dateOfBirth } =
    form;

  // Updates first name in form state //

  const handleFirstName = (e) => {
    setForm({ ...form, firstName: e.target.value });
  };

  // Updates last name in form state //

  const handleLastName = (e) => {
    setForm({ ...form, lastName: e.target.value });
  };

  // Updates email in form state //

  const handleEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  // Updates mobile number in form state //

  const handleMobileNumber = (e) => {
    setForm({ ...form, mobileNumber: e.target.value });
  };

  // Updates password in form state //

  const handlePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  // Updates date of birth in form state //

  const handleDateOfBirth = (e) => {
    setForm({ ...form, dateOfBirth: e.target.value });
  };

  // destructuring userdata //

  const {
    fName,
    secondName,
    userEmail,
    userMobileNumber,
    userPassword,
    userDateOfBirth,
  } = userData;

  // handle submit button function //

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    mobileNumber === "" ||
    password === "" ||
    dateOfBirth === ""
      ? alert("please enter your Details!") //message for empty values.
      : setUserData({
          ...userData,
          fName: firstName.toUpperCase(),
          secondName: lastName.toUpperCase(),
          userEmail: email.toUpperCase(),
          userMobileNumber: mobileNumber.toUpperCase(),
          userPassword: password.toUpperCase(),
          userDateOfBirth: dateOfBirth,
        }) ||
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          password: "",
          dateOfBirth: "",
        }); //after submit button input field is empty.
  };

  return (
    <>
      <form className="text-center bg-amber-100 pt-16 pb-16 rounded-2xl border border-2 border-black border-dashed">
        <InputField
          title="First Name : "
          htmlFor="fname"
          type="text"
          placeholder="enter your first name"
          id="fname"
          name="firstname"
          value={firstName}
          onChange={handleFirstName}
        />
        <InputField
          title="Last Name : "
          htmlFor="lname"
          type="text"
          placeholder="enter your last name"
          id="lname"
          name="lastname"
          value={lastName}
          onChange={handleLastName}
        />
        <InputField
          title="Email : "
          htmlFor="e-mail"
          type="email"
          placeholder="enter your email"
          autocomplete="username"
          id="e-mail"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <InputField
          title="Mobile Number : "
          htmlFor="mnumber"
          type="number"
          placeholder="enter your mobile number"
          id="mnumber"
          name="telephone"
          value={mobileNumber}
          onChange={handleMobileNumber}
        />
        <InputField
          title="Password : "
          htmlFor="password"
          type="password"
          placeholder="enter your password"
          id="password"
          autocomplete="current-password"
          name="Password"
          value={password}
          onChange={handlePassword}
        />
        <InputField
          title="Date Of Birth : "
          htmlFor="dob"
          type="date"
          id="dob"
          name="dateofbirth"
          value={dateOfBirth}
          onChange={handleDateOfBirth}
        />
        <button
          className="bg-zinc-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-orange-500 rounded"
          onClick={handleSubmitBtn}
        >
          Submit
        </button>
      </form>
      <UserData
        firstName={fName}
        lastName={secondName}
        email={userEmail}
        mobileNumber={userMobileNumber}
        password={userPassword}
        dateOfBirth={userDateOfBirth}
      />
    </>
  );
};

export default FormControl;
