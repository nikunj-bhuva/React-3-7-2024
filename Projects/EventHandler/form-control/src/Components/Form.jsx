import { useState } from "react";

function Form() {
  const [formDetails, setFormDetail] = useState({
    firstName: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
  });

  const { firstName, email, password, mobileNumber, address } = formDetails;

  const handlerFirstNameChange = (e) =>
    setFormDetail({ ...formDetails, firstName: e.target.value });

  const handlerEmailChange = (e) =>
    setFormDetail({ ...formDetails, email: e.target.value });

  const handlerPasswordChange = (e) =>
    setFormDetail({ ...formDetails, password: e.target.value });

  const handlerMobileChange = (e) =>
    setFormDetail({ ...formDetails, mobileNumber: e.target.value });

  const handlerAddressChange = (e) =>
    setFormDetail({ ...formDetails, address: e.target.value });

  const handlerSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handlerSubmit}>
      <div className="container  p-5 bg-primary-subtle shadow-lg my-3 rounded-5 border border-3 border-primary-subtle">
        <h1 className="text-center fw-bolder">Student Detail</h1>
        <div className="mb-3 mt-5">
          <label className="form-label fw-medium">Student Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={handlerFirstNameChange}
            value={firstName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-medium">Email Address:</label>
          <input
            type="email"
            onChange={handlerEmailChange}
            className="form-control"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-medium">Password:</label>
          <input
            type="password"
            onChange={handlerPasswordChange}
            className="form-control"
            value={password}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-medium">Mobile Number:</label>
          <input
            type="tel"
            onChange={handlerMobileChange}
            className="form-control"
            value={mobileNumber}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={handlerAddressChange}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            value={address}
          ></textarea>
          <label className="fw-medium">Address:</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary rounded-5  mt-4 mb-3 bg-dark border border-3 border-dark-subtle">
            Submit
          </button>
        </div>
        <div className="bg-light text-white border border-3 border-success-subtle rounded-3 p-4 mt-4">
          <h3 className="text-center text-dark fw-medium">-: Student Data :-</h3>
          <div className="my-3 text-dark fw-medium">Student Name Is: {firstName}</div>
          <div className="my-3 text-dark fw-medium">Email Address Is: {email}</div>
          <div className="my-3 text-dark fw-medium">Password Is: {formDetails.password}</div>
          <div className="my-3 text-dark fw-medium">Phone Number Is: {mobileNumber}</div>
          <div className="my-3 text-dark fw-medium">Address Is: {address}</div>
        </div>
      </div>
    </form>
  );
}

export default Form;
