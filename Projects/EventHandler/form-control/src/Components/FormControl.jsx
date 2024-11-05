import { useState } from "react";
import FormFields from "./FormFields";
import FormSubmitButton from "./FormSubmitButton";

const FormControl = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const [error, setError] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
    userPassword: false,
  });

  const { userFirstName, userLastName, userEmail, userPassword } = error;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError({
      userFirstName: !firstName,
      userLastName: !lastName,
      userEmail: !email,
      userPassword: !password,
    });
    if (firstName && lastName && email && password) {
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      setFormSubmitted(true);
      setSubmissionMessage(
        "✅ Form submitted successfully! We'll get in touch soon."
      );

      // Hide the modal after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    } else {
      setSubmissionMessage("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10 space-y-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or
            <a
              href="#"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        {formSubmitted && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full transform transition-all duration-500 ease-in-out scale-110">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-teal-700 rounded-t-lg shadow-lg"></div>
              <div className="text-green-600 text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {submissionMessage}
              </h3>
            </div>
          </div>
        )}

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <FormFields
              title="First Name :"
              type="text"
              id="firstname"
              name="fname"
              value={firstName}
              placeholder="Enter your first name"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              error={userFirstName ? "Please enter your first name!" : ""}
            />
            <FormFields
              title="Last Name :"
              type="text"
              id="lastname"
              name="lname"
              value={lastName}
              placeholder="Enter your last name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              error={userLastName ? "Please enter your last name!" : ""}
            />
            <FormFields
              title="Email :"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={userEmail ? "Please enter a valid email!" : ""}
            />
            <FormFields
              title="Password :"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={userPassword ? "Please enter your password!" : ""}
            />
          </div>

          <FormSubmitButton />
        </form>
      </div>
    </div>
  );
};

export default FormControl;
