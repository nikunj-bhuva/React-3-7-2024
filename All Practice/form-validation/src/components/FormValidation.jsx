import { useState } from "react";
import FormFields from "./FormFields";
import FormSubmitButton from "./FormSubmitButton";
import ErrorMessage from "./ErrorMessage";

const FormValidation = () => {
  // form fields data initial state values //

  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // destructure formdata object //

  const { firstName, lastName, email, password } = formData;

  // error message data initial values //

  const [error, setError] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
    userPassword: false,
  });

  // destructure error object //

  const { userFirstName, userLastName, userEmail, userPassword } = error;

  // function to handle formsubmit button //

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError({
      userFirstName: !firstName,
      userLastName: !lastName,
      userEmail: !email,
      userPassword: !password,
    }); //message for empty input fields.
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      setFormData({ firstName: "", lastName: "", email: "", password: "" }); //after value given in all input fields all input fields is empty.
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormFields
        title="First Name : "
        type="text"
        id="firstname"
        name="fname"
        value={firstName}
        placeholder="enter your firstname"
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      {userFirstName && <ErrorMessage error="please enter your firstName!" />}
      <FormFields
        title="Last Name : "
        type="text"
        id="lastname"
        name="lname"
        value={lastName}
        placeholder="enter your lastname"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      {userLastName && <ErrorMessage error="please enter your lastName!" />}
      <FormFields
        title="Email : "
        type="email"
        id="email"
        name="e-mail"
        value={email}
        placeholder="enter your email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {userEmail && <ErrorMessage error="please enter your Email!" />}
      <FormFields
        title="Password : "
        type="password"
        id="password"
        name="Passord"
        value={password}
        placeholder="enter your password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {userPassword && <ErrorMessage error="please enter your password!" />}
      <FormSubmitButton />
    </form>
  );
};

export default FormValidation;
